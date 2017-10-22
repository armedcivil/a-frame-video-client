<template>
  <a-box color="#FFFFFF" :position="{x: x, y: 0.5, z: z}">
  </a-box>
</template>

<script lang="ts">
export default {
  data: function() {
    return {
      id: "",
      name: ""
    }
  },
  props: {
    x: Number,
    z: Number
  },
  methods: {
    move(x: number, z: number) {
      this.x = x;
      this.z = z;
    }
  },
  created: function() {
    console.log("Player created!!")
  }
}
</script>

<style>

</style>
