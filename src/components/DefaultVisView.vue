<template>
  <ion-card-header>
    <ion-card-title>No Vis Selected</ion-card-title>
    <ion-card-subtitle>Selecting Vis type from the control view.</ion-card-subtitle>
  </ion-card-header>
</template>

<script>
export default {
  name: "DefaultVisView",
  props: ["dataset", "completeDataset"],
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
    if (this.dataset) {
      this.refresh(this.dataset);
    }
  },
  methods: {
    refresh(value) {
      this.resetFilter();
      this.$emit("filteredDataChange", this.filteredData);
      this.generateVis(value);
    },
    resetFilter() {},
    generateVis() {}
  }
};
</script>