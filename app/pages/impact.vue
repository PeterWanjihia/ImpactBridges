<script setup lang="ts">
useSeoMeta({
  title: 'Impact',
  description:
    'Early evidence from the first Impact Bridge pilot at Our Lady Seat of Wisdom in Kansanga, Kampala, April to June 2025.',
  ogTitle: 'Early evidence — Impact Bridge',
  ogDescription:
    'One classroom. Early evidence of what could grow. Findings from the first offline learning hub.',
})
</script>

<template>
  <main
    id="main"
    class="impact-page"
  >
    <ImpactSubnav />
    <ImpactHero />
    <ImpactContext />
    <ImpactResults />
    <ImpactVoices />
    <ImpactProgramme />
    <ImpactLearning />
    <ImpactReports />
    <ImpactFinalCta />
  </main>
</template>

<style scoped>
.impact-page {
  background: var(--color-white);
}
</style>
