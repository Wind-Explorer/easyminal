<script setup lang="ts">
// Scripts for the component
</script>

<template>
  <div class="container">
    <!-- HTML elements for the component -->
    <RouterView v-slot="{ Component }">
      <Transition name="slide" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </RouterView>
  </div>
</template>

<style scoped>
/* CSS styles for the component */
.slide-enter-active,
.slide-leave-active {
  transition: 0.2s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: scale(1.04);
  filter: blur(1px);
  -webkit-filter: blur(1px);
}
</style>