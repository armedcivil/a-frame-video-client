<template>
  <div>
    <a-scene>
      <a-cylinder position="0 0 0" radius="20" height="0" color="#FFC65D"></a-cylinder>

      <player v-for="player in players" v-bind:key="player.id" :x="player.x" :z="player.z" color="#FFFFFF">
      </player>
      <a-sky color="#000000"></a-sky>
    </a-scene>

    <div id="input">
      <input v-model="inputID">
      <input v-model="inputX">
      <input v-model="inputZ">
      <v-btn flat @click.stop="input()">Push</v-btn>
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
    input() {
      var self = this;
      var filtered = this.players.filter(function(object: any) {
        return object.id == self.inputID;
      });
      var player = filtered[0];
      if (player != null && player != undefined) {
        console.log("x:" + this.inputX + " z:" + this.inputZ)
        player.x = Number(this.inputX);
        player.z = Number(this.inputZ);
      }
    }
  },
  created: function() {
    this.players = [];
    for (var i: number = 0; i < 21; i++) {
      var num = i - 10;
      this.players.push({
        id: "hoge" + i,
        name: "hogeName" + i,
        x: num,
        z: num
      });
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
}
</style>