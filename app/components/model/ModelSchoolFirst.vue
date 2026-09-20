<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const checks = [
  {
    title: 'Leadership commitment',
    description: 'School leaders understand and support the vision.',
    src: '/images/model/school-leadership.png',
    alt: 'School leaders and a programme officer reviewing documents at a classroom desk.',
    position: '50% 32%',
  },
  {
    title: 'Teacher readiness',
    description: 'Teachers are ready to learn, lead and integrate.',
    src: '/images/model/teacher-readiness.png',
    alt: 'Three teachers planning a lesson together around a laptop.',
    position: '50% 28%',
  },
  {
    title: 'Classroom suitability',
    description: 'Space, security and power are assessed and prepared.',
    src: '/images/model/classroom-suitability.png',
    alt: 'Two staff checking power and classroom space with notebooks in hand.',
    position: '38% 28%',
  },
  {
    title: 'Curriculum needs',
    description: 'We understand the subjects and topics that matter most.',
    src: '/images/model/curriculum-needs.png',
    alt: 'A teacher reviewing curriculum books and lesson plans at her desk.',
    position: '50% 30%',
  },
  {
    title: 'Local support capacity',
    description: 'Communities and partners help sustain the hub.',
    src: '/images/model/local-support.png',
    alt: 'Community members and school leaders meeting around a classroom table.',
    position: '50% 38%',
  },
]
</script>

<template>
  <section
    id="model-school-first"
    class="model-school"
    aria-labelledby="model-school-title"
  >
    <div class="container model-school__inner">
      <div class="model-school__intro">
        <p class="model-school__number">
          02
        </p>

        <h2
          id="model-school-title"
          class="model-school__title"
        >
          The model begins<br>
          with a school—<br>
          not a device.
        </h2>

        <p class="model-school__lede">
          We assess readiness in partnership with
          school leaders to ensure the hub will be
          used, protected and sustained.
        </p>

        <NuxtLink
          to="/contact"
          class="model-school__link"
        >
          Readiness assessment framework

          <ArrowRight
            :size="13"
            :stroke-width="2.2"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>

      <ul class="model-school__grid">
        <li
          v-for="check in checks"
          :key="check.title"
        >
          <article class="school-check">
            <div class="school-check__media">
              <img
                :src="check.src"
                :alt="check.alt"
                :style="{ objectPosition: check.position }"
                width="960"
                height="720"
                loading="lazy"
                class="school-check__image"
              >
            </div>

            <h3 class="school-check__title">
              {{ check.title }}
            </h3>

            <p class="school-check__description">
              {{ check.description }}
            </p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.model-school {
  scroll-margin-top: 132px;

  padding: 8px 0 32px;

  background: #f6f9fe;
}

.model-school__inner {
  display: grid;
  grid-template-columns: minmax(200px, 248px) minmax(0, 1fr);
  align-items: start;
  gap: 28px 32px;

  padding-top: 20px;
  padding-bottom: 12px;
}

.model-school__intro {
  padding-top: 2px;
}

.model-school__number {
  width: 24px;
  height: 24px;

  display: grid;
  place-items: center;

  color: var(--color-blue-600);

  background: var(--color-white);

  border: 1px solid #b8cff5;
  border-radius: 50%;

  font-family: var(--font-sans);
  font-size: 0.6875rem;
  font-weight: 700;
  line-height: 1;
}

.model-school__title {
  margin-top: 10px;

  color: var(--color-text-primary);

  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 2vw, 1.75rem);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -0.032em;
}

.model-school__lede {
  max-width: 28ch;

  margin-top: 12px;

  color: var(--color-text-secondary);

  font-family: var(--font-sans);
  font-size: 0.6875rem;
  line-height: 1.55;
}

.model-school__link {
  margin-top: 14px;

  display: inline-flex;
  align-items: center;
  gap: 6px;

  color: var(--color-blue-600);

  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 650;
  line-height: 1;
  white-space: nowrap;
}

.model-school__link:hover {
  color: var(--color-blue-500);
}

.model-school__grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px 12px;

  margin: 0;
  padding: 0;

  list-style: none;
}

.school-check {
  min-width: 0;
}

.school-check__media {
  overflow: hidden;

  aspect-ratio: 1 / 1;

  background: var(--color-surface-blue);

  border-radius: var(--radius-md);
}

.school-check__image {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  filter:
    saturate(0.88)
    contrast(0.97)
    brightness(1.02);
}

.school-check__title {
  max-width: 9.5em;

  min-height: 2.6em;

  margin-top: 10px;

  color: var(--color-text-primary);

  font-family: var(--font-sans);
  font-size: 0.6875rem;
  font-weight: 700;
  line-height: 1.3;
}

.school-check__description {
  max-width: 16em;

  margin-top: 4px;

  color: var(--color-text-secondary);

  font-family: var(--font-sans);
  font-size: 0.625rem;
  line-height: 1.45;
}

@media (max-width: 1100px) {
  .model-school__inner {
    grid-template-columns: minmax(180px, 220px) minmax(0, 1fr);
    gap: 24px;
  }

  .model-school__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px 12px;
  }
}

@media (max-width: 800px) {
  .model-school {
    padding: 8px 0 32px;
  }

  .model-school__inner {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .model-school__lede {
    max-width: 42ch;
  }

  .model-school__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .model-school__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .school-check__media {
    aspect-ratio: 16 / 10;
  }

  .school-check__title {
    min-height: 0;
    max-width: none;
  }
}
</style>
