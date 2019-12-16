<template>
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-card>
          <VisConfigView
            :visIndex="1"
            :visComponentList="visComponentList"
            :visComponent="visComponent1"
            :visDataSource="dataSourceVis1"
            :visSettingDefinitions="visSettingDefinitionsMap.get(1)"
            :visSettingDataMap="visSettingDataMapMap.get(1)"
            @visComponentChange="visComponentChangeHandler"
            @visDataSourceChange="visDataSourceChangeHandler"
            @visSettingChange="visSettingChangeHandler"
          />
          <div class="vis-container">
            <component
              ref="vis1"
              :is="visComponent1"
              :visIndex="1"
              :dataset="dataForVis1"
              :completeDataset="dataset"
              :moduleColorScale="moduleColorScale"
              @filteredDataChange="filteredDataChangeHandler"
              @settingDefinitionsChange="visSettingDefinitionsChange"
              @settingDataMapChange="visSettingDataMapChange"
            />
          </div>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card>
          <VisConfigView
            :visIndex="2"
            :visComponentList="visComponentList"
            :visComponent="visComponent2"
            :visDataSource="dataSourceVis2"
            :visSettingDefinitions="visSettingDefinitionsMap.get(2)"
            :visSettingDataMap="visSettingDataMapMap.get(2)"
            @visComponentChange="visComponentChangeHandler"
            @visDataSourceChange="visDataSourceChangeHandler"
            @visSettingChange="visSettingChangeHandler"
          />
          <div class="vis-container">
            <component
              ref="vis2"
              :is="visComponent2"
              :visIndex="2"
              :dataset="dataForVis2"
              :completeDataset="dataset"
              :moduleColorScale="moduleColorScale"
              @filteredDataChange="filteredDataChangeHandler"
              @settingDefinitionsChange="visSettingDefinitionsChange"
              @settingDataMapChange="visSettingDataMapChange"
            />
          </div>
        </ion-card>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-card>
          <VisConfigView
            :visIndex="3"
            :visComponentList="visComponentList"
            :visComponent="visComponent3"
            :visDataSource="dataSourceVis3"
            :visSettingDefinitions="visSettingDefinitionsMap.get(3)"
            :visSettingDataMap="visSettingDataMapMap.get(3)"
            @visComponentChange="visComponentChangeHandler"
            @visDataSourceChange="visDataSourceChangeHandler"
            @visSettingChange="visSettingChangeHandler"
          />
          <div class="vis-container">
            <component
              ref="vis3"
              :is="visComponent3"
              :visIndex="3"
              :dataset="dataForVis3"
              :completeDataset="dataset"
              :moduleColorScale="moduleColorScale"
              @filteredDataChange="filteredDataChangeHandler"
              @settingDefinitionsChange="visSettingDefinitionsChange"
              @settingDataMapChange="visSettingDataMapChange"
            />
          </div>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card>
          <VisConfigView
            :visIndex="4"
            :visComponentList="visComponentList"
            :visComponent="visComponent4"
            :visDataSource="dataSourceVis4"
            :visSettingDefinitions="visSettingDefinitionsMap.get(4)"
            :visSettingDataMap="visSettingDataMapMap.get(4)"
            @visComponentChange="visComponentChangeHandler"
            @visDataSourceChange="visDataSourceChangeHandler"
            @visSettingChange="visSettingChangeHandler"
          />
          <div class="vis-container">
            <component
              ref="vis4"
              :is="visComponent4"
              :visIndex="4"
              :dataset="dataForVis4"
              :completeDataset="dataset"
              :moduleColorScale="moduleColorScale"
              @filteredDataChange="filteredDataChangeHandler"
              @settingDefinitionsChange="visSettingDefinitionsChange"
              @settingDataMapChange="visSettingDataMapChange"
            />
          </div>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import * as d3 from "d3";

import VisConfigView from "./VisConfigView";

export default {
  name: "VisView",
  components: {
    VisConfigView
  },
  props: [
    "visComponentList",
    "dataset",
    "visComponent1",
    "visComponent2",
    "visComponent3",
    "visComponent4",
    "dataSourceVis1",
    "dataSourceVis2",
    "dataSourceVis3",
    "dataSourceVis4",
    "dataForVis1",
    "dataForVis2",
    "dataForVis3",
    "dataForVis4"
  ],
  data: () => ({
    moduleColorScale: () => "black",
    visSettingDefinitionsMap: new Map([[1, []], [2, []], [3, []], [4, []]]),
    visSettingDataMapMap: new Map([
      [1, new Map()],
      [2, new Map()],
      [3, new Map()],
      [4, new Map()]
    ])
  }),
  watch: {
    dataset: function(value) {
      const modules = value.nodes.filter(node => node.label === "module");
      this.moduleColorScale = d3
        .scaleOrdinal(d3.schemeAccent)
        .domain(
          modules
            .filter(
              (module, index) => modules.findIndex(m => module === m) === index
            )
            .map(module => module.NAME)
        );
    }
  },
  methods: {
    filteredDataChangeHandler(data) {
      this.$emit("visFilteredDataChange", data);
    },
    visComponentChangeHandler(data) {
      this.$emit("visComponentChange", data);
    },
    visDataSourceChangeHandler(data) {
      this.$emit("visDataSourceChange", data);
    },
    visSettingChangeHandler({ index, label, value }) {
      this.$refs["vis" + index].settingChangeHandler(label, value);
    },
    visSettingDefinitionsChange({ index, definitions }) {
      this.visSettingDefinitionsMap.set(index, definitions);
      this.visSettingDefinitionsMap = new Map(this.visSettingDefinitionsMap);
    },
    visSettingDataMapChange({ index, map }) {
      this.visSettingDataMapMap.set(index, map);
      this.visSettingDataMapMap = new Map(this.visSettingDataMapMap);
    }
  }
};
</script>

<style scoped>
ion-row {
  height: 50%;
}

ion-col {
  height: 100%;
}

ion-card {
  height: 100%;
  margin: 0;
}

visConfigView {
  height: 40px;
}

.vis-container {
  height: calc(100% - 40px);
}
</style>
