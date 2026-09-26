<script setup lang="ts">
useSeoMeta({
  title: 'Stories',
  description:
    'Learners, teachers, classrooms and partners. Every Impact Bridge story is one lesson, one voice and one classroom at a time.',
  ogTitle: 'Stories — Impact Bridge',
  ogDescription:
    'Every classroom holds more than one story.',
})
</script>

<template>
  <main
    id="main"
    class="stories-page"
  >
    <StoriesHero />
    <StoriesCatalog />
    <StoriesVoices />
    <StoriesEssay />
    <StoriesPattern />
    <StoriesField />
    <StoriesFinalCta />
  </main>
</template>

<style scoped>
.stories-page {
  background: var(--color-white);
}
</style>
