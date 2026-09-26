<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <article
    class="about-people"
    aria-labelledby="about-people-title"
  >
    <p class="eyebrow">
      The people behind the work
    </p>

    <h2 id="about-people-title">
      A distributed team. A locally carried mission.
    </h2>

    <img
      src="/images/model/school-leadership.png"
      alt="School leaders and a programme officer reviewing the work together."
      width="720"
      height="420"
    >

    <NuxtLink to="/contact">
      Meet our team and partners

      <ArrowRight
        :size="14"
        :stroke-width="2"
        aria-hidden="true"
      />
    </NuxtLink>
  </article>
</template>

<style scoped>
.about-people {
  padding: 22px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.about-people h2 {
  margin-top: 10px;

  font-size: clamp(1.45rem, 2vw, 1.8rem);

  line-height: 1.12;
}

.about-people img {
  display: block;

  width: 100%;
  height: 160px;

  margin-top: 18px;

  object-fit: cover;

  border-radius: var(--radius-md);
}

.about-people a {
  margin-top: 16px;

  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-size: var(--text-small);
  font-weight: 650;
}

.about-people a:hover {
  text-decoration: underline;
}
</style>
