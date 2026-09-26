<script setup lang="ts">
import { Play } from 'lucide-vue-next'
</script>

<template>
  <section
    id="classroom"
    class="about-classroom"
    aria-labelledby="about-classroom-title"
  >
    <div class="container about-classroom__inner">
      <div class="about-classroom__copy">
        <p class="eyebrow">
          The first classroom
        </p>

        <h2 id="about-classroom-title">
          Then the idea entered<br>
          a real classroom.
        </h2>

        <p>
          In April 2026, the first hub was installed at Our Lady Seat
          of Wisdom in Kireka. Two Champion Teachers were trained, and
          the same lesson could finally be taught to learners, not
          just planned.
        </p>

        <a
          href="#lives"
          class="about-classroom__button"
        >
          <Play
            :size="14"
            :stroke-width="2.4"
            aria-hidden="true"
          />

          Watch the first classroom
        </a>
      </div>

      <figure class="about-classroom__media">
        <img
          src="/images/model/lesson-introduce.png"
          alt="A teacher introducing a lesson with projected learning content."
          width="960"
          height="640"
        >
      </figure>
    </div>
  </section>
</template>

<style scoped>
.about-classroom {
  padding: 28px 0 72px;

  scroll-margin-top: 120px;

  background: var(--color-white);
}

.about-classroom__inner {
  padding: 36px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 36px;

  align-items: center;

  background: var(--color-surface-blue);

  border-radius: var(--radius-lg);
}

.about-classroom__copy h2 {
  margin-top: 12px;

  font-size: clamp(2rem, 3.2vw, 2.7rem);

  line-height: 1.05;
}

.about-classroom__copy p {
  max-width: 36rem;

  margin-top: 16px;

  font-size: var(--text-lede);

  line-height: 1.6;
}

.about-classroom__button {
  height: 46px;

  margin-top: 24px;

  display: inline-flex;
  align-items: center;

  gap: 8px;

  padding-inline: 18px;

  color: var(--color-white);

  background: var(--color-blue-600);

  border-radius: var(--radius-sm);

  font-family: var(--font-sans);
  font-size: var(--text-ui);
  font-weight: 650;
}

.about-classroom__button:hover {
  background: var(--color-blue-500);
}

.about-classroom__media {
  overflow: hidden;

  border-radius: var(--radius-md);
}

.about-classroom__media img {
  display: block;

  width: 100%;
  height: 280px;

  object-fit: cover;
}

@media (max-width: 800px) {
  .about-classroom__inner {
    grid-template-columns: 1fr;

    padding: 24px;
  }
}
</style>
