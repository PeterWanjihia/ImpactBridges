<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  lede: string
}>()
</script>

<template>
  <main
    id="main"
    class="inner-page"
  >
    <header class="container inner-page__header">
      <p class="eyebrow">
        {{ eyebrow }}
      </p>

      <h1 class="inner-page__title">
        {{ title }}
      </h1>

      <p class="inner-page__lede">
        {{ lede }}
      </p>
    </header>

    <div class="container inner-page__body">
      <slot />
    </div>
  </main>
</template>

<style scoped>
.inner-page {
  min-height: calc(100dvh - 72px);

  padding: 56px 0 88px;

  background: var(--color-white);
}

.inner-page__header {
  max-width: 760px;

  margin-inline: auto;

  padding-bottom: 32px;
}

.inner-page__title {
  margin-top: 12px;

  font-size: clamp(2rem, 4vw, 3.15rem);

  line-height: 1.02;
}

.inner-page__lede {
  max-width: 40rem;

  margin-top: 16px;

  color: var(--color-text-secondary);

  font-size: var(--text-lede);

  line-height: 1.55;
}

.inner-page__body {
  max-width: 760px;

  margin-inline: auto;

  display: grid;

  gap: 18px;

  color: var(--color-text-secondary);

  font-size: var(--text-body);

  line-height: 1.7;
}

.inner-page__body :deep(h2) {
  margin-top: 12px;

  font-size: 1.5rem;
}

.inner-page__body :deep(ul),
.inner-page__body :deep(ol) {
  padding-left: 1.15rem;

  display: grid;

  gap: 8px;
}

.inner-page__body :deep(ul) {
  list-style: disc;
}

.inner-page__body :deep(ol) {
  list-style: decimal;
}

.inner-page__body :deep(a:not(.button)) {
  color: var(--color-blue-600);

  font-weight: 650;
}

.inner-page__body :deep(a:not(.button):hover) {
  text-decoration: underline;
}

.inner-page__body :deep(.actions) {
  display: flex;
  flex-wrap: wrap;

  gap: 10px;

  margin-top: 8px;
}
</style>
