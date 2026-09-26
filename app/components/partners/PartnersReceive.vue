<script setup lang="ts">
const benefits = [
  {
    title: 'Strategic alignment',
    description: 'A partnership aligned to your CSR and ESG priorities.',
  },
  {
    title: 'Evidence and stories',
    description: 'Verified data, stories and media shared with consent and safeguards.',
  },
  {
    title: 'Implementation plan',
    description: 'A clear plan with milestones and responsibilities.',
  },
  {
    title: 'Employee engagement',
    description: 'Opportunities for involvement, volunteering and giving.',
  },
  {
    title: 'Impact reporting',
    description: 'Regular progress updates and impact reports.',
  },
  {
    title: 'Long-term impact',
    description: 'Stronger schools, empowered teachers, and measurable change.',
  },
]
</script>

<template>
  <section
    class="partners-receive"
    aria-labelledby="partners-receive-title"
  >
    <div class="container partners-receive__grid">
      <div>
        <h2 id="partners-receive-title">
          What partners receive
        </h2>

        <ul>
          <li
            v-for="benefit in benefits"
            :key="benefit.title"
          >
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </li>
        </ul>
      </div>

      <blockquote>
        <p>
          “Impact Bridge gave us confidence that our contribution would
          be used effectively and with integrity. Seeing our devices in
          active classrooms—and the teachers leading with them—made all
          the difference.”
        </p>

        <footer>— Corporate partner</footer>
      </blockquote>

      <figure>
        <img
          src="/images/home/company-partnership.png"
          alt="Partners meeting around a laptop in an office."
          width="960"
          height="640"
        >
      </figure>
    </div>
  </section>
</template>

<style scoped>
.partners-receive {
  padding: 12px 0 48px;

  background: var(--color-white);
}

.partners-receive__grid {
  display: grid;

  grid-template-columns: 1.15fr 0.9fr 0.85fr;

  gap: 16px;

  align-items: stretch;
}

.partners-receive h2 {
  font-size: clamp(1.7rem, 2.6vw, 2.2rem);
}

.partners-receive ul {
  margin-top: 16px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 14px 16px;
}

.partners-receive h3 {
  font-family: var(--font-sans);
  font-size: var(--text-small);
  font-weight: 700;

  letter-spacing: 0;
}

.partners-receive li p {
  margin-top: 4px;

  font-size: var(--text-caption);

  line-height: 1.4;
}

.partners-receive blockquote {
  padding: 22px;

  background: var(--color-surface-blue);

  border-radius: var(--radius-lg);
}

.partners-receive blockquote p {
  color: var(--color-text-primary);

  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-style: italic;
  font-weight: 450;

  line-height: 1.4;
}

.partners-receive footer {
  margin-top: 16px;

  color: var(--color-text-secondary);

  font-family: var(--font-sans);
  font-size: var(--text-small);
  font-weight: 650;
}

.partners-receive img {
  display: block;

  width: 100%;
  height: 100%;

  min-height: 240px;

  object-fit: cover;

  border-radius: var(--radius-lg);
}

@media (max-width: 1000px) {
  .partners-receive__grid {
    grid-template-columns: 1fr;
  }

  .partners-receive img {
    height: 240px;
  }
}

@media (max-width: 640px) {
  .partners-receive ul {
    grid-template-columns: 1fr;
  }
}
</style>
