<template>
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-card>
          <TimePerformanceVisView
            :dataset="dataset"
            @filteredDataChanged="filteredDataChangeHandlerForVis1"
          />
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card>
          <ErrorProportionDonutVisView :dataset="dataForVis2" />
        </ion-card>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-card>Vis 3</ion-card>
      </ion-col>
      <ion-col>
        <ion-card>Vis 4</ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import TimePerformanceVisView from "./TimePerformanceVisView";
import ErrorProportionDonutVisView from "./ErrorProportionDonutVisView";

export default {
  name: "VisView",
  components: {
    TimePerformanceVisView,
    ErrorProportionDonutVisView
  },
  props: ["dataset"],
  watch: {
    dataset: function(value) {
      this.dataForVis2 = value;
      this.dataForVis3 = value;
      this.dataForVis4 = value;
    }
  },
  data: () => ({
    dataForVis2: null,
    dataForVis3: null,
    dataForVis4: null
  }),
  methods: {
    filteredDataChangeHandlerForVis1(data) {
      this.dataForVis2 = data;
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
</style>
