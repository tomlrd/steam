<template>
<v-container pa-0 fluid fill-height style="background-color:#424242;align-items:flex-start;">
  <v-expansion-panel  dark expand>
  <v-flex xs12 sm8>

    <today></today>
    <yesterday></yesterday>
  </v-flex>

  </v-expansion-panel>
</v-container>

</template>

<script>
export default {
  name: "home",
  data() {
    return {
      isActive: true
    };
  },
  components: {
    today: {
      template: `<v-expansion-panel-content :value="true" class="nobox" expand-icon="mdi-chevron-down">
          <div slot="header">{{title}}</div>
          <v-card>
            <v-card-text class="grey darken-4">
            <socialbuy class="socialbuy"></socialbuy>
            <socialchat class="socialchat"></socialchat>
            <update class="update"></update>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>`,
      data() {
        return {
          title: "Today",
          isActive: true
        };
      },
      components: {
        socialbuy: {
          template:
            '<div><p v-for="buy in buys"><span class="nickname">{{buy.friend}}</span> bought <span class="game">{{buy.game}}</span></p></div>',
          data() {
            return {
              buys: [
                {
                  friend: "sTylow",
                  game: "Counter Strike : Global Offensive"
                },
                {
                  friend: "Steveed",
                  game: "Portal 2"
                }
              ]
            };
          }
        },
        socialchat: {
          template:
            '<div><p v-for="chat in chats"><span class="nickname">{{chat.friend}}</span> send you a message</p></div>',
          data() {
            return {
              chats: [
                {
                  friend: "KennyS"
                }
              ]
            };
          }
        },
        update: {
          template:
            '<div><p v-for="game in update"><span class="game">{{game.game}}</span> have a new update</p></div>',
          data() {
            return {
              update: [
                {
                  game: "Left 4 Dead 2"
                },
                {
                  game: "Warframe"
                }
              ]
            };
          }
        }
      }
    },
    yesterday: {
      template: `<v-expansion-panel-content :value="true" expand-icon="mdi-chevron-down">
          <div slot="header">{{title}}</div>
          <v-card>
            <v-card-text class="grey darken-4">
            <socialbuy class="socialbuy"></socialbuy>
            <socialchat class="socialchat"></socialchat>
            <update class="update"></update>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>`,
      data() {
        return {
          title: "Yesterday"
        };
      },
      components: {
        socialbuy: {
          template:
            '<div><p v-for="buy in buys"><span class="nickname">{{buy.friend}}</span> bought <span class="game">{{buy.game}}</span></p></div>',
          data() {
            return {
              buys: [
                {
                  friend: "Mary",
                  game: "Mirror's Edge"
                }
              ]
            };
          }
        },
        socialchat: {
          template:
            '<div v-show="!chats"><p v-for="chat in chats"><span class="nickname">{{chat.friend}}</span> send you a message</p></div>',
          data() {
            return {
              chats: [{}]
            };
          }
        },
        update: {
          template:
            '<div><p v-for="game in update"><span class="game">{{game.game}}</span> have a new update</p></div>',
          data() {
            return {
              update: [
                {
                  game: "Team Fortress 2"
                }
              ]
            };
          }
        }
      }
    }
  }
};
</script>

<style scopped>
.socialbuy,
.socialchat,
.update {
  padding: 20px;
  font-size: 11px;
}
.socialbuy {
  border-bottom: 1px dotted #263238;
}
.socialchat {
  border-bottom: 1px dotted #263238;
}

.nickname {
  color: #0288d1;
}
.game {
  color: #90caf9;
}
.game,
.nickname {
  cursor: pointer;
  font-size: larger;
}
.expansion-panel {
  border: none;
  box-shadow: none;
}
</style>
