<script setup lang="ts">
import {
  ArrowRight,
  Play,
} from 'lucide-vue-next'
</script>

<template>
  <section class="stories-hero">
    <div
      class="stories-hero__image"
      role="img"
      aria-label="A learner smiling in a classroom."
    />

    <div class="stories-hero__overlay" />

    <div class="container stories-hero__inner">
      <div class="stories-hero__copy">
        <p class="stories-hero__eyebrow">
          Every classroom
        </p>

        <h1>
          Every classroom<br>
          holds more than<br>
          <em>one story.</em>
        </h1>

        <p>
          Meet the learners, teachers, schools and partners shaping
          Impact Bridge—one lesson, one voice and one classroom at a time.
        </p>

        <div class="stories-hero__actions">
          <NuxtLink
            to="/stories/namulava"
            class="stories-hero__button stories-hero__button--primary"
          >
            <Play
              :size="14"
              :stroke-width="2.4"
              aria-hidden="true"
            />

            Watch the featured story
          </NuxtLink>

          <NuxtLink
            to="/stories/namulava"
            class="stories-hero__button stories-hero__button--ghost"
          >
            Read the story

            <ArrowRight
              :size="16"
              :stroke-width="2"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>
      </div>

      <aside
        class="featured-card"
        aria-label="Featured story"
      >
        <p>Featured story</p>

        <h2>The lesson that made science feel visible</h2>

        <p class="featured-card__detail">
          A learner and her teacher describe what changed when an
          offline simulation entered their classroom.
        </p>

        <p class="featured-card__meta">
          <Play
            :size="12"
            :stroke-width="2.4"
            aria-hidden="true"
          />

          Video
          <span aria-hidden="true">·</span>
          01:24
        </p>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.stories-hero {
  position: relative;

  min-height: 520px;

  overflow: hidden;

  background: var(--color-navy-950);

  color: var(--color-white);
}

.stories-hero__image {
  position: absolute;

  inset: 0;

  background-image: url('/images/home/evidence-student.png');

  background-size: cover;

  background-position: 70% 20%;
}

.stories-hero__overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgb(0 12 36 / 0.94) 0%,
      rgb(0 12 36 / 0.78) 38%,
      rgb(0 12 36 / 0.35) 70%,
      rgb(0 12 36 / 0.2) 100%
    );
}

.stories-hero__inner {
  position: relative;

  z-index: 1;

  min-height: 520px;

  display: grid;

  grid-template-columns: minmax(0, 1fr) 300px;

  gap: 32px;

  align-items: center;

  padding-block: 64px;
}

.stories-hero__eyebrow {
  color: var(--color-blue-500);

  font-family: var(--font-sans);
  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.stories-hero h1 {
  margin-top: 12px;

  color: var(--color-white);

  font-size: clamp(2.6rem, 4.6vw, 4rem);

  line-height: 0.98;
}

.stories-hero h1 em {
  color: var(--color-blue-500);

  font-style: italic;
  font-weight: 450;
}

.stories-hero__copy > p {
  max-width: 34rem;

  margin-top: 16px;

  color: rgb(255 255 255 / 0.86);

  font-size: var(--text-lede);

  line-height: 1.55;
}

.stories-hero__actions {
  margin-top: 24px;

  display: flex;
  flex-wrap: wrap;

  gap: 10px;
}

.stories-hero__button {
  height: 46px;

  display: inline-flex;
  align-items: center;

  gap: 8px;

  padding-inline: 16px;

  border: 1px solid transparent;
  border-radius: var(--radius-sm);

  font-family: var(--font-sans);
  font-size: var(--text-ui);
  font-weight: 650;
}

.stories-hero__button--primary {
  color: var(--color-white);

  background: var(--color-blue-600);
}

.stories-hero__button--primary:hover {
  background: var(--color-blue-500);
}

.stories-hero__button--ghost {
  color: var(--color-white);

  border-color: rgb(255 255 255 / 0.72);
}

.stories-hero__button--ghost:hover {
  background: rgb(255 255 255 / 0.1);
}

.featured-card {
  padding: 22px;

  color: var(--color-white);

  background: rgb(7 18 40 / 0.72);

  border: 1px solid rgb(255 255 255 / 0.14);

  border-radius: var(--radius-lg);

  backdrop-filter: blur(8px);
}

.featured-card > p:first-child {
  color: var(--color-blue-500);

  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.featured-card h2 {
  margin-top: 10px;

  color: var(--color-white);

  font-size: 1.7rem;

  line-height: 1.15;
}

.featured-card__detail {
  margin-top: 10px;

  color: rgb(255 255 255 / 0.78);

  font-size: var(--text-small);

  line-height: 1.5;
}

.featured-card__meta {
  margin-top: 16px;

  display: flex;
  align-items: center;

  gap: 6px;

  color: rgb(255 255 255 / 0.8);

  font-size: var(--text-caption);
  font-weight: 650;
}

@media (max-width: 900px) {
  .stories-hero__inner {
    grid-template-columns: 1fr;

    align-items: end;
  }

  .featured-card {
    max-width: 420px;
  }
}

@media (max-width: 640px) {
  .stories-hero,
  .stories-hero__inner {
    min-height: 0;
  }

  .stories-hero__inner {
    padding-block: 40px 32px;
  }

  .stories-hero__actions,
  .stories-hero__button,
  .featured-card {
    width: 100%;
    max-width: none;
  }

  .stories-hero__button {
    justify-content: center;
  }
}
</style>
