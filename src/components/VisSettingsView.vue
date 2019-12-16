<template>
  <ion-content>
    <ion-label
      v-if="settingDefinitions && settingDefinitions.length < 1"
    >No settings available.</ion-label>
    <ion-item v-for="settingDefinition in settingDefinitions" :key="settingDefinition.label">
      <ion-label>{{settingDefinition.label}}</ion-label>
      <ion-select
        v-if="settingDefinition.type === 'selection'"
        interface="popover"
        :value="settingDataMap.get(settingDefinition.label)"
        @ionChange="settingChangeHandler(settingDefinition.label, $event.detail.value)"
      >
        <ion-select-option
          v-for="option in settingDefinition.options"
          :key="option"
          :value="option"
        >{{option}}</ion-select-option>
      </ion-select>
      <ion-checkbox
        v-else-if="settingDefinition.type === 'checkbox'"
        :checked="settingDataMap.get(settingDefinition.label)"
        @ionChange="settingChangeHandler(settingDefinition.label, $event.target.checked)"
      ></ion-checkbox>
      <ion-label v-else>Unsupported setting item</ion-label>
    </ion-item>
  </ion-content>
</template>

<script>
export default {
  name: "VisSettingsView",
  props: ["settingDefinitions", "settingDataMap", "settingChangeHandler"]
};
</script>