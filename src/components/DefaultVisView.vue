<template>
  <ion-card-header>
    <ion-card-title>No Vis Selected</ion-card-title>
    <ion-card-subtitle>Selecting Vis type from the control view.</ion-card-subtitle>
  </ion-card-header>
</template>

<script>
export default {
  name: "DefaultVisView",
  displayedName: "None",
  props: ["dataset", "completeDataset", "visIndex", "moduleColorScale"],
  data: () => ({
    settingDefinitions: [],
    settingDataMap: new Map()
  }),
  watch: {
    dataset: function(value) {
      this.refresh(value);
    },
    completeDataset: function(value) {
      this.refresh(value);
    }
  },
  computed: {
    filteredData: {
      get: function() {
        return this.dataset;
      }
    }
  },
  mounted: function() {
    this.$emit("settingDefinitionsChange", {
      index: this.visIndex,
      definitions: this.settingDefinitions
    });
    this.$emit("settingDataMapChange", {
      index: this.visIndex,
      map: this.settingDataMap
    });

    if (this.dataset) {
      this.refresh(this.dataset);
    }
  },
  methods: {
    refresh(value) {
      this.resetFilter();
      this.emitFilteredDataChangEvent();
      this.generateVis(value);
    },
    emitFilteredDataChangEvent() {
      this.$emit("filteredDataChange", {
        index: this.visIndex,
        data: this.filteredData
      });
    },
    resetFilter() {},
    generateVis() {},
    applySettings() {},
    settingChangeHandler(label, value) {
      this.settingDataMap.set(label, value);
      this.$emit("settingDataMapChange", {
        index: this.visIndex,
        map: this.settingDataMap
      });
      this.applySettings();
    }
  }
};
</script>