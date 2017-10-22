<template>
  <v-app id="example-1" toolbar footer>
    <navigation></navigation>
    <main>
      <v-container fluid class="content" style="padding:0px;">
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>
<script lang="ts">
import Navigation from './Navigation.vue';
export default {
  components: {
    Navigation
  }
}
</script>