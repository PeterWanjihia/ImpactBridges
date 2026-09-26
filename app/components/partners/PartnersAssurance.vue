<script setup lang="ts">
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  FileText,
  Lock,
  ShieldCheck,
  UsersRound,
} from 'lucide-vue-next'

const pillars = [
  {
    title: 'Governance',
    description: 'Meet our board and leadership.',
    to: '/about',
    icon: UsersRound,
  },
  {
    title: 'Financials',
    description: 'Annual reports and statements.',
    to: '/reports',
    icon: FileText,
  },
  {
    title: 'Policies',
    description: 'Safeguarding, anti-fraud and data protection.',
    to: '/safeguarding',
    icon: Lock,
  },
  {
    title: 'Impact measurement',
    description: 'Our methodology and evidence principles.',
    to: '/impact#methodology',
    icon: ChartNoAxesColumnIncreasing,
  },
]
</script>

<template>
  <section
    class="partners-assurance"
    aria-labelledby="partners-assurance-title"
  >
    <div class="container partners-assurance__inner">
      <div class="partners-assurance__intro">
        <span>
          <ShieldCheck
            :size="22"
            :stroke-width="1.7"
            aria-hidden="true"
          />
        </span>

        <h2 id="partners-assurance-title">
          Transparency you can trust
        </h2>

        <p>
          We welcome due diligence and are committed to responsible
          stewardship at every step.
        </p>

        <NuxtLink to="/transparency">
          View our transparency page

          <ArrowRight
            :size="16"
            :stroke-width="2"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>

      <ul>
        <li
          v-for="pillar in pillars"
          :key="pillar.title"
        >
          <NuxtLink :to="pillar.to">
            <component
              :is="pillar.icon"
              :size="18"
              :stroke-width="1.7"
              aria-hidden="true"
            />

            <strong>{{ pillar.title }}</strong>

            <span>{{ pillar.description }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.partners-assurance {
  background: var(--color-navy-950);

  color: var(--color-white);
}

.partners-assurance__inner {
  display: grid;

  grid-template-columns: 0.9fr 1.4fr;

  gap: 28px;

  align-items: center;

  padding-block: 36px;
}

.partners-assurance__intro > span {
  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  color: var(--color-white);

  background: rgb(255 255 255 / 0.08);

  border-radius: 50%;
}

.partners-assurance h2 {
  margin-top: 12px;

  color: var(--color-white);

  font-size: clamp(1.6rem, 2.4vw, 2rem);
}

.partners-assurance__intro > p {
  margin-top: 8px;

  color: rgb(255 255 255 / 0.76);

  font-size: var(--text-small);

  line-height: 1.5;
}

.partners-assurance__intro > a {
  height: 44px;

  margin-top: 18px;

  display: inline-flex;
  align-items: center;

  gap: 8px;

  padding-inline: 16px;

  color: var(--color-white);

  background: var(--color-blue-600);

  border-radius: var(--radius-sm);

  font-size: var(--text-small);
  font-weight: 650;
}

.partners-assurance__intro > a:hover {
  background: var(--color-blue-500);
}

.partners-assurance ul {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 12px;
}

.partners-assurance li a {
  height: 100%;

  display: grid;

  gap: 6px;

  padding: 16px;

  color: var(--color-white);

  background: rgb(255 255 255 / 0.06);

  border: 1px solid rgb(255 255 255 / 0.08);

  border-radius: var(--radius-md);
}

.partners-assurance li a:hover {
  background: rgb(255 255 255 / 0.1);
}

.partners-assurance strong {
  font-size: var(--text-ui);
}

.partners-assurance li span {
  color: rgb(255 255 255 / 0.72);

  font-size: var(--text-small);

  line-height: 1.4;
}

@media (max-width: 900px) {
  .partners-assurance__inner,
  .partners-assurance ul {
    grid-template-columns: 1fr;
  }
}
</style>
