<template>
  <v-expansion-panel>
    <v-expansion-panel-content
     v-for="game in games" :key="game.index" hide-actions class="pa-3" :style="{ backgroundImage: `url('${game.img}')`, backgroundSize: 'cover' }">
      <div slot="header" class="light-blue--text text--lighten-5 title text-shadow1">{{game.title}}</div>
      <v-card>
        <v-btn small color="success">Play</v-btn>
        <v-btn small color="blue-grey">Workshop</v-btn>
        <v-btn small color="blue-grey">Success</v-btn>
        <v-card-text class="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>

</template>

<script>
export default {
  height: Number + "px",
  name: "store",
  data: () => ({
    games: [
      {
        title: "Counter Strike Global Offensive",
        img: "static/cs.jpg",
        success: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        workshop: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      },
      {
        title: "Day of Defeat Source",
        img: "static/game2.jpg",
        success: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        workshop: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      },
      {
        title: "The Witcher 3 Wild Hunt",
        img: "static/game2.jpg",
        success: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        workshop: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    ]
  })
};
</script>

<style scoped>
.application .theme--light.card, .theme--light .card{
    background-color: rgba(0, 0, 0, 0.412);
    color: white;
}
.text-shadow1 {
  text-shadow: 1px 1px 4px #000000;
}
</style>
