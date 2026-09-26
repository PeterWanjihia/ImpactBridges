<script setup lang="ts">
import {
  ArrowRight,
  BookOpen,
  Heart,
  School,
  TrendingUp,
  UserRound,
  UsersRound,
} from 'lucide-vue-next'

const findings = [
  {
    value: '1',
    label: 'Learning hub implemented',
    icon: School,
  },
  {
    value: '2',
    label: 'Champion teachers trained',
    icon: UserRound,
  },
  {
    value: '58+',
    label: 'learners reached',
    icon: UsersRound,
  },
  {
    value: '82%',
    label: 'greater learner engagement',
    icon: TrendingUp,
  },
  {
    value: '90%',
    label: 'greater learner confidence',
    icon: Heart,
  },
  {
    value: '78%',
    label: 'mathematics scores in end-of-term assessments',
    icon: BookOpen,
  },
]
</script>

<template>
  <section
    id="lives"
    class="about-lives"
    aria-labelledby="about-lives-title"
  >
    <div class="container">
      <header class="about-lives__header">
        <h2 id="about-lives-title">
          The evidence. Real lives.
        </h2>
      </header>

      <div class="about-lives__grid">
        <article class="findings-card">
          <h3>Early pilot findings</h3>

          <p class="findings-card__period">
            April – June 2026
          </p>

          <ul>
            <li
              v-for="finding in findings"
              :key="finding.label"
            >
              <component
                :is="finding.icon"
                :size="16"
                :stroke-width="1.8"
                aria-hidden="true"
              />

              <strong>{{ finding.value }}</strong>

              <span>{{ finding.label }}</span>
            </li>
          </ul>

          <NuxtLink to="/impact">
            See our methodology

            <ArrowRight
              :size="14"
              :stroke-width="2"
              aria-hidden="true"
            />
          </NuxtLink>
        </article>

        <article class="voice-card">
          <p class="voice-card__kicker">
            From a learner
          </p>

          <blockquote>
            <p>“I feel like I can now finish my schooling.”</p>
          </blockquote>

          <div
            class="voice-card__wave"
            aria-hidden="true"
          >
            <span
              v-for="bar in 18"
              :key="bar"
              :style="{ height: `${8 + ((bar * 17) % 16)}px` }"
            />
          </div>

          <p class="voice-card__name">
            Namulava, P7 student
          </p>

          <img
            src="/images/home/evidence-student.png"
            alt="Namulava, a P7 student, writing at her desk."
            width="640"
            height="480"
          >

          <NuxtLink to="/stories/namulava">
            Read full story

            <ArrowRight
              :size="14"
              :stroke-width="2"
              aria-hidden="true"
            />
          </NuxtLink>
        </article>

        <article class="voice-card">
          <p class="voice-card__kicker">
            From a Champion Teacher
          </p>

          <blockquote>
            <p>
              “The hub has changed how I teach. Students participate
              more and understand better.”
            </p>
          </blockquote>

          <p class="voice-card__name">
            Teacher Judith, Champion Teacher
          </p>

          <img
            src="/images/model/teacher-champion.png"
            alt="A champion teacher leading her class with a tablet in hand."
            width="640"
            height="480"
          >
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-lives {
  padding: 72px 0;

  scroll-margin-top: 120px;

  background: var(--color-white);
}

.about-lives__header {
  max-width: 640px;
}

.about-lives__header h2 {
  margin-top: 12px;

  font-size: clamp(2rem, 3.4vw, 2.7rem);
}

.about-lives__grid {
  margin-top: 28px;

  display: grid;

  grid-template-columns: 0.9fr 1fr 1fr;

  gap: 16px;

  align-items: stretch;
}

.findings-card,
.voice-card {
  padding: 22px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.findings-card h3,
.voice-card__kicker {
  color: var(--color-text-primary);

  font-family: var(--font-sans);
  font-size: var(--text-ui);
  font-weight: 700;

  letter-spacing: 0;
}

.findings-card__period {
  margin-top: 4px;

  color: var(--color-text-muted);

  font-size: var(--text-caption);
  font-weight: 600;
}

.findings-card ul {
  margin-top: 18px;

  display: grid;

  gap: 12px;
}

.findings-card li {
  display: grid;

  grid-template-columns: 18px auto 1fr;

  gap: 8px;

  align-items: baseline;

  color: var(--color-text-secondary);

  font-size: var(--text-small);

  line-height: 1.35;
}

.findings-card svg {
  align-self: center;

  color: var(--color-blue-600);
}

.findings-card strong {
  color: var(--color-text-primary);

  font-family: var(--font-serif);
  font-size: 1.35rem;
  font-weight: 550;
}

.findings-card a,
.voice-card a {
  margin-top: 18px;

  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-size: var(--text-small);
  font-weight: 650;
}

.findings-card a:hover,
.voice-card a:hover {
  text-decoration: underline;
}

.voice-card__kicker {
  color: var(--color-blue-600);

  font-size: var(--text-caption);

  letter-spacing: 0.06em;

  text-transform: uppercase;
}

.voice-card blockquote p {
  margin-top: 12px;

  color: var(--color-text-primary);

  font-family: var(--font-serif);
  font-size: clamp(1.35rem, 2vw, 1.7rem);
  font-style: italic;
  font-weight: 450;

  line-height: 1.25;
}

.voice-card__wave {
  margin-top: 14px;

  display: flex;
  align-items: center;

  gap: 3px;

  height: 24px;
}

.voice-card__wave span {
  width: 3px;

  background: var(--color-blue-500);

  border-radius: 99px;

  opacity: 0.75;
}

.voice-card__name {
  margin-top: 10px;

  color: var(--color-text-secondary);

  font-size: var(--text-small);
  font-weight: 650;
}

.voice-card img {
  display: block;

  width: 100%;
  height: 210px;

  margin-top: 16px;

  object-fit: cover;

  border-radius: var(--radius-md);
}

@media (max-width: 1000px) {
  .about-lives__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .about-lives {
    padding: 48px 0;
  }
}
</style>
