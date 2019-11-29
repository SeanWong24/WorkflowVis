<template>
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-card>
          <component
            :is="visComponent1"
            :dataset="dataForVis1"
            @filteredDataChanged="filteredDataChangeHandlerForVis1"
          />
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card>
          <component
            :is="visComponent2"
            :dataset="dataForVis2"
            @filteredDataChanged="filteredDataChangeHandlerForVis2"
          />
        </ion-card>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-card>
          <component
            :is="visComponent3"
            :dataset="dataForVis3"
            @filteredDataChanged="filteredDataChangeHandlerForVis3"
          />
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card>
          <component
            :is="visComponent4"
            :dataset="dataForVis4"
            @filteredDataChanged="filteredDataChangeHandlerForVis4"
          />
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
// eslint-disable-next-line
import TimePerformanceVisView from "./TimePerformanceVisView";
// eslint-disable-next-line
import ErrorProportionDonutVisView from "./ErrorProportionDonutVisView";

export default {
  name: "VisView",
  props: [
    "visComponent1",
    "visComponent2",
    "visComponent3",
    "visComponent4",
    "dataForVis1",
    "dataForVis2",
    "dataForVis3",
    "dataForVis4"
  ],
  methods: {
    filteredDataChangeHandlerForVis1(data) {
      this.$emit("visFilteredDataChange", { index: 1, data });
    },
    filteredDataChangeHandlerForVis2(data) {
      this.$emit("visFilteredDataChange", { index: 2, data });
    },
    filteredDataChangeHandlerForVis3(data) {
      this.$emit("visFilteredDataChange", { index: 3, data });
    },
    filteredDataChangeHandlerForVis4(data) {
      this.$emit("visFilteredDataChange", { index: 4, data });
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

component {
  max-height: 100%;
}
</style>
