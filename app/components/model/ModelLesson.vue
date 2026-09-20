<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const lessonSteps = [
  {
    number: '1',
    title: 'Prepare',
    description: 'Teacher selects a resource and plans the lesson.',
    image: '/images/model/lesson-prepare.png',
    alt: 'Teacher preparing a digital lesson on a laptop.',
  },
  {
    number: '2',
    title: 'Introduce',
    description: 'Connect to prior knowledge and set the learning goal.',
    image: '/images/model/lesson-introduce.png',
    alt: 'Teacher introducing a lesson using projected learning content.',
  },
  {
    number: '3',
    title: 'Explore',
    description: 'Learners interact with content and simulations.',
    image: '/images/model/lesson-explore.png',
    alt: 'Learners exploring digital educational content together.',
  },
  {
    number: '4',
    title: 'Discuss',
    description: 'Learners share, ask questions and reflect.',
    image: '/images/model/lesson-discuss.png',
    alt: 'Learners discussing a classroom activity together.',
  },
  {
    number: '5',
    title: 'Reflect',
    description: 'Teacher reinforces key concepts and next steps.',
    image: '/images/model/lesson-reflect.png',
    alt: 'Learner reflecting on the lesson and writing in a notebook.',
  },
]
</script>

<template>
  <section
    id="lesson"
    class="model-lesson"
    aria-labelledby="model-lesson-title"
  >
    <div class="container model-lesson__inner">
      <div class="model-lesson__intro">
        <div class="model-lesson__marker">
          <span class="model-lesson__number">
            06
          </span>

          <span
            class="model-lesson__marker-line"
            aria-hidden="true"
          />
        </div>

        <h2
          id="model-lesson-title"
          class="model-lesson__title"
        >
          What one lesson<br>
          looks like in<br>
          practice.
        </h2>

        <p class="model-lesson__description">
          Technology supports the lesson.<br>
          The teacher leads it.
        </p>

        <NuxtLink
          to="/stories"
          class="model-lesson__link"
        >
          Watch a lesson in action

          <ArrowRight
            :size="14"
            :stroke-width="2.2"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>

      <div class="model-lesson__steps">
        <article
          v-for="step in lessonSteps"
          :key="step.number"
          class="lesson-step"
        >
          <header class="lesson-step__header">
            <div class="lesson-step__number">
              {{ step.number }}
            </div>

            <h3 class="lesson-step__title">
              {{ step.title }}
            </h3>
          </header>

          <div class="lesson-step__media">
            <img
              :src="step.image"
              :alt="step.alt"
              class="lesson-step__image"
            >
          </div>

          <p class="lesson-step__description">
            {{ step.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.model-lesson {
  overflow: hidden;

  scroll-margin-top: 132px;

  background:
    linear-gradient(
      180deg,
      var(--color-white) 0%,
      var(--color-white) 74%,
      #fafcff 100%
    );

  border-bottom: 1px solid rgb(222 230 241 / 0.78);
}

.model-lesson__inner {
  display: grid;
  grid-template-columns: minmax(196px, 228px) minmax(0, 1fr);
  align-items: start;
  gap: 20px 24px;

  padding-top: 22px;
  padding-bottom: 22px;
}

.model-lesson__intro {
  padding-top: 4px;
}

.model-lesson__marker {
  display: flex;
  align-items: center;
  gap: 10px;
}

.model-lesson__number {
  width: 24px;
  height: 24px;

  flex: 0 0 auto;

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

.model-lesson__marker-line {
  width: 28px;
  height: 1px;

  background: #bdd3f7;
}

.model-lesson__title {
  margin-top: 12px;

  color: var(--color-text-primary);

  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 2.1vw, 1.85rem);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -0.032em;
}

.model-lesson__description {
  max-width: 28ch;

  margin-top: 12px;

  color: var(--color-text-secondary);

  font-family: var(--font-sans);
  font-size: 0.8125rem;
  line-height: 1.5;
}

.model-lesson__link {
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

.model-lesson__link:hover {
  color: var(--color-blue-500);
}

.model-lesson__steps {
  min-width: 0;

  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
}

.lesson-step {
  min-width: 0;

  overflow: hidden;

  display: flex;
  flex-direction: column;

  background:
    linear-gradient(
      180deg,
      var(--color-white) 0%,
      #fbfdff 100%
    );

  border: 1px solid #dfe8f5;
  border-radius: var(--radius-md);
}

.lesson-step__header {
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 12px 8px;
}

.lesson-step__number {
  width: 28px;
  height: 28px;

  flex: 0 0 auto;

  display: grid;
  place-items: center;

  color: var(--color-blue-600);

  background: #edf4ff;

  border: 1px solid #d1e0fa;
  border-radius: 50%;

  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 750;
  line-height: 1;
}

.lesson-step__title {
  color: #174fc5;

  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.15;
}

.lesson-step__media {
  width: calc(100% - 12px);
  height: 132px;

  margin: 0 6px;

  overflow: hidden;

  background: #e9eef5;

  border-radius: 8px;
}

.lesson-step__image {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
  object-position: center;

  filter:
    saturate(0.9)
    contrast(0.98);

  transition: transform var(--transition-base);
}

.lesson-step:hover .lesson-step__image {
  transform: scale(1.025);
}

.lesson-step__description {
  margin: 10px 12px 12px;

  color: var(--color-text-secondary);

  font-family: var(--font-sans);
  font-size: 0.75rem;
  line-height: 1.45;
}

@media (max-width: 1180px) {
  .model-lesson__inner {
    grid-template-columns: minmax(176px, 200px) minmax(0, 1fr);
    gap: 16px 20px;
  }

  .lesson-step__media {
    height: 120px;
  }
}

@media (max-width: 900px) {
  .model-lesson__inner {
    grid-template-columns: 1fr;
    gap: 16px;

    padding-top: 20px;
    padding-bottom: 22px;
  }

  .model-lesson__intro {
    max-width: 36rem;
  }

  .model-lesson__description {
    max-width: 42ch;
  }

  .model-lesson__steps {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .lesson-step__media {
    height: 128px;
  }
}

@media (max-width: 580px) {
  .model-lesson__steps {
    grid-template-columns: 1fr;
  }

  .lesson-step {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: auto auto;
    align-items: start;
  }

  .lesson-step__header {
    grid-column: 1 / -1;
  }

  .lesson-step__media {
    grid-column: 1 / -1;

    width: calc(100% - 12px);
    height: 148px;
  }

  .lesson-step__description {
    grid-column: 1 / -1;
  }
}
</style>
