<script setup lang="ts">
import {
  ArrowRight,
  Heart,
  TrendingUp,
  UserRound,
  UsersRound,
} from 'lucide-vue-next'

const results = [
  {
    value: '50+',
    label: 'Learners reached',
    description: 'Students are accessing curriculum-aligned content in core subjects.',
    icon: UsersRound,
  },
  {
    value: '2',
    label: 'Teachers prepared',
    description: 'Champion Teachers trained and using the hub to lead interactive lessons.',
    icon: UserRound,
  },
  {
    value: '100%',
    label: 'Want more digital learning',
    description: 'Every respondent said they want more technology-enhanced learning in class.',
    icon: Heart,
  },
  {
    value: '90%',
    label: 'Report greater confidence',
    description: 'Learners felt more confident in their understanding after using digital resources.',
    icon: TrendingUp,
  },
]
</script>

<template>
  <section
    id="outcomes"
    class="impact-results"
    aria-labelledby="impact-results-title"
  >
    <div class="container">
      <p class="eyebrow">
        Four early results that matter
      </p>

      <h2
        id="impact-results-title"
        class="sr-only"
      >
        Four early results that matter
      </h2>

      <ul class="impact-results__grid">
        <li
          v-for="result in results"
          :key="result.label"
        >
          <article>
            <span>
              <component
                :is="result.icon"
                :size="20"
                :stroke-width="1.8"
                aria-hidden="true"
              />
            </span>

            <strong>{{ result.value }}</strong>

            <h3>{{ result.label }}</h3>

            <p>{{ result.description }}</p>
          </article>
        </li>
      </ul>

      <p class="impact-results__note">
        Self-reported learner feedback from a post-session survey.

        <a href="#methodology">
          See sample questions and methodology

          <ArrowRight
            :size="14"
            :stroke-width="2"
            aria-hidden="true"
          />
        </a>
      </p>
    </div>
  </section>
</template>

<style scoped>
.impact-results {
  padding: 36px 0 20px;

  scroll-margin-top: 120px;

  background: var(--color-white);
}

.impact-results__grid {
  margin-top: 18px;

  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 14px;
}

.impact-results article {
  height: 100%;

  padding: 20px 18px 22px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.impact-results article span {
  width: 40px;
  height: 40px;

  display: grid;
  place-items: center;

  color: var(--color-blue-600);

  background: var(--color-blue-100);

  border-radius: 50%;
}

.impact-results strong {
  display: block;

  margin-top: 14px;

  color: var(--color-text-primary);

  font-family: var(--font-serif);
  font-size: 2.4rem;
  font-weight: 550;

  line-height: 1;
}

.impact-results h3 {
  margin-top: 8px;

  font-family: var(--font-sans);
  font-size: var(--text-ui);
  font-weight: 700;

  line-height: 1.3;

  letter-spacing: 0;
}

.impact-results p {
  margin-top: 8px;

  font-size: var(--text-small);

  line-height: 1.45;
}

.impact-results__note {
  margin-top: 16px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 8px 14px;

  color: var(--color-text-muted);

  font-size: var(--text-small);
}

.impact-results__note a {
  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-weight: 650;
}

.impact-results__note a:hover {
  text-decoration: underline;
}

@media (max-width: 1000px) {
  .impact-results__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .impact-results__grid {
    grid-template-columns: 1fr;
  }
}
</style>
