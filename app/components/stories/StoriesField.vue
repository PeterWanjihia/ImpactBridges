<script setup lang="ts">
import {
  ArrowRight,
  Heart,
} from 'lucide-vue-next'

const updates = [
  {
    date: 'May 28, 2025',
    title: 'Teachers request more math visual resources',
    meta: '2 min read',
    image: '/images/model/content-mathematics.png',
    alt: 'A learner working on a mathematics exercise.',
  },
  {
    date: 'May 2, 2025',
    title: 'New content set for primary science',
    meta: '2 min read',
    image: '/images/model/content-science.png',
    alt: 'A learner using a microscope during a science lesson.',
  },
  {
    date: 'May 12, 2025',
    title: 'Champion Teachers see a peer learning session',
    meta: '3 min read',
    image: '/images/model/teacher-readiness.png',
    alt: 'Teachers in a peer learning session.',
  },
]
</script>

<template>
  <section
    id="field"
    class="stories-field"
    aria-labelledby="stories-field-title"
  >
    <div class="container">
      <header>
        <h2 id="stories-field-title">
          Latest from the field
        </h2>

        <a href="#stories">
          See all updates

          <ArrowRight
            :size="14"
            :stroke-width="2"
            aria-hidden="true"
          />
        </a>
      </header>

      <ul>
        <li
          v-for="update in updates"
          :key="update.title"
        >
          <article>
            <img
              :src="update.image"
              :alt="update.alt"
              width="640"
              height="360"
            >

            <p>{{ update.date }}</p>

            <h3>{{ update.title }}</h3>

            <p>{{ update.meta }}</p>
          </article>
        </li>

        <li>
          <article class="stories-field__share">
            <span>
              <Heart
                :size="20"
                :stroke-width="1.8"
                aria-hidden="true"
              />
            </span>

            <h3>Share a story or tip</h3>

            <p>
              Know a classroom, teacher or partner story we should tell? Write to us.
            </p>

            <NuxtLink to="/contact">
              Share with us

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
.stories-field {
  padding: 8px 0 56px;

  scroll-margin-top: 88px;

  background: var(--color-white);
}

.stories-field header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;

  gap: 12px;
}

.stories-field header h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.stories-field header a,
.stories-field__share a {
  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-size: var(--text-small);
  font-weight: 650;
}

.stories-field header a:hover,
.stories-field__share a:hover {
  text-decoration: underline;
}

.stories-field ul {
  margin-top: 18px;

  display: grid;

  grid-template-columns: 1.1fr 1.1fr 1.1fr 0.8fr;

  gap: 14px;
}

.stories-field article {
  height: 100%;

  overflow: hidden;

  background: var(--color-white);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.stories-field img {
  display: block;

  width: 100%;
  height: 120px;

  object-fit: cover;
}

.stories-field article > p:first-of-type {
  margin: 12px 14px 0;

  color: var(--color-blue-600);

  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.04em;

  text-transform: uppercase;
}

.stories-field h3 {
  margin: 6px 14px 0;

  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;

  line-height: 1.3;

  letter-spacing: 0;
}

.stories-field article > p:last-child {
  margin: 8px 14px 14px;

  color: var(--color-text-muted);

  font-size: var(--text-caption);
  font-weight: 650;
}

.stories-field__share {
  padding: 18px 14px;

  display: flex;
  flex-direction: column;

  background: var(--color-surface-soft);
}

.stories-field__share span {
  width: 40px;
  height: 40px;

  display: grid;
  place-items: center;

  color: var(--color-blue-600);

  background: var(--color-blue-100);

  border-radius: 50%;
}

.stories-field__share h3,
.stories-field__share p,
.stories-field__share a {
  margin-left: 0;
  margin-right: 0;
}

.stories-field__share p {
  margin-top: 8px;

  color: var(--color-text-secondary);

  font-size: var(--text-small);
  font-weight: 450;

  line-height: 1.45;

  letter-spacing: 0;

  text-transform: none;
}

.stories-field__share a {
  margin-top: auto;
}

@media (max-width: 1000px) {
  .stories-field ul {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .stories-field ul {
    grid-template-columns: 1fr;
  }
}
</style>
