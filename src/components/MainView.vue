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
      <ion-grid>
        <ion-row>
          <ion-col size="9">
            <VisView :dataset="dataset" />
          </ion-col>
          <ion-col size="3">
            <ion-card>
              <ControlView />
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-app>
</template>

<script>
import VisView from "./VisView";
import ControlView from "./ControlView";
import { addIcons } from "ionicons";
import { cloudUpload } from "ionicons/icons";

addIcons({
  "md-cloud-upload": cloudUpload.md,
  "ios-cloud-upload": cloudUpload.ios
});

export default {
  name: "MainView",
  components: {
    VisView,
    ControlView
  },
  props: {
    title: String
  },
  data: () => ({
    datasetFile: File,
    dataset: null
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

ion-card {
  height: 100%;
  margin: 0;
}

#file-upload-input {
  display: none;
}
</style>
