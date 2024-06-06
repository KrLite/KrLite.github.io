<script setup lang="ts">
interface Props {
  title?: string;
  content?: string;

  author?: string;
  link?: string;
}
</script>

<template>
  <div class="hint-container classic twgx">
    ABC
    <h1>{{ title }}</h1>
    <slot>
      <p>{{ content }}</p>
    </slot>
    <div class="author">
      <span v-if="author">Author: {{ author }}</span>
      <a v-if="link" href="{{ link }}" target="_blank">Link</a>
    </div>
  </div>
</template>

<style scoped>
.hint-container.classic {
  background-color: var(--classic-bg-color);
}
</style>
