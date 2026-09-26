<script setup lang="ts">
import {
  BookOpen,
  ChartNoAxesColumnIncreasing,
  Play,
  UserRound,
  WifiOff,
} from 'lucide-vue-next'

const barriers = [
  {
    label: 'Unreliable connectivity',
    icon: WifiOff,
  },
  {
    label: 'Limited learning resources',
    icon: BookOpen,
  },
  {
    label: 'Uneven learner outcomes',
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    label: 'Teachers unsupported in using technology',
    icon: UserRound,
  },
]
</script>

<template>
  <section
    id="reality"
    class="about-reality"
    aria-labelledby="about-reality-title"
  >
    <div class="container about-reality__inner">
      <figure class="about-reality__media">
        <img
          src="/images/home/hero.png"
          alt="A teacher and learners gathered around a tablet in a classroom."
          width="960"
          height="640"
        >

        <a
          href="#classroom"
          class="about-reality__play"
          aria-label="Continue to the first classroom"
        >
          <Play
            :size="22"
            :stroke-width="2.2"
            aria-hidden="true"
          />
        </a>
      </figure>

      <div class="about-reality__copy">
        <p class="eyebrow">
          The reality
        </p>

        <h2 id="about-reality-title">
          The desire to learn<br>
          was never missing.
        </h2>

        <p>
          A teacher stands in front of a room full of potential.
          The learners are curious. The idea is on the chalkboard.
          But textbooks are limited, digital resources are hard to
          reach, and every planned lesson depends on what can be
          carried into the room.
        </p>

        <ul class="about-reality__barriers">
          <li
            v-for="barrier in barriers"
            :key="barrier.label"
          >
            <component
              :is="barrier.icon"
              :size="18"
              :stroke-width="1.8"
              aria-hidden="true"
            />

            <span>{{ barrier.label }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-reality {
  padding: 72px 0;

  scroll-margin-top: 120px;

  background: var(--color-white);
}

.about-reality__inner {
  display: grid;

  grid-template-columns: 1.15fr 0.85fr;

  gap: 48px;

  align-items: center;
}

.about-reality__media {
  position: relative;

  overflow: hidden;

  border-radius: var(--radius-lg);
}

.about-reality__media img {
  display: block;

  width: 100%;
  height: 100%;

  aspect-ratio: 16 / 11;

  object-fit: cover;
}

.about-reality__play {
  position: absolute;

  left: 50%;
  top: 50%;

  width: 64px;
  height: 64px;

  display: grid;
  place-items: center;

  color: var(--color-blue-600);

  background: var(--color-white);

  border-radius: 50%;

  box-shadow: var(--shadow-md);

  transform: translate(-50%, -50%);
}

.about-reality__play svg {
  margin-left: 3px;
}

.about-reality__copy h2 {
  margin-top: 12px;

  font-size: clamp(2rem, 3.4vw, 2.8rem);

  line-height: 1.05;
}

.about-reality__copy p {
  max-width: 36rem;

  margin-top: 16px;

  font-size: var(--text-lede);

  line-height: 1.6;
}

.about-reality__barriers {
  margin-top: 28px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 16px 20px;
}

.about-reality__barriers li {
  display: flex;
  align-items: flex-start;

  gap: 10px;

  color: var(--color-text-primary);

  font-family: var(--font-sans);
  font-size: var(--text-small);
  font-weight: 600;

  line-height: 1.35;
}

.about-reality__barriers svg {
  flex-shrink: 0;

  margin-top: 1px;

  color: var(--color-blue-600);
}

@media (max-width: 900px) {
  .about-reality__inner {
    grid-template-columns: 1fr;

    gap: 28px;
  }
}

@media (max-width: 640px) {
  .about-reality {
    padding: 48px 0;
  }

  .about-reality__barriers {
    grid-template-columns: 1fr;
  }
}
</style>
