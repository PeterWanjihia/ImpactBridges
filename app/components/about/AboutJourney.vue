<script setup lang="ts">
const milestones = [
  {
    date: 'Aug 2025 – Jan 2026',
    title: 'The vision',
    description:
      'We identified the gap, designed the offline microcomputer hub, and formed the early partnerships.',
  },
  {
    date: 'April 2026',
    title: 'Pilot launch',
    description:
      'The first hub was installed at Our Lady Seat of Wisdom in Kireka. Namulava experienced digital learning for the first time.',
  },
  {
    date: 'June 2026',
    title: 'Pilot review',
    description:
      'We collected feedback, refined the hardware, improved the content, and strengthened teacher support.',
  },
  {
    date: 'July 2026 — beyond',
    title: 'The next chapter',
    description:
      'More schools, the next ten hubs, and an impact report built from what the classrooms actually show.',
  },
]
</script>

<template>
  <section
    id="journey"
    class="about-journey"
    aria-labelledby="about-journey-title"
  >
    <div class="container">
      <header class="about-journey__header">
        <p class="eyebrow">
          Our journey so far
        </p>

        <h2 id="about-journey-title">
          From one question to a classroom that stayed open.
        </h2>
      </header>

      <ol class="about-journey__track">
        <li
          v-for="milestone in milestones"
          :key="milestone.title"
        >
          <span
            class="about-journey__dot"
            aria-hidden="true"
          />

          <p class="about-journey__date">
            {{ milestone.date }}
          </p>

          <h3>{{ milestone.title }}</h3>

          <p>{{ milestone.description }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.about-journey {
  padding: 72px 0;

  scroll-margin-top: 120px;

  background: var(--color-surface-blue);
}

.about-journey__header {
  max-width: 640px;
}

.about-journey__header h2 {
  margin-top: 12px;

  font-size: clamp(2rem, 3.4vw, 2.7rem);
}

.about-journey__track {
  position: relative;

  margin-top: 40px;

  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 24px;
}

.about-journey__track::before {
  content: "";

  position: absolute;

  top: 7px;
  left: 0;
  right: 8%;

  height: 2px;

  background: var(--color-blue-600);

  opacity: 0.35;
}

.about-journey__dot {
  position: relative;

  z-index: 1;

  display: block;

  width: 16px;
  height: 16px;

  background: var(--color-white);

  border: 3px solid var(--color-blue-600);

  border-radius: 50%;
}

.about-journey__date {
  margin-top: 16px;

  color: var(--color-blue-600);

  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.04em;

  text-transform: uppercase;
}

.about-journey__track h3 {
  margin-top: 8px;

  font-family: var(--font-sans);
  font-size: 1.15rem;
  font-weight: 700;

  letter-spacing: -0.02em;
}

.about-journey__track li > p:last-child {
  margin-top: 8px;

  font-size: var(--text-small);

  line-height: 1.5;
}

@media (max-width: 900px) {
  .about-journey__track {
    grid-template-columns: 1fr 1fr;
  }

  .about-journey__track::before {
    display: none;
  }
}

@media (max-width: 640px) {
  .about-journey {
    padding: 48px 0;
  }

  .about-journey__track {
    grid-template-columns: 1fr;
  }
}
</style>
