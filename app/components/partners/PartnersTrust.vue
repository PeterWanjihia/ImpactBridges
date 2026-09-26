<script setup lang="ts">
import {
  Handshake,
  ShieldCheck,
  TrendingUp,
  UsersRound,
} from 'lucide-vue-next'

const points = [
  {
    title: 'Proven model',
    description: 'Teacher-led, offline-first learning hubs.',
    icon: UsersRound,
  },
  {
    title: 'Ready to scale',
    description: 'Standardised deployment with local ownership.',
    icon: TrendingUp,
  },
  {
    title: 'Accountable',
    description: 'Funds used effectively and reported transparently.',
    icon: ShieldCheck,
  },
  {
    title: 'Collaborative',
    description: 'We co-create solutions that fit your goals.',
    icon: Handshake,
  },
]
</script>

<template>
  <section
    class="partners-trust"
    aria-label="Why organisations partner with us"
  >
    <div class="container">
      <p>Trusted by organisations that care about real, lasting impact</p>

      <ul>
        <li
          v-for="point in points"
          :key="point.title"
        >
          <span>
            <component
              :is="point.icon"
              :size="20"
              :stroke-width="1.7"
              aria-hidden="true"
            />
          </span>

          <div>
            <h2>{{ point.title }}</h2>
            <p>{{ point.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.partners-trust {
  padding: 28px 0 8px;

  background: var(--color-white);
}

.partners-trust > .container > p {
  color: var(--color-text-muted);

  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.08em;

  text-align: center;

  text-transform: uppercase;
}

.partners-trust ul {
  margin-top: 22px;

  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 18px;
}

.partners-trust li {
  display: flex;
  align-items: flex-start;

  gap: 12px;
}

.partners-trust li > span {
  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  flex-shrink: 0;

  color: var(--color-blue-600);

  background: var(--color-blue-100);

  border-radius: 50%;
}

.partners-trust h2 {
  font-family: var(--font-sans);
  font-size: var(--text-ui);
  font-weight: 700;

  letter-spacing: 0;
}

.partners-trust li p {
  margin-top: 4px;

  font-size: var(--text-small);

  line-height: 1.4;
}

@media (max-width: 900px) {
  .partners-trust ul {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .partners-trust ul {
    grid-template-columns: 1fr;
  }
}
</style>
