<script setup lang="ts">
import {
  Building2,
  Heart,
} from 'lucide-vue-next'
</script>

<template>
  <section
    id="next"
    class="about-next"
    aria-labelledby="about-next-title"
  >
    <div class="container">
      <div class="about-next__panel">
        <h2 id="about-next-title">
          One classroom showed what is possible.
          <em>The next ten can show how far it can travel.</em>
        </h2>

        <div class="about-next__actions">
          <NuxtLink
            to="/donate"
            class="about-next__button about-next__button--primary"
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
            class="about-next__button about-next__button--ghost"
          >
            <Building2
              :size="16"
              :stroke-width="1.8"
              aria-hidden="true"
            />

            Partner with us
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-next {
  padding: 8px 0 48px;

  scroll-margin-top: 120px;

  background: var(--color-white);
}

.about-next__panel {
  padding: 36px 40px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  gap: 24px;

  background: var(--color-navy-950);

  border-radius: var(--radius-lg);
}

.about-next__panel h2 {
  max-width: 18em;

  color: var(--color-white);

  font-size: clamp(1.7rem, 2.8vw, 2.35rem);

  line-height: 1.12;
}

.about-next__panel em {
  color: var(--color-blue-500);

  font-style: italic;
  font-weight: 450;
}

.about-next__actions {
  display: flex;
  flex-wrap: wrap;

  gap: 10px;
}

.about-next__button {
  height: 46px;

  display: inline-flex;
  align-items: center;

  gap: 8px;

  padding-inline: 16px;

  border: 1px solid transparent;
  border-radius: var(--radius-sm);

  font-family: var(--font-sans);
  font-size: var(--text-ui);
  font-weight: 650;
}

.about-next__button--primary {
  color: var(--color-white);

  background: var(--color-blue-600);
}

.about-next__button--primary:hover {
  background: var(--color-blue-500);
}

.about-next__button--ghost {
  color: var(--color-white);

  border-color: rgb(255 255 255 / 0.7);
}

.about-next__button--ghost:hover {
  background: rgb(255 255 255 / 0.1);
}

@media (max-width: 640px) {
  .about-next__panel {
    padding: 24px;
  }

  .about-next__actions,
  .about-next__button {
    width: 100%;
  }

  .about-next__button {
    justify-content: center;
  }
}
</style>
