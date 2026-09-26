<script setup lang="ts">
useSeoMeta({
  title: 'Our story',
  description:
    'How Impact Bridge began: an offline learning system for classrooms in Uganda, from the first hub at Our Lady Seat of Wisdom to the next ten.',
  ogTitle: 'Our story — Impact Bridge',
  ogDescription:
    'Potential is everywhere. Access is not. The story of the first offline learning hub, and what the pilot taught us.',
})
</script>

<template>
  <main
    id="main"
    class="about-page"
  >
    <AboutSubnav />
    <AboutHero />
    <AboutReality />
    <AboutQuestion />
    <AboutSolution />
    <AboutFirstClassroom />
    <AboutPilotLessons />
    <AboutVoices />
    <AboutJourney />

    <section class="about-close">
      <div class="container about-close__grid">
        <AboutPeople />
        <AboutSupport />
        <AboutBeliefs />
      </div>
    </section>

    <AboutFinalCta />
  </main>
</template>

<style scoped>
.about-page {
  background: var(--color-white);
}

.about-close {
  padding: 72px 0;

  background: var(--color-white);
}

.about-close__grid {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 18px;

  align-items: stretch;
}

@media (max-width: 1000px) {
  .about-close__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .about-close {
    padding: 48px 0;
  }
}
</style>
