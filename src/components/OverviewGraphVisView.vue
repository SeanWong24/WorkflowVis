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
  name: "OverviewGraphVisView",
  displayedName: "Overview Graph",
  extends: DefaultVisView,
  data: () => ({
    selectedModules: [],
    settingDefinitions: [
      {
        label: "Show Labels",
        type: "checkbox"
      }],
    settingDataMap: new Map([
      ["Show Labels", false],
    ])
  }),
  methods: {
    generateVis(value) {
      const svgElement = d3.select(this.$refs.mainSvg);
      svgElement.selectAll("*").remove();
      svgElement
        .call(
          d3.zoom().on("zoom", function() {
            svgElement.attr("transform", d3.event.transform);
          })
        )
        .append("g");

      const data = value;

      const simulation = d3
        .forceSimulation(data.nodes)
        .force(
          "link",
          d3
            .forceLink(data.edges)
            .id(d => d.id)
            .distance(50)
            .strength(1)
        )

        .force("collide", d3.forceCollide(10).iterations(16))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(500 / 2, 500 / 2))
        .force("y", d3.forceY(0))
        .force("x", d3.forceX(0));

      const link = svgElement
        .append("g")
        .attr("class", "link")
        .selectAll("line")
        .data(data.edges)
        .enter()
        .append("line")
        .attr("stroke", "gray")
        .attr("marker-end", "url(#arrowhead)");

      svgElement
        .append("defs")
        .append("marker")
        .append("svg:marker")
        .attr("id", "arrowhead")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 13)
        .attr("refY", 0)
        .attr("orient", "auto")
        .attr("markerWidth", 7)
        .attr("markerHeight", 7)
        .attr("overflow-x", "visible")
        .append("svg:path")
        .attr("d", "M 0,-5 L 10 ,0 L 0,5")
        .attr("fill", "#999")
        .style("stroke", "none");

      const node = svgElement
        .append("g")
        .attr("class", "nodes")
        .selectAll("path")
        .data(data.nodes)
        .enter()
        .append("path")
        .style("fill", function(d) {
          if (d.label === "file") {
            return "#1f77b4";
          }
          {
            if (d.label === "module") return "ff0000";
          }
          if (d.label === "object") {
            return "008000";
          }
        })
        .attr(
          "d",
          d3
            .symbol()
            .type(d => {
              switch (d.label) {
                case "file":
                  return d3.symbolSquare;
                case "object":
                  return d3.symbolDiamond;
                case "module":
                  return d3.symbolCircle;
                default:
                  return d3.symbolStar;
              }
            })

            .size(70)
        )
        .call(
          d3
            .drag()
            .on("start", d => {
              if (!d3.event.active) simulation.alphaTarget(0.3).restart();
              d.fx = d.x;
              d.fy = d.y;
            })
            .on("drag", d => {
              d.fx = d3.event.x;
              d.fy = d3.event.y;
            })
            .on("end", d => {
              if (!d3.event.active) simulation.alphaTarget(0);
              d.fx = null;
              d.fy = null;
            })
        );
      const edgepaths = svgElement
        .selectAll(".edgepath")
        .append("g")
        .data(data.edges)
        .enter()
        .append("path")
        .attr("class", "edgepath")
        .attr("fill-opacity", 0)
        .attr("stroke-opacity", 0.9)
        .attr("id", function(d, i) {
          return "edgepath" + i;
        })
        .style("pointer-events", "none")
        .attr("marker-end", "url(#arrowhead)");


      node.append("title")
        .text(d => {
        let result =
          "Label: " + d.label + "\nType: " + d.type + "\nTime: " + d.time;
        if (d.label === "file") {
          result += "\nSource: " + d.SOURCE;
        } else if (d.label === "object") {
          result += "\nValue: " + d.VALUE;
        } else if (d.label === "module") {
          result +=
            "\nCPU: " +
            d.cpu_run +
            "\nMemory: " +
            d.memory_run +
            "\nError: " +
            d.error;
        }

        return result;
      });


        var text = svgElement.selectAll("text")
                .data(data.nodes)
                .enter()
                .append("text");
        var textLabels = text
                .text(function (d) {
                  if (d.label === "module")
                    return ("Module: " + d.NAME);
                  if (d.label == "file")
                    return ("Source of File:" + d.SOURCE);
                  if (d.label == "object")
                    return ("Object");
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", "10px");




      const ticked = function() {
        link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);

        node.attr("transform", d => "translate(" + d.x + "," + d.y + ")");
          text
                  .attr("x", function(d) { return d.x; })
                  .attr("y", function(d) { return d.y; })

      };
      link.attr("d", function(d) {
        return (
          "M " +
          d.source.x +
          " " +
          d.source.y +
          " L " +
          d.target.x +
          " " +
          d.target.y
        );
      });

      simulation.nodes(data.nodes).on("tick", ticked);

      simulation.force("link").links(data.edges);
    },
    applySettings() {
      this.generateVis(this.dataset);
    }
  }
};
</script>
