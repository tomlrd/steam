<template>
  <v-container fluid pa-0 bg>
    <v-layout fill-height column align-center="true" pb-5 pt-1 :class="{ 'blue-layer': blueLayer, 'black-layer': blackLayer }">

    <v-layout justify-end style="align-items:flex-start;width:100%;">
      <v-icon size="10" color="white">mdi-window-minimize</v-icon>
      <v-icon size="10" color="white" class="mx-2">mdi-close</v-icon>
    </v-layout>

    <transition name="slide-fade" v-if="init" appear>
          <v-flex class="text-xs-center" mt-5 style="height:120px;">
            <v-icon size="60" color="white" class="icon-shadow1">mdi-steam</v-icon>
            <p class="white--text title mt-2 text-shadow1">Welcome to STEAM</p>
            <transition name="messages-fade" mode="out-in">
                <pre class="white--text text-xs-center mb-3" :is="view" style="text-transform:uppercase;font-size:10px;"></pre> 
              </transition>
          </v-flex>
      </transition>

    <transition name="slide-fade" v-if="init" appear>

        <v-flex>
          <v-form>
              <v-flex mb-2>
                <v-text-field
                v-bind:disabled="view === 'connect'"
                placeholder="Username"
                type="text"
                solo-inverted
                prepend-icon="mdi-account"
                dark>
                </v-text-field>
              </v-flex>

              <v-flex mt-2>
                <v-text-field
                v-bind:disabled="view === 'connect'"
                placeholder="Password"
                type="password"
                solo-inverted
                prepend-icon="mdi-key-variant"
                dark>
                </v-text-field>
              </v-flex>

              <v-flex mt-2 v-if="sign">
                <v-text-field
                v-bind:disabled="view === 'connect'"
                placeholder="E-mail"
                type="mail"
                solo-inverted
                prepend-icon="mdi-email"
                dark>
                </v-text-field>
              </v-flex>
          </v-form>

          <v-flex d-flex justify-space-between="true" mt-2>
            <v-btn color="blue-grey lighten-1" class="mx-0 my-0" v-if="welcome" @click="connect()" :disabled="view === 'connect'" to="/Main">connect</v-btn>
            <v-btn color="blue-grey lighten-1" class="mx-0 my-0" v-if="!welcome" @click="back()">back</v-btn>
            <v-spacer></v-spacer>
            <v-btn outline color="blue-grey lighten-1" class="mx-0 my-0" @click="signin()" v-bind:disabled="view === 'connect'">sign in</v-btn>
          </v-flex>
          <p class="blue-grey--text text--lighten-1 text-xs-center caption mt-2" style="cursor:pointer;" @click="forgotpsw()">I forgot my password</p>
        </v-flex>
      </transition>


    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      welcome: true,
      blueLayer: true,
      blackLayer: false,
      view: "welcome",
      connecting: false,
      init: false,
      sign: false
    };
  },
  components: {
    welcome: {
      template: `<pre>login and start gaming!</pre>`
    },
    psw: {
      template: `<pre>this is just a demo
type anything and click connect</pre>`
    },
    connect: {
      template: `<pre>connection...</pre>`
    },
    sign: {
      template: `<pre>ready to join the family ?</pre>`
    }
  },
  /*   filters: {
    uppercase: function (value) {
      return value.toUpperCase()
    }
  }, */
  methods: {
    forgotpsw() {
      this.view = "psw";
    },
    connect() {
      (this.view = "connect"),
        (this.blueLayer = false),
        (this.blackLayer = true),
        (this.class1 = true);
    },
    signin() {
      (this.view = "sign"), (this.sign = true), (this.welcome = false);
    },
    back() {
      (this.view = "welcome"), (this.welcome = true), (this.sign = false);
    }
  },
  mounted: function() {
    setTimeout(() => {
      this.init = true;
    }, 1000);
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

.bg {
  background: url("~@/assets/cs.jpg") no-repeat center fixed;
  background-size: cover;
}
.blue-layer {
  background: linear-gradient(to bottom, rgba(0, 100, 138, 0.82), rgb(0, 0, 0));
}
.black-layer {
  background: linear-gradient(to bottom, rgba(0, 39, 55, 0.82), rgb(0, 0, 0));
}
.all-fade-enter,
.all-fade-leave-to {
  opacity: 0;
}
.all-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter-active,
.all-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 1.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.input-group--disabled {
  opacity: 0.5;
}
.messages-fade-leave-active {
  transition: all 0.5s cubic-bezier(0, 0.09, 0.25, 1.05);
  opacity: 0;
}
.messages-fade-enter-active {
  transition: all 0.5s cubic-bezier(0, 0.09, 0.25, 1.05);
  opacity: 1;
}
.messages-fade-leave-to {
  transform: translateX(50px);
}
.messages-fade-enter {
  transform: translateX(-50px);
  opacity: 0;
}
.text-shadow1 {
  text-shadow: 1px 1px 4px #000000;
}
.icon-shadow1 {
  text-shadow: 0px 0px 10px #000000;
}
</style>