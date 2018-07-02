<template>
  <v-container fluid pa-0 bg>

  <v-tabs icons-and-text grow centered dark color="blue-grey darken-3">
    <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab v-for="tabs in tabs" :key="tabs.id" @click="activeTab = tabs.id">
          <v-icon color="white">{{tabs.icon}}</v-icon>
      </v-tab>
  </v-tabs>

    <home v-if="isActiveTab(0)"></home>
    <store v-if="isActiveTab(1)"></store>
    <library v-if="isActiveTab(2)"></library>


 
  </v-container>
</template>

<script>
import home from "./Main/home";
import store from "./Main/store";
import library from "./Main/library";

export default {
  name: "main-page",
  data() {
    return {
      activeTab: 0,
      tabs: [
        { id: 0, icon: "mdi-home" },
        { id: 1, icon: "mdi-cart" },
        { id: 2, icon: "mdi-gamepad-variant" },
        { id: 3, icon: "mdi-account-multiple" },
        { id: 4, icon: "mdi-settings" }
      ]
    };
  },
  methods: {
    isActiveTab(id) {
      return this.activeTab === id;
    }
  },
  components: { home, store, library }
};
</script>

<style>
</style>
