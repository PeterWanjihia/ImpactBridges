<script setup lang="ts">
import {
  Building2,
  Heart,
} from 'lucide-vue-next'
</script>

<template>
  <section
    class="stories-cta"
    aria-labelledby="stories-cta-title"
  >
    <div class="container stories-cta__inner">
      <div>
        <h2 id="stories-cta-title">
          Help create the next story of change.
        </h2>

        <p>
          Your support funds the tools, teacher preparation and ongoing
          support behind every classroom.
        </p>
      </div>

      <div class="stories-cta__actions">
        <NuxtLink
          to="/donate"
          class="stories-cta__button stories-cta__button--primary"
        >
          <Heart
            :size="16"
            :stroke-width="2"
            aria-hidden="true"
          />

          Fund a classroom
        </NuxtLink>

        <NuxtLink
          to="/corporate-partnerships"
          class="stories-cta__button stories-cta__button--ghost"
        >
          <Building2
            :size="16"
            :stroke-width="1.8"
            aria-hidden="true"
          />

          Start a partnership
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stories-cta {
  background: var(--color-navy-950);

  color: var(--color-white);
}

.stories-cta__inner {
  min-height: 150px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  gap: 24px;

  padding-block: 32px;
}

.stories-cta h2 {
  color: var(--color-white);

  font-size: clamp(1.7rem, 2.8vw, 2.3rem);
}

.stories-cta p {
  max-width: 36rem;

  margin-top: 8px;

  color: rgb(255 255 255 / 0.76);

  font-size: var(--text-small);
}

.stories-cta__actions {
  display: flex;
  flex-wrap: wrap;

  gap: 10px;
}

.stories-cta__button {
  height: 46px;

  display: inline-flex;
  align-items: center;

  gap: 8px;

  padding-inline: 16px;

  border: 1px solid transparent;
  border-radius: var(--radius-round);

  font-family: var(--font-sans);
  font-size: var(--text-ui);
  font-weight: 650;
}

.stories-cta__button--primary {
  color: var(--color-navy-950);

  background: var(--color-white);
}

.stories-cta__button--primary:hover {
  background: var(--color-blue-100);
}

.stories-cta__button--ghost {
  color: var(--color-white);

  border-color: rgb(255 255 255 / 0.7);
}

.stories-cta__button--ghost:hover {
  background: rgb(255 255 255 / 0.1);
}

@media (max-width: 640px) {
  .stories-cta__actions,
  .stories-cta__button {
    width: 100%;
  }

  .stories-cta__button {
    justify-content: center;
  }
}
</style>
