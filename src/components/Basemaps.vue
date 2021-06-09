<template>
    <div>
    <l-map
        v-if="showMap"
        :zoom="zoom"
        :center="center"
        :options="mapOptions"
        style="height: 80%"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate"
      >
    <l-control-layers
        :position="layersPosition"
        :collapsed="false"
        :sort-layers="false"
      />
      <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        :attribution="tileProvider.attribution"
        :token="token"
        layer-type="base"
      />
      </l-map>
      </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LControlLayers } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

var tileProviders = [
  {
    name: 'Streets',
    visible: false,
    attribution:
      'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
  },
  {
    name: 'Satellite',
    visible: false,
    attribution:
      'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  },
  {
    name: 'Topo',
    visible: true,
    attribution:
      'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  },
  {
    name: 'Terrain',
    visible: false,
    attribution:
      'Tiles &copy; Esri &mdash; Source: Esri',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}',
  },
  {
    name: 'Gray',
    visible: false,
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    attribution:
      'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
  },
  {
    name: 'NatGeo',
    visible: false,
    attribution:
      'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
  },
];

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LControlLayers,
  },
  data() {
    return {
      zoom: 12,
      center: latLng(47.41322, -1.219482),
      tileProviders: tileProviders,
      //url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      //attribution:
        //'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(47.41322, -1.219482),
      withTooltip: latLng(47.41422, -1.250482),
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    },
  },
};
</script>