<script setup lang="ts">
import {
  ArrowRight,
  Calendar,
  FileText,
  School,
  UserRound,
  UsersRound,
} from 'lucide-vue-next'

const pilotFacts = [
  {
    value: '1',
    label: 'hub implemented',
    icon: School,
  },
  {
    value: '2',
    label: 'Champion Teachers',
    icon: UserRound,
  },
  {
    value: '50+',
    label: 'learners reached',
    icon: UsersRound,
  },
]
</script>

<template>
  <section
    id="overview"
    class="impact-hero"
  >
    <div
      class="impact-hero__image"
      role="img"
      aria-label="A teacher leading a lesson from a projected screen while learners follow from their desks."
    />

    <div class="impact-hero__overlay" />

    <div class="container impact-hero__inner">
      <div class="impact-hero__copy">
        <p class="impact-hero__eyebrow">
          Early evidence
        </p>

        <h1>
          One classroom.<br>
          Early evidence of<br>
          <em>what could grow.</em>
        </h1>

        <p class="impact-hero__description">
          Our first pilot is helping us understand how offline learning,
          prepared teachers and sustained classroom support can improve
          access, participation and confidence.
        </p>

        <div class="impact-hero__actions">
          <a
            href="#outcomes"
            class="impact-hero__button impact-hero__button--primary"
          >
            Explore the results

            <ArrowRight
              :size="16"
              :stroke-width="2"
              aria-hidden="true"
            />
          </a>

          <a
            href="#reports"
            class="impact-hero__button impact-hero__button--ghost"
          >
            <FileText
              :size="16"
              :stroke-width="2"
              aria-hidden="true"
            />

            Read the pilot report
          </a>
        </div>
      </div>

      <aside
        class="pilot-card"
        aria-label="First pilot"
      >
        <p class="pilot-card__label">
          First pilot
        </p>

        <ul>
          <li
            v-for="fact in pilotFacts"
            :key="fact.label"
          >
            <span class="pilot-card__icon">
              <component
                :is="fact.icon"
                :size="18"
                :stroke-width="1.8"
                aria-hidden="true"
              />
            </span>

            <span>
              <strong>{{ fact.value }}</strong>
              {{ fact.label }}
            </span>
          </li>
        </ul>

        <p class="pilot-card__period">
          <Calendar
            :size="16"
            :stroke-width="1.8"
            aria-hidden="true"
          />

          <span>
            <strong>April – June 2025</strong>
            Early pilot findings
          </span>
        </p>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.impact-hero {
  position: relative;

  min-height: 560px;

  overflow: hidden;

  scroll-margin-top: 120px;

  background: var(--color-navy-950);

  color: var(--color-white);
}

.impact-hero__image {
  position: absolute;

  inset: 0;

  background-image: url('/images/model/hero.jpg');

  background-size: cover;

  background-position: 62% center;
}

.impact-hero__overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgb(0 12 36 / 0.94) 0%,
      rgb(0 12 36 / 0.82) 36%,
      rgb(0 12 36 / 0.45) 68%,
      rgb(0 12 36 / 0.28) 100%
    );
}

.impact-hero__inner {
  position: relative;

  z-index: 1;

  min-height: 560px;

  display: grid;

  grid-template-columns: minmax(0, 1fr) 280px;

  gap: 40px;

  align-items: center;

  padding-block: 64px;
}

.impact-hero__copy {
  max-width: 640px;
}

.impact-hero__eyebrow {
  color: var(--color-blue-500);

  font-family: var(--font-sans);
  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.impact-hero h1 {
  margin-top: 14px;

  color: var(--color-white);

  font-size: clamp(2.7rem, 4.6vw, 4.1rem);

  line-height: 0.98;
}

.impact-hero h1 em {
  color: var(--color-blue-500);

  font-style: italic;
  font-weight: 450;
}

.impact-hero__description {
  max-width: 34rem;

  margin-top: 18px;

  color: rgb(255 255 255 / 0.86);

  font-size: var(--text-lede);

  line-height: 1.55;
}

.impact-hero__actions {
  margin-top: 26px;

  display: flex;
  flex-wrap: wrap;

  gap: 10px;
}

.impact-hero__button {
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

.impact-hero__button--primary {
  color: var(--color-white);

  background: var(--color-blue-600);
}

.impact-hero__button--primary:hover {
  background: var(--color-blue-500);
}

.impact-hero__button--ghost {
  color: var(--color-white);

  border-color: rgb(255 255 255 / 0.72);
}

.impact-hero__button--ghost:hover {
  background: rgb(255 255 255 / 0.1);
}

.pilot-card {
  padding: 22px 20px;

  background: var(--color-white);

  border-radius: var(--radius-lg);

  box-shadow: var(--shadow-md);
}

.pilot-card__label {
  color: var(--color-blue-600);

  font-family: var(--font-sans);
  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.pilot-card ul {
  margin-top: 16px;

  display: grid;

  gap: 14px;
}

.pilot-card li,
.pilot-card__period {
  display: flex;
  align-items: center;

  gap: 12px;

  color: var(--color-text-secondary);

  font-size: var(--text-small);

  line-height: 1.3;
}

.pilot-card strong {
  display: block;

  color: var(--color-text-primary);

  font-family: var(--font-serif);
  font-size: 1.55rem;
  font-weight: 550;

  line-height: 1;
}

.pilot-card__icon {
  width: 36px;
  height: 36px;

  display: grid;
  place-items: center;

  flex-shrink: 0;

  color: var(--color-blue-600);

  background: var(--color-blue-100);

  border-radius: 50%;
}

.pilot-card__period {
  margin-top: 16px;
  padding-top: 16px;

  border-top: 1px solid var(--color-border);

  align-items: flex-start;
}

.pilot-card__period svg {
  margin-top: 2px;

  color: var(--color-blue-600);
}

.pilot-card__period strong {
  font-family: var(--font-sans);
  font-size: var(--text-small);
  font-weight: 700;
}

@media (max-width: 900px) {
  .impact-hero__overlay {
    background:
      linear-gradient(
        180deg,
        rgb(0 12 36 / 0.45) 0%,
        rgb(0 12 36 / 0.88) 48%,
        rgb(0 12 36 / 0.96) 100%
      );
  }

  .impact-hero__inner {
    grid-template-columns: 1fr;

    align-items: end;
  }

  .pilot-card {
    max-width: 360px;
  }
}

@media (max-width: 640px) {
  .impact-hero,
  .impact-hero__inner {
    min-height: 0;
  }

  .impact-hero__inner {
    padding-block: 48px;
  }

  .impact-hero__actions,
  .impact-hero__button,
  .pilot-card {
    width: 100%;
    max-width: none;
  }

  .impact-hero__button {
    justify-content: center;
  }
}
</style>
