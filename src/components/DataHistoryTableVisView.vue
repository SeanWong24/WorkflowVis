<template>
  <ion-content>
    <div>
      <table>
        <tr>
          <th>Type</th>
          <th>Value/Source</th>
          <th>Label</th>
          <th>Module</th>
          <th>Error</th>
          <th>User</th>
        </tr>
        <tr
          v-for="item in dataset.nodes.filter(d => d.label === 'object' || d.label === 'file')"
          :key="item.id"
        >
          <th>{{item.type}}</th>
          <th>{{item.label === 'object' ? item.VALUE : item.SOURCE}}</th>
          <th>{{item.label}}</th>
          <th>{{obtainSourceModuleOfObject(item)}}</th>
          <th>{{item.error}}</th>
          <th>{{item.user}}</th>
        </tr>
      </table>
    </div>
  </ion-content>
</template>

<script>
import DefaultVisView from "./DefaultVisView";

export default {
  //TODO implement data filters
  name: "DataHistoryTableVisView",
  displayedName: "Data Histroy Table",
  extends: DefaultVisView,
  methods: {
    obtainSourceModuleOfObject(obj) {
      const edge = this.dataset.edges.find(edge => edge.target === obj.id);
      if (edge) {
        return this.dataset.nodes.find(node => node.id === edge.source).NAME;
      } else {
        return "";
      }
    }
  }
};
</script>

<style scoped>
div {
  overflow-x: auto;
}

table {
  color: black;
  width: 100%;
  border-collapse: collapse;
}

td,
th {
  border: 1px solid black;
  text-align: left;
  padding: 8px;
}

tr:nth-child(1) {
  background-color: grey;
}

tr:nth-child(even) {
  background-color: lightgrey;
}
</style>