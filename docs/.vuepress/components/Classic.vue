<script setup lang="ts">
interface Props {
  title?: string;
  content?: string;
  description?: string;
  link?: string;

  author?: string;
  authorLink?: string;
}
withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="hint-container classic font-classic">
    <div class="header">
      <span class="title">
        <component :is="link ? 'a' : 'p'" href="{{ link }}" target="_blank">
          <slot name="title">
            <p>{{ title }}</p>
          </slot>
        </component>
      </span>
      <span class="author">
        <component
          :is="link ? 'a' : 'p'"
          href="{{ authorLink }}"
          target="_blank"
        >
          <slot name="author">
            <p>{{ author }}</p>
          </slot>
        </component>
      </span>
    </div>
    <span class="content">
      <slot>
        <p>{{ content }}</p>
      </slot>
    </span>
    <span class="description">
      <slot name="description">
        <p>{{ description }}</p>
      </slot>
    </span>
  </div>
</template>

<style scoped lang="scss">
.classic {
  -webkit-font-smoothing: subpixel-antialiased;

  .title,
  .author,
  .description {
    margin: 0;
    font-size: 1rem;
    display: flex;
    align-items: center;

    * {
      margin: 2px;
    }

    p {
      margin: 0;
      line-height: normal;
    }

    & + span {
      padding-left: 1em;
    }
  }

  .title,
  .description {
    opacity: 0.45;
  }

  .content {
    font-size: 1.45rem;
  }

  .header {
    display: flex;
    margin: 2px;
  }
}
</style>
