<script setup lang="ts">
useSeoMeta({
  title: 'Namulava’s story',
  description:
    'Namulava is a P7 student at Bwikya Primary School in the Kiryandongo District pilot.',
})
</script>

<template>
  <LayoutInnerPage
    eyebrow="Stories"
    title="“I feel like I can now finish my schooling.”"
    lede="Namulava, P7 student, Bwikya Primary School."
  >
    <p>
      Namulava is part of our pilot at Bwikya Primary School. With offline
      lessons and a supportive teacher, she is gaining the confidence to
      learn and lead.
    </p>

    <p>
      We are not padding this page with a biography we do not have. When
      Namulava and her school want more of her story in public, it will
      go here.
    </p>

    <div class="actions">
      <NuxtLink
        to="/stories"
        class="button button--outline"
      >
        All stories
      </NuxtLink>

      <NuxtLink
        to="/donate"
        class="button button--primary"
      >
        Fund the next classroom
      </NuxtLink>
    </div>
  </LayoutInnerPage>
</template>
