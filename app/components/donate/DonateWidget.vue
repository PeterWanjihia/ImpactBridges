<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  CreditCard,
  Landmark,
  Wallet,
} from 'lucide-vue-next'

const steps = ['Choose', 'Details', 'Payment'] as const

const amounts = [25, 50, 100, 250, 500]

const allocations = [
  {
    id: 'where-needed',
    label: 'Where it is needed most',
    note: 'We’ll use your gift where the need is greatest.',
  },
  {
    id: 'hub',
    label: 'The next learning hub',
    note: 'Your gift goes toward putting a hub in a classroom.',
  },
  {
    id: 'teacher',
    label: 'Teacher development',
    note: 'Your gift supports Champion Teacher training and follow-up.',
  },
  {
    id: 'support',
    label: 'Content and continued support',
    note: 'Your gift keeps lessons and classroom support going.',
  },
]

const methods = [
  { id: 'card', label: 'Card & wallets', icon: CreditCard },
  { id: 'crypto', label: 'Crypto', icon: Wallet },
  { id: 'bank', label: 'Bank transfer', icon: Landmark },
] as const

const step = ref<(typeof steps)[number]>('Choose')
const method = ref<(typeof methods)[number]['id']>('card')
const frequency = ref<'once' | 'monthly'>('once')
const selectedAmount = ref<number | 'custom'>(50)
const customAmount = ref('')
const allocation = ref('where-needed')
const name = ref('')
const email = ref('')
const error = ref('')

const gift = computed(() => {
  if (selectedAmount.value === 'custom') {
    const value = Number(customAmount.value)
    return Number.isFinite(value) && value > 0 ? value : 0
  }

  return selectedAmount.value
})

const giftLabel = computed(() =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0,
  }).format(gift.value),
)

const allocationLabel = computed(() =>
  allocations.find(item => item.id === allocation.value)?.label ?? '',
)

const methodLabel = computed(() =>
  methods.find(item => item.id === method.value)?.label ?? '',
)

function goToDetails() {
  if (gift.value <= 0) {
    error.value = 'Choose an amount, or enter a custom gift above zero.'
    return
  }

  error.value = ''
  step.value = 'Details'
}

function goToPayment() {
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())

  if (!name.value.trim() || !emailOk) {
    error.value = 'Enter your name and a valid email address.'
    return
  }

  error.value = ''
  step.value = 'Payment'
}

function back() {
  error.value = ''
  step.value = step.value === 'Payment' ? 'Details' : 'Choose'
}
</script>

