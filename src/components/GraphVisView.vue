<template>
    <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="none" ref="mainSvg" />
</template>

<script>
    import * as d3 from "d3";

    import DefaultVisView from "./DefaultVisView";
    export default {
        name: "GraphVisView",
        displayedName: "Graph",
        extends: DefaultVisView,
        mounted() {
            this.generateVis();
        },
        methods: {
            generateVis(value){

                const svgElement = d3.select(this.$refs.mainSvg);
                svgElement.selectAll("*").remove();

                var colors = d3.scaleOrdinal(d3.schemeCategory10);

                var width = +svgElement.attr("width")
                var height = +svgElement.attr("height")
                let node, edgepaths, edgelabels, link;

                // debugger;
                svgElement.append('svg:defs').append('marker')
                    .attr('id','arrowhead')
                    .attr('refX',13)
                    .attr('refY',0)
                    .attr('orient','auto')
                    .attr('markerWidth', 13)
                    .attr('markerHeight', 13)
                    .attr('overflow-x', 'visible')
                    .append('svg:path')
                    .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
                    .attr('fill', '#999')
                    .style('stroke', 'none');

                const links = value.edges.map(d => Object.create(d))
                const nodess = value.nodes.map(d => Object.create(d))

                var simulation = d3.forceSimulation(nodess)
                    .force("link", d3.forceLink(links).id(function (d) {
                        return d.id;
                    }).distance(100).strength(1))
                    .force("charge", d3.forceManyBody())
                    .force("center", d3.forceCenter(width / 2, height / 2));




                link = svgElement.selectAll(".link")
                // .append('g')
                    .data(links)
                    .enter()
                    .append("line")
                    .attr("class", "link")
                    .attr('marker-end', 'url(#arrowhead)')

                link.append("title")
                    .text(function (d) {
                        return d.type;
                    });

                edgepaths = svgElement.selectAll(".edgepath")
                    .data(links)
                    .enter()
                    .append('path')
                    .attr('class', 'edgepath')
                    .attr('fill-opacity',0)
                    .attr('stroke-opacity', 0)
                    .attr('id', function (d, i) {
                        return 'edgepath' + i
                    })
                    .style("pointer-events", "none");

                edgelabels = svgElement.selectAll(".edgelabel")
                    .data(links)
                    .enter()
                    .append('text')
                    .style("pointer-events", "none")
                    .attr('class', 'edgelabel')
                    .attr('id', function (d, i) {
                        return 'edgelabel' + i
                    })
                    .attr('font-size', 10)
                    .attr('fill', '#aaa');

                edgelabels.append('textPath')
                    .attr('xlink:href', function (d, i) {
                        return '#edgepath' + i
                    })
                    .style("text-anchor", "middle")
                    .style("pointer-events", "none")
                    .attr("startOffset", "50%")
                    .text(function (d) {
                        return d.type
                    });

                node = svgElement.selectAll(".node")
                    .data(nodess)
                    .enter()
                    .append("g")
                    .attr("class", "node")
                    .call(d3.drag()
                            .on("start", dragstarted)
                            .on("drag", dragged)
                        //.on("end", dragended)
                    );

                node.append("circle")
                    .attr("r", 5)
                    .style("fill", function (d, i) {
                        return colors(i);
                    })

                node.append("title")
                    .text(function (d) {
                        return d.id;
                    });

                node.append("text")
                    .attr("dy", -3)
                    .text(function (d) {
                        return d.label;
                    });



                simulation.force("link")
                    .links(links);

                simulation
                    .nodes(nodess)
                    .on("tick", () => {

                        link
                            .attr("x1", d => d.source.x)
                            .attr("y1", d => d.source.y)
                            .attr("x2", d => d.target.x)
                            .attr("y2", d => d.target.y);

                        node
                            .attr("transform", function (d) {
                                return "translate(" + parseInt(d.x) + ", " + parseInt(d.y) + ")";
                            });

                        edgepaths.attr('d', function (d) {
                            return 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
                        });


                        edgelabels.attr('transform', function (d) {
                            if (d.target.x < d.source.x) {
                                var bbox = this.getBBox();

                                var rx = bbox.x + bbox.width / 2;
                                var ry = bbox.y + bbox.height / 2;
                                return 'rotate(180 ' + rx + ' ' + ry + ')';
                            } else {
                                return 'rotate(0)';
                            }
                        });
                    })



                // debugger;
                function dragstarted(d) {
                    if (!d3.event.active) simulation.alphaTarget(0.3).restart()
                    d.fx = d.x;
                    d.fy = d.y;
                }

                function dragged(d) {
                    d.fx = d3.event.x;
                    d.fy = d3.event.y;
                }



            }
        }
    }


</script>