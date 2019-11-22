<template>
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-card>Vis 1</ion-card>
      </ion-col>
      <ion-col>
        <ion-card>Vis 2</ion-card>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-card>Vis 3</ion-card>
      </ion-col>
      <ion-col>
        <ion-card>Vis 4</ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
export default {
  name: "VisView"
};
</script>

<style scoped>
ion-row {
  height: 50%;
}

ion-col {
  height: 100%;
}

ion-card {
  height: 100%;
  margin: 0;
}
</style>
