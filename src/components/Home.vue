<template>
  <div>
    <a-scene>
      <a-cylinder position="0 0 0" radius="20" height="0" color="#FFC65D"></a-cylinder>
      <a-box :position="{x: x, y: y, z: z}" color="#FFFFFF"></a-box>
      <a-sky color="#000000"></a-sky>
    </a-scene>

    <v-btn flat @click.stop="random()" style="position:absolute; z-index:20; top:0px;">Push</v-btn>

  </div>
</template>
<script lang="ts">
export default {
  data: function() {
    return {
      x: 0,
      y: 0.5,
      z: 0
    }
  },
  methods: {
    random() {
      console.log("random clicked")
      this.x = Math.random();
      this.z = Math.random();
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
</style>