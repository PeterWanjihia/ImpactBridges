<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const steps = [
  {
    number: '1',
    title: 'School readiness',
    description: 'Leaders and teachers plan for success.',
    image: '/images/model/curriculum-needs.png',
    alt: 'A teacher reviewing curriculum plans.',
  },
  {
    number: '2',
    title: 'Equipment preparation',
    description: 'Devices are tested, configured and secured.',
    image: '/images/model/hub-kit.png',
    alt: 'Learning hub equipment laid out for preparation.',
  },
  {
    number: '3',
    title: 'Teacher training',
    description: 'Hands-on practice builds confidence.',
    image: '/images/model/teacher-readiness.png',
    alt: 'Teachers practising a lesson together.',
  },
  {
    number: '4',
    title: 'Installation day',
    description: 'The hub is set up and ready to use.',
    image: '/images/model/classroom-suitability.png',
    alt: 'Staff checking a classroom before installation.',
  },
  {
    number: '5',
    title: 'First lesson',
    description: 'Learners explore, ask questions and participate.',
    image: '/images/model/lesson-introduce.png',
    alt: 'A teacher introducing the first digital lesson.',
  },
  {
    number: '6',
    title: 'Follow-up and support',
    description: 'We check in, listen and help improve.',
    image: '/images/model/local-support.png',
    alt: 'School leaders and community members in a follow-up meeting.',
  },
]
</script>

<template>
  <section
    id="essay"
    class="stories-essay"
    aria-labelledby="stories-essay-title"
  >
    <div class="container">
      <header class="stories-essay__header">
        <h2 id="stories-essay-title">
          A hub enters a classroom
        </h2>

        <NuxtLink to="/our-model">
          See the full photo essay

          <ArrowRight
            :size="14"
            :stroke-width="2"
            aria-hidden="true"
          />
        </NuxtLink>
      </header>

      <ol>
        <li
          v-for="step in steps"
          :key="step.number"
        >
          <img
            :src="step.image"
            :alt="step.alt"
            width="480"
            height="320"
          >

          <p>
            <span>{{ step.number }}</span>
            {{ step.title }}
          </p>

          <p>{{ step.description }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.stories-essay {
  padding: 8px 0 48px;

  scroll-margin-top: 88px;

  background: var(--color-white);
}

.stories-essay__header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;

  gap: 12px;
}

.stories-essay__header h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.stories-essay__header a {
  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-size: var(--text-small);
  font-weight: 650;
}

.stories-essay__header a:hover {
  text-decoration: underline;
}

.stories-essay ol {
  margin-top: 18px;

  display: grid;

  grid-template-columns: repeat(6, minmax(0, 1fr));

  gap: 12px;
}

.stories-essay img {
  display: block;

  width: 100%;
  height: 110px;

  object-fit: cover;

  border-radius: var(--radius-md);
}

.stories-essay li > p:first-of-type {
  margin-top: 10px;

  display: flex;
  align-items: center;

  gap: 6px;

  color: var(--color-text-primary);

  font-size: var(--text-small);
  font-weight: 700;

  line-height: 1.3;
}

.stories-essay li span {
  width: 18px;
  height: 18px;

  display: grid;
  place-items: center;

  flex-shrink: 0;

  color: var(--color-white);

  background: var(--color-blue-600);

  border-radius: 50%;

  font-size: 11px;
}

.stories-essay li > p:last-child {
  margin-top: 4px;

  font-size: var(--text-caption);

  line-height: 1.4;
}

@media (max-width: 1000px) {
  .stories-essay ol {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .stories-essay ol {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
