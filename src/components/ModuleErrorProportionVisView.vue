<template>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 500 500"
    preserveAspectRatio="xMidYMid meet"
    ref="mainSvg"
  />
</template>

<script>
import * as d3 from "d3";

import DefaultVisView from "./DefaultVisView";

export default {
  name: "ModuleErrorProportionVisView",
  displayedName: "Module Error Proportion",
  extends: DefaultVisView,
  data: () => ({
    selectedPartitionMap: new Map(),
    settingDefinitions: [
      {
        label: "Show Module Proportion",
        type: "checkbox"
      },
      {
        label: "Show Success and Error Proportion",
        type: "checkbox"
      }
    ],
    settingDataMap: new Map([
      ["Show Module Proportion", true],
      ["Show Success and Error Proportion", true],
    ])
  }),
  computed: {
    filteredData: {
      get: function() {
        const selectedPartitionList = Array.from(
          this.selectedPartitionMap.entries()
        )
          .flatMap(d => [
            {
              moduleName: d[0],
              status: "success",
              isSelected: d[1].get("success")
            },
            {
              moduleName: d[0],
              status: "error",
              isSelected: d[1].get("error")
            }
          ])
          .filter(d => d.isSelected);
        if (selectedPartitionList.length > 0) {
          const nodesFilteredByModules = this.dataset.nodes.filter(
            node =>
              node.label !== "module" ||
              selectedPartitionList.find(
                d =>
                  node.NAME === d.moduleName &&
                  (d.status === "success"
                    ? node.error === "null"
                    : node.error !== "null")
              )
          );
          const nodes = nodesFilteredByModules.filter(
            node =>
              node.label === "module" ||
              this.dataset.edges.find(
                edge =>
                  (edge.source === node.id &&
                    nodesFilteredByModules.find(
                      n => n.label === "module" && n.id === edge.target
                    )) ||
                  (edge.target === node.id &&
                    nodesFilteredByModules.find(
                      n => n.label === "module" && n.id === edge.source
                    ))
              )
          );
          const edges = this.dataset.edges.filter(edge =>
            nodes.find(
              module => module.id === edge.source || module.id === edge.target
            )
          );
          return { nodes, edges };
        } else {
          return this.dataset;
        }
      }
    }
  },
  methods: {
    resetFilter() {
      this.selectedPartitionMap = new Map();
    },
    generateVis(value) {
      const width = 500;
      const height = 500;

      const svgElement = d3.select(this.$refs.mainSvg);
      svgElement.selectAll("*").remove();
      this.selectedPartitionMap = new Map();

      const gElement = svgElement
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      const modules = value.nodes.filter(node => node.label === "module");

      const data = {};
      for (const module of modules) {
        if (!data[module.NAME]) {
          data[module.NAME] = [];

          const tempMap = new Map();
          tempMap.set("success", false);
          tempMap.set("error", false);
          this.selectedPartitionMap.set(module.NAME, tempMap);
        }
        data[module.NAME].push(module);
      }

      const pie = d3.pie()
        .value(d => d[1].length)
        .sort(null);
      const pieInner = pie(Object.entries(data));
      const pieOutter = pie(
        Object.entries(data).flatMap(d => [
          [d[0] + "_success", d[1].filter(module => module.error === "null")],
          [d[0] + "_error", d[1].filter(module => module.error !== "null")]
        ])
      );

      const colorScaleOutter = d3
        .scaleOrdinal()
        .domain([true, false])
        .range(["green", "red"]);
      if (this.settingDataMap.get("Show Module Proportion")){
        const gInnerPie = gElement.append("g");
        const label = d3
                .arc()
                .innerRadius(50)
                .outerRadius(100);
        const innerPiePaths = gInnerPie
                .selectAll("path")
                .data(pieInner)
                .enter()
                .append("path")
                .attr(
                        "d",
                        label
                )
                .attr("fill", d => this.moduleColorScale(d.data[0]))
                .attr("stroke", "black")
                .attr("stroke-width", "2px")
                .attr("opacity", 0.7)
                .style("cursor", "pointer")
                .on("click", d => {
                  const tempMap = this.selectedPartitionMap.get(d.data[0]);
                  const previousValue = tempMap.get("success") && tempMap.get("error");
                  tempMap.set("success", !previousValue);
                  tempMap.set("error", !previousValue);
                  this.updateSelection();
                });
        innerPiePaths.append("text")
                .attr("transform", function(d) {
                  return "translate(" + label.centroid(d) + ")";
                })
                .attr("text-anchor", "middle")
                .attr("color","black")
                .text(function(d) {
                  // console.log(d.data[0]);
                  return d.data[0];
                });

        // innerPiePaths
        //   .append("title")
        //   .text(
        //     d =>
        //       d.data[0] +
        //       "\n" +
        //       ((d.value / modules.length) * 100).toFixed(2) +
        //       "%"
        //   );
      }

      if (this.settingDataMap.get("Show Success and Error Proportion")){
        const labelOutter = d3.arc()
                .innerRadius(100)
                .outerRadius(150)
        const gOutterPie = gElement.append("g");
        const outterPiePaths = gOutterPie
                .selectAll("path")
                .data(pieOutter)
                .enter()
                .append("path")
                .attr(
                        "d",
                        labelOutter
                )
                .attr("fill", d =>
                        colorScaleOutter(d.data[0].split("_")[1] === "success")
                )
                .attr("stroke", "black")
                .attr("stroke-width", "2px")
                .attr("opacity", 0.7)
                .style("cursor", "pointer")
                .on("click", d => {
                  const [moduleName, status] = d.data[0].split("_");
                  const tempMap = this.selectedPartitionMap.get(moduleName);
                  tempMap.set(status, !tempMap.get(status));
                  this.updateSelection();
                });
        outterPiePaths.append("text")
                .attr("transform", function(d) {
                  return "translate(" + labelOutter.centroid(d) + ")";
                })
                .attr("text-anchor", "middle")
                .attr("color","black")
                .text(function(d) {
                  console.log(d.data[0]);
                  return d.data[0];
                });
        outterPiePaths
                .append("title")
                .text(
                        d =>
                                d.data[0] +
                                "\n" +
                                ((d.value / modules.length) * 100).toFixed(2) +
                                "%"
                );
      }
    },
    updateSelection() {
      d3.select(this.$refs.mainSvg)
        .select("g")
        .selectAll("g")
        .selectAll("path")
        .attr("stroke-width", d => {
          const [moduleName, status] = d.data[0].split("_");
          let isSelected = false;
          if (status) {
            const tempMap = this.selectedPartitionMap.get(moduleName);
            isSelected = tempMap.get(status);
          } else {
            const tempMap = this.selectedPartitionMap.get(moduleName);
            isSelected = tempMap.get("success") && tempMap.get("error");
          }
          return isSelected ? "5px" : "2px";
        });

      const temp = this.selectedPartitionMap;
      this.selectedPartitionMap = null;
      this.selectedPartitionMap = temp;

      this.emitFilteredDataChangEvent();
    },
    applySettings() {
      this.generateVis(this.dataset);
    }
  }
};
</script>