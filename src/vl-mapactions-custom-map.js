import GeoJSON from 'ol/format/GeoJSON';
import View from 'ol/View';
import Overlay from 'ol/Overlay';
import {
  Zoom,
  Rotate,
  ScaleLine,
  OverviewMap,
} from 'ol/control';
import {VlMapWithActions} from './vl-mapactions-map-with-actions';

/**
 * Dit is een versie van de VlMapWithActions die nog enkele extra functies bevat zoals het zoomen naar een bepaalde extent (of bounding box), het togglen van de layers, en alle functionaliteit omtrent een overzichtskaartje (ol.control.OverviewMap).
 * De view kan in het map opties object bij constructie worden meegegeven, of achteraf aangemaakt in de initializeView functie. Hieraan kan de view worden meegegeven als argument of bij geen argument wordt een standaard view aangemaakt op basis van de meegegeven projectie.
 */
export class VlCustomMap extends VlMapWithActions {
  constructor(options) {
    options.layers = [
      options.customLayers.baseLayerGroup,
      options.customLayers.overlayGroup,
    ];

    options.controls = options.controls || [
      new Zoom(),
      new Rotate(),
      new ScaleLine({
        minWidth: 128,
      }),
    ];

    super(options);

    this.projection = options.projection;

    this.geoJSONFormat = new GeoJSON({
      dataProjection: options.projection,
    });

    this.custom = options.custom || {};

    if (options.customLayers.overviewMapLayers && options.customLayers.overviewMapLayers.length > 0) {
      this.createOverviewMapControl(options);
    }

    this.baseLayers = options.customLayers.baseLayerGroup.getLayers().getArray();

    this.maxZoomViewToExtent = options.maxZoomViewToExtent || 16;
  }

  createOverviewMapControl(options) {
    const self = this;

    const toggleBaseLayer = (baseLayer) => {
      const getNextLayerAfterVisibleLayer = (layers) => {
        let currentIndex = 0;
        self.baseLayers.forEach((layer, index) => {
          if (layer.getVisible()) {
            currentIndex = index;
          }
        });
        return layers[(currentIndex + 1) >= layers.length ? 0 : currentIndex + 1];
      };

      if (!baseLayer) {
        baseLayer = getNextLayerAfterVisibleLayer(self.baseLayers);
      }
      self.baseLayers.forEach((layer) => layer.setVisible(layer == baseLayer));
      const overviewMapLayers = self.overviewMapControl.getOverviewMap().getLayers().getArray();
      const nextVisibleOverviewMapLayer = getNextLayerAfterVisibleLayer(overviewMapLayers);
      overviewMapLayers.forEach((layer) => layer.setVisible(layer == nextVisibleOverviewMapLayer));
      self.render();
      self.overviewMapControl.getOverviewMap().render();
    };

    this.overviewMapLayers = options.customLayers.overviewMapLayers;
    this.overviewMapControl = new OverviewMap({
      layers: this.overviewMapLayers,
      collapsed: false,
      view: new View({
        projection: this.projection,
      }),
    });

    this.overviewMapControl.element.addEventListener('click', () => toggleBaseLayer(), false);

    if (options.view) {
      options.controls.push(this.overviewMapControl);
    }

    this.custom.toggleBaseLayer = toggleBaseLayer;
  }

  addBaseLayerAndOverlayMapLayer(baseLayer, overlayMapLayer) {
    baseLayer.setVisible(this.baseLayers.length === 0);
    this.baseLayers.push(baseLayer);

    if (this.overviewMapControl) {
      this.overviewMapControl.getOverviewMap().getLayers().getArray().push(overlayMapLayer);
    } else {
      this.createOverviewMapControl({
        customLayers: {
          overviewMapLayers: [overlayMapLayer],
        },
      });
    }
    overlayMapLayer.setVisible(this.overviewMapControl.getOverviewMap().getLayers().getArray().length === 2);
  }

  getBaseLayers() {
    return this.getLayerGroup().getLayers().getArray()[0].getLayers().getArray();
  }

  getOverlayLayers() {
    return this.getLayerGroup().getLayers().getArray()[1].getLayers().getArray();
  }

  initializeView(boundingBox, maxZoom) {
    if (!this.getView().getZoom()) {
      const view = new View({
        extent: this.projection.getExtent(),
        projection: this.projection,
        maxZoom: 16,
        minZoom: 2,
        center: [140860.69299028325, 190532.7165957574],
        zoom: 2,
      });
      this.zoomViewToExtent(view, boundingBox, maxZoom);
      this.setView(view);
      if (this.overviewMapControl) {
        this.addControl(this.overviewMapControl); // control needs to be added after view initialization
      }
    }
  }

  zoomToExtent(boundingBox, maxZoom) {
    this.zoomViewToExtent(this.getView(), boundingBox, maxZoom);
  }

  zoomViewToExtent(view, boundingBox, maxZoom) {
    if (boundingBox) {
      view.fit(boundingBox, {size: this.getSize()});
    }

    if (maxZoom || this.maxZoomViewToExtent) {
      if (view.getZoom() > (maxZoom || this.maxZoomViewToExtent)) {
        view.setZoom(maxZoom || this.maxZoomViewToExtent);
      }
    }
  }

  zoomToGeometry(geometry, maxZoom) {
    const geoJson = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: geometry,
      }],
    };
    this.zoomToExtent(this.geoJSONFormat.readFeatures(geoJson)[0].getGeometry().getExtent(), maxZoom);
  }

  showInfo(info, coordinate) {
    const close = document.createElement('div');
    close.setAttribute('class', 'close');
    close.onclick = () => event.currentTarget.parentNode.remove();

    const element = document.createElement('div');
    element.innerHTML = '<span class=\'content\'>' + info + '</span><div class=\'arrow\'></div>';
    element.setAttribute('class', 'info-tooltip');
    element.appendChild(close);

    const tooltip = new Overlay({
      offset: [0, -5],
      positioning: 'bottom-center',
      element: element,
    });

    this.addOverlay(tooltip);
    tooltip.setPosition(coordinate);
    element.parentNode.style.position = 'fixed'; // because the overlay has absolute positioning and otherwise the left side panel could influence the overlay elements
  }
}
