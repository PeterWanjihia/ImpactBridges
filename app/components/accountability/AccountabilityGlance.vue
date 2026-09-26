<script setup lang="ts">
import {
  GraduationCap,
  Laptop,
  MapPin,
  School,
  UsersRound,
} from 'lucide-vue-next'

const stats = [
  { value: '6', label: 'Hubs funded', icon: School },
  { value: '1', label: 'Hub deployed', icon: MapPin },
  { value: '2', label: 'Schools in preparation', icon: School },
  { value: '38', label: 'Devices committed', icon: Laptop },
  { value: '14', label: 'Teachers trained and supported', icon: GraduationCap },
  { value: '1,250+', label: 'Learners reached', icon: UsersRound },
]
</script>

<template>
  <section
    class="account-glance"
    aria-labelledby="account-glance-title"
  >
    <div class="container">
      <h2 id="account-glance-title">
        Our impact at a glance
      </h2>

      <ul>
        <li
          v-for="stat in stats"
          :key="stat.label"
        >
          <component
            :is="stat.icon"
            :size="22"
            :stroke-width="1.6"
            aria-hidden="true"
          />

          <strong>{{ stat.value }}</strong>

          <span>{{ stat.label }}</span>
        </li>
      </ul>

      <p>Data as of May 2025. Updated quarterly.</p>
    </div>
  </section>
</template>

<style scoped>
.account-glance {
  padding: 12px 0 40px;

  background: var(--color-white);
}

.account-glance h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.account-glance ul {
  margin-top: 20px;

  display: grid;

  grid-template-columns: repeat(6, minmax(0, 1fr));

  gap: 12px;
}

.account-glance li {
  padding: 16px 10px;

  display: grid;
  justify-items: center;

  gap: 6px;

  text-align: center;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.account-glance svg {
  color: var(--color-blue-600);
}

.account-glance strong {
  color: var(--color-text-primary);

  font-family: var(--font-serif);
  font-size: 1.7rem;
  font-weight: 550;

  line-height: 1;
}

.account-glance span,
.account-glance > .container > p {
  color: var(--color-text-secondary);

  font-size: var(--text-caption);

  line-height: 1.35;
}

.account-glance > .container > p {
  margin-top: 12px;
}

@media (max-width: 1000px) {
  .account-glance ul {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .account-glance ul {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
