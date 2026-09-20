<script setup lang="ts">
useSeoMeta({
  title: 'Safeguarding',
  description:
    'Impact Bridge’s commitment to child safety and a route for complaints.',
})
</script>

<template>
  <LayoutInnerPage
    eyebrow="Safeguarding"
    title="Child safety is not a footer link."
    lede="Anyone working with us around children is expected to treat safeguarding as the job, not a policy PDF."
  >
    <p>
      The full safeguarding policy is not uploaded here yet. Until it is,
      raise a concern through the contact page. We would rather hear an
      awkward message than miss a real one.
    </p>

    <div class="actions">
      <NuxtLink
        to="/contact"
        class="button button--primary"
      >
        Contact us
      </NuxtLink>
    </div>
  </LayoutInnerPage>
</template>
