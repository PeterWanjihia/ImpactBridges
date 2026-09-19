<script setup lang="ts">
useSeoMeta({
  title: 'Donate',
  description:
    'Help Impact Bridge launch the next 10 learning hubs. Payments are not live on this site yet.',
})
</script>

<template>
  <LayoutInnerPage
    eyebrow="Donate"
    title="Fund the next classroom."
    lede="The current campaign is to launch 10 learning hubs. We will not take card details on a form that is not connected."
  >
    <p>
      The public figure on the homepage is the campaign position as
      currently stated: £18,450 raised of a £30,000 goal, with 6 hubs
      funded so far.
    </p>

    <p>
      Online giving is not wired on this site yet. If you want to give
      now, use the contact page and we will tell you the live method —
      not a placeholder that pretends to charge you.
    </p>

    <div class="actions">
      <NuxtLink
        to="/contact"
        class="button button--primary"
      >
        Ask how to give
      </NuxtLink>

      <NuxtLink
        to="/donate-equipment"
        class="button button--outline"
      >
        Donate equipment instead
      </NuxtLink>
    </div>
  </LayoutInnerPage>
</template>
