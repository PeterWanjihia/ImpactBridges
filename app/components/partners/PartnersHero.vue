<script setup lang="ts">
import {
  ArrowRight,
  Check,
  Download,
} from 'lucide-vue-next'

const impacts = [
  'Meaningful contribution',
  'Responsible delivery',
  'Transparent reporting',
  'Stronger communities',
]
</script>

<template>
  <section class="partners-hero">
    <div
      class="partners-hero__image"
      role="img"
      aria-label="A teacher leading a classroom lesson from a projected screen."
    />

    <div class="partners-hero__overlay" />

    <div class="container partners-hero__inner">
      <div class="partners-hero__copy">
        <p class="partners-hero__eyebrow">
          Corporate partnerships
        </p>

        <h1>
          Partner for learning.<br>
          Transform classrooms<br>
          <em>together.</em>
        </h1>

        <p>
          We work with organisations to bring appropriate technology,
          teacher development and ongoing support to schools where
          connectivity should not limit learning.
        </p>

        <div class="partners-hero__actions">
          <a
            href="#enquiry"
            class="partners-hero__button partners-hero__button--primary"
          >
            Start a partnership conversation

            <ArrowRight
              :size="16"
              :stroke-width="2"
              aria-hidden="true"
            />
          </a>

          <a
            href="#enquiry"
            class="partners-hero__button partners-hero__button--ghost"
          >
            <Download
              :size="16"
              :stroke-width="2"
              aria-hidden="true"
            />

            Download partnership overview
          </a>
        </div>
      </div>

      <aside
        class="impact-card"
        aria-label="Make measurable impact"
      >
        <h2>Make measurable impact</h2>

        <ul>
          <li
            v-for="item in impacts"
            :key="item"
          >
            <Check
              :size="16"
              :stroke-width="2.2"
              aria-hidden="true"
            />

            {{ item }}
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.partners-hero {
  position: relative;

  min-height: 540px;

  overflow: hidden;

  background: var(--color-navy-950);

  color: var(--color-white);
}

.partners-hero__image {
  position: absolute;

  inset: 0;

  background-image: url('/images/model/hero.jpg');

  background-size: cover;

  background-position: 70% center;
}

.partners-hero__overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgb(0 12 36 / 0.94) 0%,
      rgb(0 12 36 / 0.8) 40%,
      rgb(0 12 36 / 0.38) 100%
    );
}

.partners-hero__inner {
  position: relative;

  z-index: 1;

  min-height: 540px;

  display: grid;

  grid-template-columns: minmax(0, 1fr) 280px;

  gap: 36px;

  align-items: center;

  padding-block: 64px;
}

.partners-hero__eyebrow {
  color: var(--color-blue-500);

  font-family: var(--font-sans);
  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.partners-hero h1 {
  margin-top: 12px;

  color: var(--color-white);

  font-size: clamp(2.6rem, 4.4vw, 3.8rem);

  line-height: 1;
}

.partners-hero h1 em {
  color: var(--color-blue-500);

  font-style: italic;
  font-weight: 450;
}

.partners-hero__copy > p {
  max-width: 34rem;

  margin-top: 16px;

  color: rgb(255 255 255 / 0.86);

  font-size: var(--text-lede);

  line-height: 1.55;
}

.partners-hero__actions {
  margin-top: 26px;

  display: flex;
  flex-wrap: wrap;

  gap: 10px;
}

.partners-hero__button {
  height: 46px;

  display: inline-flex;
  align-items: center;

  gap: 8px;

  padding-inline: 16px;

  border: 1px solid transparent;
  border-radius: var(--radius-sm);

  font-family: var(--font-sans);
  font-size: var(--text-ui);
  font-weight: 650;
}

.partners-hero__button--primary {
  color: var(--color-white);

  background: var(--color-blue-600);
}

.partners-hero__button--primary:hover {
  background: var(--color-blue-500);
}

.partners-hero__button--ghost {
  color: var(--color-white);

  border-color: rgb(255 255 255 / 0.72);
}

.partners-hero__button--ghost:hover {
  background: rgb(255 255 255 / 0.1);
}

.impact-card {
  padding: 22px;

  background: rgb(7 18 40 / 0.78);

  border: 1px solid rgb(255 255 255 / 0.12);

  border-radius: var(--radius-lg);

  backdrop-filter: blur(8px);
}

.impact-card h2 {
  color: var(--color-white);

  font-family: var(--font-sans);
  font-size: 1.25rem;
  font-weight: 700;

  letter-spacing: -0.02em;
}

.impact-card ul {
  margin-top: 16px;

  display: grid;

  gap: 12px;
}

.impact-card li {
  display: flex;
  align-items: center;

  gap: 10px;

  color: rgb(255 255 255 / 0.88);

  font-size: var(--text-small);
  font-weight: 600;
}

.impact-card svg {
  color: var(--color-blue-500);
}

@media (max-width: 900px) {
  .partners-hero__inner {
    grid-template-columns: 1fr;

    align-items: end;
  }

  .impact-card {
    max-width: 420px;
  }
}

@media (max-width: 640px) {
  .partners-hero,
  .partners-hero__inner {
    min-height: 0;
  }

  .partners-hero__inner {
    padding-block: 40px;
  }

  .partners-hero__actions,
  .partners-hero__button,
  .impact-card {
    width: 100%;
    max-width: none;
  }

  .partners-hero__button {
    justify-content: center;
  }
}
</style>
