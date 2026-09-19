<script setup lang="ts">
useSeoMeta({
  title: 'Transparency',
  description:
    'How Impact Bridge intends to report on money, safeguarding, and results.',
})
</script>

<template>
  <LayoutInnerPage
    eyebrow="Transparency"
    title="Built for responsible implementation."
    lede="If we ask for money, we owe an account of how it is used."
  >
    <p>
      Governance reports, financial statements, and safeguarding policy
      will live on this site as they are approved. We are not uploading
      placeholder PDFs with invented figures.
    </p>

    <ul>
      <li>
        <NuxtLink to="/reports">Governance and financial reports</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/safeguarding">Safeguarding and complaints</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/impact">What we can measure today</NuxtLink>
      </li>
    </ul>
  </LayoutInnerPage>
</template>
