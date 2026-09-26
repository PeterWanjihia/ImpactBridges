<script setup lang="ts">
useSeoMeta({
  title: 'Donate',
  description:
    'Fund the next classroom. Choose a gift for Impact Bridge. Card, crypto and bank checkout are not connected on this site yet.',
  ogTitle: 'Fund the next classroom — Impact Bridge',
  ogDescription:
    'Help bring offline learning resources, prepared teachers and ongoing support to schools.',
})
</script>

<template>
  <main
    id="main"
    class="donate-page"
  >
    <DonateHero />
    <DonateRails />
    <DonateCrypto />
    <DonateCampaign />
    <DonateFaq />
    <DonateFinalCta />
  </main>
</template>

<style scoped>
.donate-page {
  background: var(--color-white);
}
</style>
