<template>

 <v-container
  fill-height
        fluid
        style="background-color:#424242;"
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12 sm6 v-for="promo in promos" :key="promo.index">

            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">{{promo.title}}</div>
                  <v-spacer></v-spacer>
                <div>{{promo.text}}</div>
              </v-card-title>
                <v-card-media
                  :src="promo.src"
                  height="125px"
                  
                ></v-card-media>
            </v-card>
          </v-flex>

          <v-flex xs4 v-for="game in games" :key="game.index">
            <v-card color="cyan darken-2" class="white--text">
              <v-container pa-2 fluid grid-list-lg>
                <v-layout row>
                  <v-flex pa-0 xs12>
                    <v-card-media
                      :src="game.src"
                      height="125px"
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

</template>

<script>
export default {
  height: Number + "px",
  name: "store",
  data: () => ({
    games: [
      { src: "static/game3.jpg", flex: 6 },
      { src: "static/game4.jpg", flex: 6 },
      { src: "static/game5.jpg", flex: 6 },
      { src: "static/game6.jpg", flex: 6 }
    ],
    promos: [
      {
        title: "Dungeons Bundle",
        text: "- 71%",
        src: "static/game1.jpg",
        flex: 12
      },
      {
        title: "Dawn of War Bundle",
        text: "- 75%",
        src: "static/game2.jpg",
        flex: 12
      }
    ]
  })
};
</script>

<style>
</style>
