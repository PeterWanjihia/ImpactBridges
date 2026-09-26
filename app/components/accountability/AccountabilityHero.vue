<script setup lang="ts">
import {
  ArrowRight,
  Eye,
  Heart,
  Scale,
  ShieldCheck,
} from 'lucide-vue-next'

const commitments = [
  {
    title: 'Honesty',
    note: 'We share what we know, including our challenges.',
    icon: ShieldCheck,
  },
  {
    title: 'Accountability',
    note: 'We take responsibility for our decisions and results.',
    icon: Scale,
  },
  {
    title: 'Transparency',
    note: 'We provide clear, accessible and regular information.',
    icon: Eye,
  },
  {
    title: 'Respect',
    note: 'We respect the communities, partners and supporters we work with.',
    icon: Heart,
  },
]
</script>

<template>
  <section class="account-hero">
    <div
      class="account-hero__image"
      role="img"
      aria-label="A teacher and learners gathered around a laptop in class."
    />

    <div class="account-hero__overlay" />

    <div class="container account-hero__inner">
      <div>
        <p class="account-hero__eyebrow">
          Accountability
        </p>

        <h1>
          Clear about what we do. Accountable in how we do it.
        </h1>

        <p>
          Trust is earned through honesty, accountability and consistent
          action. On this page you can see how Impact Bridge is governed,
          how funds and resources are used, how our trustees provide
          oversight, and how we stay accountable to communities, partners
          and supporters.
        </p>

        <div class="account-hero__actions">
          <a
            href="#question"
            class="account-hero__button account-hero__button--ghost"
          >
            Have a question?
          </a>

          <NuxtLink
            to="/contact"
            class="account-hero__button account-hero__button--primary"
          >
            Contact our team

            <ArrowRight
              :size="16"
              :stroke-width="2"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>
      </div>

      <aside aria-label="Our accountability commitment">
        <h2>Our accountability commitment</h2>

        <ul>
          <li
            v-for="item in commitments"
            :key="item.title"
          >
            <component
              :is="item.icon"
              :size="18"
              :stroke-width="1.7"
              aria-hidden="true"
            />

            <span>
              <strong>{{ item.title }}</strong>
              {{ item.note }}
            </span>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.account-hero {
  position: relative;

  overflow: hidden;

  background: var(--color-navy-950);

  color: var(--color-white);
}

.account-hero__image {
  position: absolute;

  inset: 0;

  background-image: url('/images/home/hero.png');

  background-size: cover;

  background-position: 72% center;
}

.account-hero__overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgb(0 12 36 / 0.94) 0%,
      rgb(0 12 36 / 0.72) 46%,
      rgb(0 12 36 / 0.28) 100%
    );
}

.account-hero__inner {
  position: relative;

  z-index: 1;

  display: grid;

  grid-template-columns: minmax(0, 1fr) 320px;

  gap: 32px;

  align-items: center;

  padding-block: 64px;
}

.account-hero__eyebrow {
  color: var(--color-blue-500);

  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.account-hero h1 {
  max-width: 14em;

  margin-top: 12px;

  color: var(--color-white);

  font-size: clamp(2.3rem, 4vw, 3.4rem);

  line-height: 1.05;
}

.account-hero__inner > div > p {
  max-width: 36rem;

  margin-top: 14px;

  color: rgb(255 255 255 / 0.84);

  font-size: var(--text-lede);

  line-height: 1.55;
}

.account-hero__actions {
  margin-top: 22px;

  display: flex;
  flex-wrap: wrap;

  gap: 10px;
}

.account-hero__button {
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

.account-hero__button--ghost {
  color: var(--color-white);

  border-color: rgb(255 255 255 / 0.7);
}

.account-hero__button--ghost:hover {
  background: rgb(255 255 255 / 0.1);
}

.account-hero__button--primary {
  color: var(--color-white);

  background: var(--color-blue-600);
}

.account-hero__button--primary:hover {
  background: var(--color-blue-500);
}

.account-hero aside {
  padding: 20px;

  background: rgb(255 255 255 / 0.96);

  border-radius: var(--radius-lg);
}

.account-hero aside h2 {
  font-family: var(--font-sans);
  font-size: 1.05rem;
  font-weight: 700;

  letter-spacing: 0;
}

.account-hero aside ul {
  margin-top: 14px;

  display: grid;

  gap: 12px;
}

.account-hero aside li {
  display: flex;
  align-items: flex-start;

  gap: 10px;

  color: var(--color-text-secondary);

  font-size: var(--text-small);

  line-height: 1.4;
}

.account-hero aside svg {
  flex-shrink: 0;

  margin-top: 2px;

  color: var(--color-blue-600);
}

.account-hero aside strong {
  display: block;

  color: var(--color-text-primary);
}

@media (max-width: 900px) {
  .account-hero__inner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .account-hero__actions,
  .account-hero__button {
    width: 100%;
  }

  .account-hero__button {
    justify-content: center;
  }
}
</style>
