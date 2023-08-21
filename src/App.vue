<script setup lang="ts">
// Scripts for the component
import Terminal from "./components/Terminal.vue"
import CommandShortcuts from "./components/CommandShortcuts.vue";
import WebSnippets from "./components/WebSnippets.vue";
</script>

<template>
  <div class="container">
    <!-- HTML elements for the component -->
    <div class="left-panel">
      <div class="command-snippets-panel">
        <div class="command-snippets-search-div">
          <input id="command-snippets-search" type="text" placeholder="Search snippets" />
        </div>
        <div class="separator"></div>
        <WebSnippets />
      </div>
    </div>
    <div class="right-panel">
      <div class="terminal-div">
        <Terminal class="terminal" />
      </div>
      <div class="shortcuts-row">
        <CommandShortcuts id="command-shortcuts" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* CSS styles for the component */
:root {
  --module-margin: 10px;
}

.container {
  display: flex;
  justify-content: stretch;
}

.right-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
  overflow: hidden;
  height: 100vh;
}

.left-panel {
  min-width: 200px;
}

.terminal-div {
  position: relative;
  padding: 20px;
  background-color: #2f2f2f;
  height: calc(100% - 110px);
  border-left: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  border-bottom-left-radius: var(--universal-border-radius);
}

.terminal {
  height: 100%;
}

.shortcuts-row {
  position: relative;
  overflow: scroll;
  white-space: nowrap;
  padding-bottom: 10px;
}

.command-snippets-panel {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
}

.command-snippets-panel button {
  text-align: left;
}

#command-snippets-search {
  min-width: 0;
  width: calc(100% - 25px);
}

.separator {
  height: 1px;
  background-color: var(--border-color);
}
</style>