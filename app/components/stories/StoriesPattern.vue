<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section
    class="stories-pattern"
    aria-labelledby="stories-pattern-title"
  >
    <div class="container stories-pattern__inner">
      <div class="stories-pattern__side">
        <div
          class="stories-pattern__mark"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </div>

        <h2 id="stories-pattern-title">
          Stories show experience.
        </h2>

        <p>
          Each story reflects a real person’s journey and perspective.
        </p>
      </div>

      <img
        src="/images/home/evidence-student.png"
        alt=""
        width="120"
        height="120"
      >

      <div class="stories-pattern__side stories-pattern__side--evidence">
        <div
          class="stories-pattern__mark"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </div>

        <h2>Evidence shows pattern.</h2>

        <p>
          Our impact page brings together the data that many stories help explain.
        </p>

        <NuxtLink to="/impact">
          See the evidence

          <ArrowRight
            :size="14"
            :stroke-width="2"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stories-pattern {
  padding: 8px 0 48px;

  background: var(--color-white);
}

.stories-pattern__inner {
  display: grid;

  grid-template-columns: 1fr auto 1fr;

  gap: 28px;

  align-items: center;

  padding: 28px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.stories-pattern h2 {
  margin-top: 12px;

  font-size: clamp(1.5rem, 2.2vw, 1.9rem);
}

.stories-pattern p {
  margin-top: 8px;

  font-size: var(--text-small);

  line-height: 1.5;
}

.stories-pattern a {
  margin-top: 12px;

  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-size: var(--text-small);
  font-weight: 650;
}

.stories-pattern a:hover {
  text-decoration: underline;
}

.stories-pattern img {
  width: 88px;
  height: 88px;

  object-fit: cover;

  border: 4px solid var(--color-white);

  border-radius: 50%;

  box-shadow: var(--shadow-sm);
}

.stories-pattern__mark {
  display: flex;
  align-items: center;

  gap: 6px;
}

.stories-pattern__mark span {
  width: 28px;
  height: 28px;

  border: 1.5px solid var(--color-blue-500);

  border-radius: 50%;

  opacity: 0.7;
}

.stories-pattern__mark span:nth-child(2) {
  width: 18px;
  height: 18px;
}

.stories-pattern__mark span:nth-child(3) {
  width: 10px;
  height: 10px;

  background: var(--color-blue-500);
}

@media (max-width: 800px) {
  .stories-pattern__inner {
    grid-template-columns: 1fr;

    justify-items: start;
  }
}
</style>
