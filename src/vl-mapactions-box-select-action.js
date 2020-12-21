import DragBox from 'ol/interaction/DragBox';
import {Stroke, Style} from 'ol/style';
import {VlSelectAction} from './vl-mapactions-select-action';

export class VlBoxSelectAction extends VlSelectAction {
  constructor(layer, onSelect, options) {
    super(layer, (feature) => {
      if (feature) {
        onSelect([feature]);
      }
    }, options);

    this.dragBoxInteraction = new DragBox({
      style: new Style({
        stroke: new Stroke({
          color: [0, 0, 255, 1],
        }),
      }),
    });

    this.addInteraction(this.dragBoxInteraction);

    this.dragBoxInteraction.on('boxdrag', () => {
      const boxExtent = this.dragBoxInteraction.getGeometry().getExtent();
      this.hoverInteraction.getFeatures().clear();
      layer.getSource().forEachFeatureIntersectingExtent(boxExtent, (feature) => {
        this.hoverInteraction.getFeatures().push(feature);
      });
    });

    this.dragBoxInteraction.on('boxend', () => {
      if (this.hoverInteraction.getFeatures().getLength() > 0) {
        onSelect(this.hoverInteraction.getFeatures().getArray().slice(0)); // copy of the current array to prevent issues in IE
      }
    });
  };
}
