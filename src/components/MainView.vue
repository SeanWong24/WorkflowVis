<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{title}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fixed id="main-content">
      <ion-grid>
        <ion-row>
          <ion-col size="9">
            <VisView/>
          </ion-col>
          <ion-col size="3">
            <ion-card>
              <ControlView/>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-app>
</template>

<script>
import VisView from "./VisView";
import ControlView from "./ControlView";

export default {
  name: "MainView",
  props: {
    title: String
  },
  components: {
    VisView,
    ControlView
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main-content {
  height: calc(100% - 56px);
  margin-top: 56px;
}

ion-grid {
  height: 100%;
  padding: 0;
}

ion-row {
  height: 100%;
}

ion-card {
  height: 100%;
  margin: 0;
}
</style>
