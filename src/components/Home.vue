<template>
  <div>
    <a-scene>
      <a-cylinder position="0 0 0" radius="20" height="0" color="#FFC65D"></a-cylinder>

      <player v-for="player in players" v-bind:key="player.id" :player="player" color="#FFFFFF">
      </player>
      <a-sky color="#000000"></a-sky>
    </a-scene>

    <div id="input">
      <input v-model="inputID">
      <input v-model="inputX">
      <input v-model="inputZ">
      <v-btn flat @click.stop="push()">Push</v-btn>
      <v-btn flat @click.stop="move()">Move</v-btn>
      <v-btn flat @click.stop="remove()">Remove</v-btn>
    </div>

  </div>
</template>
<script lang="ts">
import Player from "./Player.vue";
export default {
  components: {
    Player
  },
  data: function() {
    return {
      players: [],
      inputID: "",
      inputX: "",
      inputZ: ""
    }
  },
  methods: {
    move() {
      var self = this;
      var filtered = this.players.filter(function(object: any) {
        return object.id == self.inputID;
      });
      var player = filtered[0];
      if (player != null && player != undefined) {
        player.x = Number(this.inputX);
        player.z = Number(this.inputZ);
      }
    },
    remove() {
      var self = this;
      var filtered = this.players.filter(function(object: any) {
        return object.id == self.inputID;
      });
      var player = filtered[0];
      if (player != null && player != undefined) {
        this.players.splice(this.players.indexOf(player), 1)
      }
    },
    push() {
      var self = this;
      var filtered = this.players.filter(function(object: any) {
        return object.id == self.inputID;
      });
      var player = filtered[0];

      if (player == null || player == undefined) {
        this.players.push({
          id: this.inputID,
          name: this.inputID,
          x: this.inputX,
          z: this.inputZ
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 100%;
  max-width: 100%;
  top: 50%;
  transform: translateY(-50%);
}

.logos-container {
  display: flex;
  .logo {
    margin: 20px auto;
    height: 100px;
  }
}

#input {
  position: absolute;
  z-index: 20;
  top: 0px;
  background-color: #FFFFFF;
}
</style>