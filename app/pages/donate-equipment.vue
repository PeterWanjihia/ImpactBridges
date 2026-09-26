<script setup lang="ts">
useSeoMeta({
  title: 'Donate equipment',
  description:
    'Offer suitable computers, displays and hub equipment. Do not ship anything before Impact Bridge approves it.',
  ogTitle: 'Donate equipment — Impact Bridge',
  ogDescription:
    'Turn suitable technology into supported learning. Approval comes before any shipment.',
})
</script>

<template>
  <main
    id="main"
    class="equipment-page"
  >
    <EquipmentHero />
    <EquipmentNeeds />
    <EquipmentJourney />
    <EquipmentRules />
    <EquipmentDonors />
    <EquipmentOffer />
    <EquipmentAsk />
  </main>
</template>

<style scoped>
.equipment-page {
  background: var(--color-white);
}
</style>
