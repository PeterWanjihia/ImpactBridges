<script setup lang="ts">
import {
  ArrowRight,
  Check,
  ClipboardList,
  Play,
  UsersRound,
} from 'lucide-vue-next'

const championPoints = [
  'Selected for commitment',
  'Trained deeply and practically',
  'Supported continuously',
  'Recognised and connected',
]

const teacherJourney = [
  'Orientation',
  'Demonstration',
  'Co-planning',
  'Guided practice',
  'Feedback & reflection',
  'Independent use',
  'Peer support',
]
</script>

<template>
  <section
    id="teachers"
    class="model-teacher"
    aria-labelledby="model-teacher-title"
  >
    <div class="container model-teacher__inner">
      <div class="model-teacher__intro">
        <div class="model-teacher__marker">
          <span class="model-teacher__number">
            05
          </span>

          <span
            class="model-teacher__marker-line"
            aria-hidden="true"
          />
        </div>

        <h2
          id="model-teacher-title"
          class="model-teacher__title"
        >
          The teacher is at<br>
          the centre.
        </h2>

        <p class="model-teacher__description">
          We train teachers to confidently
          use technology to improve how
          they teach and how learners learn.
        </p>

        <a
          href="#teacher-journey"
          class="model-teacher__link"
        >
          Our teacher development

          <ArrowRight
            :size="14"
            :stroke-width="2.2"
            aria-hidden="true"
          />
        </a>
      </div>

      <div class="teacher-visual">
        <img
          src="/images/model/teacher-champion.png"
          alt="Teacher leading a classroom lesson."
          class="teacher-visual__image"
        >

        <div
          class="teacher-visual__overlay"
          aria-hidden="true"
        />

        <button
          type="button"
          class="teacher-visual__play"
          aria-label="Play teacher story"
        >
          <Play
            :size="18"
            :stroke-width="0"
            fill="currentColor"
          />
        </button>

        <div class="teacher-visual__meta">
          <span>
            A teacher's journey at Impact Bridge
          </span>

          <span class="teacher-visual__duration">
            0:45
          </span>
        </div>
      </div>

      <article class="teacher-card teacher-card--champion">
        <header class="teacher-card__header">
          <div class="teacher-card__icon">
            <UsersRound
              :size="18"
              :stroke-width="1.8"
              aria-hidden="true"
            />
          </div>

          <h3>
            The Champion<br>
            Teacher model
          </h3>
        </header>

        <p class="teacher-card__description">
          We empower local educators
          to lead adoption and support
          their peers — creating lasting
          change from within.
        </p>

        <ul class="teacher-card__checklist">
          <li
            v-for="point in championPoints"
            :key="point"
          >
            <span class="teacher-card__check">
              <Check
                :size="12"
                :stroke-width="2.5"
                aria-hidden="true"
              />
            </span>

            {{ point }}
          </li>
        </ul>

        <NuxtLink
          to="/stories"
          class="teacher-card__link"
        >
          Meet a Champion Teacher

          <ArrowRight
            :size="14"
            :stroke-width="2.2"
            aria-hidden="true"
          />
        </NuxtLink>
      </article>

      <article
        id="teacher-journey"
        class="teacher-card teacher-card--journey"
      >
        <header class="teacher-card__header">
          <div class="teacher-card__icon">
            <ClipboardList
              :size="17"
              :stroke-width="1.8"
              aria-hidden="true"
            />
          </div>

          <h3>
            Teacher journey
          </h3>
        </header>

        <ol class="teacher-journey">
          <li
            v-for="(step, index) in teacherJourney"
            :key="step"
            class="teacher-journey__step"
          >
            <span class="teacher-journey__number">
              {{ index + 1 }}
            </span>

            <span class="teacher-journey__label">
              {{ step }}
            </span>
          </li>
        </ol>
      </article>
    </div>
  </section>
</template>

<style scoped>
.model-teacher {
  scroll-margin-top: 132px;

  background:
    linear-gradient(
      180deg,
      var(--color-white) 0%,
      var(--color-white) 68%,
      #fafcff 100%
    );

  border-bottom: 1px solid rgb(222 230 241 / 0.8);
}

.model-teacher__inner {
  display: grid;
  grid-template-columns:
    minmax(196px, 228px)
    minmax(0, 1.55fr)
    minmax(200px, 0.92fr)
    minmax(188px, 0.84fr);
  align-items: stretch;
  gap: 16px 18px;

  padding-top: 22px;
  padding-bottom: 22px;
}

.model-teacher__intro {
  padding-top: 4px;
}

.model-teacher__marker {
  display: flex;
  align-items: center;
  gap: 10px;
}

.model-teacher__number {
  width: 24px;
  height: 24px;

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

.model-teacher__marker-line {
  width: 28px;
  height: 1px;

  background: #bdd3f7;
}

.model-teacher__title {
  margin-top: 12px;

  color: var(--color-text-primary);

  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 2.1vw, 1.85rem);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -0.032em;
}

.model-teacher__description {
  max-width: 28ch;

  margin-top: 12px;

  color: var(--color-text-secondary);

  font-family: var(--font-sans);
  font-size: 0.8125rem;
  line-height: 1.5;
}

