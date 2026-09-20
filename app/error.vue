<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const isMissing = computed(() => props.error.statusCode === 404)

useSeoMeta({
  title: isMissing.value ? 'Page not found' : 'Something went wrong',
})
</script>

<template>
  <div id="top">
    <a
      href="#main"
      class="skip-link"
    >
      Skip to content
    </a>

    <SiteHeader />

    <main
      id="main"
      class="error-page"
    >
      <div class="container error-page__inner">
        <p class="eyebrow">
          {{ error.statusCode || 'Error' }}
        </p>

        <h1>
          {{ isMissing ? 'This page is not here.' : 'Something went wrong.' }}
        </h1>

        <p>
          {{
            isMissing
              ? 'The link may be old, or the page has not been published yet.'
              : 'The site hit a problem loading this view.'
          }}
        </p>

        <div class="actions">
          <NuxtLink
            to="/"
            class="button button--primary"
          >
            Back to the homepage
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="button button--outline"
          >
            Contact
          </NuxtLink>
        </div>
      </div>
    </main>

    <LayoutSiteFooter />
  </div>
</template>

<style scoped>
.error-page {
  padding: 72px 0 96px;

  background: var(--color-white);
}

.error-page__inner {
  max-width: 640px;
}

.error-page h1 {
  margin-top: 12px;

  font-size: clamp(2rem, 4vw, 3.15rem);
}

.error-page p {
  margin-top: 16px;

  font-size: var(--text-lede);
}

.actions {
  display: flex;
  flex-wrap: wrap;

  gap: 10px;

  margin-top: 28px;
}
</style>