<template>
  <form
    id="choose"
    class="donate-widget"
    @submit.prevent="step === 'Choose' ? goToDetails() : goToPayment()"
  >
    <ol
      class="donate-widget__steps"
      aria-label="Donation steps"
    >
      <li
        v-for="(label, index) in steps"
        :key="label"
        :class="{ 'is-current': step === label, 'is-done': steps.indexOf(step) > index }"
      >
        <span>{{ index + 1 }}</span>
        {{ label }}
      </li>
    </ol>

    <template v-if="step === 'Choose'">
      <div
        class="donate-widget__methods"
        role="group"
        aria-label="Payment method"
      >
        <button
          v-for="item in methods"
          :key="item.id"
          type="button"
          :aria-pressed="method === item.id"
          :class="{ 'is-active': method === item.id }"
          @click="method = item.id"
        >
          <component
            :is="item.icon"
            :size="16"
            :stroke-width="1.8"
            aria-hidden="true"
          />

          {{ item.label }}
        </button>
      </div>

      <div
        class="donate-widget__frequency"
        role="group"
        aria-label="Gift frequency"
      >
        <button
          type="button"
          :aria-pressed="frequency === 'once'"
          :class="{ 'is-active': frequency === 'once' }"
          @click="frequency = 'once'"
        >
          Give once
        </button>

        <button
          type="button"
          :aria-pressed="frequency === 'monthly'"
          :class="{ 'is-active': frequency === 'monthly' }"
          @click="frequency = 'monthly'"
        >
          Give monthly
        </button>
      </div>

      <div
        class="donate-widget__amounts"
        role="group"
        aria-label="Gift amount"
      >
        <button
          v-for="amount in amounts"
          :key="amount"
          type="button"
          :aria-pressed="selectedAmount === amount"
          :class="{ 'is-active': selectedAmount === amount }"
          @click="selectedAmount = amount"
        >
          £{{ amount }}
        </button>

        <button
          type="button"
          :aria-pressed="selectedAmount === 'custom'"
          :class="{ 'is-active': selectedAmount === 'custom' }"
          @click="selectedAmount = 'custom'"
        >
          Custom
        </button>
      </div>

      <label
        v-if="selectedAmount === 'custom'"
        class="donate-widget__custom"
      >
        Custom amount in pounds
        <input
          v-model="customAmount"
          type="number"
          min="1"
          step="1"
          inputmode="numeric"
          name="amount"
        >
      </label>

      <fieldset class="donate-widget__allocation">
        <legend>Where should your contribution go?</legend>

        <label
          v-for="item in allocations"
          :key="item.id"
        >
          <input
            v-model="allocation"
            type="radio"
            name="allocation"
            :value="item.id"
          >

          <span>
            <strong>{{ item.label }}</strong>
            <small v-if="allocation === item.id">{{ item.note }}</small>
          </span>
        </label>
      </fieldset>

      <p
        v-if="error"
        class="donate-widget__error"
        role="alert"
      >
        {{ error }}
      </p>

      <button
        type="submit"
        class="donate-widget__next"
      >
        Continue to details

        <ArrowRight
          :size="16"
          :stroke-width="2"
          aria-hidden="true"
        />
      </button>
    </template>

    <template v-else-if="step === 'Details'">
      <p class="donate-widget__summary">
        {{ giftLabel }}
        {{ frequency === 'monthly' ? 'monthly' : 'once' }}
        by {{ methodLabel }}, for {{ allocationLabel }}.
      </p>

      <label>
        Your name
        <input
          v-model="name"
          type="text"
          name="name"
          autocomplete="name"
          required
        >
      </label>

      <label>
        Email address
        <input
          v-model="email"
          type="email"
          name="email"
          autocomplete="email"
          required
        >
      </label>

      <p
        v-if="error"
        class="donate-widget__error"
        role="alert"
      >
        {{ error }}
      </p>

      <div class="donate-widget__nav">
        <button
          type="button"
          class="donate-widget__back"
          @click="back"
        >
          <ArrowLeft
            :size="16"
            :stroke-width="2"
            aria-hidden="true"
          />

          Back
        </button>

        <button
          type="submit"
          class="donate-widget__next"
        >
          Continue to payment

          <ArrowRight
            :size="16"
            :stroke-width="2"
            aria-hidden="true"
          />
        </button>
      </div>
    </template>

    <template v-else>
      <p class="donate-widget__summary">
        {{ giftLabel }}
        {{ frequency === 'monthly' ? 'monthly' : 'once' }},
        {{ methodLabel }},
        {{ allocationLabel }}.
      </p>

      <p class="donate-widget__notice">
        Checkout is not connected on this site. No card, wallet or bank
        details are collected here, and nothing has been charged.
      </p>

      <p class="donate-widget__notice">
        If you want to give before payments are live, write through the contact page and we will share the real method.
      </p>

      <div class="donate-widget__nav">
        <button
          type="button"
          class="donate-widget__back"
          @click="back"
        >
          <ArrowLeft
            :size="16"
            :stroke-width="2"
            aria-hidden="true"
          />

          Back
        </button>

        <NuxtLink
          to="/contact"
          class="donate-widget__next"
        >
          Ask how to give
        </NuxtLink>
      </div>
    </template>
  </form>
</template>

<style scoped>
.donate-widget {
  padding: 18px;

  scroll-margin-top: 88px;

  background: var(--color-white);

  border-radius: var(--radius-lg);

  box-shadow: var(--shadow-md);
}

