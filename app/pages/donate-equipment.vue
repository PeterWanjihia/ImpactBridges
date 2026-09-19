<script setup lang="ts">
useSeoMeta({
  title: 'Equipment donation guidelines',
  description:
    'Only send devices that can actually serve a classroom. Unsuitable hardware is a cost, not a gift.',
})
</script>

<template>
  <LayoutInnerPage
    eyebrow="Equipment"
    title="Donate technology that can be used."
    lede="A crate of broken laptops is not a donation. It is a disposal problem for a school."
  >
    <p>
      We accept equipment when it is suitable for classroom use, in
      working condition, and possible to support locally. If we cannot
      say yes to those three, we will say no.
    </p>

    <ul>
      <li>Working devices only — not e-waste</li>
      <li>Appropriate for learners and teachers, not specialist kit nobody can maintain</li>
      <li>Chargers, power, and basic documentation included where they exist</li>
      <li>A conversation first, so we do not ship hardware into a school that cannot use it</li>
    </ul>

    <p>
      Full model-by-model guidelines are not published here yet. Contact
      us before you send anything.
    </p>

    <div class="actions">
      <NuxtLink
        to="/contact"
        class="button button--primary"
      >
        Contact us first
      </NuxtLink>
    </div>
  </LayoutInnerPage>
</template>
