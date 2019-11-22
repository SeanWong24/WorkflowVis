<template>
  <div id="app">
    <MainView title="The Title"/>
  </div>
</template>

<script>
import MainView from "./components/MainView";

export default {
  name: "App",
  components: {
    MainView
  }
};
</script>

<style>
html,
body,
div#app {
  height: 100%;
  margin: 0;
  overflow: hidden;
}
</style>
