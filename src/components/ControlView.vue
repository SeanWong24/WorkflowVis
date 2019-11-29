<template>
  <ion-content>
    <ion-item-group v-for="index in [1, 2, 3, 4]" :key="index">
      <ion-item-divider>
        <ion-label>{{obtainVisDisplayLabel(index)}}</ion-label>
      </ion-item-divider>

      <ion-item>
        <ion-label>Vis Type</ion-label>
        <ion-select
          interface="popover"
          placeholder="Select One"
          :value="obtainVisComponent(index).name"
          @ionChange="e => visComponentChangeHandler(index, visComponentList.find(componenet => componenet.name === e.detail.value))"
        >
          <ion-select-option
            v-for="component in visComponentList"
            :key="component.name"
            :value="component.name"
          >{{component.name}}</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item>
        <ion-label>Data From</ion-label>
        <ion-select
          interface="popover"
          placeholder="Select One"
          :value="obtainVisDataSource(index)"
          @ionChange="e => visDataSourceChangeHandler(index, e.detail.value)"
        >
          <ion-select-option
            v-for="i in [0, 1, 2, 3, 4].filter(i => i !== index)"
            :key="i"
            :value="i"
          >{{obtainVisDisplayLabel(i)}}</ion-select-option>
        </ion-select>
      </ion-item>
    </ion-item-group>
  </ion-content>
</template>

<script>
export default {
  name: "ControlView",
  props: [
    "visComponentList",
    "visComponent1",
    "visComponent2",
    "visComponent3",
    "visComponent4",
    "dataSourceVis1",
    "dataSourceVis2",
    "dataSourceVis3",
    "dataSourceVis4"
  ],
  data: () => ({
    _visComponent1: null
  }),
  methods: {
    visComponentChangeHandler(index, component) {
      this.$emit("visComponentChange", { index, component });
    },
    visDataSourceChangeHandler(index, sourceIndex) {
      this.$emit("visDataSourceChange", { index, sourceIndex });
    },
    obtainVisDisplayLabel(index) {
      switch (index) {
        case 0:
          return "Main";
        case 1:
          return "Vis 1 (Upper-Left)";
        case 2:
          return "Vis 2 (Upper-Right)";
        case 3:
          return "Vis 3 (Lower-Left)";
        case 4:
          return "Vis 4 (Upper-Right)";
      }
    },
    obtainVisComponent(index) {
      return this["visComponent" + index];
    },
    obtainVisDataSource(index) {
      return this["dataSourceVis" + index];
    }
  }
};
</script>
