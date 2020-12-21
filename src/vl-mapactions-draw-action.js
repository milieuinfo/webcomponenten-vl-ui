import Draw from 'ol/interaction/Draw';
import Overlay from 'ol/Overlay';
import {LineString, Polygon} from 'ol/geom';
import {unByKey} from 'ol/Observable';
import {VlMapAction} from './vl-mapactions-mapaction';
import {VlSnapInteraction} from './vl-mapactions-snap-interaction';

export class VlDrawAction extends VlMapAction {
  constructor(layer, type, onDraw, options = {}) {
    const interactions = [];
    options.source = layer.getSource();
    options.type = type;
    const drawInteraction = new Draw(options);
    interactions.push(drawInteraction);
    if (options.snapping) {
      interactions.push(new VlSnapInteraction(options.snapping.layer || layer));
    }

    drawInteraction.on('drawstart', (event) => {
      if (options.measure) {
        const feature = event.feature;

        options.measure = typeof options.measure === 'object' ? options.measure : {};
        options.measure.tooltip = options.measure.tooltip || {};

        const tooltipElement = document.createElement('div');
        tooltipElement.setAttribute('class', 'measure-tooltip');

        this.tooltip = new Overlay({
          offset: options.measure.tooltip.offset || [-15, 10],
          positioning: 'bottom-center',
        });

        this.map.addOverlay(this.tooltip);

        this.measurePointermoveHandler = this.map.on('pointermove', () => {
          this._showMeasureTooltip(feature, this.tooltip, tooltipElement);
        });
      }
    });

    drawInteraction.on('drawend', (event) => {
      const feature = event.feature;
      onDraw(feature, () => {
        try {
          layer.getSource().removeFeature(feature); // when the features was not yet added to the source we'll add a listener in the catch block
        } catch (exception) {
          const listener = layer.getSource().on('addfeature', (event) => {
            layer.getSource().removeFeature(event.feature);
            unByKey(listener);
          });
        }
      });
      this._cleanUp();
    });

    super(interactions);

    this.options = options;
    this.drawInteraction = drawInteraction;
  }

  deactivate() {
    this._cleanUp();
    super.deactivate();
  }

  _cleanUp() {
    if (this.options.measure) {
      unByKey(this.measurePointermoveHandler);
      this._removeTooltip();
    }
  };

  _removeTooltip() {
    if (this.tooltip) {
      this.map.removeOverlay(this.tooltip);
      this.tooltip = undefined;
    }
  };

  _showMeasureTooltip(feature, tooltipElement) {
    if (this.tooltip) {
      const length = this._getLengthOfLastSegment(feature.getGeometry());
      if (length !== 0) {
        tooltipElement.textContent = length + ' m';
        this.tooltip.setElement(tooltipElement);
        this.tooltip.setPosition(feature.getGeometry().getLastCoordinate());
      }
    }
  }

  _getLengthOfLastSegment(geometry) {
    if (geometry && geometry instanceof LineString) {
      return new LineString(this._getCoordinatesOfLastSegment(geometry)).getLength().toFixed(2);
    } else if (geometry && geometry instanceof Polygon) {
      return new LineString(this._getCoordinatesOfLastSegment(geometry.getLinearRing(0))).getLength().toFixed(2);
    }
    return 0;
  }

  _getCoordinatesOfLastSegment(geometry) {
    const size = geometry.getCoordinates().length;
    return geometry.getCoordinates().slice(size - 2);
  }
}
