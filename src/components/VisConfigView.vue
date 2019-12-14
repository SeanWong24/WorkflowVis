<template>
  <ion-card-header>
    <ion-label class="vis-title-label">Vis {{visIndex}}</ion-label>
    <div class="setting-item-container">
      <ion-select
        interface="popover"
        placeholder="Vis Type"
        :value="visComponent.name"
        @ionChange="e => visComponentChangeHandler(visComponentList.find(componenet => componenet.name === e.detail.value))"
      >
        <ion-select-option
          v-for="component in visComponentList"
          :key="component.name"
          :value="component.name"
        >{{component.displayedName}}</ion-select-option>
      </ion-select>
    </div>
    <div class="setting-item-container">
      <ion-select
        interface="popover"
        placeholder="Data From"
        :value="visDataSource"
        @ionChange="e => visDataSourceChangeHandler(e.detail.value)"
      >
        <ion-select-option
          v-for="i in [0, 1, 2, 3, 4].filter(i => i !== visIndex)"
          :key="i"
          :value="i"
        >From {{i > 0 ? "Vis" + i : "Default"}}</ion-select-option>
      </ion-select>
    </div>
  </ion-card-header>
</template>

<script>
export default {
  name: "VisConfigView",
  props: ["visIndex", "visComponentList", "visComponent", "visDataSource"],
  methods: {
    visComponentChangeHandler(component) {
      this.$emit("visComponentChange", { index: this.visIndex, component });
    },
    visDataSourceChangeHandler(sourceIndex) {
      this.$emit("visDataSourceChange", { index: this.visIndex, sourceIndex });
    }
  }
};
</script>

<style scoped>
ion-card-header {
  background-color: lightgrey;
  padding: 0;
  padding-left: 10px;
  padding-right: 10px;
}

.vis-title-label {
  font-weight: bold;
  color: black;
}

.setting-item-container {
  display: inline-block;
}
</style>