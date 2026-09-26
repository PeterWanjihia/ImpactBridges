<script setup lang="ts">
import { Check } from 'lucide-vue-next'

const benefits = [
  'Acknowledgement of your contribution',
  'A detailed acceptance summary',
  'Deployment updates and stories',
  'Photos and impact reporting, with consent',
  'End-of-life or reassignment information',
]

const showExamples = ref(false)
</script>

<template>
  <section
    class="equipment-donors"
    aria-labelledby="equipment-donors-title"
  >
    <div class="container equipment-donors__grid">
      <div>
        <h2 id="equipment-donors-title">
          What equipment donors receive
        </h2>

        <p>
          We provide stewardship and transparency throughout the equipment journey.
        </p>

        <ul>
          <li
            v-for="benefit in benefits"
            :key="benefit"
          >
            <Check
              :size="15"
              :stroke-width="2.2"
              aria-hidden="true"
            />

            {{ benefit }}
          </li>
        </ul>

        <button
          type="button"
          :aria-expanded="showExamples"
          @click="showExamples = !showExamples"
        >
          {{ showExamples ? 'Hide reporting examples' : 'See reporting examples' }}
        </button>

        <p
          v-if="showExamples"
          class="equipment-donors__examples"
        >
          A typical update names the school, what was installed, and what the teacher is using it for. Photos are used only with consent. We do not publish a child’s name to decorate a donor report.
        </p>
      </div>

      <img
        src="/images/model/hero.jpg"
        alt="A teacher leading a lesson with a class of learners."
        width="960"
        height="640"
      >

      <blockquote>
        <p>
          “Knowing our devices are actively used by teachers and learners makes the partnership with Impact Bridge incredibly meaningful.”
        </p>

        <footer>Technology partner</footer>
      </blockquote>
    </div>
  </section>
</template>

<style scoped>
.equipment-donors {
  padding: 8px 0 40px;

  background: var(--color-white);
}

.equipment-donors__grid {
  display: grid;

  grid-template-columns: 0.9fr 1.1fr 0.9fr;

  gap: 16px;

  align-items: stretch;
}

.equipment-donors h2 {
  font-size: clamp(1.6rem, 2.4vw, 2.1rem);
}

.equipment-donors__grid > div > p {
  margin-top: 8px;

  font-size: var(--text-small);

  line-height: 1.5;
}

.equipment-donors ul {
  margin-top: 16px;

  display: grid;

  gap: 8px;
}

.equipment-donors li {
  display: flex;
  align-items: flex-start;

  gap: 8px;

  color: var(--color-text-primary);

  font-size: var(--text-small);

  line-height: 1.4;
}

.equipment-donors li svg {
  flex-shrink: 0;

  margin-top: 2px;

  color: var(--color-teal-600);
}

.equipment-donors button {
  margin-top: 14px;

  color: var(--color-blue-600);

  font-family: var(--font-sans);
  font-size: var(--text-small);
  font-weight: 650;
}

.equipment-donors button:hover {
  text-decoration: underline;
}

.equipment-donors__examples {
  margin-top: 10px;
}

.equipment-donors img {
  width: 100%;
  height: 100%;

  min-height: 220px;

  object-fit: cover;

  border-radius: var(--radius-lg);
}

.equipment-donors blockquote {
  padding: 22px;

  display: flex;
  flex-direction: column;
  justify-content: end;

  color: var(--color-white);

  background: var(--color-navy-950);

  border-radius: var(--radius-lg);
}

.equipment-donors blockquote p {
  color: var(--color-white);

  font-family: var(--font-serif);
  font-size: 1.35rem;
  font-style: italic;
  font-weight: 450;

  line-height: 1.35;
}

.equipment-donors footer {
  margin-top: 16px;

  color: rgb(255 255 255 / 0.7);

  font-size: var(--text-small);
  font-weight: 650;
}

@media (max-width: 900px) {
  .equipment-donors__grid {
    grid-template-columns: 1fr;
  }

  .equipment-donors img {
    height: 220px;
  }
}
</style>
