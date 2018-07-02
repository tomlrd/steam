<template>
  <div id="app">
    <v-app>
      <transition name="router-anim" mode="out-in" v-on:after-enter="afterEnter" v-on:before-leave="beforeLeave">
      <router-view></router-view>
      </transition>

      <transition name="loading-anim" mode="out-in">      
        <v-layout v-if="show" column justify-center fill-height align-center="true" style="position:absolute;width:100%;background-color:rgb(0, 11, 15);">
          <p class="white--text title mt-2 text-shadow1">LOADING</p>
          <v-progress-circular indeterminate color="blue darken-3" class="mt-2"></v-progress-circular>
        </v-layout>
      </transition>

    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    afterEnter: function() {
      this.show = false;
      console.log("enter : " + this.show);
    },
    beforeLeave: function() {
      this.show = true;
      console.log("leave : " + this.show);
    }
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Abel");
@import url("https://fonts.googleapis.com/css?family=Roboto:300");

html {
  overflow-y: hidden;
}

.title {
  font-family: "Abel", sans-serif;
}

#app,
pre {
  font-family: "Roboto";
}

.router-anim-enter-active,
.router-anim-leave-active {
  transition: opacity 0.5s;
}
.router-anim-enter,
.router-anim-leave-to {
  opacity: 0;
}

.loading-anim-enter-active,
.loading-anim-leave-active {
  transition: opacity 0.5s;
}
.loading-anim-enter,
.loading-anim-leave-to {
  opacity: 0;
}
</style>
