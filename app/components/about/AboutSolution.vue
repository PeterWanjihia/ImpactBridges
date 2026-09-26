<script setup lang="ts">
import {
  ArrowRight,
  BookOpen,
  Heart,
  Laptop,
  UserRound,
  UsersRound,
} from 'lucide-vue-next'

const steps = [
  {
    title: 'Offline hub',
    description: 'A classroom kit that runs the lesson without a connection.',
    icon: Laptop,
  },
  {
    title: 'Curated content',
    description: 'Curriculum resources stored on the hub, ready to teach.',
    icon: BookOpen,
  },
  {
    title: 'Trained teacher',
    description: 'A champion teacher leads the lesson and keeps the hub in use.',
    icon: UserRound,
  },
  {
    title: 'Interactive classroom',
    description: 'Learners explore, ask, and work with what is on the screen.',
    icon: UsersRound,
  },
  {
    title: 'Confident learners',
    description: 'Understanding and participation grow from a lesson they can join.',
    icon: Heart,
  },
]

const photos = [
  {
    src: '/images/model/hub-kit.png',
    alt: 'The learning hub kit laid out on a classroom table.',
  },
  {
    src: '/images/model/content-literacy.png',
    alt: 'A learner reading an educational book.',
  },
  {
    src: '/images/model/teacher-readiness.png',
    alt: 'Teachers planning a lesson together around a laptop.',
  },
  {
    src: '/images/model/lesson-explore.png',
    alt: 'Learners exploring digital educational content together.',
  },
]
</script>

<template>
  <section
    class="about-solution"
    aria-labelledby="about-solution-title"
  >
    <div class="container">
      <header class="about-solution__header">
        <p class="eyebrow">
          A complete offline learning solution
        </p>

        <h2 id="about-solution-title">
          Not a computer delivered to a school.
          <em>A learning system built around a teacher.</em>
        </h2>
      </header>

      <ol class="about-solution__steps">
        <li
          v-for="step in steps"
          :key="step.title"
        >
          <span class="about-solution__icon">
            <component
              :is="step.icon"
              :size="22"
              :stroke-width="1.7"
              aria-hidden="true"
            />
          </span>

          <h3>{{ step.title }}</h3>

          <p>{{ step.description }}</p>
        </li>
      </ol>

      <ul class="about-solution__photos">
        <li
          v-for="photo in photos"
          :key="photo.src"
        >
          <img
            :src="photo.src"
            :alt="photo.alt"
            width="640"
            height="420"
          >
        </li>
      </ul>

      <NuxtLink
        to="/our-model"
        class="about-solution__link"
      >
        Explore how our model works

        <ArrowRight
          :size="16"
          :stroke-width="2"
          aria-hidden="true"
        />
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.about-solution {
  padding: 72px 0 64px;

  background: var(--color-white);
}

.about-solution__header {
  max-width: 760px;
}

.about-solution__header h2 {
  margin-top: 12px;

  font-size: clamp(2rem, 3.5vw, 2.9rem);

  line-height: 1.08;
}

.about-solution__header em {
  color: var(--color-blue-600);

  font-style: italic;
  font-weight: 450;
}

.about-solution__steps {
  margin-top: 40px;

  display: grid;

  grid-template-columns: repeat(5, minmax(0, 1fr));

  gap: 20px;
}

.about-solution__steps li {
  position: relative;

  min-width: 0;
}

.about-solution__steps li:not(:last-child)::after {
  content: "";

  position: absolute;

  top: 22px;
  left: 52px;
  right: -12px;

  height: 1px;

  background: var(--color-border-strong);
}

.about-solution__icon {
  position: relative;

  z-index: 1;

  width: 44px;
  height: 44px;

  display: grid;
  place-items: center;

  color: var(--color-blue-600);

  background: var(--color-blue-100);

  border-radius: 50%;
}

.about-solution__steps h3 {
  margin-top: 14px;

  font-family: var(--font-sans);
  font-size: var(--text-ui);
  font-weight: 700;

  line-height: 1.3;

  letter-spacing: 0;
}

.about-solution__steps p {
  margin-top: 6px;

  font-size: var(--text-small);

  line-height: 1.45;
}

.about-solution__photos {
  margin-top: 32px;

  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 14px;
}

.about-solution__photos img {
  display: block;

  width: 100%;
  height: 168px;

  object-fit: cover;

  border-radius: var(--radius-md);
}

.about-solution__link {
  margin-top: 22px;

  display: inline-flex;
  align-items: center;

  gap: 8px;

  color: var(--color-blue-600);

  font-family: var(--font-sans);
  font-size: var(--text-ui);
  font-weight: 650;
}

.about-solution__link:hover {
  text-decoration: underline;
}

@media (max-width: 1000px) {
  .about-solution__steps {
    grid-template-columns: 1fr 1fr;
  }

  .about-solution__steps li:not(:last-child)::after {
    display: none;
  }

  .about-solution__photos {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .about-solution {
    padding: 48px 0;
  }

  .about-solution__steps,
  .about-solution__photos {
    grid-template-columns: 1fr;
  }

  .about-solution__photos img {
    height: 200px;
  }
}
</style>
