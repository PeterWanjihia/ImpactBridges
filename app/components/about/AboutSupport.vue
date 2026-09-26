<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <article
    class="about-support"
    aria-labelledby="about-support-title"
  >
    <p class="eyebrow">
      How your support creates change
    </p>

    <h2 id="about-support-title">
      Two ways in. One classroom.
    </h2>

    <div class="about-support__paths">
      <div>
        <h3>For individuals</h3>

        <p>
          Fund a learning hub, support a teacher’s training, or
          give toward the next classroom.
        </p>

        <NuxtLink to="/donate">
          Fund a classroom

          <ArrowRight
            :size="14"
            :stroke-width="2"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>

      <div>
        <h3>For organizations</h3>

        <p>
          Fund hubs, donate suitable technology, or build a
          partnership with reporting attached.
        </p>

        <NuxtLink to="/corporate-partnerships">
          Start a corporate partnership

          <ArrowRight
            :size="14"
            :stroke-width="2"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>
    </div>

    <NuxtLink
      to="/donate-equipment"
      class="about-support__quiet"
    >
      See the journey of equipment to a classroom

      <ArrowRight
        :size="14"
        :stroke-width="2"
        aria-hidden="true"
      />
    </NuxtLink>
  </article>
</template>

<style scoped>
.about-support {
  padding: 22px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.about-support h2 {
  margin-top: 10px;

  font-size: clamp(1.45rem, 2vw, 1.8rem);

  line-height: 1.12;
}

.about-support__paths {
  margin-top: 18px;

  display: grid;

  gap: 16px;
}

.about-support__paths h3 {
  font-family: var(--font-sans);
  font-size: var(--text-ui);
  font-weight: 700;

  letter-spacing: 0;
}

.about-support__paths p {
  margin-top: 6px;

  font-size: var(--text-small);

  line-height: 1.5;
}

.about-support a {
  margin-top: 16px;

  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-size: var(--text-small);
  font-weight: 650;
}

.about-support a:hover {
  text-decoration: underline;
}

.about-support__quiet {
  margin-top: 8px;
}
</style>
