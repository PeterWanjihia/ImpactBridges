<script setup lang="ts">
import { ArrowRight, Check } from 'lucide-vue-next'

const questions = [
  {
    question: 'Will teachers continue using the hub across full terms?',
    answer: 'We are tracking adoption over time.',
  },
  {
    question: 'Will peer adoption grow as more teachers see improved results?',
    answer: 'We are measuring how Champion Teachers influence others.',
  },
  {
    question: 'Will the revised hardware remain reliable long-term?',
    answer: 'We are monitoring uptime and support needs.',
  },
  {
    question: 'Will learner gains persist and deepen over time?',
    answer: 'We are introducing assessments to learn more.',
  },
]

const completed = [
  '1 school hub',
  '2 Champion Teachers',
  '50+ learners reached',
  'Early data collected',
]

const nextTargets = [
  '10 additional hubs',
  'Expanded teacher development',
  'Full impact evaluation',
  'Stronger evidence learning',
]
</script>

<template>
  <section
    id="methodology"
    class="impact-learning"
    aria-labelledby="impact-learning-title"
  >
    <div class="container impact-learning__grid">
      <div class="learning-panel">
        <p class="learning-panel__eyebrow">
          What we are still learning
        </p>

        <h2 id="impact-learning-title">
          Open questions from the first classroom.
        </h2>

        <ul>
          <li
            v-for="item in questions"
            :key="item.question"
          >
            <h3>{{ item.question }}</h3>
            <p>{{ item.answer }}</p>
          </li>
        </ul>

        <NuxtLink to="/reports">
          Read our methodology and limitations

          <ArrowRight
            :size="14"
            :stroke-width="2"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>

      <aside
        class="progress-panel"
        aria-labelledby="impact-progress-title"
      >
        <p class="progress-panel__eyebrow">
          Progress toward the next chapter
        </p>

        <h2 id="impact-progress-title">
          Completed
        </h2>

        <ul>
          <li
            v-for="item in completed"
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

        <h3>Next target</h3>

        <ul class="progress-panel__next">
          <li
            v-for="item in nextTargets"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>

        <p>
          Targets are our north star. We will measure and share our progress.
        </p>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.impact-learning {
  padding: 20px 0 48px;

  scroll-margin-top: 120px;

  background: var(--color-white);
}

.impact-learning__grid {
  display: grid;

  grid-template-columns: 1.35fr 0.75fr;

  gap: 16px;

  align-items: stretch;
}

.learning-panel {
  padding: 28px;

  color: var(--color-white);

  background: var(--color-navy-950);

  border-radius: var(--radius-lg);
}

.learning-panel__eyebrow,
.progress-panel__eyebrow {
  color: var(--color-blue-500);

  font-family: var(--font-sans);
  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.learning-panel h2 {
  margin-top: 10px;

  color: var(--color-white);

  font-size: clamp(1.6rem, 2.4vw, 2rem);
}

.learning-panel ul {
  margin-top: 22px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 18px 22px;
}

.learning-panel h3 {
  color: var(--color-white);

  font-family: var(--font-sans);
  font-size: var(--text-ui);
  font-weight: 700;

  line-height: 1.35;

  letter-spacing: 0;
}

.learning-panel li p,
.progress-panel > p {
  margin-top: 6px;

  color: rgb(255 255 255 / 0.72);

  font-size: var(--text-small);

  line-height: 1.45;
}

.learning-panel a {
  margin-top: 22px;

  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-500);

  font-size: var(--text-small);
  font-weight: 650;
}

.learning-panel a:hover {
  text-decoration: underline;
}

.progress-panel {
  padding: 24px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.progress-panel__eyebrow {
  color: var(--color-blue-600);
}

.progress-panel h2,
.progress-panel h3 {
  margin-top: 14px;

  font-family: var(--font-sans);
  font-size: var(--text-ui);
  font-weight: 700;

  letter-spacing: 0;
}

.progress-panel ul {
  margin-top: 10px;

  display: grid;

  gap: 8px;
}

.progress-panel li {
  display: flex;
  align-items: center;

  gap: 8px;

  color: var(--color-text-primary);

  font-size: var(--text-small);
  font-weight: 600;
}

.progress-panel svg {
  color: var(--color-teal-600);
}

.progress-panel__next li::before {
  content: "";

  width: 7px;
  height: 7px;

  flex-shrink: 0;

  background: var(--color-blue-600);

  border-radius: 50%;
}

.progress-panel > p {
  margin-top: 16px;

  color: var(--color-text-secondary);
}

@media (max-width: 900px) {
  .impact-learning__grid,
  .learning-panel ul {
    grid-template-columns: 1fr;
  }
}
</style>
