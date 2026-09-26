<script setup lang="ts">
import {
  BookOpen,
  Star,
  UsersRound,
  Wrench,
} from 'lucide-vue-next'

const changes = [
  {
    observed: 'The original hardware needed greater protection and reliability.',
    changed: 'The hub enclosure was refined.',
    icon: Wrench,
  },
  {
    observed: 'Teachers needed more than an initial demonstration.',
    changed: 'Training expanded into guided practice and continued support.',
    icon: UsersRound,
  },
  {
    observed: 'Content needed stronger classroom alignment.',
    changed: 'The content review and curriculum-alignment process was strengthened.',
    icon: BookOpen,
  },
]
</script>

<template>
  <section
    id="sustainability"
    class="impact-programme"
    aria-labelledby="impact-programme-title"
  >
    <div class="container">
      <p class="eyebrow">
        Evidence that changed our programme
      </p>

      <h2
        id="impact-programme-title"
        class="sr-only"
      >
        Evidence that changed our programme
      </h2>

      <ul>
        <li
          v-for="change in changes"
          :key="change.changed"
        >
          <article>
            <span>
              <component
                :is="change.icon"
                :size="18"
                :stroke-width="1.8"
                aria-hidden="true"
              />
            </span>

            <p>
              <strong>We observed</strong>
              {{ change.observed }}
            </p>

            <p>
              <strong>We changed</strong>
              {{ change.changed }}
            </p>
          </article>
        </li>

        <li>
          <article class="impact-programme__principle">
            <span>
              <Star
                :size="18"
                :stroke-width="1.8"
                aria-hidden="true"
              />
            </span>

            <p>
              We do not collect evidence only to report success. We use
              it to improve the model.
            </p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.impact-programme {
  padding: 28px 0 20px;

  scroll-margin-top: 120px;

  background: var(--color-white);
}

.impact-programme ul {
  margin-top: 18px;

  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 14px;
}

.impact-programme article {
  height: 100%;

  padding: 18px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.impact-programme article > span {
  width: 36px;
  height: 36px;

  display: grid;
  place-items: center;

  color: var(--color-blue-600);

  background: var(--color-white);

  border-radius: 50%;
}

.impact-programme p {
  margin-top: 14px;

  color: var(--color-text-secondary);

  font-size: var(--text-small);

  line-height: 1.45;
}

.impact-programme strong {
  display: block;

  margin-bottom: 2px;

  color: var(--color-text-primary);

  font-size: var(--text-caption);

  letter-spacing: 0.04em;

  text-transform: uppercase;
}

.impact-programme__principle {
  color: var(--color-white);

  background: var(--color-navy-950);

  border-color: transparent;
}

.impact-programme__principle span {
  color: var(--color-white);

  background: rgb(255 255 255 / 0.12);
}

.impact-programme__principle p {
  color: rgb(255 255 255 / 0.9);

  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: 450;

  line-height: 1.35;
}

@media (max-width: 1000px) {
  .impact-programme ul {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .impact-programme ul {
    grid-template-columns: 1fr;
  }
}
</style>
