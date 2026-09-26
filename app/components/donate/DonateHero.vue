<script setup lang="ts">
import {
  Lock,
  Mail,
  Play,
  ShieldCheck,
} from 'lucide-vue-next'

const promises = [
  {
    title: 'Secure & trusted payments',
    note: 'Processed by trusted partners. Card details are not stored on this site.',
    icon: ShieldCheck,
  },
  {
    title: 'You’ll get a receipt by email',
    note: 'When payments are live, a receipt follows the gift.',
    icon: Mail,
  },
  {
    title: 'We respect your privacy',
    note: 'We never sell your data. You choose what we share.',
    icon: Lock,
  },
]
</script>

<template>
  <section class="donate-hero">
    <div
      class="donate-hero__image"
      role="img"
      aria-label="A learner writing at a classroom desk."
    />

    <div class="donate-hero__overlay" />

    <div class="container donate-hero__inner">
      <div class="donate-hero__copy">
        <p class="donate-hero__eyebrow">
          Your contribution. Real classrooms.
        </p>

        <h1>
          Fund the<br>
          next classroom.
        </h1>

        <p>
          Help bring offline learning resources, prepared teachers and
          ongoing support to schools where connectivity should not limit
          opportunity.
        </p>

        <NuxtLink
          to="/stories"
          class="donate-hero__watch"
        >
          <Play
            :size="14"
            :stroke-width="2.4"
            aria-hidden="true"
          />

          See how your support changes lives
          <span>1:29</span>
        </NuxtLink>

        <ul class="donate-hero__promises">
          <li
            v-for="item in promises"
            :key="item.title"
          >
            <component
              :is="item.icon"
              :size="16"
              :stroke-width="1.8"
              aria-hidden="true"
            />

            <span>
              <strong>{{ item.title }}</strong>
              {{ item.note }}
            </span>
          </li>
        </ul>
      </div>

      <DonateWidget />
    </div>
  </section>
</template>

<style scoped>
.donate-hero {
  position: relative;

  overflow: hidden;

  background: var(--color-navy-950);

  color: var(--color-white);
}

.donate-hero__image {
  position: absolute;

  inset: 0;

  background-image: url('/images/home/hero.png');

  background-size: cover;

  background-position: 75% center;
}

.donate-hero__overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgb(0 12 36 / 0.94) 0%,
      rgb(0 12 36 / 0.78) 42%,
      rgb(0 12 36 / 0.35) 100%
    );
}

.donate-hero__inner {
  position: relative;

  z-index: 1;

  display: grid;

  grid-template-columns: minmax(0, 1fr) 380px;

  gap: 36px;

  align-items: center;

  padding-block: 48px 56px;
}

.donate-hero__eyebrow {
  color: var(--color-blue-500);

  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.donate-hero h1 {
  margin-top: 12px;

  color: var(--color-white);

  font-size: clamp(2.8rem, 5vw, 4.2rem);

  line-height: 0.98;
}

.donate-hero__copy > p {
  max-width: 34rem;

  margin-top: 16px;

  color: rgb(255 255 255 / 0.86);

  font-size: var(--text-lede);

  line-height: 1.55;
}

.donate-hero__watch {
  margin-top: 20px;

  display: inline-flex;
  align-items: center;

  gap: 8px;

  color: var(--color-white);

  font-size: var(--text-small);
  font-weight: 650;
}

.donate-hero__watch span {
  color: rgb(255 255 255 / 0.65);

  font-weight: 500;
}

.donate-hero__promises {
  margin-top: 28px;

  display: grid;

  gap: 12px;
}

.donate-hero__promises li {
  display: flex;
  align-items: flex-start;

  gap: 10px;

  color: rgb(255 255 255 / 0.78);

  font-size: var(--text-caption);

  line-height: 1.4;
}

.donate-hero__promises svg {
  flex-shrink: 0;

  margin-top: 2px;

  color: var(--color-blue-500);
}

.donate-hero__promises strong {
  display: block;

  color: var(--color-white);

  font-size: var(--text-small);
}

@media (max-width: 980px) {
  .donate-hero__inner {
    grid-template-columns: 1fr;
  }
}
</style>
