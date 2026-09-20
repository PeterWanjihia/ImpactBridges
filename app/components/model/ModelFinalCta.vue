<script setup lang="ts">
import {
  Building2,
  Heart,
} from 'lucide-vue-next'
</script>

<template>
  <section class="model-cta">
    <div class="container model-cta__inner">
      <div>
        <h2>A complete learning system can travel.</h2>

        <p>
          Help us put the next hub in a classroom that is ready to keep it.
        </p>
      </div>

      <div class="model-cta__actions">
        <NuxtLink
          to="/donate"
          class="model-cta__button model-cta__button--primary"
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
          class="model-cta__button model-cta__button--secondary"
        >
          <Building2
            :size="16"
            :stroke-width="1.9"
            aria-hidden="true"
          />

          Partner with us
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.model-cta {
  padding: 8px 0 40px;

  background: var(--color-surface-soft);
}

.model-cta__inner {
  padding: 28px 32px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  gap: 24px;

  color: var(--color-white);

  background: var(--color-navy-950);

  border-radius: var(--radius-md);
}

.model-cta__inner h2 {
  color: var(--color-white);

  font-size: clamp(1.6rem, 2.4vw, 2.1rem);
}

.model-cta__inner p {
  margin-top: 8px;

  color: rgb(255 255 255 / 0.74);

  font-size: var(--text-ui);
}

.model-cta__actions {
  display: flex;
  flex-wrap: wrap;

  gap: 10px;
}

.model-cta__button {
  height: 44px;

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
}

.model-cta__button--primary {
  color: var(--color-white);

  background: var(--color-blue-600);
}

.model-cta__button--primary:hover {
  background: var(--color-blue-500);
}

.model-cta__button--secondary {
  color: var(--color-white);

  background: transparent;

  border-color: rgb(255 255 255 / 0.5);
}

.model-cta__button--secondary:hover {
  background: rgb(255 255 255 / 0.08);
}

@media (max-width: 640px) {
  .model-cta__inner {
    padding: 24px 20px;
  }

  .model-cta__actions,
  .model-cta__button {
    width: 100%;
  }
}
</style>
