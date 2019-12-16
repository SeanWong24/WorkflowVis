<template>
  <ion-card-header>
    <ion-label class="vis-title-label">Vis {{visIndex}}</ion-label>
    <div class="header-item">
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
    <div class="header-item">
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
    <ion-buttons class="header-item">
      <ion-button @click="settingButtonClickHandler">
        <ion-icon slot="icon-only" name="settings"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-card-header>
</template>

<script>
import { addIcons } from "ionicons";
import { settings } from "ionicons/icons";

import VisSettingsView from "./VisSettingsView";

addIcons({
  "md-settings": settings.md,
  "ios-settings": settings.ios
});

export default {
  name: "VisConfigView",
  props: [
    "visIndex",
    "visComponentList",
    "visComponent",
    "visDataSource",
    "visSettingDefinitions",
    "visSettingDataMap"
  ],
  methods: {
    visComponentChangeHandler(component) {
      this.$emit("visComponentChange", { index: this.visIndex, component });
    },
    visDataSourceChangeHandler(sourceIndex) {
      this.$emit("visDataSourceChange", { index: this.visIndex, sourceIndex });
    },
    async settingButtonClickHandler(evt) {
      const popover = await this.$ionic.popoverController.create({
        component: VisSettingsView,
        componentProps: {
          propsData: {
            settingDefinitions: this.visSettingDefinitions,
            settingDataMap: this.visSettingDataMap,
            settingChangeHandler: this.settingChangeHandler
          }
        },
        event: evt,
        translucent: true
      });
      return await popover.present();
    },
    settingChangeHandler(label, value) {
      this.$emit("visSettingChange", { index: this.visIndex, label, value });
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

.header-item {
  display: inline-block;
}

ion-buttons {
  float: right;
}

.header-item ion-button {
  max-width: 40px;
  max-height: 40px;
}
</style>