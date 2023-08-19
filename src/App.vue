<script setup lang="ts">
// Scripts for the component
import Terminal from "./components/Terminal.vue"
</script>

<template>
  <div class="container">
    <!-- HTML elements for the component -->
    <div class="terminal-div">
      <Terminal class="terminal" />
    </div>
  </div>
</template>

<style scoped>
/* CSS styles for the component */
.terminal-div {
  height: 100vh;
}

.terminal {
  height: 100%;
}
</style>