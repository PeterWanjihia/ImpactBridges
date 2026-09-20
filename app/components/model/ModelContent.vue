<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const resources = [
  {
    title: 'Mathematics',
    count: '1,200+ resources',
    image: '/images/model/content-mathematics.png',
    alt: 'Learner working on a mathematics exercise.',
  },
  {
    title: 'Science',
    count: '1,000+ resources',
    image: '/images/model/content-science.png',
    alt: 'Learner using a microscope during a science lesson.',
  },
  {
    title: 'English & Literacy',
    count: '900+ resources',
    image: '/images/model/content-literacy.png',
    alt: 'Learner reading an educational book.',
  },
  {
    title: 'Simulations',
    count: '700+ resources',
    image: '/images/model/content-simulations.png',
    alt: 'Interactive solar system simulation running on a tablet.',
  },
  {
    title: 'Teacher Guides',
    count: '500+ resources',
    image: '/images/model/content-teacher-guides.png',
    alt: 'Impact Bridge primary teacher guide.',
  },
  {
    title: 'Local & Africentric',
    count: '600+ resources',
    image: '/images/model/content-local.png',
    alt: 'Teacher leading an outdoor locally relevant lesson.',
  },
]
</script>

<template>
  <section
    class="model-content"
    aria-labelledby="model-content-title"
  >
    <div class="model-content__inner">

      <!-- LEFT INTRO -->
      <div class="model-content__intro">
        <div class="model-content__marker">
          <span class="model-content__number">
            04
          </span>

          <span
            class="model-content__marker-line"
            aria-hidden="true"
          />
        </div>

        <h2
          id="model-content-title"
          class="model-content__title"
        >
          Offline does<br>
          not mean limited.
        </h2>

        <p class="model-content__description">
          Our hubs include thousands of
          high-quality, curriculum-aligned
          resources.
        </p>

        <NuxtLink
          to="/resources"
          class="model-content__link"
        >
          Explore content library

          <ArrowRight
            :size="13"
            :stroke-width="2.2"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>

      <!-- RESOURCE CARDS -->
      <div class="model-content__resources">
        <article
          v-for="resource in resources"
          :key="resource.title"
          class="resource-card"
        >
          <div class="resource-card__media">
            <img
              :src="resource.image"
              :alt="resource.alt"
              class="resource-card__image"
            >
          </div>

          <div class="resource-card__content">
            <h3 class="resource-card__title">
              {{ resource.title }}
            </h3>

            <p class="resource-card__count">
              {{ resource.count }}
            </p>

            <NuxtLink
              to="/resources"
              class="resource-card__action"
              :aria-label="`Explore ${resource.title} resources`"
            >
              <ArrowRight
                :size="13"
                :stroke-width="2.2"
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
/* =========================================================
   SECTION
========================================================= */

.model-content {
  width: min(calc(100% - 64px), 1500px);

  margin-inline: auto;

  overflow: hidden;

  background:
    linear-gradient(
      180deg,
      #ffffff 0%,
      #ffffff 72%,
      #fbfcff 100%
    );

  border-bottom:
    1px solid rgb(224 231 241 / 0.75);
}


/* =========================================================
   INNER LAYOUT
========================================================= */

.model-content__inner {
  width: min(calc(100% - 72px), 1360px);

  margin-inline: auto;

  padding-top: 20px;
  padding-bottom: 18px;

  display: grid;

  grid-template-columns:
    210px
    minmax(0, 1fr);

  align-items: center;

  gap: 24px;
}


/* =========================================================
   INTRO
========================================================= */

.model-content__intro {
  min-width: 0;
}


/* marker */

.model-content__marker {
  display: flex;
  align-items: center;

  gap: 9px;
}


.model-content__number {
  width: 23px;
  height: 23px;

  flex: 0 0 23px;

  display: grid;
  place-items: center;

  color: var(--color-blue-600);

  background: #fff;

  border: 1px solid #b8cff5;
  border-radius: 50%;

  font-family: var(--font-sans);
  font-size: 0.65rem;
  font-weight: 700;
  line-height: 1;
}


.model-content__marker-line {
  width: 25px;
  height: 1px;

  background: #bdd3f7;
}


/* title */

.model-content__title {
  margin-top: 10px;

  color: var(--color-text-primary);

  font-family: var(--font-serif);

  font-size: clamp(1.5rem, 1.75vw, 1.7rem);
  font-weight: 500;

  line-height: 1.06;

  letter-spacing: -0.032em;
}


/* description */

