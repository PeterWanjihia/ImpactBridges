<script setup lang="ts">
useSeoMeta({
  title: 'Corporate partnerships',
  description:
    'Fund learning hubs, donate suitable technology, or build a reported partnership with Impact Bridge.',
})
</script>

<template>
  <LayoutInnerPage
    eyebrow="Corporate partnerships"
    title="Work with us to expand access to learning."
    lede="Companies can fund hubs, donate suitable devices, or bring staff time. We will not invent a glossy pack we have not written."
  >
    <p>
      A partnership with Impact Bridge should do one of three things well:
      put a hub in a school, put usable technology in that hub, or keep a
      teacher supported after the launch day.
    </p>

    <ul>
      <li>Fund or sponsor learning hubs</li>
      <li>Donate suitable technology under our guidelines</li>
      <li>Employee giving and volunteering</li>
      <li>Strategic partnerships with reporting</li>
    </ul>

    <p>
      The downloadable partnership pack is not published on this site yet.
      Until it is, start with a conversation through the contact page.
    </p>

    <div class="actions">
      <NuxtLink
        to="/contact"
        class="button button--primary"
      >
        Contact us
      </NuxtLink>

      <NuxtLink
        to="/donate-equipment"
        class="button button--outline"
      >
        Equipment guidelines
      </NuxtLink>
    </div>
  </LayoutInnerPage>
</template>
