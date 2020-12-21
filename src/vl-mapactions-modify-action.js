import {Modify} from 'ol/interaction';
import {VlSnapInteraction} from './vl-mapactions-snap-interaction';
import {VlSelectAction} from './vl-mapactions-select-action';

export class VlModifyAction extends VlSelectAction {
  constructor(layer, onModify, options) {
    const filter = options ? options.filter : null;

    super(layer, null, {
      filter: filter,
    });

    this.modifyInteraction = new Modify({
      features: this.selectInteraction.getFeatures(),
    });

    this.addInteraction(this.modifyInteraction);

    if (options && options.snapping) {
      this.addInteraction(new VlSnapInteraction(options.snapping.layer || layer));
    }

    this.modifyInteraction.on('modifystart', (event) => {
      this.currentGeometryBeingModified = event.features.getArray()[0].getGeometry().clone();
    });

    this.modifyInteraction.on('modifyend', (event) => {
      event.features.forEach((feature) => {
        onModify(feature, (feature) => {
          feature.setGeometry(this.currentGeometryBeingModified);
        });
      });
    });
  }
}
