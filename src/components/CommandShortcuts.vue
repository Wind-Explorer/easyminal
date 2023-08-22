<script setup lang="ts">
// Scripts for the component
import { resolveResource } from '@tauri-apps/api/path';
import { readTextFile } from '@tauri-apps/api/fs';

import CommandShortcut from './CommandShortcut.vue';

const command_shortcuts_json = await resolveResource('resources/command_shortcuts.json');
const command_shortcuts_data = JSON.parse(await readTextFile(command_shortcuts_json))
</script>

<template>
  <div class="container">
    <!-- HTML elements for the component -->
    <div class="command-shortcuts" v-for="command in command_shortcuts_data.commands ">
      <CommandShortcut :action_title="command.title" :input_placeholder="command.input_instructions"
        :command_to_execute="command.command['darwin']" />
    </div>
  </div>
</template>

<style scoped>
/* CSS styles for the component */
.container {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  gap: 10px;
}
</style>