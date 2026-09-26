<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  Lock,
  ShieldCheck,
} from 'lucide-vue-next'

const steps = ['Organisation', 'Equipment details', 'Logistics & transfer', 'Review & submit']

const kinds = [
  'Business-class laptops',
  'Mini PCs',
  'Portable projectors',
  'Monitors and displays',
  'Networking equipment',
  'Something else',
]

const countries = [
  'Uganda',
  'United Kingdom',
  'Kenya',
  'United States',
  'Other',
]

const step = ref(0)
const error = ref('')

const form = reactive({
  organisation: '',
  email: '',
  country: '',
  kind: '',
  quantity: '',
  condition: '',
  city: '',
  erased: '',
})

function next() {
  if (step.value === 0) {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())

    if (!form.organisation.trim() || !emailOk || !form.country) {
      error.value = 'Enter the organisation, a valid email, and a country.'
      return
    }
  }

  if (step.value === 1 && (!form.kind || !form.quantity.trim())) {
    error.value = 'Tell us the type of equipment and how many items.'
    return
  }

  if (step.value === 2 && !form.erased) {
    error.value = 'Say whether the data has already been erased.'
    return
  }

  error.value = ''
  step.value += 1
}

function back() {
  error.value = ''
  step.value -= 1
}
</script>

<template>
  <section
    id="offer"
    class="equipment-offer"
    aria-labelledby="equipment-offer-title"
  >
    <div class="container equipment-offer__grid">
      <div>
        <h2 id="equipment-offer-title">
          Offer equipment
        </h2>

        <p>
          Share details about the equipment you would like to donate. We will review your submission and be in touch within 5 working days once this form is connected.
        </p>

        <ul>
          <li>
            <Lock
              :size="16"
              :stroke-width="1.8"
              aria-hidden="true"
            />

            Secure transfer. You can save and return.
          </li>

          <li>
            <ShieldCheck
              :size="16"
              :stroke-width="1.8"
              aria-hidden="true"
            />

            No commitment until approval.
          </li>
        </ul>
      </div>

      <form @submit.prevent="next">
        <ol aria-label="Offer steps">
          <li
            v-for="(label, index) in steps"
            :key="label"
            :class="{ 'is-current': step === index, 'is-done': step > index }"
          >
            {{ index + 1 }}. {{ label }}
          </li>
        </ol>

        <div
          v-if="step === 0"
          class="equipment-offer__fields"
        >
          <label>
            Organisation name
            <input
              v-model="form.organisation"
              name="organization"
              type="text"
              autocomplete="organization"
              required
            >
          </label>

          <label>
            Email address
            <input
              v-model="form.email"
              name="email"
              type="email"
              autocomplete="email"
              required
            >
          </label>

          <label class="is-wide">
            Country
            <select
              v-model="form.country"
              name="country"
              required
            >
              <option value="">
                Select a country
              </option>

              <option
                v-for="country in countries"
                :key="country"
                :value="country"
              >
                {{ country }}
              </option>
            </select>
          </label>
        </div>

        <div
          v-else-if="step === 1"
          class="equipment-offer__fields"
        >
          <label>
            Equipment type
            <select
              v-model="form.kind"
              name="kind"
              required
            >
              <option value="">
                Select a type
              </option>

              <option
                v-for="kind in kinds"
                :key="kind"
                :value="kind"
              >
                {{ kind }}
              </option>
            </select>
          </label>

          <label>
            Quantity
            <input
              v-model="form.quantity"
              name="quantity"
              type="number"
              min="1"
              required
            >
          </label>

          <label class="is-wide">
            Condition
            <input
              v-model="form.condition"
              name="condition"
              type="text"
              placeholder="Working, with chargers"
            >
          </label>
        </div>

        <div
          v-else-if="step === 2"
          class="equipment-offer__fields"
        >
          <label class="is-wide">
            Where is the equipment now?
            <input
              v-model="form.city"
              name="city"
              type="text"
              autocomplete="address-level2"
            >
          </label>

          <fieldset>
            <legend>Has the data been securely erased?</legend>

            <label>
              <input
                v-model="form.erased"
                type="radio"
                value="yes"
              >
              Yes
            </label>

            <label>
              <input
                v-model="form.erased"
                type="radio"
                value="no"
              >
              Not yet
            </label>
          </fieldset>
        </div>

        <div
          v-else
          class="equipment-offer__review"
        >
          <p>
            {{ form.organisation }} in {{ form.country }} wants to offer
            {{ form.quantity }} {{ form.kind }}.
            Data erased: {{ form.erased === 'yes' ? 'yes' : 'not yet' }}.
          </p>

          <p>
            This form is not connected. Your offer has not been sent or stored, and it is not an approval to ship.
          </p>
        </div>

        <p
          v-if="error"
          class="equipment-offer__error"
          role="alert"
        >
          {{ error }}
        </p>

        <div class="equipment-offer__nav">
          <button
            v-if="step > 0"
            type="button"
            class="is-back"
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
            v-if="step < 3"
            type="submit"
          >
            Save and continue

            <ArrowRight
              :size="16"
              :stroke-width="2"
              aria-hidden="true"
            />
          </button>

          <NuxtLink
            v-else
            to="/contact"
          >
            Contact us before you ship
          </NuxtLink>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.equipment-offer {
  padding: 12px 0 48px;

  scroll-margin-top: 88px;

  background: var(--color-white);
}

