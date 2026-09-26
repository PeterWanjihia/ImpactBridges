<script setup lang="ts">
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  Lock,
  ShieldCheck,
  Wrench,
} from 'lucide-vue-next'

const marks = [
  { title: 'Careful assessment', note: 'We accept only what is safe, useful and supportable.', icon: ShieldCheck },
  { title: 'Data security first', note: 'All devices must be securely erased before transfer.', icon: Lock },
  { title: 'Prepared for learning', note: 'Every device is configured, tested and tracked.', icon: Wrench },
  { title: 'Impact you can see', note: 'Receive updates on where your donation makes a difference.', icon: ChartNoAxesColumnIncreasing },
]
</script>

<template>
  <section class="equipment-hero">
    <div
      class="equipment-hero__image"
      role="img"
      aria-label="A technician preparing a laptop for classroom use."
    />

    <div class="equipment-hero__overlay" />

    <div class="container equipment-hero__inner">
      <div>
        <p class="equipment-hero__eyebrow">
          Donate equipment
        </p>

        <h1>
          Turn suitable technology into supported learning.
        </h1>

        <p>
          We assess, prepare and deploy suitable computers, displays
          and supporting equipment as part of complete teacher-led
          learning hubs.
        </p>

        <div class="equipment-hero__actions">
          <a
            href="#offer"
            class="equipment-hero__button equipment-hero__button--primary"
          >
            Offer equipment

            <ArrowRight
              :size="16"
              :stroke-width="2"
              aria-hidden="true"
            />
          </a>

          <a
            href="#guidelines"
            class="equipment-hero__button equipment-hero__button--ghost"
          >
            View requirements
          </a>
        </div>
      </div>

      <aside class="equipment-hero__aside">
        <img
          src="/images/home/hero.png"
          alt="Learners using a tablet with their teacher."
          width="320"
          height="320"
        >

        <div>
          <strong>Do not ship before approval</strong>
          <p>Please get written approval before sending any equipment.</p>

          <a href="#guidelines">
            Why this matters

            <ArrowRight
              :size="14"
              :stroke-width="2"
              aria-hidden="true"
            />
          </a>
        </div>
      </aside>
    </div>

    <ul class="container equipment-hero__marks">
      <li
        v-for="mark in marks"
        :key="mark.title"
      >
        <component
          :is="mark.icon"
          :size="18"
          :stroke-width="1.7"
          aria-hidden="true"
        />

        <span>
          <strong>{{ mark.title }}</strong>
          {{ mark.note }}
        </span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.equipment-hero {
  position: relative;

  overflow: hidden;

  background: var(--color-navy-950);

  color: var(--color-white);
}

.equipment-hero__image {
  position: absolute;

  inset: 0;

  background-image: url('/images/model/lesson-prepare.png');

  background-size: cover;

  background-position: 30% center;
}

.equipment-hero__overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgb(0 12 36 / 0.94) 0%,
      rgb(0 12 36 / 0.82) 46%,
      rgb(0 12 36 / 0.45) 100%
    );
}

.equipment-hero__inner {
  position: relative;

  z-index: 1;

  display: grid;

  grid-template-columns: minmax(0, 1fr) 280px;

  gap: 32px;

  align-items: center;

  padding-top: 56px;
}

.equipment-hero__eyebrow {
  color: var(--color-blue-500);

  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.equipment-hero h1 {
  max-width: 12em;

  margin-top: 12px;

  color: var(--color-white);

  font-size: clamp(2.4rem, 4.4vw, 3.6rem);

  line-height: 1.02;
}

.equipment-hero__inner > div > p {
  max-width: 34rem;

  margin-top: 14px;

  color: rgb(255 255 255 / 0.84);

  font-size: var(--text-lede);

  line-height: 1.55;
}

.equipment-hero__actions {
  margin-top: 22px;

  display: flex;
  flex-wrap: wrap;

  gap: 10px;
}

.equipment-hero__button {
  height: 46px;

  display: inline-flex;
  align-items: center;

  gap: 8px;

  padding-inline: 16px;

  border: 1px solid transparent;
  border-radius: var(--radius-sm);

  font-size: var(--text-ui);
  font-weight: 650;
}

.equipment-hero__button--primary {
  color: var(--color-white);

  background: var(--color-teal-600);
}

.equipment-hero__button--primary:hover {
  background: var(--color-teal-500);
}

.equipment-hero__button--ghost {
  color: var(--color-white);

  border-color: rgb(255 255 255 / 0.7);
}

.equipment-hero__button--ghost:hover {
  background: rgb(255 255 255 / 0.1);
}

.equipment-hero__aside {
  display: grid;

  justify-items: center;

  gap: 12px;

  text-align: center;
}

.equipment-hero__aside img {
  width: 168px;
  height: 168px;

  object-fit: cover;

  border: 4px solid rgb(255 255 255 / 0.85);

  border-radius: 50%;
}

.equipment-hero__aside strong {
  display: block;

  font-size: var(--text-small);
}

.equipment-hero__aside p {
  margin-top: 4px;

  color: rgb(255 255 255 / 0.78);

  font-size: var(--text-caption);
}

.equipment-hero__aside a {
  margin-top: 8px;

  display: inline-flex;
  align-items: center;

  gap: 4px;

  color: var(--color-blue-500);

  font-size: var(--text-caption);
  font-weight: 700;
}

.equipment-hero__marks {
  position: relative;

  z-index: 1;

  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 16px;

  margin-top: 36px;
  padding-bottom: 28px;
}

.equipment-hero__marks li {
  display: flex;
  align-items: flex-start;

  gap: 8px;

  color: rgb(255 255 255 / 0.75);

  font-size: var(--text-caption);

  line-height: 1.4;
}

.equipment-hero__marks svg {
  flex-shrink: 0;

  color: var(--color-blue-500);
}

.equipment-hero__marks strong {
  display: block;

  color: var(--color-white);

  font-size: var(--text-small);
}

@media (max-width: 900px) {
  .equipment-hero__inner,
  .equipment-hero__marks {
    grid-template-columns: 1fr;
  }

  .equipment-hero__marks {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .equipment-hero__actions,
  .equipment-hero__button {
    width: 100%;
  }

  .equipment-hero__button {
    justify-content: center;
  }

  .equipment-hero__marks {
    grid-template-columns: 1fr;
  }
}
</style>
