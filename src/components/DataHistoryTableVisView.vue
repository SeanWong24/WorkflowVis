<template>
  <ion-content scroll-x="true">
    <ion-segment
      scrollable
      slot="fixed"
      :value="queryingNodeIndex"
      @ionChange="e => queryingNodeIndex = e.detail.value"
    >
      <ion-segment-button
        v-for="(dataNode, index) in dataNodes"
        :key="index"
        :value="index"
        :title="'Label: ' + dataNode.label + '\nId: ' + dataNode.id"
      >{{index}}</ion-segment-button>
    </ion-segment>
    <table>
      <tr>
        <th>Type</th>
        <th>Value/Source</th>
        <th>Label</th>
        <th>Module</th>
        <th>Error</th>
        <th>User</th>
      </tr>
      <tr v-for="item in dataHistoryList" :key="item.dataNode.id">
        <th>{{item.dataNode.type}}</th>
        <th>{{item.dataNode.label === 'object' ? item.dataNode.VALUE : item.dataNode.SOURCE}}</th>
        <th>{{item.dataNode.label}}</th>
        <th>{{item.sourceModule ? item.sourceModule.NAME : ""}}</th>
        <th>{{item.dataNode.error}}</th>
        <th>{{item.dataNode.user}}</th>
      </tr>
    </table>
  </ion-content>
</template>

<script>
import DefaultVisView from "./DefaultVisView";

export default {
  name: "DataHistoryTableVisView",
  displayedName: "Data Histroy Table",
  extends: DefaultVisView,
  data: () => ({
    _queryingNodeIndex: 0,
    dataHistoryList: []
  }),
  computed: {
    dataNodes: {
      get: function() {
        return this.dataset.nodes.filter(
          node => node.label === "object" || node.label === "file"
        );
      }
    },
    queryingNodeIndex: {
      get: function() {
        return this.$data._queryingNodeIndex;
      },
      set: function(value) {
        this.$data._queryingNodeIndex = value;
        this.refreshTable(value);
      }
    }
  },
  methods: {
    generateVis(value) {
      this.queryingNodeIndex = 0;
    },
    refreshTable(queryingNodeIndex) {
      const list = [];
      let queryingNode = this.dataNodes[queryingNodeIndex];
      while (queryingNode) {
        const edgeWithQueryingNodeAsTarget = this.completeDataset.edges.find(
          edge => edge.target === queryingNode.id
        );
        if (edgeWithQueryingNodeAsTarget) {
          const sourceModuleId = edgeWithQueryingNodeAsTarget.source;
          const sourceModule = this.completeDataset.nodes.find(
            node => node.id === sourceModuleId
          );
          list.push({ dataNode: queryingNode, sourceModule });

          const edgeWithSourceModuleAsTarget = this.completeDataset.edges.find(
            edge => edge.target === sourceModuleId
          );
          if (edgeWithSourceModuleAsTarget) {
            const parentDataNodeId = edgeWithSourceModuleAsTarget.source;
            queryingNode = this.completeDataset.nodes.find(
              node => node.id === parentDataNodeId
            );
            continue;
          }
        } else {
          list.push({ dataNode: queryingNode, sourceModule: undefined });
        }
        queryingNode = undefined;
      }
      this.dataHistoryList = list;
    },
    segmentChangeHandler(event) {
      const queryingNodeIndex = event.detail.value;
      this.refreshTable(queryingNodeIndex);
    }
  }
};
</script>

<style scoped>
table {
  color: black;
  width: 100%;
  margin-top: 50px;
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