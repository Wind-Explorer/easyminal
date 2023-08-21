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
</script>

<template>
  <div class="container">
    <!-- HTML elements for the component -->
    <input type="text" v-model="user_input" :placeholder="input_placeholder" />
    <button @click="() => {
      sanitizedWriteToPty((props.command_to_execute as string)
        .replace('&VAR', user_input));
      user_input = '';
    }">
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