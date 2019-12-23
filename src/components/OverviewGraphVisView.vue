<template>
  <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet" ref="mainSvg"></svg>
</template>

<script>
import * as d3 from "d3";

import DefaultVisView from "./DefaultVisView";

export default {
  name: "OverviewGraphVisView",
  displayedName: "Overview Graph",
  extends: DefaultVisView,
  methods: {
    generateVis(value) {
      const svgElement = d3.select(this.$refs.mainSvg);
      svgElement.selectAll("*").remove();

      const data = value;

      const simulation = d3
        .forceSimulation()
        .force("link", d3.forceLink().id(d => d.id))
        .force("collide", d3.forceCollide(10).iterations(16))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(500 / 2, 500 / 2))
        .force("y", d3.forceY(0))
        .force("x", d3.forceX(0));

      const link = svgElement
        .append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(data.edges)
        .enter()
        .append("line")
        .attr("stroke", "black");

      const node = svgElement
        .append("g")
        .attr("class", "nodes")
        .selectAll("path")
        .data(data.nodes)
        .enter()
        .append("path")
        .attr(
          "d",
          d3
            .symbol()
            .type(d => {
              switch (d.label) {
                case "file":
                  return d3.symbolDiamond;
                case "object":
                  return d3.symbolSquare;
                case "module":
                  return d3.symbolCircle;
                default:
                  return d3.symbolStar;
              }
            })
            .size(50)
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
      node.append("title").text(d => JSON.stringify(d));

      const ticked = function() {
        link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);

        node.attr("transform", d => "translate(" + d.x + "," + d.y + ")");
      };

      simulation.nodes(data.nodes).on("tick", ticked);

      simulation.force("link").links(data.edges);
    }
  }
};
</script>
