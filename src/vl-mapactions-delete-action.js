import {Fill, Stroke, Style, Circle} from 'ol/style';
import {VlBoxSelectAction} from './vl-mapactions-box-select-action';

export class VlDeleteAction extends VlBoxSelectAction {
  constructor(layer, onDelete, options) {
    const defaultStyle = new Style({
      fill: new Fill({
        color: 'rgba(217, 83, 79, 0.6)',
      }),
      stroke: new Stroke({
        color: '#d9534f',
        width: 5,
      }),
      image: new Circle({
        radius: 4,
        stroke: new Stroke({
          color: '#d9534f',
          width: 5,
        }),
        fill: new Fill({
          color: 'rgba(217, 83, 79, 0.6)',
        }),
      }),
    });

    const style = options ? options.style || defaultStyle : defaultStyle;

    const removeFeature = (feature) => {
      if (feature && layer.getSource().getFeatureById(feature.getId()) === feature) {
        layer.getSource().removeFeature(feature);
      }
    };

    super(layer, (features) => {
      if (onDelete && onDelete != null) {
        onDelete(features, (feature) => {
          removeFeature(feature);
          this.clearFeatures();
        }, () => {
          this.clearFeatures();
        });
      } else {
        features.forEach((feature) => {
          removeFeature(feature);
        });
        this.clearFeatures();
      }
    }, {
      style: style,
    });
  }
}
