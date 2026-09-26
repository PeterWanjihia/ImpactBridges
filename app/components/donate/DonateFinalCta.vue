<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section
    class="donate-cta"
    aria-labelledby="donate-cta-title"
  >
    <div
      class="donate-cta__image"
      aria-hidden="true"
    />

    <div class="donate-cta__overlay" />

    <div class="container donate-cta__inner">
      <h2 id="donate-cta-title">
        Every gift becomes part of a bigger change.
      </h2>

      <p>
        After your contribution, you’ll receive confirmation and can
        choose how you’d like to hear about the impact you’re making.
        That confirmation starts when checkout is connected.
      </p>

      <div class="donate-cta__actions">
        <a
          href="#choose"
          class="donate-cta__button donate-cta__button--primary"
        >
          Fund the next classroom

          <ArrowRight
            :size="16"
            :stroke-width="2"
            aria-hidden="true"
          />
        </a>

        <NuxtLink
          to="/impact"
          class="donate-cta__button donate-cta__button--ghost"
        >
          See the impact
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.donate-cta {
  position: relative;

  overflow: hidden;

  margin: 0 0 0;

  background: var(--color-navy-950);

  color: var(--color-white);
}

.donate-cta__image {
  position: absolute;

  inset: 0;

  background-image: url('/images/home/evidence-student.png');

  background-size: cover;

  background-position: center 20%;
}

.donate-cta__overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgb(0 14 40 / 0.94) 0%,
      rgb(0 14 40 / 0.78) 48%,
      rgb(0 14 40 / 0.35) 100%
    );
}

.donate-cta__inner {
  position: relative;

  z-index: 1;

  max-width: 640px;

  padding-block: 48px;
}

.donate-cta h2 {
  color: var(--color-white);

  font-size: clamp(1.8rem, 3vw, 2.5rem);
}

.donate-cta p {
  margin-top: 12px;

  color: rgb(255 255 255 / 0.8);

  font-size: var(--text-small);

  line-height: 1.55;
}

.donate-cta__actions {
  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;

  gap: 10px;
}

.donate-cta__button {
  height: 46px;

  display: inline-flex;
  align-items: center;

  gap: 8px;

  padding-inline: 16px;

  border: 1px solid transparent;
  border-radius: var(--radius-round);

  font-size: var(--text-ui);
  font-weight: 650;
}

.donate-cta__button--primary {
  color: var(--color-white);

  background: var(--color-blue-600);
}

.donate-cta__button--primary:hover {
  background: var(--color-blue-500);
}

.donate-cta__button--ghost {
  color: var(--color-white);

  border-color: rgb(255 255 255 / 0.7);
}

.donate-cta__button--ghost:hover {
  background: rgb(255 255 255 / 0.1);
}

@media (max-width: 640px) {
  .donate-cta__actions,
  .donate-cta__button {
    width: 100%;
  }

  .donate-cta__button {
    justify-content: center;
  }
}
</style>
