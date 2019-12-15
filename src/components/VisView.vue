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
            @visComponentChange="visComponentChangeHandler"
            @visDataSourceChange="visDataSourceChangeHandler"
          />
          <div class="vis-container">
            <component
              :is="visComponent1"
              :visIndex="1"
              :dataset="dataForVis1"
              :completeDataset="dataset"
              @filteredDataChange="filteredDataChangeHandler"
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
            @visComponentChange="visComponentChangeHandler"
            @visDataSourceChange="visDataSourceChangeHandler"
          />
          <div class="vis-container">
            <component
              :is="visComponent2"
              :visIndex="2"
              :dataset="dataForVis2"
              :completeDataset="dataset"
              @filteredDataChange="filteredDataChangeHandler"
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
            @visComponentChange="visComponentChangeHandler"
            @visDataSourceChange="visDataSourceChangeHandler"
          />
          <div class="vis-container">
            <component
              :is="visComponent3"
              :visIndex="3"
              :dataset="dataForVis3"
              :completeDataset="dataset"
              @filteredDataChange="filteredDataChangeHandler"
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
            @visComponentChange="visComponentChangeHandler"
            @visDataSourceChange="visDataSourceChangeHandler"
          />
          <div class="vis-container">
            <component
              :is="visComponent4"
              :visIndex="4"
              :dataset="dataForVis4"
              :completeDataset="dataset"
              @filteredDataChange="filteredDataChangeHandler"
            />
          </div>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
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
  methods: {
    filteredDataChangeHandler(data) {
      this.$emit("visFilteredDataChange", data);
    },
    visComponentChangeHandler(data) {
      this.$emit("visComponentChange", data);
    },
    visDataSourceChangeHandler(data) {
      this.$emit("visDataSourceChange", data);
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
