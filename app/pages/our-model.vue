<script setup lang="ts">
useSeoMeta({
  title: 'Our model',
  description:
    'A five-step model: offline hub, trained teacher, engaged classroom, confident learners, stronger communities.',
})
</script>

<template>
  <LayoutInnerPage
    eyebrow="Our model"
    title="A simple model. Lasting change."
    lede="From access to opportunity — a community-driven approach that does not depend on continuous internet."
  >
    <ol>
      <li>
        <strong>Offline learning hub.</strong>
        Local curriculum and resources without a live connection.
      </li>
      <li>
        <strong>Trained teacher.</strong>
        A supported teacher leads and maintains the programme.
      </li>
      <li>
        <strong>Engaged classroom.</strong>
        Lessons become interactive and collaborative.
      </li>
      <li>
        <strong>Confident learners.</strong>
        Understanding, participation and confidence improve.
      </li>
      <li>
        <strong>Stronger communities.</strong>
        Local ownership sustains educational access.
      </li>
    </ol>

    <div class="actions">
      <NuxtLink
        to="/#our-model"
        class="button button--outline"
      >
        See it on the homepage
      </NuxtLink>

      <NuxtLink
        to="/corporate-partnerships"
        class="button button--primary"
      >
        Partner with us
      </NuxtLink>
    </div>
  </LayoutInnerPage>
</template>
