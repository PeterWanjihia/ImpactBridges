<script setup lang="ts">
const phases = [
  {
    title: '1. Qualify and approve',
    steps: [
      { title: 'Offer submitted', note: 'You share inventory and specifications.' },
      { title: 'Reviewed', note: 'We compare it to current needs.' },
      { title: 'Provisional decision', note: 'We approve or request more information.' },
    ],
  },
  {
    title: '2. Transfer and receive',
    steps: [
      { title: 'Prepare transfer', note: 'Data erased, ownership confirmed, logistics agreed.' },
      { title: 'Equipment received', note: 'Arrival at our inspection and preparation facility.' },
    ],
  },
  {
    title: '3. Inspect and prepare',
    steps: [
      { title: 'Inspect and assess', note: 'Each item inspected and tested.' },
      { title: 'Prepare and configure', note: 'Repaired if needed, configured and inventoried.' },
    ],
  },
  {
    title: '4. Deploy and report',
    steps: [
      { title: 'Deploy to school', note: 'Assigned to a hub and installed with teacher support.' },
      { title: 'Impact and reporting', note: 'You receive updates on impact and stewardship.' },
    ],
  },
]
</script>

<template>
  <section
    class="equipment-journey"
    aria-labelledby="equipment-journey-title"
  >
    <div class="container">
      <h2 id="equipment-journey-title">
        From offer to classroom
      </h2>

      <p>A responsible journey from your organisation to a classroom where learners thrive.</p>

      <ol>
        <li
          v-for="phase in phases"
          :key="phase.title"
        >
          <h3>{{ phase.title }}</h3>

          <ul>
            <li
              v-for="step in phase.steps"
              :key="step.title"
            >
              <strong>{{ step.title }}</strong>
              <span>{{ step.note }}</span>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.equipment-journey {
  padding: 36px 0;

  background: var(--color-white);
}

.equipment-journey h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.equipment-journey > .container > p {
  margin-top: 8px;
}

.equipment-journey ol {
  margin-top: 24px;

  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 16px;
}

.equipment-journey h3 {
  color: var(--color-blue-600);

  font-family: var(--font-sans);
  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.05em;

  text-transform: uppercase;
}

.equipment-journey ul {
  margin-top: 12px;

  display: grid;

  gap: 12px;
}

.equipment-journey strong {
  display: block;

  color: var(--color-text-primary);

  font-size: var(--text-small);
}

.equipment-journey span {
  display: block;

  margin-top: 3px;

  color: var(--color-text-secondary);

  font-size: var(--text-caption);

  line-height: 1.4;
}

@media (max-width: 900px) {
  .equipment-journey ol {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .equipment-journey ol {
    grid-template-columns: 1fr;
  }
}
</style>
