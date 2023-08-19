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
:root {
  --module-margin: 10px;
}

.terminal-div {
  position: fixed;
  left: 20px;
  right: 20px;
  top: 20px;
  bottom: 20px;
  padding: 10px;
  background-color: #2f2f2f;
  border-radius: var(--universal-border-radius);
  border: 1px solid var(--border-color);
}

.terminal {
  height: 100%;
}
</style>