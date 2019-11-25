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

export default {
  name: "ErrorProportionDonutVisView",
  props: ["dataset"],
  watch: {
    dataset: function(value) {
      this.generateVis(value);
    }
  },
  methods: {
    generateVis(value) {
      const width = 500;
      const height = 500;
      const margin = 50;

      const svgElement = d3.select(this.$refs.mainSvg);
      svgElement.selectAll("*").remove();

      const gElement = svgElement
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      const modules = value.nodes.filter(node => node.label === "module");

      var Entropy = 0;
      var Entropy_Success = 0;
      var FastQC = 0;
      var FastQC_Success = 0;
      var MaxMinProb = 0;
      var MaxMinProb_Success = 0;
      var DNALetterCount = 0;
      var DNALetterCount_Success = 0;
      for (let i in modules) {
        if (modules[i].NAME === "Entropy") {
          Entropy = Entropy + 1;
          Entropy_Success = Entropy;
          if (modules[i].error !== "null") {
            Entropy_Success = Entropy_Success - 1;
          }
        }
        if (modules[i].NAME === "FastQC") {
          FastQC = FastQC + 1;
          FastQC_Success = FastQC;
          if (modules[i].error !== "null") {
            FastQC_Success = FastQC_Success - 1;
          }
        }
        if (modules[i].NAME === "MaxMinProb") {
          MaxMinProb = MaxMinProb + 1;
          MaxMinProb_Success = MaxMinProb;
          if (modules[i].error !== "null") {
            MaxMinProb_Success = MaxMinProb_Success - 1;
          }
        }
        if (modules[i].NAME === "DNALetterCount") {
          DNALetterCount = DNALetterCount + 1;
          DNALetterCount_Success = DNALetterCount;
          if (modules[i].error !== "null") {
            DNALetterCount = DNALetterCount - 1;
          }
        }
      }

      const dataInner = {
        Entropy: Entropy,
        FastQC: FastQC,
        MaxMinProb: MaxMinProb,
        DNALetterCount: DNALetterCount
      };
      const dataOutter = {
        Entropy_Success: Entropy_Success,
        Entropy_Error: Entropy - Entropy_Success,
        FastQC_Success: FastQC_Success,
        FastQC_Error: FastQC - FastQC_Success,
        MaxMinProb_Success: MaxMinProb_Success,
        MaxMinProb_Error: MaxMinProb - MaxMinProb_Success,
        DNALetterCount_Success: DNALetterCount_Success,
        DNALetterCount_Error: DNALetterCount - DNALetterCount_Success
      };

      const colorScaleInner = d3
        .scaleOrdinal(d3.schemeAccent)
        .domain(
          modules
            .filter(
              (module, index) => modules.findIndex(m => module === m) === index
            )
            .map(module => module.NAME)
        );
      const colorScaleOutter = d3
        .scaleOrdinal()
        .domain([true, false])
        .range(["green", "red"]);

      var pie = d3.pie().value(function(d) {
        return d.value;
      });
      var data_ready = pie(d3.entries(dataOutter));
      var d_ready = pie(d3.entries(dataInner));

      gElement
        .append("g")
        .selectAll("path")
        .data(data_ready)
        .enter()
        .append("path")
        .attr(
          "d",
          d3
            .arc()
            .innerRadius(100)
            .outerRadius(150)
        )
        .attr("fill", function(d) {
          return colorScaleOutter(d.data.key.split("_")[1] === "Success");
        })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7);

      gElement
        .append("g")
        .selectAll("path")
        .data(d_ready)
        .enter()
        .append("path")
        .attr(
          "d",
          d3
            .arc()
            .innerRadius(50)
            .outerRadius(100)
        )
        .attr("fill", function(d) {
          return colorScaleInner(d.data.key);
        })
        .attr("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 0.7);
    }
  }
};
</script>