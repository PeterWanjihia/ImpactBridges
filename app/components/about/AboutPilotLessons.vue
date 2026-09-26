<script setup lang="ts">
const lessons = [
  {
    title: 'Hardware that needed refining',
    description:
      'A device cannot transform a classroom if it cannot stay powered, protected, and maintained in school conditions.',
    image: '/images/model/classroom-suitability.png',
    alt: 'Staff checking power and classroom space before a hub is installed.',
  },
  {
    title: 'Teaching classroom adoption',
    description:
      'A device cannot transform a classroom if teachers are not prepared to lead with it.',
    image: '/images/model/teacher-readiness.png',
    alt: 'Teachers planning a lesson together around a laptop.',
  },
  {
    title: 'Offline still needs to feel local',
    description:
      'Removing internet dependency is not enough. Content has to reflect the learners in front of the teacher.',
    image: '/images/model/content-local.png',
    alt: 'A teacher leading an outdoor, locally relevant lesson.',
  },
  {
    title: 'Local ownership drives longevity',
    description:
      'The hub must become part of the school, not a visit that ends when a programme does.',
    image: '/images/model/local-support.png',
    alt: 'Community members and school leaders meeting around a classroom table.',
  },
]
</script>

<template>
  <section
    class="about-lessons"
    aria-labelledby="about-lessons-title"
  >
    <div class="container">
      <header class="about-lessons__header">
        <h2 id="about-lessons-title">
          The pilot gave us evidence to improve.
        </h2>
      </header>

      <ul class="about-lessons__grid">
        <li
          v-for="lesson in lessons"
          :key="lesson.title"
        >
          <article class="lesson-card">
            <img
              :src="lesson.image"
              :alt="lesson.alt"
              width="640"
              height="420"
            >

            <h3>{{ lesson.title }}</h3>

            <p>{{ lesson.description }}</p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.about-lessons {
  padding: 8px 0 72px;

  background: var(--color-surface-soft);
}

.about-lessons__header h2 {
  max-width: 16ch;

  font-size: clamp(2rem, 3.4vw, 2.7rem);
}

.about-lessons__grid {
  margin-top: 28px;

  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 16px;
}

.lesson-card {
  height: 100%;

  overflow: hidden;

  background: var(--color-white);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.lesson-card img {
  display: block;

  width: 100%;
  height: 150px;

  object-fit: cover;
}

.lesson-card h3 {
  margin: 16px 16px 0;

  font-family: var(--font-sans);
  font-size: 1.05rem;
  font-weight: 700;

  line-height: 1.3;

  letter-spacing: -0.02em;
}

.lesson-card p {
  margin: 8px 16px 18px;

  font-size: var(--text-small);

  line-height: 1.5;
}

@media (max-width: 1000px) {
  .about-lessons__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .about-lessons {
    padding-bottom: 48px;
  }

  .about-lessons__grid {
    grid-template-columns: 1fr;
  }

  .lesson-card img {
    height: 190px;
  }
}
</style>