.model-content__description {
  max-width: 27ch;

  margin-top: 10px;

  color: var(--color-text-secondary);

  font-family: var(--font-sans);

  font-size: 0.67rem;
  line-height: 1.48;
}


/* link */

.model-content__link {
  margin-top: 12px;

  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-family: var(--font-sans);

  font-size: 0.72rem;
  font-weight: 650;

  line-height: 1;

  white-space: nowrap;
}


.model-content__link:hover {
  color: var(--color-blue-500);
}


/* =========================================================
   RESOURCE GRID
========================================================= */

.model-content__resources {
  min-width: 0;

  display: grid;

  grid-template-columns:
    repeat(6, minmax(0, 1fr));

  gap: 9px;
}


/* =========================================================
   RESOURCE CARD
========================================================= */

.resource-card {
  min-width: 0;

  overflow: hidden;

  display: flex;
  flex-direction: column;

  background:
    linear-gradient(
      180deg,
      #ffffff 0%,
      #f8fbff 100%
    );

  border: 1px solid #dce7f7;

  border-radius: 9px;
}


/* image */

.resource-card__media {
  position: relative;

  width: calc(100% - 8px);
  height: 132px;

  margin:
    4px
    4px
    0;

  overflow: hidden;

  background: #edf2f8;

  border-radius: 7px;
}


.resource-card__image {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
  object-position: center;

  filter:
    saturate(0.94)
    contrast(0.99);

  transition:
    transform var(--transition-base);
}


.resource-card:hover .resource-card__image {
  transform: scale(1.025);
}


/* =========================================================
   CARD CONTENT
========================================================= */

.resource-card__content {
  position: relative;

  min-height: 50px;

  padding:
    8px
    9px
    9px;
}


.resource-card__title {
  max-width: calc(100% - 29px);

  color: #1453e5;

  font-family: var(--font-sans);

  font-size: 0.66rem;
  font-weight: 750;

  line-height: 1.18;

  letter-spacing: -0.018em;
}


.resource-card__count {
  margin-top: 3px;

  color: #40567a;

  font-family: var(--font-sans);

  font-size: 0.59rem;
  line-height: 1.25;
}


/* card button */

.resource-card__action {
  position: absolute;

  right: 7px;
  bottom: 7px;

  width: 25px;
  height: 25px;

  display: grid;
  place-items: center;

  color: #1357ee;

  background: #e8f0ff;

  border-radius: 50%;

  transition:
    background var(--transition-fast),
    transform var(--transition-fast);
}


.resource-card__action:hover {
  background: #dce8ff;

  transform: translateX(2px);
}


/* =========================================================
   MEDIUM DESKTOP
========================================================= */

@media (max-width: 1280px) {
  .model-content {
    width: min(calc(100% - 40px), 1180px);
  }


  .model-content__inner {
    width: min(calc(100% - 48px), 1080px);

    grid-template-columns:
      185px
      minmax(0, 1fr);

    gap: 20px;

    padding-top: 18px;
    padding-bottom: 16px;
  }


  .model-content__resources {
    gap: 7px;
  }


  .resource-card__media {
    height: 118px;
  }


  .resource-card__content {
    padding:
      7px
      8px
      8px;
  }


  .resource-card__title {
    font-size: 0.62rem;
  }


  .resource-card__count {
    font-size: 0.56rem;
  }
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1000px) {
  .model-content {
    width: 100%;

    max-width: none;

    margin-inline: 0;
  }


  .model-content__inner {
    width: min(100% - 48px, 900px);

    padding-top: 22px;
    padding-bottom: 22px;

    grid-template-columns: 1fr;

    align-items: start;

    gap: 18px;
  }


  .model-content__intro {
    max-width: 500px;
  }


  .model-content__resources {
    grid-template-columns:
      repeat(3, minmax(0, 1fr));

    gap: 10px;
  }


  .resource-card__media {
    height: 145px;
  }


  .resource-card__title {
    font-size: 0.7rem;
  }


  .resource-card__count {
    font-size: 0.61rem;
  }
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 700px) {
  .model-content__inner {
    width: min(100% - 40px, 620px);

    padding-top: 18px;
    padding-bottom: 18px;
  }


  .model-content__title {
    font-size: 1.45rem;
  }


  .model-content__resources {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap: 8px;
  }


  .resource-card__media {
    height: 132px;
  }
}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 480px) {
  .model-content__resources {
    grid-template-columns: 1fr;
  }


  .resource-card__media {
    height: 170px;
  }


  .resource-card__title {
    font-size: 0.75rem;
  }
}
</style>
