<script setup lang="ts">
import { Mail } from 'lucide-vue-next'

const email = ref('')
const status = ref<'idle' | 'invalid' | 'unwired'>('idle')

function onSubmit() {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    status.value = 'invalid'
    return
  }

  status.value = 'unwired'
}
</script>

<template>
  <section
    id="question"
    class="account-subscribe"
    aria-labelledby="account-subscribe-title"
  >
    <div class="container">
      <div class="account-subscribe__panel">
        <Mail
          :size="22"
          :stroke-width="1.7"
          aria-hidden="true"
        />

        <div>
          <h2 id="account-subscribe-title">
            Stay informed
          </h2>

          <p>Subscribe to receive our reports, updates and stories.</p>
        </div>

        <form @submit.prevent="onSubmit">
          <label
            class="sr-only"
            for="account-email"
          >
            Your email address
          </label>

          <input
            id="account-email"
            v-model="email"
            type="email"
            name="email"
            autocomplete="email"
            required
            placeholder="Your email address"
            :aria-invalid="status === 'invalid'"
          >

          <button type="submit">
            Subscribe
          </button>
        </form>

        <p role="status">
          <template v-if="status === 'invalid'">
            Enter a valid email address.
          </template>
          <template v-else-if="status === 'unwired'">
            This list is not connected yet. Your address has not been stored.
          </template>
          <template v-else>
            We respect your privacy. You can unsubscribe at any time. This list is not connected yet.
          </template>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.account-subscribe {
  padding: 8px 0 48px;

  scroll-margin-top: 88px;

  background: var(--color-white);
}

.account-subscribe__panel {
  display: grid;

  grid-template-columns: auto 1fr auto;

  gap: 8px 16px;

  align-items: center;

  padding: 20px 22px;

  color: var(--color-white);

  background:
    linear-gradient(90deg, rgb(0 18 47 / 0.92), rgb(0 18 47 / 0.72)),
    url('/images/home/evidence-student.png') right center / cover no-repeat;

  border-radius: var(--radius-lg);
}

.account-subscribe svg {
  color: var(--color-blue-500);
}

.account-subscribe h2 {
  color: var(--color-white);

  font-family: var(--font-sans);
  font-size: 1.2rem;
  font-weight: 700;

  letter-spacing: 0;
}

.account-subscribe__panel > div p,
.account-subscribe__panel > p {
  color: rgb(255 255 255 / 0.75);

  font-size: var(--text-small);
}

.account-subscribe form {
  display: flex;

  gap: 8px;
}

.account-subscribe input {
  width: 220px;
  height: 42px;

  padding-inline: 12px;

  color: var(--color-white);

  background: rgb(255 255 255 / 0.08);

  border: 1px solid rgb(255 255 255 / 0.25);

  border-radius: var(--radius-sm);

  font: inherit;
  font-size: var(--text-small);
}

.account-subscribe input::placeholder {
  color: rgb(255 255 255 / 0.55);
}

.account-subscribe button {
  height: 42px;

  padding-inline: 14px;

  color: var(--color-white);

  background: var(--color-blue-600);

  border-radius: var(--radius-sm);

  font-size: var(--text-small);
  font-weight: 650;
}

.account-subscribe button:hover {
  background: var(--color-blue-500);
}

.account-subscribe__panel > p {
  grid-column: 2 / -1;
}

@media (max-width: 800px) {
  .account-subscribe__panel,
  .account-subscribe form {
    grid-template-columns: 1fr;

    display: grid;
  }

  .account-subscribe input,
  .account-subscribe button {
    width: 100%;
  }

  .account-subscribe__panel > p {
    grid-column: auto;
  }
}
</style>
