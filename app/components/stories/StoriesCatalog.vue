<script setup lang="ts">
import {
  ArrowRight,
  Handshake,
  LayoutGrid,
  Play,
  School,
  UserRound,
  UsersRound,
  Presentation,
} from 'lucide-vue-next'
import type { Component } from 'vue'

type Story = {
  id: string
  filter: 'learners' | 'teachers' | 'classrooms' | 'communities' | 'partnerships'
  layout: 'feature' | 'pair' | 'tile' | 'wide'
  kicker: string
  title: string
  description: string
  meta: string
  image: string
  alt: string
  to: string
}

const filters: { id: string, label: string, icon: Component }[] = [
  { id: 'all', label: 'All stories', icon: LayoutGrid },
  { id: 'learners', label: 'Learners', icon: UserRound },
  { id: 'teachers', label: 'Teachers', icon: Presentation },
  { id: 'classrooms', label: 'Classrooms', icon: School },
  { id: 'communities', label: 'Communities', icon: UsersRound },
  { id: 'partnerships', label: 'Partnerships', icon: Handshake },
]

const stories: Story[] = [
  {
    id: 'learner',
    filter: 'learners',
    layout: 'feature',
    kicker: 'Learner story',
    title: '“Now I can see what the teacher is explaining.”',
    description: 'Digital lessons help one student understand science in a way she never could before.',
    meta: 'Video · 03:12',
    image: '/images/home/evidence-student.png',
    alt: 'A learner smiling at her desk.',
    to: '/stories/namulava',
  },
  {
    id: 'teacher',
    filter: 'teachers',
    layout: 'pair',
    kicker: 'Teacher story',
    title: 'From demonstration to confidence',
    description: 'How a Champion Teacher moved from learning the system to supporting colleagues.',
    meta: 'Article · 00:37',
    image: '/images/model/teacher-readiness.png',
    alt: 'Teachers planning a lesson together.',
    to: '/our-model#teachers',
  },
  {
    id: 'classroom',
    filter: 'classrooms',
    layout: 'tile',
    kicker: 'Classroom story',
    title: 'A lesson everyone wanted to join',
    description: 'Inside a primary class where participation and questions have grown.',
    meta: 'Photo story',
    image: '/images/model/lesson-explore.png',
    alt: 'Learners exploring a digital lesson together.',
    to: '/our-model#lesson',
  },
  {
    id: 'school',
    filter: 'classrooms',
    layout: 'tile',
    kicker: 'School story',
    title: 'Building a system that lasts',
    description: 'How school leaders prepared for the hub, and are embedding it into daily life.',
    meta: 'Article · 5 min read',
    image: '/images/model/school-leadership.png',
    alt: 'School leaders reviewing the programme together.',
    to: '/about',
  },
  {
    id: 'community',
    filter: 'communities',
    layout: 'tile',
    kicker: 'Community story',
    title: 'When the whole community shows up',
    description: 'Parents and leaders are proud of what their children are learning.',
    meta: 'Article · 4 min read',
    image: '/images/model/local-support.png',
    alt: 'Community members meeting with school leaders.',
    to: '/about#story',
  },
  {
    id: 'partnership',
    filter: 'partnerships',
    layout: 'wide',
    kicker: 'Partnership story',
    title: 'From donated laptops to real learning',
    description: 'How one corporate partner’s equipment donation became a functioning learning solution.',
    meta: 'Video · 02:58',
    image: '/images/model/hub-kit.png',
    alt: 'A learning hub kit prepared for a classroom.',
    to: '/corporate-partnerships',
  },
]

const active = ref('all')

const visible = computed(() =>
  active.value === 'all'
    ? stories
    : stories.filter(story => story.filter === active.value),
)

const showingAll = computed(() => active.value === 'all')
</script>

<template>
  <section
    id="stories"
    class="stories-catalog"
    aria-labelledby="stories-catalog-title"
  >
    <div class="container">
      <h2
        id="stories-catalog-title"
        class="sr-only"
      >
        Stories
      </h2>

      <div
        class="stories-catalog__filters"
        role="group"
        aria-label="Filter stories"
      >
        <button
          v-for="filter in filters"
          :key="filter.id"
          type="button"
          :aria-pressed="active === filter.id"
          :class="{ 'is-active': active === filter.id }"
          @click="active = filter.id"
        >
          <component
            :is="filter.icon"
            :size="15"
            :stroke-width="1.8"
            aria-hidden="true"
          />

          {{ filter.label }}
        </button>
      </div>

      <p class="stories-catalog__note">
        Real people. Real schools. Real change. All stories are shared with consent and respect.

        <NuxtLink to="/safeguarding">
          Read our storytelling principles

          <ArrowRight
            :size="14"
            :stroke-width="2"
            aria-hidden="true"
          />
        </NuxtLink>
      </p>

      <div
        class="stories-catalog__grid"
        :class="{ 'is-filtered': !showingAll }"
      >
        <article
          v-for="story in visible"
          :key="story.id"
          class="story-card"
          :class="showingAll ? `story-card--${story.layout}` : 'story-card--tile'"
        >
          <NuxtLink
            :to="story.to"
            class="story-card__media"
            :aria-label="`Read ${story.title}`"
          >
            <img
              :src="story.image"
              :alt="story.alt"
              width="960"
              height="640"
            >

            <span
              v-if="story.meta.startsWith('Video')"
              class="story-card__play"
              aria-hidden="true"
            >
              <Play
                :size="18"
                :stroke-width="2.2"
              />
            </span>
          </NuxtLink>

          <div class="story-card__body">
            <p>{{ story.kicker }}</p>

            <h3>{{ story.title }}</h3>

            <p class="story-card__description">
              {{ story.description }}
            </p>

            <p class="story-card__meta">
              {{ story.meta }}
            </p>

            <NuxtLink :to="story.to">
              Read the story

              <ArrowRight
                :size="14"
                :stroke-width="2"
                aria-hidden="true"
              />
            </NuxtLink>
          </div>
        </article>
      </div>

      <p
        v-if="!visible.length"
        class="stories-catalog__empty"
      >
        No stories in this group yet.
      </p>
    </div>
  </section>
