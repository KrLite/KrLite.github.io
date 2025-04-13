<script setup lang="ts">
interface Props {
  link?: string;
  authorLink?: string;
}
withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="hint-container classic font-classic">
    <div v-if="$slots.title || $slots.author" class="header">
      <span v-if="$slots.title" class="title">
        <a v-if="link" :href="link" target="_blank">
          <slot name="title" />
        </a>
        <slot v-else name="title" />
      </span>
      <span v-if="$slots.author" class="author">
        <a v-if="authorLink" :href="authorLink" target="_blank">
          <slot name="author" />
        </a>
        <slot v-else name="author" />
      </span>
    </div>

    <div v-if="$slots.default" class="content">
      <slot />
    </div>

    <div v-if="$slots.description" class="description">
      <slot name="description" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.classic {
  -webkit-font-smoothing: subpixel-antialiased;

  .title,
  .author,
  .description {
    font-size: 0.9rem;
    display: flex;
    align-items: center;

    * {
      margin: 0 2px;
    }

    p {
      margin: 0;
      line-height: normal;
    }

    a::after {
      display: none;
    }

    & + span {
      padding-left: 1em;
    }
  }

  .title,
  .author,
  .description {
    opacity: 0.45;
    transition: opacity var(--vp-t-color);

    &:hover {
      opacity: 1;
    }
  }

  .content {
    font-size: 1.45rem;
    padding: 16px 0;

    text-shadow: 0 2.5px 1.75em var(--vp-c-classic-2);
  }

  .header {
    padding-top: 10px;
    display: flex;
  }

  .description {
    padding-bottom: 10px;
  }
}
</style>
