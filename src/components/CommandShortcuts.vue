<script setup lang="ts">
// Scripts for the component
import { resolveResource } from '@tauri-apps/api/path';
import { readTextFile } from '@tauri-apps/api/fs';
import { sanitizedWriteToPty } from '../composables/terminal';

import CommandShortcutWithInput from './CommandShortcutWithInput.vue';

// const resourcePath = await resolveResource('resources/command_shortcuts.json');
// const parsedData = JSON.parse(await readTextFile(resourcePath))
</script>

<template>
  <div class="container">
    <!-- HTML elements for the component -->
    <button @click="sanitizedWriteToPty('pwd\n')">(pwd) Where am I?</button>
    <button @click="sanitizedWriteToPty('clear\n')">(clear) Clear terminal</button>
    <button @click="sanitizedWriteToPty('ls\n')">(ls) List content of current folder</button>
    <CommandShortcutWithInput action_title="(cd) Change directory" input_placeholder="Enter name of a folder"
      command_to_execute="cd &VAR" />
    <button @click="sanitizedWriteToPty('cd ..\n')">(cd ..) Fall back to previous folder</button>
    <CommandShortcutWithInput action_title="(rm -rf) Delete" input_placeholder="Enter name of file / folder"
      command_to_execute="rm -rf &VAR" />
    <CommandShortcutWithInput action_title="(touch) Create" input_placeholder="Enter name of file"
      command_to_execute="touch &VAR" />
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