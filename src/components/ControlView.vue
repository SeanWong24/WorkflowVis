<template>
  <ion-content>
    <ion-item-group>
      <ion-item-divider>
        <ion-label>Vis 1 (Upper-Left)</ion-label>
      </ion-item-divider>

      <ion-item>
        <ion-label>Vis Type</ion-label>
        <ion-select
          interface="popover"
          placeholder="Select One"
          :value="visComponent1.name"
          @ionChange="e => visComponentChangeHandler(1, visComponentList.find(componenet => componenet.name === e.detail.value))"
        >
          <ion-select-option
            v-for="component in visComponentList"
            :key="component.name"
            :value="component.name"
          >{{component.name}}</ion-select-option>
        </ion-select>
      </ion-item>
    </ion-item-group>
    <ion-item-group>
      <ion-item-divider>
        <ion-label>Vis 2 (Upper-right)</ion-label>
      </ion-item-divider>

      <ion-item>
        <ion-label>Vis Type</ion-label>
        <ion-select
          interface="popover"
          placeholder="Select One"
          :value="visComponent2.name"
          @ionChange="e => visComponentChangeHandler(2, visComponentList.find(componenet => componenet.name === e.detail.value))"
        >
          <ion-select-option
            v-for="component in visComponentList"
            :key="component.name"
            :value="component.name"
          >{{component.name}}</ion-select-option>
        </ion-select>
      </ion-item>
    </ion-item-group>
  </ion-content>
</template>

<script>
export default {
  name: "ControlView",
  props: ["visComponentList", "visComponent1", "visComponent2"],
  data: () => ({
    _visComponent1: null
  }),
  methods: {
    visComponentChangeHandler(index, component) {
      this.$emit("visComponentChange", { index, component });
    }
  }
};
</script>
