<script setup lang="ts">
import {
  Check,
  Leaf,
  Lock,
  X,
} from 'lucide-vue-next'

const suitable = [
  'Good working condition and safe to use',
  'Meets minimum technical specifications',
  'Can be supported and repaired locally',
  'Includes essential accessories (chargers, cables)',
  'Ownership is clear and transferable',
  'Data is securely erased and locks removed',
  'Transport and repair are cost-effective',
]

const rejected = [
  'Non-functional or unsafe equipment',
  'Obsolete devices with no support path',
  'Devices locked to organisations or accounts',
  'Missing proprietary chargers or critical parts',
  'Equipment with recoverable data',
  'Large quantities shipped without approval',
  'Items that are uneconomical to transport',
]

const extraRejected = [
  'Smartphones and consumer tablets we cannot support',
  'Specialist kit no school can maintain',
  'Broken screens, missing batteries, or devices sold as spare parts',
]

const showAll = ref(false)
</script>

<template>
  <section
    id="guidelines"
    class="equipment-rules"
    aria-labelledby="equipment-rules-title"
  >
    <div class="container equipment-rules__grid">
      <article>
        <h2 id="equipment-rules-title">
          What makes equipment suitable
        </h2>

        <ul>
          <li
            v-for="item in suitable"
            :key="item"
          >
            <Check
              :size="15"
              :stroke-width="2.2"
              aria-hidden="true"
            />

            {{ item }}
          </li>
        </ul>

        <a href="#offer">
          Offer equipment that meets this
        </a>
      </article>

      <article>
        <h2>What we cannot accept</h2>

        <ul class="is-no">
          <li
            v-for="item in rejected"
            :key="item"
          >
            <X
              :size="15"
              :stroke-width="2.2"
              aria-hidden="true"
            />

            {{ item }}
          </li>

          <li
            v-for="item in (showAll ? extraRejected : [])"
            :key="item"
          >
            <X
              :size="15"
              :stroke-width="2.2"
              aria-hidden="true"
            />

            {{ item }}
          </li>
        </ul>

        <button
          type="button"
          :aria-expanded="showAll"
          @click="showAll = !showAll"
        >
          {{ showAll ? 'Hide the extra exclusions' : 'Full exclusion list' }}
        </button>
      </article>

      <article>
        <Lock
          :size="20"
          :stroke-width="1.7"
          aria-hidden="true"
        />

        <h2>Data security and ownership</h2>

        <p>
          Secure data erasure and proof of ownership are required before transfer of any equipment.
        </p>
      </article>

      <article>
        <Leaf
          :size="20"
          :stroke-width="1.7"
          aria-hidden="true"
        />

        <h2>Environmental responsibility</h2>

        <p>
          We do not accept equipment for disposal. We prioritise meaningful reuse and responsible end-of-life management.
        </p>

        <p class="equipment-rules__promise">
          Our commitment
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.equipment-rules {
  padding: 12px 0 40px;

  scroll-margin-top: 88px;

  background: var(--color-white);
}

.equipment-rules__grid {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 14px;
}

.equipment-rules article {
  padding: 20px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.equipment-rules h2 {
  font-family: var(--font-sans);
  font-size: 1.15rem;
  font-weight: 700;

  letter-spacing: 0;
}

.equipment-rules ul {
  margin-top: 14px;

  display: grid;

  gap: 8px;
}

.equipment-rules li {
  display: flex;
  align-items: flex-start;

  gap: 8px;

  color: var(--color-text-primary);

  font-size: var(--text-small);

  line-height: 1.4;
}

.equipment-rules li svg {
  flex-shrink: 0;

  margin-top: 2px;

  color: var(--color-teal-600);
}

.is-no svg {
  color: var(--color-danger);
}

.equipment-rules a,
.equipment-rules button {
  margin-top: 14px;

  color: var(--color-blue-600);

  font-family: var(--font-sans);
  font-size: var(--text-small);
  font-weight: 650;
}

.equipment-rules a:hover,
.equipment-rules button:hover {
  text-decoration: underline;
}

.equipment-rules article > svg {
  color: var(--color-teal-600);
}

.equipment-rules article > p {
  margin-top: 10px;

  font-size: var(--text-small);

  line-height: 1.5;
}

.equipment-rules__promise {
  color: var(--color-teal-600);

  font-weight: 700;
}

@media (max-width: 800px) {
  .equipment-rules__grid {
    grid-template-columns: 1fr;
  }
}
</style>
