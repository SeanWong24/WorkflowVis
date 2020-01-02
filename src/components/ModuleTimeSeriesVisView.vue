<template>
  <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="none" ref="mainSvg" />
</template>

<script>
import * as d3 from "d3";

import DefaultVisView from "./DefaultVisView";

export default {
  name: "ModuleTimeSeriesVisView",
  displayedName: "Module Time Series",
  extends: DefaultVisView,
  data: () => ({
    selectedModules: [],
    settingDefinitions: [
      {
        label: "Show CPU",
        type: "checkbox"
      },
      {
        label: "Show Memory",
        type: "checkbox"
      },
      {
        label: "Show Errors",
        type: "checkbox"
      }
    ],
    settingDataMap: new Map([
      ["Show CPU", true],
      ["Show Memory", true],
      ["Show Errors", true]
    ])
  }),
  computed: {
    filteredData: {
      get: function() {
        return this.selectedModules.length > 0
          ? {
              nodes: this.dataset.nodes.filter(
                node =>
                  (node.label === "module" &&
                    this.selectedModules.find(
                      module => node.id === module.id
                    )) ||
                  (node.label !== "module" &&
                    this.dataset.edges.find(
                      edge =>
                        (edge.source === node.id &&
                          this.selectedModules.find(
                            module => module.id === edge.target
                          )) ||
                        (edge.target === node.id &&
                          this.selectedModules.find(
                            module => module.id === edge.source
                          ))
                    ))
              ),
              edges: this.dataset.edges.filter(edge =>
                this.selectedModules.find(
                  module =>
                    module.id === edge.source || module.id === edge.target
                )
              )
            }
          : this.dataset;
      }
    }
  },
  methods: {
    resetFilter() {
      this.selectedModules = [];
    },
    generateVis(value) {
      const svgElement = d3.select(this.$refs.mainSvg);
      svgElement.selectAll("*").remove();

      const modules = value.nodes
        .filter(node => node.label === "module")
        .sort((a, b) => Date.parse(a.time) - Date.parse(b.time));

      const mockLastModule = JSON.parse(
        JSON.stringify(modules[modules.length - 1])
      );
      mockLastModule.time = mockLastModule.time_run;
      modules.push(mockLastModule);

      const xScale = d3
        .scaleTime()
        .domain([
          Date.parse(modules[0].time),
          Date.parse(modules[modules.length - 1].time)
        ])
        .range([50, 425]);
      const yScaleCpu = d3
        .scaleLinear()
        .domain([0, d3.max(modules.map(module => +module.cpu_run))])
        .range([450, 50]);
      const yScaleMemory = d3
        .scaleLinear()
        .domain([
          d3.min(modules.map(module => +module.memory_run)),
          d3.max(modules.map(module => +module.memory_run))
        ])
        .range([450, 50]);
      debugger;
      console.log(this.settingDataMap.get("Show CPU"));
      if (this.settingDataMap.get("Show CPU")) {

        const cpuLine = d3
          .line()
          .x(module => xScale(Date.parse(module.time)))
          .y(module => yScaleCpu(module.cpu_run))
          .curve(d3.curveStepAfter);
        const cpuPath = svgElement.append("g").append("path");
        cpuPath
          .datum(modules)
          .attr("d", cpuLine)
          .attr("stroke", "red")
          .attr("stroke-width", 1)
          .attr("fill", "none")
          .attr("opacity", 0.7);
      }

      if (this.settingDataMap.get("Show Memory")) {
        const memoryLine = d3
          .line()
          .x(module => xScale(Date.parse(module.time)))
          .y(module => yScaleMemory(module.memory_run))
          .curve(d3.curveStepAfter);
        const memoryPath = svgElement.append("g").append("path");
        memoryPath
          .datum(modules)
          .attr("d", memoryLine)
          .attr("stroke", "blue")
          .attr("stroke-width", 1)
          .attr("fill", "none")
          .attr("opacity", 0.7);
      }

      const moduleBoxes = svgElement
        .append("g")
        .selectAll("rect")
        .data(modules)
        .enter()
        .append("rect");
      moduleBoxes
        .attr("x", module => xScale(Date.parse(module.time)))
        .attr("y", 450)
        .attr(
          "width",
          (module, index) =>
            (index < modules.length - 1
              ? xScale(Date.parse(modules[index + 1].time))
              : 425) - xScale(Date.parse(module.time))
        )
        .attr("height", 20)
        .attr("fill", module => this.moduleColorScale(module.NAME));

      if (this.settingDataMap.get("Show Errors")) {
        const moduleErrorBoxes = svgElement
          .append("g")
          .selectAll("rect")
          .data(modules)
          .enter()
          .append("rect");
        moduleErrorBoxes
          .attr("x", module => xScale(Date.parse(module.time)))
          .attr("y", 470)
          .attr(
            "width",
            (module, index) =>
              (index < modules.length - 1
                ? xScale(Date.parse(modules[index + 1].time))
                : 425) - xScale(Date.parse(module.time))
          )
          .attr("height", 10)
          .attr("fill", module => (module.error === "null" ? "green" : "red"));
      }

      const yAxisCpu = svgElement
        .append("g")
        .attr("transform", "translate(50, 0)");
      yAxisCpu.call(d3.axisLeft(yScaleCpu).tickFormat(d => d + "%"));
      const yAxisMemory = svgElement
        .append("g")
        .attr("transform", "translate(425, 0)");
      yAxisMemory.call(d3.axisRight(yScaleMemory));

      const guideBoxes = svgElement
        .append("g")
        .selectAll("rect")
        .data(modules)
        .enter()
        .append("rect");
      guideBoxes
        .attr("x", module => xScale(Date.parse(module.time)))
        .attr("y", 50)
        .attr(
          "width",
          (module, index) =>
            (index < modules.length - 1
              ? xScale(Date.parse(modules[index + 1].time))
              : 425) - xScale(Date.parse(module.time))
        )
        .attr("height", 430)
        .attr("fill", module => this.moduleColorScale(module.NAME))
        .attr("opacity", 0)
        .style("cursor", "pointer")
        .on("mouseover", () => {
          d3.select(d3.event.target).style("opacity", module =>
            this.selectedModules.find(m => module === m) ? 0.5 : 0.3
          );
        })
        .on("mouseout", () => {
          d3.select(d3.event.target).style("opacity", module =>
            this.selectedModules.find(m => module === m) ? 0.2 : 0
          );
        })
        .on("click", module => {
          const index = this.selectedModules.findIndex(m => module === m);
          if (index >= 0) {
            this.selectedModules.splice(index, 1);
            d3.select(d3.event.target).style("opacity", 0.3);
          } else {
            this.selectedModules.push(module);
            d3.select(d3.event.target).style("opacity", 0.5);
          }
          this.emitFilteredDataChangEvent();
        });
      guideBoxes
        .append("title")
        .text(
          module =>
            module.time +
            "\n" +
            module.NAME +
            "\nCPU Load: " +
            module.cpu_run +
            "%\nMemory Load: " +
            module.memory_run +
            "\nError: " +
            module.error
        );
    },
    applySettings() {
      this.generateVis(this.dataset);
    }
  }
};
</script>