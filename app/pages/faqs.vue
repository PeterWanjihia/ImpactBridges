<script setup lang="ts">
useSeoMeta({
  title: 'FAQ',
  description: 'Short answers about Impact Bridge’s model, giving, and equipment.',
})
</script>

<template>
  <LayoutInnerPage
    eyebrow="FAQ"
    title="Common questions."
    lede="Short answers. If a longer policy exists, we link it."
  >
    <h2>Do hubs need the internet?</h2>
    <p>
      No. The point of the model is offline-first learning. Connectivity
      should not decide who gets a lesson.
    </p>

    <h2>Can I donate a laptop today?</h2>
    <p>
      Only if it is suitable and working.
      Read the
      <NuxtLink to="/donate-equipment">equipment guidelines</NuxtLink>
      and contact us before you ship anything.
    </p>

    <h2>Can I give money on this site?</h2>
    <p>
      Not yet. The
      <NuxtLink to="/donate">donate page</NuxtLink>
      explains why, instead of charging a card into a dummy form.
    </p>
  </LayoutInnerPage>
</template>
