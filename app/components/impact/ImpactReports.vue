<script setup lang="ts">
import {
  ArrowRight,
  FileText,
  FolderOpen,
} from 'lucide-vue-next'

const reports = [
  {
    title: 'Pilot Impact Summary',
    description: 'What we observed, what it means, and what comes next.',
    image: '/images/model/lesson-discuss.png',
    alt: 'Learners discussing a classroom activity.',
  },
  {
    title: 'Measurement Approach',
    description: 'How we collect, validate and use data responsibly.',
    image: '/images/model/curriculum-needs.png',
    alt: 'A teacher reviewing curriculum materials at her desk.',
  },
  {
    title: 'Latest Programme Update',
    description: 'Recent activities, refinements and upcoming milestones.',
    image: '/images/model/school-leadership.png',
    alt: 'School leaders reviewing programme documents together.',
  },
]
</script>

<template>
  <section
    id="reports"
    class="impact-reports"
    aria-labelledby="impact-reports-title"
  >
    <div class="container">
      <p class="eyebrow">
        Reports you can explore
      </p>

      <h2
        id="impact-reports-title"
        class="sr-only"
      >
        Reports you can explore
      </h2>

      <ul>
        <li
          v-for="report in reports"
          :key="report.title"
        >
          <article>
            <img
              :src="report.image"
              :alt="report.alt"
              width="640"
              height="360"
            >

            <h3>{{ report.title }}</h3>

            <p>{{ report.description }}</p>

            <NuxtLink to="/reports">
              <FileText
                :size="15"
                :stroke-width="1.8"
                aria-hidden="true"
              />

              View on the reports page
            </NuxtLink>
          </article>
        </li>

        <li>
          <article class="impact-reports__library">
            <span>
              <FolderOpen
                :size="22"
                :stroke-width="1.7"
                aria-hidden="true"
              />
            </span>

            <h3>View all reports and documents</h3>

            <p>
              Signed reports will be listed with dates when they are ready.
              Nothing here is a placeholder file.
            </p>

            <NuxtLink to="/reports">
              Go to the reports library

              <ArrowRight
                :size="14"
                :stroke-width="2"
                aria-hidden="true"
              />
            </NuxtLink>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.impact-reports {
  padding: 20px 0 56px;

  scroll-margin-top: 120px;

  background: var(--color-surface-soft);
}

.impact-reports ul {
  margin-top: 18px;

  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 14px;
}

.impact-reports article {
  height: 100%;

  overflow: hidden;

  background: var(--color-white);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.impact-reports img {
  display: block;

  width: 100%;
  height: 120px;

  object-fit: cover;
}

.impact-reports h3 {
  margin: 14px 16px 0;

  font-family: var(--font-sans);
  font-size: 1.02rem;
  font-weight: 700;

  line-height: 1.3;

  letter-spacing: 0;
}

.impact-reports p {
  margin: 8px 16px 0;

  font-size: var(--text-small);

  line-height: 1.45;
}

.impact-reports a {
  margin: 12px 16px 16px;

  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-size: var(--text-small);
  font-weight: 650;
}

.impact-reports a:hover {
  text-decoration: underline;
}

.impact-reports__library {
  padding: 20px 16px;

  display: flex;
  flex-direction: column;
}

.impact-reports__library span {
  width: 44px;
  height: 44px;

  display: grid;
  place-items: center;

  color: var(--color-blue-600);

  background: var(--color-blue-100);

  border-radius: 50%;
}

.impact-reports__library h3,
.impact-reports__library p,
.impact-reports__library a {
  margin-left: 0;
  margin-right: 0;
}

.impact-reports__library a {
  margin-top: auto;
}

@media (max-width: 1000px) {
  .impact-reports ul {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .impact-reports ul {
    grid-template-columns: 1fr;
  }
}
</style>
