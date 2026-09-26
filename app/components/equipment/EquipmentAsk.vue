<script setup lang="ts">
import {
  ArrowRight,
  Mail,
} from 'lucide-vue-next'
</script>

<template>
  <section
    class="equipment-ask"
    aria-labelledby="equipment-ask-title"
  >
    <div class="container equipment-ask__inner">
      <Mail
        :size="22"
        :stroke-width="1.7"
        aria-hidden="true"
      />

      <div>
        <h2 id="equipment-ask-title">
          Have questions before you offer?
        </h2>

        <p>Our team is happy to help you understand the process.</p>
      </div>

      <NuxtLink to="/contact">
        Contact our team

        <ArrowRight
          :size="16"
          :stroke-width="2"
          aria-hidden="true"
        />
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.equipment-ask {
  padding: 0 0 48px;

  background: var(--color-white);
}

.equipment-ask__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 16px;

  padding: 18px 20px;

  background: var(--color-surface-blue);

  border-radius: var(--radius-lg);
}

.equipment-ask svg {
  color: var(--color-blue-600);
}

.equipment-ask h2 {
  font-family: var(--font-sans);
  font-size: 1.05rem;
  font-weight: 700;

  letter-spacing: 0;
}

.equipment-ask p {
  margin-top: 2px;

  font-size: var(--text-small);
}

.equipment-ask a {
  margin-left: auto;

  height: 44px;

  display: inline-flex;
  align-items: center;

  gap: 8px;

  padding-inline: 16px;

  color: var(--color-white);

  background: var(--color-blue-600);

  border-radius: var(--radius-sm);

  font-size: var(--text-small);
  font-weight: 650;
}

.equipment-ask a:hover {
  background: var(--color-blue-500);
}

@media (max-width: 700px) {
  .equipment-ask a {
    width: 100%;

    margin-left: 0;

    justify-content: center;
  }
}
</style>
