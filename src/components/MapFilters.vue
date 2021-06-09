<template>
  <v-expansion-panels>
    <!-- Basemap Section -->
    <v-expansion-panel>
      <v-expansion-panel-header>
        Basemaps
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-container class="px-0" fluid>
          <div id="v-model-radiobutton">
            <input type="radio" id="streets" value="Streets" v-model="picked" />
              <label for="streets">Streets</label>
              <br/>
            <input type="radio" id="satellite" value="Satellite" v-model="picked" />
              <label for="satellite">Satellite</label>
              <br/>
            <input type="radio" id="topo" value="Topo" v-model="picked" />
              <label for="topo">Topo</label>
              <br/>
            <input type="radio" id="terrain" value="Terrain" v-model="picked" />
              <label for="terrain">Terrain</label>
              <br/>
            <input type="radio" id="gray" value="Gray" v-model="picked" />
              <label for="gray">Gray</label>
              <br/>
            <input type="radio" id="natgeo" value="NatGeo" v-model="picked" />
              <label for="natgeo">NatGeo</label>
              <br/>
          </div>
        </v-container>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <!-- Filters Section -->
    <v-expansion-panel>
      <v-expansion-panel-header>
        Streamgages
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-container class="px-0" fluid>
          <v-checkbox
            v-model="checkbox"
            :label="`Checkbox 1`"
          ></v-checkbox>
        </v-container>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
  export default {
    data () {
      return {
        picked: '',
      }
    },
  }
</script>