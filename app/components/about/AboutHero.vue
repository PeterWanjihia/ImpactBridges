<script setup lang="ts">
import {
  ArrowRight,
  Play,
} from 'lucide-vue-next'
</script>

<template>
  <section
    id="story"
    class="about-hero"
  >
    <div
      class="about-hero__image"
      role="img"
      aria-label="A teacher leading a classroom lesson from the chalkboard while learners follow from their desks."
    />

    <div class="about-hero__overlay" />

    <div
      class="about-hero__fingerprint"
      aria-hidden="true"
    >
      <span class="about-hero__ring about-hero__ring--1" />
      <span class="about-hero__ring about-hero__ring--2" />
      <span class="about-hero__ring about-hero__ring--3" />
      <span class="about-hero__ring about-hero__ring--4" />
      <span class="about-hero__ring about-hero__ring--5" />

      <p class="about-hero__fingerprint-label">
        still being<br>written
      </p>
    </div>

    <div class="container about-hero__inner">
      <div class="about-hero__copy">
        <p class="about-hero__eyebrow">
          Our story
        </p>

        <h1 class="about-hero__title">
          Potential is<br>
          everywhere.<br>
          <em>Access is not.</em>
        </h1>

        <p class="about-hero__description">
          In classrooms across Uganda, learners are ready to explore
          and teachers are ready to lead. But unreliable connectivity
          and limited educational resources still determine how far
          that curiosity can travel.
        </p>

        <div class="about-hero__actions">
          <a
            href="#reality"
            class="about-hero__button about-hero__button--primary"
          >
            <Play
              :size="14"
              :stroke-width="2.4"
              aria-hidden="true"
            />

            Watch the 90-second story
          </a>

          <a
            href="#journey"
            class="about-hero__button about-hero__button--ghost"
          >
            Read our story

            <ArrowRight
              :size="16"
              :stroke-width="2"
              aria-hidden="true"
            />
          </a>
        </div>

        <p class="about-hero__note">
          Real stories. Real classrooms. Real change.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-hero {
  position: relative;

  min-height: 620px;

  overflow: hidden;

  scroll-margin-top: 120px;

  background: var(--color-navy-950);

  color: var(--color-white);
}

.about-hero__image {
  position: absolute;

  inset: 0;

  background-image: url('/images/model/hero.jpg');

  background-size: cover;

  background-position: 68% center;
}

.about-hero__overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgb(0 12 36 / 0.96) 0%,
      rgb(0 12 36 / 0.9) 28%,
      rgb(0 12 36 / 0.55) 52%,
      rgb(0 12 36 / 0.28) 100%
    );
}

.about-hero__inner {
  position: relative;

  z-index: 1;

  min-height: 620px;

  display: flex;
  align-items: center;

  padding-block: 72px 80px;
}

.about-hero__copy {
  max-width: 640px;
}

.about-hero__eyebrow {
  color: var(--color-blue-500);

  font-family: var(--font-sans);
  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.about-hero__title {
  margin-top: 16px;

  color: var(--color-white);

  font-size: clamp(3rem, 5.4vw, 4.6rem);

  line-height: 0.96;
}

.about-hero__title em {
  color: var(--color-blue-500);

  font-style: italic;
  font-weight: 450;
}

.about-hero__description {
  max-width: 34rem;

  margin-top: 22px;

  color: rgb(255 255 255 / 0.86);

  font-size: var(--text-lede);

  line-height: 1.6;
}

.about-hero__actions {
  margin-top: 28px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 12px;
}

.about-hero__button {
  height: 46px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  padding-inline: 18px;

  border: 1px solid transparent;
  border-radius: var(--radius-sm);

  font-family: var(--font-sans);
  font-size: var(--text-ui);
  font-weight: 650;

  line-height: 1;

  white-space: nowrap;
}

.about-hero__button--primary {
  color: var(--color-white);

  background: var(--color-blue-600);
}

.about-hero__button--primary:hover {
  background: var(--color-blue-500);
}

.about-hero__button--ghost {
  color: var(--color-white);

  background: transparent;

  border-color: rgb(255 255 255 / 0.72);
}

.about-hero__button--ghost:hover {
  background: rgb(255 255 255 / 0.1);
}

.about-hero__note {
  margin-top: 18px;

  color: rgb(255 255 255 / 0.72);

  font-size: var(--text-small);
}

.about-hero__fingerprint {
  position: absolute;

  z-index: 2;

  right: 7%;
  bottom: 54px;

  width: 210px;
  height: 210px;

  display: grid;
  place-items: center;

  pointer-events: none;
}

.about-hero__ring {
  position: absolute;

  border: 1.5px solid rgb(23 105 243 / 0.7);

  border-radius: 50%;
}

.about-hero__ring--1 {
  inset: 0;
}

.about-hero__ring--2 {
  inset: 18px;
}

.about-hero__ring--3 {
  inset: 36px;
}

.about-hero__ring--4 {
  inset: 54px;
}

.about-hero__ring--5 {
  inset: 72px;
}

.about-hero__fingerprint-label {
  position: relative;

  z-index: 1;

  color: var(--color-blue-500);

  font-family: var(--font-serif);
  font-size: 15px;
  font-style: italic;
  font-weight: 450;

  line-height: 1.15;

  text-align: center;
}

@media (max-width: 900px) {
  .about-hero__overlay {
    background:
      linear-gradient(
        180deg,
        rgb(0 12 36 / 0.55) 0%,
        rgb(0 12 36 / 0.82) 42%,
        rgb(0 12 36 / 0.94) 100%
      );
  }

  .about-hero__fingerprint {
    right: 16px;
    bottom: 20px;

    opacity: 0.55;
  }
}

@media (max-width: 640px) {
  .about-hero,
  .about-hero__inner {
    min-height: 0;
  }

  .about-hero__inner {
    padding-block: 48px 72px;
  }

  .about-hero__title {
    font-size: clamp(2.4rem, 11vw, 3.2rem);
  }

  .about-hero__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .about-hero__button {
    width: 100%;
  }

  .about-hero__fingerprint {
    width: 140px;
    height: 140px;
  }

  .about-hero__fingerprint-label {
    font-size: 12px;
  }
}
</style>
