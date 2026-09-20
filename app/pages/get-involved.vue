<script setup lang="ts">
useSeoMeta({
  title: 'Get involved',
  description:
    'Give as an individual or partner as a company to fund offline learning hubs.',
})
</script>

<template>
  <LayoutInnerPage
    eyebrow="Get involved"
    title="Two ways to build brighter futures."
    lede="Different ways to give. A shared belief in what is possible."
  >
    <h2>Give as an individual</h2>
    <p>
      One-time or monthly giving. Direct classroom support. We will issue
      a receipt when payments are live.
    </p>

    <h2>Partner as a company</h2>
    <p>
      Fund or sponsor learning hubs, donate suitable technology, or build
      a longer partnership with reporting attached.
    </p>

    <div class="actions">
      <NuxtLink
        to="/donate"
        class="button button--primary"
      >
        Give personally
      </NuxtLink>

      <NuxtLink
        to="/corporate-partnerships"
        class="button button--outline"
      >
        Start a corporate partnership
      </NuxtLink>
    </div>
  </LayoutInnerPage>
</template>
