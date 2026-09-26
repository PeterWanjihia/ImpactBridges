<script setup lang="ts">
import {
  ArrowRight,
  Laptop,
  Monitor,
  Projector,
  Router,
  Server,
  Smartphone,
} from 'lucide-vue-next'
import type { Component } from 'vue'

type Need = {
  title: string
  status: string
  summary: string
  detail: string
  tone: 'needed' | 'conditional' | 'no'
  icon: Component
}

const needs: Need[] = [
  {
    title: 'Business-class laptops',
    status: 'Actively needed',
    summary: 'For teachers and student access to offline resources.',
    detail: 'Recent business laptops that can run classroom use, with a charger and a cleared account.',
    tone: 'needed',
    icon: Laptop,
  },
  {
    title: 'Mini PCs',
    status: 'Actively needed',
    summary: 'For offline content delivery and hub management.',
    detail: 'Small, low-power computers that can sit in a classroom hub and be serviced locally.',
    tone: 'needed',
    icon: Server,
  },
  {
    title: 'Portable projectors',
    status: 'Actively needed',
    summary: 'For whole-class instruction and presentations.',
    detail: 'Working projectors with cables and a lamp or light source that still has useful life.',
    tone: 'needed',
    icon: Projector,
  },
  {
    title: 'Monitors and displays',
    status: 'Conditionally considered',
    summary: 'For small-group or teacher use where suitable.',
    detail: 'Only when a school can use and power them. A display without a working computer is not enough.',
    tone: 'conditional',
    icon: Monitor,
  },
  {
    title: 'Networking equipment',
    status: 'Conditionally considered',
    summary: 'For local offline access and content sharing.',
    detail: 'Simple switches or access points that can serve a classroom without a permanent internet link.',
    tone: 'conditional',
    icon: Router,
  },
  {
    title: 'Smartphones',
    status: 'Not currently helpful',
    summary: 'Not part of the current hub model and support plan.',
    detail: 'Phones are hard to manage, easy to lose, and not how these classrooms are taught. Please do not send them.',
    tone: 'no',
    icon: Smartphone,
  },
]

const open = ref<string | null>(null)
</script>

<template>
  <section
    class="equipment-needs"
    aria-labelledby="equipment-needs-title"
  >
    <div class="container">
      <header>
        <div>
          <h2 id="equipment-needs-title">
            What we currently need
          </h2>

          <p>Our needs change as schools are assessed and hubs are planned.</p>
        </div>

        <a href="#guidelines">
          See full guidelines

          <ArrowRight
            :size="14"
            :stroke-width="2"
            aria-hidden="true"
          />
        </a>
      </header>

      <ul>
        <li
          v-for="need in needs"
          :key="need.title"
        >
          <article>
            <component
              :is="need.icon"
              :size="22"
              :stroke-width="1.7"
              aria-hidden="true"
            />

            <h3>{{ need.title }}</h3>

            <p :class="`is-${need.tone}`">
              {{ need.status }}
            </p>

            <p>{{ need.summary }}</p>

            <p v-if="open === need.title">
              {{ need.detail }}
            </p>

            <button
              type="button"
              :aria-expanded="open === need.title"
              @click="open = open === need.title ? null : need.title"
            >
              {{ open === need.title ? 'Hide details' : 'View details' }}

              <ArrowRight
                :size="14"
                :stroke-width="2"
                aria-hidden="true"
              />
            </button>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.equipment-needs {
  padding: 56px 0 24px;

  background: var(--color-white);
}

.equipment-needs header {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  justify-content: space-between;

  gap: 12px;
}

.equipment-needs h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.equipment-needs header p {
  margin-top: 6px;
}

.equipment-needs header a,
.equipment-needs button {
  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-family: var(--font-sans);
  font-size: var(--text-small);
  font-weight: 650;
}

.equipment-needs header a:hover,
.equipment-needs button:hover {
  text-decoration: underline;
}

.equipment-needs ul {
  margin-top: 22px;

  display: grid;

  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 14px;
}

.equipment-needs article {
  height: 100%;

  padding: 18px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.equipment-needs svg {
  color: var(--color-blue-600);
}

.equipment-needs h3 {
  margin-top: 12px;

  font-family: var(--font-sans);
  font-size: 1.05rem;
  font-weight: 700;

  letter-spacing: 0;
}

.equipment-needs article > p:nth-of-type(1) {
  margin-top: 8px;

  font-size: var(--text-caption);
  font-weight: 700;
}

.is-needed {
  color: var(--color-teal-600);
}

.is-conditional {
  color: var(--color-warning);
}

.is-no {
  color: var(--color-danger);
}

.equipment-needs article > p:nth-of-type(2),
.equipment-needs article > p:nth-of-type(3) {
  margin-top: 8px;

  font-size: var(--text-small);

  line-height: 1.45;
}

.equipment-needs button {
  margin-top: 12px;
}

@media (max-width: 900px) {
  .equipment-needs ul {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .equipment-needs ul {
    grid-template-columns: 1fr;
  }
}
</style>
