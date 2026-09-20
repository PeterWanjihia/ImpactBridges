<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  ratio?: string
  tone?: 'light' | 'dark'
  cover?: boolean
}>(), {
  ratio: '16 / 9',
  tone: 'light',
  cover: false,
})
</script>

<template>
  <div
    class="placeholder"
    :class="[
      `placeholder--${tone}`,
      { 'placeholder--cover': cover },
    ]"
    :style="cover ? undefined : { aspectRatio: ratio }"
    role="img"
    :aria-label="label"
  >
    <span>{{ label }}</span>
  </div>
</template>

<style scoped>
.placeholder {
  display: grid;
  place-items: center;

  overflow: hidden;

  background:
    repeating-linear-gradient(
      -45deg,
      var(--color-surface-blue) 0 12px,
      var(--color-blue-100) 12px 24px
    );

  border: 1px solid var(--color-border);

  color: var(--color-text-muted);

  font-family: var(--font-sans);
  font-size: var(--text-caption);
  font-weight: 650;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-align: center;

  padding: 16px;
}

.placeholder span {
  max-width: 16rem;

  line-height: 1.4;
}

.placeholder--dark {
  background:
    repeating-linear-gradient(
      -45deg,
      var(--color-navy-900) 0 12px,
      var(--color-navy-800) 12px 24px
    );

  border-color: rgb(255 255 255 / 0.08);

  color: rgb(255 255 255 / 0.55);
}

.placeholder--cover {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  border: 0;
}
</style>