</template>

<style scoped>
.stories-catalog {
  padding: 28px 0 48px;

  scroll-margin-top: 88px;

  background: var(--color-white);
}

.stories-catalog__filters {
  display: flex;
  flex-wrap: wrap;

  gap: 8px;
}

.stories-catalog__filters button {
  height: 38px;

  display: inline-flex;
  align-items: center;

  gap: 7px;

  padding-inline: 14px;

  color: var(--color-text-primary);

  background: var(--color-white);

  border: 1px solid var(--color-border-strong);

  border-radius: var(--radius-round);

  font-family: var(--font-sans);
  font-size: var(--text-small);
  font-weight: 650;
}

.stories-catalog__filters button:hover {
  border-color: var(--color-blue-600);

  color: var(--color-blue-600);
}

.stories-catalog__filters button.is-active {
  color: var(--color-white);

  background: var(--color-blue-600);

  border-color: var(--color-blue-600);
}

.stories-catalog__note {
  margin-top: 14px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 6px 14px;

  color: var(--color-text-muted);

  font-size: var(--text-small);
}

.stories-catalog__note a,
.story-card__body > a {
  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-weight: 650;
}

.stories-catalog__note a:hover,
.story-card__body > a:hover {
  text-decoration: underline;
}

.stories-catalog__grid {
  margin-top: 22px;

  display: grid;

  grid-template-columns: repeat(6, minmax(0, 1fr));

  gap: 16px;
}

.stories-catalog__grid:not(.is-filtered) .story-card--feature,
.stories-catalog__grid:not(.is-filtered) .story-card--pair {
  grid-column: span 3;
}

.stories-catalog__grid:not(.is-filtered) .story-card--tile {
  grid-column: span 2;
}

.stories-catalog__grid:not(.is-filtered) .story-card--wide {
  grid-column: span 6;
}

.stories-catalog__grid.is-filtered {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.story-card {
  display: grid;

  overflow: hidden;

  background: var(--color-white);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.story-card--feature,
.story-card--pair,
.story-card--wide {
  grid-template-columns: 1.05fr 0.95fr;

  align-items: center;
}

.story-card--pair {
  grid-template-columns: 0.9fr 1.1fr;
}

.story-card--pair .story-card__media {
  order: 2;
}

.story-card--tile {
  grid-template-columns: 1fr;
}

.story-card--wide {
  grid-column: 1 / -1;

  grid-template-columns: 0.7fr 1.3fr;
}

.story-card__media {
  position: relative;

  display: block;

  min-height: 180px;
}

.story-card__media img {
  display: block;

  width: 100%;
  height: 100%;

  min-height: 190px;

  object-fit: cover;
}

.story-card--tile .story-card__media img {
  height: 160px;

  min-height: 0;
}

.story-card__play {
  position: absolute;

  left: 50%;
  top: 50%;

  width: 48px;
  height: 48px;

  display: grid;
  place-items: center;

  color: var(--color-blue-600);

  background: var(--color-white);

  border-radius: 50%;

  box-shadow: var(--shadow-md);

  transform: translate(-50%, -50%);
}

.story-card__play svg {
  margin-left: 2px;
}

.story-card__body {
  padding: 18px;
}

.story-card__body > p:first-child {
  color: var(--color-blue-600);

  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.06em;

  text-transform: uppercase;
}

.story-card h3 {
  margin-top: 8px;

  font-size: clamp(1.2rem, 1.6vw, 1.45rem);

  line-height: 1.2;
}

.story-card__description {
  margin-top: 8px;

  font-size: var(--text-small);

  line-height: 1.5;
}

.story-card__meta {
  margin-top: 10px;

  color: var(--color-text-muted);

  font-size: var(--text-caption);
  font-weight: 650;
}

.story-card__body > a {
  margin-top: 12px;

  font-size: var(--text-small);
}

.stories-catalog__empty {
  margin-top: 20px;

  color: var(--color-text-secondary);
}

@media (max-width: 1000px) {
  .stories-catalog__grid,
  .stories-catalog__grid.is-filtered {
    grid-template-columns: 1fr;
  }

  .stories-catalog__grid:not(.is-filtered) .story-card--feature,
  .stories-catalog__grid:not(.is-filtered) .story-card--pair,
  .stories-catalog__grid:not(.is-filtered) .story-card--tile,
  .stories-catalog__grid:not(.is-filtered) .story-card--wide {
    grid-column: auto;
  }

  .story-card--pair .story-card__media {
    order: 0;
  }

  .story-card--wide {
    grid-column: auto;
  }
}

@media (max-width: 640px) {
  .story-card--feature,
  .story-card--pair,
  .story-card--wide {
    grid-template-columns: 1fr;
  }

  .stories-catalog__filters {
    flex-wrap: nowrap;

    overflow-x: auto;

    padding-bottom: 4px;

    scrollbar-width: none;
  }

  .stories-catalog__filters::-webkit-scrollbar {
    display: none;
  }

  .stories-catalog__filters button {
    flex-shrink: 0;
  }
}
</style>
