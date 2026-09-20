<script setup lang="ts">
useSeoMeta({
  title: 'About',
  description:
    'Impact Bridge brings offline digital learning hubs and teacher training to schools without reliable internet.',
})
</script>

<template>
  <LayoutInnerPage
    eyebrow="About"
    title="Who we are."
    lede="We exist so the internet does not decide who gets to learn."
  >
    <p>
      Impact Bridge brings offline digital learning hubs, teacher training
      and resources to schools without reliable internet. The work is
      teacher-led, locally implemented, and measured in the classroom—not
      in slogans.
    </p>

    <p>
      We started with a pilot in Kiryandongo District. The model is simple:
      a working hub, a supported teacher, and a community that can keep it
      going when the visitors leave.
    </p>

    <div class="actions">
      <NuxtLink
        to="/our-model"
        class="button button--outline"
      >
        Our model
      </NuxtLink>

      <NuxtLink
        to="/donate"
        class="button button--primary"
      >
        Donate
      </NuxtLink>
    </div>
  </LayoutInnerPage>
</template>
