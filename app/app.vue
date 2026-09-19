<script setup lang="ts">
useHead({
  titleTemplate: (title) =>
    title && title !== 'Impact Bridge'
      ? `${title} · Impact Bridge`
      : 'Impact Bridge',
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

    <NuxtPage />

    <LayoutSiteFooter />
  </div>
</template>
