<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const voices = [
  {
    id: 'voice-sarah',
    quote: '“I understood it differently when I could see it move.”',
    detail: 'Talking about a science simulation lesson.',
    name: 'Sarah, Grade 6 learner',
    time: '00:06',
    image: '/images/home/evidence-student.png',
    alt: 'Sarah, a Grade 6 learner, at her desk.',
    to: '/stories/namulava',
  },
  {
    id: 'voice-james',
    quote: '“The resource helps, but the lesson still depends on how I guide it.”',
    detail: 'On preparing and delivering engaging lessons.',
    name: 'Mr. James, Champion Teacher',
    time: '00:34',
    image: '/images/model/teacher-champion.png',
    alt: 'A champion teacher leading a class.',
    to: '/our-model#teachers',
  },
]
</script>

<template>
  <section
    id="voices"
    class="stories-voices"
    aria-labelledby="stories-voices-title"
  >
    <div class="container">
      <header class="stories-voices__header">
        <h2 id="stories-voices-title">
          Hear it in their own words
        </h2>

        <a href="#stories">
          View more voices

          <ArrowRight
            :size="14"
            :stroke-width="2"
            aria-hidden="true"
          />
        </a>
      </header>

      <div class="stories-voices__grid">
        <article
          v-for="voice in voices"
          :id="voice.id"
          :key="voice.id"
        >
          <img
            :src="voice.image"
            :alt="voice.alt"
            width="480"
            height="480"
          >

          <div>
            <blockquote>
              <p>{{ voice.quote }}</p>
            </blockquote>

            <p class="stories-voices__detail">
              {{ voice.detail }}
            </p>

            <p class="stories-voices__name">
              {{ voice.name }}
            </p>

            <div
              class="stories-voices__wave"
              aria-hidden="true"
            >
              <span
                v-for="bar in 22"
                :key="bar"
                :style="{ height: `${6 + ((bar * 13) % 16)}px` }"
              />

              <span class="stories-voices__time">{{ voice.time }}</span>
            </div>

            <NuxtLink :to="voice.to">
              Read transcript

              <ArrowRight
                :size="14"
                :stroke-width="2"
                aria-hidden="true"
              />
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stories-voices {
  padding: 12px 0 48px;

  scroll-margin-top: 88px;

  background: var(--color-white);
}

.stories-voices__header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;

  gap: 12px;
}

.stories-voices__header h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.stories-voices__header a,
.stories-voices article a {
  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-size: var(--text-small);
  font-weight: 650;
}

.stories-voices__header a:hover,
.stories-voices article a:hover {
  text-decoration: underline;
}

.stories-voices__grid {
  margin-top: 18px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 16px;
}

.stories-voices article {
  display: grid;

  grid-template-columns: 148px 1fr;

  gap: 16px;

  align-items: center;

  padding: 16px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.stories-voices img {
  width: 100%;
  height: 180px;

  object-fit: cover;

  border-radius: var(--radius-md);
}

.stories-voices blockquote p {
  color: var(--color-text-primary);

  font-family: var(--font-serif);
  font-size: clamp(1.2rem, 1.6vw, 1.45rem);
  font-style: italic;
  font-weight: 450;

  line-height: 1.25;
}

.stories-voices__detail {
  margin-top: 8px;

  font-size: var(--text-small);

  line-height: 1.45;
}

.stories-voices__name {
  margin-top: 8px;

  color: var(--color-text-primary);

  font-size: var(--text-small);
  font-weight: 700;
}

.stories-voices__wave {
  margin-top: 10px;

  display: flex;
  align-items: center;

  gap: 3px;

  height: 22px;
}

.stories-voices__wave span {
  width: 3px;

  background: var(--color-blue-500);

  border-radius: 99px;

  opacity: 0.8;
}

.stories-voices__time {
  width: auto;

  margin-left: 8px;

  background: none;

  opacity: 1;

  color: var(--color-text-muted);

  font-family: var(--font-sans);
  font-size: var(--text-caption);
  font-weight: 650;
}

.stories-voices article a {
  margin-top: 10px;
}

@media (max-width: 800px) {
  .stories-voices__grid,
  .stories-voices article {
    grid-template-columns: 1fr;
  }
}
</style>