.donate-widget__steps {
  display: flex;

  gap: 12px;

  margin-bottom: 16px;

  color: var(--color-text-muted);

  font-size: var(--text-caption);
  font-weight: 700;
}

.donate-widget__steps li {
  display: flex;
  align-items: center;

  gap: 6px;
}

.donate-widget__steps span {
  width: 18px;
  height: 18px;

  display: grid;
  place-items: center;

  border: 1px solid var(--color-border-strong);

  border-radius: 50%;

  font-size: 11px;
}

.donate-widget__steps .is-current {
  color: var(--color-blue-600);
}

.donate-widget__steps .is-current span,
.donate-widget__steps .is-done span {
  color: var(--color-white);

  background: var(--color-blue-600);

  border-color: var(--color-blue-600);
}

.donate-widget__methods,
.donate-widget__frequency,
.donate-widget__amounts {
  display: grid;

  gap: 8px;
}

.donate-widget__methods {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.donate-widget__frequency {
  grid-template-columns: 1fr 1fr;

  margin-top: 12px;
}

.donate-widget__amounts {
  grid-template-columns: repeat(3, minmax(0, 1fr));

  margin-top: 12px;
}

.donate-widget__methods button,
.donate-widget__frequency button,
.donate-widget__amounts button,
.donate-widget__back {
  min-height: 40px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 6px;

  padding: 8px;

  color: var(--color-text-primary);

  background: var(--color-white);

  border: 1px solid var(--color-border-strong);

  border-radius: var(--radius-sm);

  font-family: var(--font-sans);
  font-size: var(--text-caption);
  font-weight: 650;
}

.donate-widget__methods button.is-active,
.donate-widget__frequency button.is-active,
.donate-widget__amounts button.is-active {
  color: var(--color-white);

  background: var(--color-blue-600);

  border-color: var(--color-blue-600);
}

.donate-widget__custom,
.donate-widget label {
  display: grid;

  gap: 6px;

  margin-top: 12px;

  color: var(--color-text-primary);

  font-size: var(--text-small);
  font-weight: 650;
}

.donate-widget input {
  width: 100%;

  height: 42px;

  padding-inline: 12px;

  color: var(--color-text-primary);

  background: var(--color-white);

  border: 1px solid var(--color-border-strong);

  border-radius: var(--radius-sm);

  font: inherit;
  font-weight: 450;
}

.donate-widget__allocation {
  margin-top: 16px;

  display: grid;

  gap: 8px;
}

.donate-widget__allocation legend {
  margin-bottom: 8px;

  color: var(--color-text-primary);

  font-size: var(--text-small);
  font-weight: 700;
}

.donate-widget__allocation label {
  display: flex;
  align-items: flex-start;

  gap: 8px;

  margin-top: 0;

  font-weight: 600;
}

.donate-widget__allocation small {
  display: block;

  margin-top: 2px;

  color: var(--color-text-secondary);

  font-size: var(--text-caption);
  font-weight: 450;
}

.donate-widget__summary,
.donate-widget__notice,
.donate-widget__error {
  color: var(--color-text-secondary);

  font-size: var(--text-small);

  line-height: 1.45;
}

.donate-widget__error {
  margin-top: 12px;

  color: var(--color-danger);

  font-weight: 650;
}

.donate-widget__notice {
  margin-top: 10px;
}

.donate-widget__next {
  width: 100%;

  height: 46px;

  margin-top: 16px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  color: var(--color-white);

  background: var(--color-blue-600);

  border-radius: var(--radius-sm);

  font-family: var(--font-sans);
  font-size: var(--text-ui);
  font-weight: 650;
}

.donate-widget__next:hover {
  background: var(--color-blue-500);
}

.donate-widget__nav {
  display: grid;

  grid-template-columns: auto 1fr;

  gap: 8px;

  align-items: center;
}

.donate-widget__nav .donate-widget__next {
  margin-top: 16px;
}

.donate-widget__back {
  margin-top: 16px;
}
</style>
