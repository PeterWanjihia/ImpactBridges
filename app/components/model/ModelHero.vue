<script setup lang="ts">
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  ChartNoAxesColumnIncreasing,
  MapPin,
  UserRound,
  UsersRound,
  WifiOff,
} from 'lucide-vue-next'

const principles = [
  {
    label: 'Offline-first',
    icon: WifiOff,
  },
  {
    label: 'Teacher-led',
    icon: UserRound,
  },
  {
    label: 'Curriculum-aligned',
    icon: BookOpen,
  },
  {
    label: 'Locally implemented',
    icon: MapPin,
  },
  {
    label: 'Continuously supported',
    icon: UsersRound,
  },
  {
    label: 'Transparently measured',
    icon: ChartNoAxesColumnIncreasing,
  },
]

function onExplore(event: MouseEvent) {
  if (!document.getElementById('model-glance')) {
    event.preventDefault()
  }
}
</script>

<template>
  <section
    id="overview"
    class="model-hero"
  >
    <div
      class="model-hero__image"
      role="img"
      aria-label="A teacher leading a classroom lesson using projected digital learning content."
    />

    <div class="model-hero__overlay" />

    <div
      class="model-hero__fingerprint"
      aria-hidden="true"
    >
      <span class="model-hero__ring model-hero__ring--1" />
      <span class="model-hero__ring model-hero__ring--2" />
      <span class="model-hero__ring model-hero__ring--3" />
      <span class="model-hero__ring model-hero__ring--4" />
      <span class="model-hero__ring model-hero__ring--5" />
    </div>

    <div class="container model-hero__inner">
      <div class="model-hero__copy">
        <h1 class="model-hero__title">
          A computer does not<br>
          transform a classroom.<br>
          <em>A complete learning system can.</em>
        </h1>

        <p class="model-hero__description">
          Impact Bridge combines offline learning technology, curated
          resources, trained teachers and local ownership into one practical
          model—designed for schools with limited connectivity.
        </p>

        <div class="model-hero__actions">
          <a
            href="#model-glance"
            class="model-hero__button model-hero__button--primary"
            @click="onExplore"
          >
            Explore the model

            <ArrowDown
              :size="15"
              :stroke-width="2"
              aria-hidden="true"
            />
          </a>

          <NuxtLink
            to="/stories"
            class="model-hero__button model-hero__button--secondary"
          >
            See a hub in action

            <ArrowRight
              :size="15"
              :stroke-width="2"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>
      </div>

      <ul class="model-hero__principles">
        <li
          v-for="principle in principles"
          :key="principle.label"
          class="model-hero__principle"
        >
          <div class="model-hero__principle-icon">
            <component
              :is="principle.icon"
              :size="16"
              :stroke-width="1.8"
              aria-hidden="true"
            />
          </div>

          <span>{{ principle.label }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.model-hero {
  position: relative;

  width: 100%;

  overflow: hidden;

  scroll-margin-top: 120px;

  background: var(--color-navy-950);
}

.model-hero__image {
  position: absolute;

  inset: 0;

  background-image: url('/images/model/hero.jpg');

  background-size: cover;

  background-position: 67% 44%;

  transform: scale(1.015);

  transform-origin: center;

  filter:
    saturate(0.94)
    contrast(1.04)
    brightness(0.92);
}

.model-hero__overlay {
  position: absolute;

  inset: 0;

  z-index: 1;

  background:
    linear-gradient(
      90deg,
      rgb(0 18 47 / 0.96) 0%,
      rgb(0 18 47 / 0.9) 18%,
      rgb(0 18 47 / 0.72) 34%,
      rgb(0 18 47 / 0.4) 52%,
      rgb(0 18 47 / 0.12) 72%,
      rgb(0 18 47 / 0.04) 100%
    ),
    linear-gradient(
      180deg,
      transparent 48%,
      rgb(0 18 47 / 0.28) 72%,
      rgb(0 18 47 / 0.78) 100%
    );
}

.model-hero__inner {
  position: relative;

  z-index: 3;

  padding-top: 32px;
  padding-bottom: 16px;

  display: flex;
  flex-direction: column;
}

.model-hero__copy {
  max-width: 40rem;
}

.model-hero__title {
  max-width: 18ch;

  color: var(--color-white);

  font-family: var(--font-serif);

  font-size: clamp(2.5rem, 3.8vw, 3.5rem);

  font-weight: 480;

  line-height: 1.02;

  letter-spacing: -0.034em;
}

.model-hero__title em {
  display: inline-block;

  margin-top: 4px;

  color: var(--color-blue-500);

  font-family: var(--font-serif);

  font-style: italic;

  font-weight: 430;
}

.model-hero__description {
  max-width: 36rem;

  margin-top: 16px;

  color: rgb(255 255 255 / 0.88);

  font-family: var(--font-sans);

  font-size: var(--text-ui);

  line-height: 1.6;
}

.model-hero__actions {
  margin-top: 18px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 10px;
}

.model-hero__button {
  height: 44px;

  padding-inline: 18px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  border: 1px solid transparent;
  border-radius: var(--radius-sm);

  font-family: var(--font-sans);
  font-size: var(--text-ui);
  font-weight: 650;

  line-height: 1;

  white-space: nowrap;
}

.model-hero__button--primary {
  color: var(--color-white);

  background: var(--color-blue-600);
}

.model-hero__button--primary:hover {
  background: var(--color-blue-500);
}

.model-hero__button--secondary {
  color: var(--color-white);

  background: rgb(0 18 47 / 0.28);

  border-color: rgb(255 255 255 / 0.7);
}

.model-hero__button--secondary:hover {
  background: rgb(255 255 255 / 0.1);

  border-color: rgb(255 255 255 / 0.88);
}

.model-hero__principles {
  width: 100%;

  margin-top: 32px;

  padding-top: 14px;

  display: grid;

  grid-template-columns: repeat(6, minmax(0, 1fr));

  border-top: 1px solid rgb(255 255 255 / 0.12);
}

.model-hero__principle {
  position: relative;

  min-width: 0;

  min-height: 36px;

  padding-inline: 10px 14px;

  display: flex;
  align-items: center;

  gap: 8px;
}

.model-hero__principle:first-child {
  padding-left: 0;
}

.model-hero__principle:last-child {
  padding-right: 0;
}

.model-hero__principle:not(:last-child)::after {
  content: "";

  position: absolute;

  top: 10px;
  right: 0;

  width: 1px;
  height: 20px;

  background: rgb(255 255 255 / 0.12);
}

.model-hero__principle-icon {
  flex-shrink: 0;

  display: grid;
  place-items: center;

  color: rgb(255 255 255 / 0.78);
}

.model-hero__principle span {
  min-width: 0;

  color: rgb(255 255 255 / 0.86);

  font-family: var(--font-sans);
  font-size: var(--text-caption);
  font-weight: 600;

  line-height: 1.25;
}

.model-hero__fingerprint {
  position: absolute;

  z-index: 2;

  right: -108px;
  bottom: -95px;

  width: 255px;
  height: 255px;

  pointer-events: none;

  opacity: 0.45;
}

.model-hero__ring {
  position: absolute;

  border: 1.5px solid rgb(23 105 243 / 0.55);

  border-radius: 50%;
}

.model-hero__ring--1 {
  inset: 0;
}

.model-hero__ring--2 {
  inset: 21px;
}

.model-hero__ring--3 {
  inset: 42px;
}

.model-hero__ring--4 {
  inset: 63px;
}

.model-hero__ring--5 {
  inset: 84px;
}

@media (max-width: 1100px) {
  .model-hero__principles {
    grid-template-columns: repeat(3, minmax(0, 1fr));

    row-gap: 8px;
  }

  .model-hero__principle {
    padding-inline: 0 12px;
  }

  .model-hero__principle:not(:last-child)::after {
    display: none;
  }
}

@media (max-width: 900px) {
  .model-hero__image {
    background-position: 72% center;
  }

  .model-hero__overlay {
    background:
      linear-gradient(
        90deg,
        rgb(0 18 47 / 0.94) 0%,
        rgb(0 18 47 / 0.78) 42%,
        rgb(0 18 47 / 0.28) 100%
      ),
      linear-gradient(
        180deg,
        transparent 40%,
        rgb(0 18 47 / 0.88) 100%
      );
  }
}

@media (max-width: 640px) {
  .model-hero__inner {
    padding-top: 28px;
    padding-bottom: 16px;
  }

  .model-hero__image {
    background-position: 78% center;
  }

  .model-hero__overlay {
    background:
      linear-gradient(
        180deg,
        rgb(0 18 47 / 0.72) 0%,
        rgb(0 18 47 / 0.86) 55%,
        rgb(0 18 47 / 0.96) 100%
      );
  }

  .model-hero__copy {
    max-width: none;
  }

  .model-hero__title {
    max-width: none;

    font-size: clamp(2.1rem, 9vw, 2.6rem);
  }

  .model-hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .model-hero__button {
    width: 100%;
  }

  .model-hero__principles {
    grid-template-columns: 1fr 1fr;

    gap: 12px 8px;
  }

  .model-hero__principle {
    padding-inline: 0;
  }

  .model-hero__fingerprint {
    opacity: 0.28;
  }
}

@media (prefers-reduced-motion: reduce) {
  .model-hero__image {
    transform: none;
  }
}
</style>
