<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const beliefs = [
  'Access should not depend on connectivity.',
  'Teachers make technology meaningful.',
  'Communities should own the change.',
  'Evidence matters more than applause.',
  'Dignity is not negotiable.',
]
</script>

<template>
  <article
    id="beliefs"
    class="about-beliefs"
    aria-labelledby="about-beliefs-title"
  >
    <p class="eyebrow">
      What we believe
    </p>

    <h2 id="about-beliefs-title">
      The rules we will not trade.
    </h2>

    <ul>
      <li
        v-for="belief in beliefs"
        :key="belief"
      >
        {{ belief }}
      </li>
    </ul>

    <NuxtLink to="/our-model">
      Read our full beliefs

      <ArrowRight
        :size="14"
        :stroke-width="2"
        aria-hidden="true"
      />
    </NuxtLink>
  </article>
</template>

<style scoped>
.about-beliefs {
  padding: 22px;

  scroll-margin-top: 130px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.about-beliefs h2 {
  margin-top: 10px;

  font-size: clamp(1.45rem, 2vw, 1.8rem);

  line-height: 1.12;
}

.about-beliefs ul {
  margin-top: 18px;

  display: grid;

  gap: 12px;
}

.about-beliefs li {
  padding-left: 14px;

  position: relative;

  color: var(--color-text-primary);

  font-size: var(--text-small);
  font-weight: 600;

  line-height: 1.4;
}

.about-beliefs li::before {
  content: "";

  position: absolute;

  left: 0;
  top: 0.55em;

  width: 6px;
  height: 6px;

  background: var(--color-blue-600);

  border-radius: 50%;
}

.about-beliefs a {
  margin-top: 16px;

  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-size: var(--text-small);
  font-weight: 650;
}

.about-beliefs a:hover {
  text-decoration: underline;
}
</style>
