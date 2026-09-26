<script setup lang="ts">
import {
  Lock,
  Mail,
  ShieldCheck,
  Target,
} from 'lucide-vue-next'

const rails = [
  {
    title: 'Secure payment rails',
    description: 'Processed by trusted partners. This page does not store card or wallet details.',
    icon: ShieldCheck,
  },
  {
    title: 'Clear confirmation',
    description: 'You’ll receive a reference and receipt after payment, once checkout is live.',
    icon: Mail,
  },
  {
    title: 'Real impact',
    description: 'Gifts support the complete learning system, not just devices.',
    icon: Target,
  },
  {
    title: 'Your privacy',
    description: 'We never sell your data. You choose what we share.',
    icon: Lock,
  },
]
</script>

<template>
  <section
    class="donate-rails"
    aria-label="How giving is handled"
  >
    <ul class="container">
      <li
        v-for="rail in rails"
        :key="rail.title"
      >
        <component
          :is="rail.icon"
          :size="20"
          :stroke-width="1.7"
          aria-hidden="true"
        />

        <div>
          <h2>{{ rail.title }}</h2>
          <p>{{ rail.description }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.donate-rails {
  padding: 28px 0;

  background: var(--color-white);

  border-bottom: 1px solid var(--color-border);
}

.donate-rails ul {
  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 18px;
}

.donate-rails li {
  display: flex;
  align-items: flex-start;

  gap: 10px;
}

.donate-rails svg {
  flex-shrink: 0;

  color: var(--color-blue-600);
}

.donate-rails h2 {
  font-family: var(--font-sans);
  font-size: var(--text-small);
  font-weight: 700;

  letter-spacing: 0;
}

.donate-rails p {
  margin-top: 4px;

  font-size: var(--text-caption);

  line-height: 1.4;
}

@media (max-width: 900px) {
  .donate-rails ul {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .donate-rails ul {
    grid-template-columns: 1fr;
  }
}
</style>
