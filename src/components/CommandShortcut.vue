<script setup lang="ts">
import { ref } from 'vue';
import { sanitizedWriteToPty } from '../composables/terminal';

// Scripts for the component
const props = defineProps({
  action_title: String,
  input_placeholder: String,
  command_to_execute: String
});

let user_input = ref('');
let executable_command = props.command_to_execute;

if (!props.input_placeholder && !(props.command_to_execute as string).includes("&VAR")) {
  executable_command += "\n";
}
</script>

<template>
  <div class="container">
    <!-- HTML elements for the component -->
    <input type="text" v-model="user_input" :placeholder="input_placeholder" :hidden="input_placeholder == null" />
    <button @click="() => {
      sanitizedWriteToPty((executable_command as string)
        .replace('&VAR', user_input));
      user_input = '';
    }" :disabled="user_input.length <= 0 && input_placeholder != null">
      {{ action_title }}
    </button>
  </div>
</template>

<style scoped>
/* CSS styles for the component */
.container {
  display: flex;
  flex-direction: row;
  gap: 4px !important;
  padding: 2px;
  border-radius: var(--universal-border-radius);
  border: 1px solid var(--border-color);
  background-color: var(--border-color);
}
</style>