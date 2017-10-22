<template>
  <a-box color="#FFFFFF" :position="{x: player.x, y: 0.5, z: player.z}">
    <a-text color="#DD0000" height="0.5" position="0 0.8 0" rotation="0 180 0" :value="player.name" align="center"></a-text>
    <a-text color="#DD0000" height="0.5" position="0 0.8 0" rotation="0 0 0" :value="player.name" align="center"></a-text>
  </a-box>
</template>

<script lang="ts">
export default {
  props: {
    player: {
      id: String,
      name: String,
      x: Number,
      z: Number
    }
  },
  created: function() {
    console.log("Player created!!")
  }
}
</script>

<style>

</style>
