<template>
  <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="none" ref="mainSvg" />
</template>

<script>
import * as d3 from "d3";

import DefaultVisView from "./DefaultVisView";

export default {
  name: "ModuleMetricsVisView",
  displayedName: "Module Metrics",
  extends: DefaultVisView,
  data: () => ({
    selectedModules: [],
    selectedModuleNames: [],
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
      },
      {
        label: "Sorted By",
        type: "selection",
        options: ["CPU", "Memory", "Errors", "Default"]
      }
    ],
    settingDataMap: new Map([
      ["Show CPU", true],
      ["Show Memory", true],
      ["Show Errors", true],
      ["Sorted By", "Default"]
    ])
  }),
  computed: {
    filteredData: {
      get: function() {
        return this.selectedModuleNames.length > 0
          ? {
              nodes: this.dataset.nodes.filter(
                node =>
                  (node.label === "module" &&
                    this.selectedModuleNames.find(
                      moduleName => node.NAME === moduleName
                    )) ||
                  (node.label !== "module" &&
                    this.dataset.edges.find(
                      edge =>
                        (edge.source === node.id &&
                          this.selectedModuleNames.find(
                            moduleName =>
                              moduleName ===
                              this.dataset.nodes.find(n => n.id === edge.target)
                                .NAME
                          )) ||
                        (edge.target === node.id &&
                          this.selectedModuleNames.find(
                            moduleName =>
                              moduleName ===
                              this.dataset.nodes.find(n => n.id === edge.source)
                                .NAME
                          ))
                    ))
              ),
              edges: this.dataset.edges.filter(edge =>
                this.selectedModuleNames.find(moduleName =>
                  this.dataset.nodes.find(
                    node =>
                      node.label === "module" &&
                      node.NAME === moduleName &&
                      (node.id === edge.source || node.id === edge.target)
                  )
                )
              )
            }
          : this.dataset;
      }
    }
  },
  methods: {
    resetFilter() {
      this.selectedModuleNames = [];
      this.selectedModules = [];
    },
    generateVis(value) {
      const svgElement = d3.select(this.$refs.mainSvg);
      svgElement.selectAll("*").remove();

      const modules = value.nodes.filter(node => node.label === "module");

      const moduleNameList = modules
        .filter(
          (module, index) =>
            modules.findIndex(m => m.NAME === module.NAME) === index
        )
        .map(module => module.NAME);

      let modulePerformanceMap = new Map();
      moduleNameList.forEach(moduleName => {
        const modulesWithSameName = modules.filter(
          module => module.NAME === moduleName
        );
        modulePerformanceMap.set(moduleName, {
          cpu: d3.mean(modulesWithSameName.map(module => module.cpu_run)),
          memory: d3.mean(modulesWithSameName.map(module => module.memory_run)),
          errors: d3.sum(
            modulesWithSameName.map(module => (module.error === "null" ? 0 : 1))
          )
        });
      });
      modulePerformanceMap = new Map(
        [...modulePerformanceMap.entries()].sort((a, b) => {
          switch (this.settingDataMap.get("Sorted By")) {
            case "CPU":
              return (a[1].cpu - b[1].cpu) % 1;
            case "Memory":
              return (a[1].memory - b[1].memory) % 1;
            case "Errors":
              return (a[1].errors - b[1].errors) % 1;
            default:
              return 0;
          }
        })
      );

      const moduleNameScale = d3
        .scaleBand()
        .domain([...modulePerformanceMap.keys()])
        .range([50, 425])
        .padding(0.1);

      const cpuScale = d3
        .scaleLinear()
        .domain([
          d3.min(
            Array.from(modulePerformanceMap.values()).map(
              metrics => metrics.cpu
            )
          ) * 0.9,
          d3.max(
            Array.from(modulePerformanceMap.values()).map(
              metrics => metrics.cpu
            )
          ) * 1.1
        ])
        .range([450, 50]);
      const memoryScale = d3
        .scaleLinear()
        .domain([
          d3.min(
            Array.from(modulePerformanceMap.values()).map(
              metrics => metrics.memory
            )
          ) * 0.999,
          d3.max(
            Array.from(modulePerformanceMap.values()).map(
              metrics => metrics.memory
            )
          ) * 1.001
        ])
        .range([450, 50]);
      const errorScale = d3
        .scaleLinear()
        .domain([
          d3.min(
            Array.from(modulePerformanceMap.values()).map(
              metrics => metrics.errors
            )
          ) * 0.9,
          d3.max(
            Array.from(modulePerformanceMap.values()).map(
              metrics => metrics.errors
            )
          ) * 1.1
        ])
        .range([450, 50]);
      if (this.settingDataMap.get("Show CPU")) {
        console.log(this.settingDataMap.get("Show CPU"));
        const gElementCpu = svgElement.append("g");
        gElementCpu
          .selectAll("rect")
          .data(Array.from(modulePerformanceMap.entries()))
          .enter()
          .append("rect")
          .attr("x", d => moduleNameScale(d[0]))
          .attr("width", moduleNameScale.bandwidth() / 3)
          .attr("y", d => cpuScale(d[1].cpu))
          .attr("height", d => 450 - cpuScale(d[1].cpu))
          .attr("fill", "red");
      }
      if (this.settingDataMap.get("Show Memory")) {
        const gElementMemory = svgElement.append("g");
        gElementMemory
          .selectAll("rect")
          .data(Array.from(modulePerformanceMap.entries()))
          .enter()
          .append("rect")
          .attr(
            "x",
            d => moduleNameScale(d[0]) + moduleNameScale.bandwidth() / 3
          )
          .attr("width", moduleNameScale.bandwidth() / 3)
          .attr("y", d => memoryScale(d[1].memory))
          .attr("height", d => 450 - memoryScale(d[1].memory))
          .attr("fill", "blue");
      }
      if (this.settingDataMap.get("Show Errors")) {
        const gElementErrors = svgElement.append("g");
        gElementErrors
          .selectAll("rect")
          .data(Array.from(modulePerformanceMap.entries()))
          .enter()
          .append("rect")
          .attr(
            "x",
            d => moduleNameScale(d[0]) + (moduleNameScale.bandwidth() / 3) * 2
          )
          .attr("width", moduleNameScale.bandwidth() / 3)
          .attr("y", d => errorScale(d[1].errors))
          .attr("height", d => 450 - errorScale(d[1].errors))
          .attr("fill", "green");
      }
      const guideBoxes = svgElement
        .append("g")
        .selectAll("rect")
        .data(Array.from(modulePerformanceMap.entries()))
        .enter()
        .append("rect");
      guideBoxes
        .attr("x", d => moduleNameScale(d[0]))
        .attr("width", moduleNameScale.bandwidth())
        .attr("y", 50)
        .attr("height", 400)
        .attr("fill", d => this.moduleColorScale(d[0]))
        .attr("opacity", 0)
        .attr("cursor", "pointer")
        .on("mouseover", () => {
          d3.select(d3.event.target).style("opacity", d =>
            this.selectedModuleNames.find(moduleName => moduleName === d[0])
              ? 0.5
              : 0.3
          );
        })
        .on("mouseout", () => {
          d3.select(d3.event.target).style("opacity", d =>
            this.selectedModuleNames.find(moduleName => moduleName === d[0])
              ? 0.2
              : 0
          );
        })
        .on("click", d => {
          const index = this.selectedModuleNames.findIndex(
            moduleName => d[0] === moduleName
          );
          if (index >= 0) {
            this.selectedModuleNames.splice(index, 1);
            d3.select(d3.event.target).style("opacity", 0.3);
          } else {
            this.selectedModuleNames.push(d[0]);
            d3.select(d3.event.target).style("opacity", 0.5);
          }
          this.emitFilteredDataChangEvent();
        })
        .append("title")
        .text(
          d =>
            d[0] +
            "\nCPU: " +
            d[1].cpu.toFixed(1) +
            "%\nMemory: " +
            d[1].memory +
            "\nErrors: " +
            d[1].errors
        );

      const xAxis = svgElement
        .append("g")
        .attr("transform", "translate(0, 450)");
      xAxis.call(d3.axisBottom(moduleNameScale));
      const yAxisCpu = svgElement
        .append("g")
        .attr("transform", "translate(50, 0)");
      yAxisCpu.call(d3.axisLeft(cpuScale).tickFormat(d => d + "%"));
      const yAxisMemory = svgElement
        .append("g")
        .attr("transform", "translate(425, 0)");
      yAxisMemory.call(d3.axisRight(memoryScale));
    },
    applySettings() {
      this.generateVis(this.dataset);
    }
  }
};
</script>