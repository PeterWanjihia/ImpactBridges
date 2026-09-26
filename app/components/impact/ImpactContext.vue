<script setup lang="ts">
import {
  BookOpen,
  Calendar,
  Info,
  MapPin,
  UsersRound,
} from 'lucide-vue-next'

const details = [
  {
    label: 'Pilot period',
    value: 'April – June 2025 (initial review)',
    icon: Calendar,
  },
  {
    label: 'Teachers',
    value: '2 Champion Teachers',
    icon: UsersRound,
  },
  {
    label: 'Learners',
    value: '50+ students across primary grades',
    icon: UsersRound,
  },
  {
    label: 'Focus',
    value: 'Offline learning, teacher adoption, learner engagement',
    icon: BookOpen,
  },
  {
    label: 'Subjects introduced',
    value: 'Science, Mathematics, English and Integrated Studies',
    icon: BookOpen,
  },
  {
    label: 'Status',
    value: 'Pilot and refinement',
    icon: Info,
  },
]
</script>

<template>
  <section
    id="reach"
    class="impact-context"
    aria-labelledby="impact-context-title"
  >
    <div class="container">
      <p class="eyebrow">
        The pilot in context
      </p>

      <div class="impact-context__panel">
        <figure>
          <img
            src="/images/home/challenge.png"
            alt="Learners arriving at a primary school campus."
            width="960"
            height="640"
          >
        </figure>

        <div class="impact-context__copy">
          <h2 id="impact-context-title">
            Our Lady Seat of Wisdom
          </h2>

          <p class="impact-context__place">
            <MapPin
              :size="16"
              :stroke-width="1.8"
              aria-hidden="true"
            />

            Kansanga, Kampala, Uganda

            <span aria-hidden="true">·</span>

            Launched April 2025
          </p>

          <dl>
            <div
              v-for="detail in details"
              :key="detail.label"
            >
              <dt>
                <component
                  :is="detail.icon"
                  :size="15"
                  :stroke-width="1.8"
                  aria-hidden="true"
                />

                {{ detail.label }}
              </dt>

              <dd>{{ detail.value }}</dd>
            </div>
          </dl>
        </div>
      </div>

      <p class="impact-context__note">
        <Info
          :size="16"
          :stroke-width="1.8"
          aria-hidden="true"
        />

        The findings on this page come from this early pilot. We are still
        learning and will continue to measure as we expand.
      </p>
    </div>
  </section>
</template>

<style scoped>
.impact-context {
  padding: 64px 0 28px;

  scroll-margin-top: 120px;

  background: var(--color-white);
}

.impact-context__panel {
  margin-top: 18px;

  display: grid;

  grid-template-columns: 0.9fr 1.1fr;

  gap: 28px;

  align-items: center;

  padding: 18px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.impact-context__panel img {
  display: block;

  width: 100%;
  height: 280px;

  object-fit: cover;

  border-radius: var(--radius-md);
}

.impact-context__copy h2 {
  font-size: clamp(1.8rem, 2.6vw, 2.3rem);
}

.impact-context__place {
  margin-top: 8px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 8px;

  color: var(--color-text-secondary);

  font-size: var(--text-small);
  font-weight: 600;
}

.impact-context__place svg {
  color: var(--color-blue-600);
}

.impact-context dl {
  margin-top: 20px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 16px 20px;
}

.impact-context dt {
  display: flex;
  align-items: center;

  gap: 6px;

  color: var(--color-text-muted);

  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.04em;

  text-transform: uppercase;
}

.impact-context dt svg {
  color: var(--color-blue-600);
}

.impact-context dd {
  margin-top: 4px;

  color: var(--color-text-primary);

  font-size: var(--text-small);
  font-weight: 650;

  line-height: 1.4;
}

.impact-context__note {
  margin-top: 16px;

  display: flex;
  align-items: flex-start;

  gap: 8px;

  color: var(--color-text-secondary);

  font-size: var(--text-small);

  line-height: 1.5;
}

.impact-context__note svg {
  flex-shrink: 0;

  margin-top: 2px;

  color: var(--color-blue-600);
}

@media (max-width: 900px) {
  .impact-context__panel,
  .impact-context dl {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .impact-context {
    padding-top: 40px;
  }

  .impact-context__panel img {
    height: 200px;
  }
}
</style>
