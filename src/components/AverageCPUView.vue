<template>
    <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="none" ref="mainSvg" />
</template>

<script>
    import * as d3 from "d3";

    import DefaultVisView from "./DefaultVisView";
    export default {
        name: "AverageCPUView",
        displayedName: "Average CPU Usage",
        extends: DefaultVisView,
        methods: {
            generateVis(){
                alert("Yee!");



            }
        }
    }


</script>