.model-teacher__link {
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

.model-teacher__link:hover {
  color: var(--color-blue-500);
}

.teacher-visual {
  position: relative;

  min-height: 0;

  overflow: hidden;

  background: #dfe5ed;

  border: 1px solid #d9e2ee;
  border-radius: var(--radius-md);
}

.teacher-visual__image {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center 38%;

  filter:
    saturate(0.9)
    contrast(0.98);
}

.teacher-visual__overlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      180deg,
      transparent 48%,
      rgb(4 15 34 / 0.55) 100%
    );
}

.teacher-visual__play {
  position: absolute;
  z-index: 3;

  top: 50%;
  left: 50%;

  width: 48px;
  height: 48px;

  display: grid;
  place-items: center;

  color: var(--color-blue-600);

  background: rgb(255 255 255 / 0.96);

  border: 0;
  border-radius: 50%;

  transform: translate(-50%, -50%);

  box-shadow: 0 8px 24px rgb(0 20 60 / 0.18);

  cursor: pointer;

  transition:
    transform var(--transition-fast),
    background var(--transition-fast);
}

.teacher-visual__play:hover {
  background: var(--color-white);

  transform: translate(-50%, -50%) scale(1.04);
}

.teacher-visual__meta {
  position: absolute;
  z-index: 3;

  right: 14px;
  bottom: 12px;
  left: 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  color: rgb(255 255 255 / 0.94);

  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.3;
}

.teacher-visual__duration {
  flex: 0 0 auto;

  padding: 4px 8px;

  background: rgb(0 0 0 / 0.55);

  border-radius: 5px;

  font-size: 0.6875rem;
  font-weight: 650;
}

.teacher-card {
  min-width: 0;

  display: flex;
  flex-direction: column;

  padding: 16px 16px 14px;

  background:
    linear-gradient(
      180deg,
      #f7faff 0%,
      #edf4ff 100%
    );

  border: 1px solid #dce7f7;
  border-radius: var(--radius-md);
}

.teacher-card__header {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.teacher-card__icon {
  width: 36px;
  height: 36px;

  flex: 0 0 auto;

  display: grid;
  place-items: center;

  color: var(--color-blue-600);

  background: #e4edff;

  border-radius: 50%;
}

.teacher-card__header h3 {
  color: var(--color-text-primary);

  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.028em;
}

.teacher-card__description {
  margin-top: 12px;

  color: var(--color-text-secondary);

  font-family: var(--font-sans);
  font-size: 0.75rem;
  line-height: 1.5;
}

.teacher-card__checklist {
  display: grid;
  gap: 8px;

  margin: 14px 0 0;
  padding: 0;

  list-style: none;
}

.teacher-card__checklist li {
  display: flex;
  align-items: center;
  gap: 8px;

  color: var(--color-text-primary);

  font-family: var(--font-sans);
  font-size: 0.75rem;
  line-height: 1.3;
}

.teacher-card__check {
  width: 18px;
  height: 18px;

  flex: 0 0 auto;

  display: grid;
  place-items: center;

  color: var(--color-blue-600);

  background: var(--color-white);

  border: 1px solid #7aa4ee;
  border-radius: 50%;
}

.teacher-card__link {
  margin-top: auto;

  padding-top: 14px;

  display: inline-flex;
  align-items: center;
  gap: 6px;

  color: var(--color-blue-600);

  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 650;
  line-height: 1;
}

.teacher-card__link:hover {
  color: var(--color-blue-500);
}

.teacher-journey {
  position: relative;

  display: grid;
  gap: 7px;

  margin: 14px 0 0;
  padding: 0;

  list-style: none;
}

.teacher-journey::before {
  content: "";

  position: absolute;
  z-index: 0;

  top: 11px;
  bottom: 11px;
  left: 11px;

  width: 1px;

  background: #9ab9ec;
}

.teacher-journey__step {
  position: relative;
  z-index: 1;

  display: grid;
  grid-template-columns: 22px 1fr;
  align-items: center;
  gap: 10px;
}

.teacher-journey__number {
  width: 22px;
  height: 22px;

  display: grid;
  place-items: center;

  color: var(--color-white);

  background: #2f61c9;

  border: 2px solid #edf4ff;
  border-radius: 50%;

  font-family: var(--font-sans);
  font-size: 0.625rem;
  font-weight: 750;
  line-height: 1;
}

.teacher-journey__label {
  color: var(--color-text-primary);

  font-family: var(--font-sans);
  font-size: 0.75rem;
  line-height: 1.25;
}

@media (max-width: 1100px) {
  .model-teacher__inner {
    grid-template-columns:
      minmax(176px, 200px)
      minmax(0, 1.45fr)
      repeat(2, minmax(170px, 0.9fr));
    gap: 14px;
  }
}

@media (max-width: 900px) {
  .model-teacher__inner {
    grid-template-columns: 1fr 1fr;
    gap: 14px 16px;

    padding-top: 20px;
    padding-bottom: 22px;
  }

  .model-teacher__intro {
    grid-column: 1 / -1;

    max-width: 36rem;
  }

  .model-teacher__description {
    max-width: 42ch;
  }

  .teacher-visual {
    grid-column: 1 / -1;

    min-height: 240px;
  }
}

@media (max-width: 580px) {
  .model-teacher__inner {
    grid-template-columns: 1fr;
  }

  .model-teacher__intro,
  .teacher-visual {
    grid-column: auto;
  }

  .teacher-visual {
    min-height: 220px;
  }
}
</style>
