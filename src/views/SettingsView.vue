<script setup lang="ts">
// Scripts for the component
</script>

<template>
  <div class="container">
    <!-- HTML elements for the component -->
    <div class="settings-page">
      <h1>Settings</h1>
      <div class="settings">
        <div class="settings-entry">
          <label for="web-snippets-source">Web snippets source</label>
          <input id="web-snippets-source" type="url" placeholder="https://link.to.source/snippets.json" />
        </div>
        <div class="settings-entry">
          <label for="terminal-font">Terminal font</label>
          <input id="terminal-font" type="url" placeholder="Jetbrains Mono" />
        </div>
      </div>
      <button id="back-button" v-on:click="$router.go(-1)">Done</button>
    </div>
  </div>
</template>

<style scoped>
/* CSS styles for the component */
.settings-page {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 40px;
  padding-left: 30px;
  padding-right: 30px;
  margin: 30px;
  margin-left: auto;
  margin-right: auto;
}

#back-button {
  font-size: 18px;
  padding-top: 12px;
  padding-bottom: 12px;
}

.settings {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.settings-entry {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>