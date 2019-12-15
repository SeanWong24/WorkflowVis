<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{title}} - {{datasetName}}</ion-title>
        <ion-buttons slot="end">
          <ion-button title="Upload Dataset File" @click="upload()">
            <ion-icon slot="icon-only" name="cloud-upload" size="large"></ion-icon>
            <input
              type="file"
              id="file-upload-input"
              accept=".json"
              @input="fileUploaded()"
              ref="fileUploadInput"
            />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content fixed id="main-content">
      <VisView
        :visComponentList="visComponentList"
        :dataset="dataset"
        :visComponent1="visComponent1"
        :visComponent2="visComponent2"
        :visComponent3="visComponent3"
        :visComponent4="visComponent4"
        :dataSourceVis1="dataSourceVis1"
        :dataSourceVis2="dataSourceVis2"
        :dataSourceVis3="dataSourceVis3"
        :dataSourceVis4="dataSourceVis4"
        :dataForVis1="dataForVis1"
        :dataForVis2="dataForVis2"
        :dataForVis3="dataForVis3"
        :dataForVis4="dataForVis4"
        @visFilteredDataChange="visFilteredDataChangeHandler"
        @visComponentChange="visComponentChangeHandler"
        @visDataSourceChange="visDataSourceChangeHandler"
      />
    </ion-content>
  </ion-app>
</template>

<script>
import { addIcons } from "ionicons";
import { cloudUpload } from "ionicons/icons";

import VisView from "./VisView";

import DefaultVisView from "./DefaultVisView";
import TimePerformanceVisView from "./TimePerformanceVisView";
import ErrorProportionDonutVisView from "./ErrorProportionDonutVisView";
import DataHistoryVisView from "./DataHistoryVisView";

addIcons({
  "md-cloud-upload": cloudUpload.md,
  "ios-cloud-upload": cloudUpload.ios
});

export default {
  name: "MainView",
  components: {
    VisView
  },
  props: {
    title: String
  },
  data: () => ({
    _dataset: null,
    datasetFile: File,
    visComponentList: [
      DefaultVisView,
      TimePerformanceVisView,
      ErrorProportionDonutVisView,
      DataHistoryVisView
    ],
    visComponent1: DefaultVisView,
    visComponent2: DefaultVisView,
    visComponent3: DefaultVisView,
    visComponent4: DefaultVisView,
    filteredDataVis1: null,
    filteredDataVis2: null,
    filteredDataVis3: null,
    filteredDataVis4: null,
    dataSourceVis1: 0,
    dataSourceVis2: 1,
    dataSourceVis3: 2,
    dataSourceVis4: 3,
    dataForVis1: null,
    dataForVis2: null,
    dataForVis3: null,
    dataForVis4: null
  }),
  computed: {
    datasetName: {
      get() {
        const fileName = this.datasetFile.name.substring(
          0,
          this.datasetFile.name.lastIndexOf(".")
        );
        return this.datasetFile && this.dataset
          ? fileName
          : "No Dataset Loaded";
      }
    },
    dataset: {
      get() {
        return this.$data._dataset;
      },
      set(value) {
        this.$data._dataset = value;
        this.dataForVis1 = this.dataset;
        this.dataForVis2 = this.dataset;
        this.dataForVis3 = this.dataset;
        this.dataForVis4 = this.dataset;
      }
    }
  },
  methods: {
    upload() {
      this.$refs.fileUploadInput.click();
    },
    fileUploaded() {
      this.datasetFile = this.$refs.fileUploadInput.files[0];
      if (
        this.datasetFile &&
        this.datasetFile.name.split(".").pop() === "json"
      ) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          const fileContent = fileReader.result;
          this.dataset = JSON.parse(fileContent);
        };
        fileReader.readAsText(this.datasetFile);
      } else {
        this.dataset = null;
      }
    },
    visComponentChangeHandler({ index, component }) {
      switch (index) {
        case 1:
          this.visComponent1 = component;
          break;
        case 2:
          this.visComponent2 = component;
          break;
        case 3:
          this.visComponent3 = component;
          break;
        case 4:
          this.visComponent4 = component;
          break;
      }
    },
    visDataSourceChangeHandler({ index, sourceIndex }) {
      this["dataSourceVis" + index] = sourceIndex;
      this["dataForVis" + index] =
        sourceIndex > 0 ? this["filteredDataVis" + sourceIndex] : this.dataset;
    },
    visFilteredDataChangeHandler({ index, data }) {
      this["filteredDataVis" + index] = data;
      for (let i = 1; i <= 4; i++) {
        if (this["dataSourceVis" + i] == index) {
          this["dataForVis" + i] = data;
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main-content {
  height: calc(100% - 56px);
  margin-top: 56px;
}

ion-grid {
  height: 100%;
  padding: 0;
}

ion-row {
  height: 100%;
}

ion-col {
  height: 100%;
}

ion-card {
  height: 100%;
  margin: 0;
}

#file-upload-input {
  display: none;
}
</style>
