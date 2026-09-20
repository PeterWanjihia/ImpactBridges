<script setup lang="ts">
useSeoMeta({
  title: 'Resources',
  description:
    'Curriculum-aligned learning resources that live on Impact Bridge hubs — even without the internet.',
})
</script>

<template>
  <LayoutInnerPage
    eyebrow="Resources"
    title="The content library is not on this site yet."
    lede="Hubs carry thousands of curriculum-aligned resources offline. This page is a placeholder until that library can be explored here."
  >
    <p>
      The model includes mathematics, science, literacy, simulations,
      teacher guides, and locally relevant material. Those files live on
      the hub, not behind this URL.
    </p>

    <p>
      When a public catalogue exists, it will be listed here by subject.
      Until then, the honest path is the model itself.
    </p>

    <div class="actions">
      <NuxtLink
        to="/our-model"
        class="button button--outline"
      >
        Our model
      </NuxtLink>

      <NuxtLink
        to="/contact"
        class="button button--primary"
      >
        Ask about content
      </NuxtLink>
    </div>
  </LayoutInnerPage>
</template>