.equipment-offer__grid {
  display: grid;

  grid-template-columns: 0.8fr 1.2fr;

  gap: 28px;

  align-items: start;

  padding: 24px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.equipment-offer h2 {
  font-size: clamp(1.7rem, 2.6vw, 2.2rem);
}

.equipment-offer__grid > div > p {
  margin-top: 8px;

  font-size: var(--text-small);

  line-height: 1.5;
}

.equipment-offer__grid > div ul {
  margin-top: 16px;

  display: grid;

  gap: 8px;
}

.equipment-offer__grid > div li {
  display: flex;
  align-items: flex-start;

  gap: 8px;

  color: var(--color-text-primary);

  font-size: var(--text-small);
}

.equipment-offer__grid > div svg {
  flex-shrink: 0;

  color: var(--color-blue-600);
}

.equipment-offer ol {
  display: flex;
  flex-wrap: wrap;

  gap: 8px 14px;

  color: var(--color-text-muted);

  font-size: var(--text-caption);
  font-weight: 700;
}

.equipment-offer .is-current {
  color: var(--color-blue-600);
}

.equipment-offer .is-done {
  color: var(--color-teal-600);
}

.equipment-offer__fields {
  margin-top: 16px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 12px;
}

.equipment-offer label,
.equipment-offer fieldset {
  display: grid;

  gap: 6px;

  color: var(--color-text-primary);

  font-size: var(--text-small);
  font-weight: 650;
}

.equipment-offer .is-wide,
.equipment-offer fieldset {
  grid-column: 1 / -1;
}

.equipment-offer fieldset label {
  display: flex;
  align-items: center;

  gap: 8px;

  font-weight: 600;
}

.equipment-offer input,
.equipment-offer select {
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

.equipment-offer__review {
  margin-top: 16px;

  display: grid;

  gap: 8px;
}

.equipment-offer__review p,
.equipment-offer__error {
  font-size: var(--text-small);

  line-height: 1.5;
}

.equipment-offer__error {
  margin-top: 10px;

  color: var(--color-danger);

  font-weight: 650;
}

.equipment-offer__nav {
  display: flex;
  flex-wrap: wrap;

  gap: 8px;

  margin-top: 16px;
}

.equipment-offer__nav button,
.equipment-offer__nav a {
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

.equipment-offer__nav .is-back {
  color: var(--color-text-primary);

  background: var(--color-white);

  border: 1px solid var(--color-border-strong);
}

.equipment-offer__nav button:hover,
.equipment-offer__nav a:hover {
  background: var(--color-blue-500);
}

.equipment-offer__nav .is-back:hover {
  background: var(--color-blue-100);
}

@media (max-width: 800px) {
  .equipment-offer__grid,
  .equipment-offer__fields {
    grid-template-columns: 1fr;
  }

  .equipment-offer .is-wide,
  .equipment-offer fieldset {
    grid-column: auto;
  }
}
</style>
