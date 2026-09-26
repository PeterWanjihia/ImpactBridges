<script setup lang="ts">
import {
  Building2,
  Check,
  Scale,
  ShieldCheck,
} from 'lucide-vue-next'

const columns = [
  {
    title: 'How we are governed',
    icon: Building2,
    intro: 'We operate under strong governance principles to protect our mission and the communities we serve.',
    points: [
      'Independent board oversight',
      'Regular risk assessments',
      'External audit and review',
    ],
  },
  {
    title: 'Policies we follow',
    icon: ShieldCheck,
    intro: 'We follow policies that ensure safeguarding, ethics and responsible use of resources.',
    points: [
      { label: 'Safeguarding and child protection', to: '/safeguarding' },
      { label: 'Data privacy and protection', to: '/privacy' },
      { label: 'Financial management policy', to: '/reports' },
    ],
  },
  {
    title: 'How we make decisions',
    icon: Scale,
    intro: 'Our decisions are informed by data, community needs and our long-term vision for lasting impact.',
    points: [
      'Evidence-based planning',
      'Community consultation',
      'Continuous learning',
    ],
  },
]
</script>

<template>
  <section
    class="account-govern"
    aria-label="Governance"
  >
    <div class="container account-govern__grid">
      <article
        v-for="column in columns"
        :key="column.title"
      >
        <component
          :is="column.icon"
          :size="22"
          :stroke-width="1.7"
          aria-hidden="true"
        />

        <h2>{{ column.title }}</h2>

        <p>{{ column.intro }}</p>

        <ul>
          <li
            v-for="point in column.points"
            :key="typeof point === 'string' ? point : point.label"
          >
            <Check
              :size="14"
              :stroke-width="2.2"
              aria-hidden="true"
            />

            <NuxtLink
              v-if="typeof point !== 'string'"
              :to="point.to"
            >
              {{ point.label }}
            </NuxtLink>

            <span v-else>{{ point }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.account-govern {
  padding: 8px 0 36px;

  background: var(--color-white);
}

.account-govern__grid {
  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 14px;
}

.account-govern article {
  padding: 20px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.account-govern article > svg {
  color: var(--color-teal-600);
}

.account-govern h2 {
  margin-top: 12px;

  font-family: var(--font-sans);
  font-size: 1.15rem;
  font-weight: 700;

  letter-spacing: 0;
}

.account-govern article > p {
  margin-top: 8px;

  font-size: var(--text-small);

  line-height: 1.5;
}

.account-govern ul {
  margin-top: 14px;

  display: grid;

  gap: 8px;
}

.account-govern li {
  display: flex;
  align-items: flex-start;

  gap: 8px;

  color: var(--color-text-primary);

  font-size: var(--text-small);
}

.account-govern li svg {
  flex-shrink: 0;

  margin-top: 3px;

  color: var(--color-teal-600);
}

.account-govern a {
  color: var(--color-blue-600);

  font-weight: 650;
}

.account-govern a:hover {
  text-decoration: underline;
}

@media (max-width: 800px) {
  .account-govern__grid {
    grid-template-columns: 1fr;
  }
}
</style>
