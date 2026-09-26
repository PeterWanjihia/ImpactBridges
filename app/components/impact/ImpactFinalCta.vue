<script setup lang="ts">
import {
  Building2,
  Heart,
} from 'lucide-vue-next'
</script>

<template>
  <section
    class="impact-cta"
    aria-labelledby="impact-cta-title"
  >
    <div class="impact-cta__image" />

    <div class="impact-cta__overlay" />

    <div class="container impact-cta__inner">
      <div>
        <h2 id="impact-cta-title">
          Help us build the next classroom—and stronger evidence of what works.
        </h2>

        <p>
          Your support helps us reach more learners, improve the model
          and measure what matters most.
        </p>
      </div>

      <div class="impact-cta__actions">
        <NuxtLink
          to="/donate"
          class="impact-cta__button impact-cta__button--primary"
        >
          <Heart
            :size="16"
            :stroke-width="2"
            aria-hidden="true"
          />

          Fund the next classroom
        </NuxtLink>

        <NuxtLink
          to="/corporate-partnerships"
          class="impact-cta__button impact-cta__button--ghost"
        >
          <Building2
            :size="16"
            :stroke-width="1.8"
            aria-hidden="true"
          />

          Partner with Impact Bridge
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.impact-cta {
  position: relative;

  overflow: hidden;

  background: var(--color-navy-950);

  color: var(--color-white);
}

.impact-cta__image {
  position: absolute;

  inset: 0;

  background-image: url('/images/model/lesson-explore.png');

  background-size: cover;

  background-position: right center;
}

.impact-cta__overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgb(0 14 40 / 0.96) 0%,
      rgb(0 14 40 / 0.9) 42%,
      rgb(0 14 40 / 0.55) 100%
    );
}

.impact-cta__inner {
  position: relative;

  z-index: 1;

  min-height: 180px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  gap: 24px;

  padding-block: 36px;
}

.impact-cta h2 {
  max-width: 18em;

  color: var(--color-white);

  font-size: clamp(1.7rem, 2.8vw, 2.3rem);

  line-height: 1.15;
}

.impact-cta p {
  max-width: 36rem;

  margin-top: 10px;

  color: rgb(255 255 255 / 0.78);

  font-size: var(--text-small);
}

.impact-cta__actions {
  display: flex;
  flex-wrap: wrap;

  gap: 10px;
}

.impact-cta__button {
  height: 46px;

  display: inline-flex;
  align-items: center;

  gap: 8px;

  padding-inline: 16px;

  border: 1px solid transparent;
  border-radius: var(--radius-round);

  font-family: var(--font-sans);
  font-size: var(--text-ui);
  font-weight: 650;
}

.impact-cta__button--primary {
  color: var(--color-navy-950);

  background: var(--color-white);
}

.impact-cta__button--primary:hover {
  background: var(--color-blue-100);
}

.impact-cta__button--ghost {
  color: var(--color-white);

  border-color: rgb(255 255 255 / 0.72);
}

.impact-cta__button--ghost:hover {
  background: rgb(255 255 255 / 0.1);
}

@media (max-width: 640px) {
  .impact-cta__actions,
  .impact-cta__button {
    width: 100%;
  }

  .impact-cta__button {
    justify-content: center;
  }
}
</style>
