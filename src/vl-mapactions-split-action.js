import Feature from 'ol/Feature';
import {VlSelectAction} from './vl-mapactions-select-action';
import {VlMapAction} from './vl-mapactions-mapaction';
import {VlDrawAction} from './vl-mapactions-draw-action';
import * as jsts from 'jsts';
import {
  Point,
  LineString,
  LinearRing,
  Polygon,
  MultiPoint,
  MultiLineString,
  MultiPolygon,
} from 'ol/geom';

export class VlSplitAction extends VlMapAction {
  constructor(layer, onSplit, options) {
    const reader = new jsts.io.OL3Parser();
    reader.inject(Point, LineString, LinearRing, Polygon, MultiPoint, MultiLineString, MultiPolygon);
    const interactions = [];

    const selectAction = new VlSelectAction(layer, (feature) => {
      if (feature) {
        this.selectAction.deactivate();
        this.drawAction.activate();
      }
    }, options);

    const drawAction = new VlDrawAction(layer, 'LineString', (drawnFeature) => {
      const selectedFeature = this.selectAction.selectedFeature;
      const selectedGeometry = reader.read(selectedFeature.getGeometry().getPolygons()[0]);
      const drawnGeometry = reader.read(drawnFeature.getGeometry());
      const union = selectedGeometry.getExteriorRing().union(drawnGeometry);
      const polygonizer = new jsts.operation.polygonize.Polygonizer();
      polygonizer.add(union);
      const result = [];
      const polygons = polygonizer.getPolygons();
      for (let i = polygons.iterator(); i.hasNext();) {
        const multiPolygon = new MultiPolygon([]);
        multiPolygon.appendPolygon(reader.write(i.next()));
        result.push(new Feature({
          geometry: multiPolygon,
        }));
      }

      if (onSplit) {
        onSplit(selectedFeature, result);
      }

      this.selectAction.clearFeatures();

      setTimeout(() => {
        this.drawAction.deactivate();
        this.selectAction.activate();
      });
    }, options);

    super(interactions);

    this.interactions = interactions;
    this.selectAction = selectAction;
    this.drawAction = drawAction;
  }

  activate() {
    this.map.addAction(this.selectAction);
    this.map.addAction(this.drawAction);
    this.selectAction.activate();
  }

  deactivate() {
    this.selectAction.deactivate();
    this.drawAction.deactivate();
  };
}
