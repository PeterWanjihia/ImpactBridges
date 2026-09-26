<script setup lang="ts">
useSeoMeta({
  title: 'Accountability',
  description:
    'How Impact Bridge is governed, how 2024 funds were used, and who the trustees are.',
  ogTitle: 'Accountability — Impact Bridge',
  ogDescription:
    'Clear about what we do. Accountable in how we do it.',
})
</script>

<template>
  <main
    id="main"
    class="account-page"
  >
    <AccountabilityHero />
    <AccountabilitySpending />
    <AccountabilityTrustees />
    <AccountabilityGovernance />
    <AccountabilityGlance />
    <AccountabilitySubscribe />
  </main>
</template>

<style scoped>
.account-page {
  background: var(--color-white);
}
</style>
