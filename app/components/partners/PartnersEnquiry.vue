<script setup lang="ts">
import {
  ArrowRight,
  Clock,
  Lock,
  ShieldCheck,
} from 'lucide-vue-next'

const contributions = [
  'Fund complete learning hubs',
  'Support teacher development',
  'Donate suitable technology',
  'Contribute expertise and services',
  'Mobilise employees',
  'Not sure yet',
]

const ranges = [
  'Prefer to discuss',
  'One learning hub',
  'Several hubs',
  'A longer programme',
]

const assurances = [
  {
    label: 'We respond within 3 working days',
    icon: Clock,
  },
  {
    label: 'Confidential and secure',
    icon: Lock,
  },
  {
    label: 'No obligation to proceed',
    icon: ShieldCheck,
  },
]

const form = reactive({
  name: '',
  jobTitle: '',
  organisation: '',
  email: '',
  contribution: '',
  range: '',
  goals: '',
})

const status = ref<'idle' | 'invalid' | 'unwired'>('idle')

function onSubmit() {
  const required = [form.name, form.jobTitle, form.organisation]
    .every(value => value.trim())

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())

  if (!required || !emailOk) {
    status.value = 'invalid'
    return
  }

  status.value = 'unwired'
}
</script>

<template>
  <section
    id="enquiry"
    class="partners-enquiry"
    aria-labelledby="partners-enquiry-title"
  >
    <div class="container partners-enquiry__inner">
      <div>
        <h2 id="partners-enquiry-title">
          Begin the conversation
        </h2>

        <p class="partners-enquiry__lede">
          We would love to understand your goals and explore how we can work together.
        </p>

        <form
          class="partners-enquiry__form"
          @submit.prevent="onSubmit"
        >
          <label>
            Your full name
            <input
              v-model="form.name"
              name="name"
              type="text"
              autocomplete="name"
              required
            >
          </label>

          <label>
            Job title
            <input
              v-model="form.jobTitle"
              name="job-title"
              type="text"
              autocomplete="organization-title"
              required
            >
          </label>

          <label>
            Organisation
            <input
              v-model="form.organisation"
              name="organization"
              type="text"
              autocomplete="organization"
              required
            >
          </label>

          <label>
            Work email
            <input
              v-model="form.email"
              name="email"
              type="email"
              autocomplete="email"
              required
              :aria-invalid="status === 'invalid'"
            >
          </label>

          <label>
            Type of contribution
            <select
              v-model="form.contribution"
              name="contribution"
            >
              <option value="">
                Select an option
              </option>

              <option
                v-for="option in contributions"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </label>

          <label>
            Estimated value range
            <select
              v-model="form.range"
              name="range"
            >
              <option value="">
                Select an option
              </option>

              <option
                v-for="option in ranges"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </label>

          <label class="partners-enquiry__wide">
            Tell us about your goals and how you would like to partner with Impact Bridge
            <textarea
              v-model="form.goals"
              name="goals"
              rows="4"
            />
          </label>

          <p
            class="partners-enquiry__status"
            role="status"
          >
            <template v-if="status === 'invalid'">
              Enter your name, job title, organisation and a valid work email.
            </template>

            <template v-else-if="status === 'unwired'">
              This form is not connected yet. Your enquiry has not been sent or stored.
            </template>

            <template v-else>
              The partnership overview is not a downloadable file yet. Use this form when it is connected, or write through the contact page.
            </template>
          </p>

          <button type="submit">
            Send enquiry

            <ArrowRight
              :size="16"
              :stroke-width="2"
              aria-hidden="true"
            />
          </button>
        </form>
      </div>

      <ul class="partners-enquiry__aside">
        <li
          v-for="item in assurances"
          :key="item.label"
        >
          <component
            :is="item.icon"
            :size="18"
            :stroke-width="1.7"
            aria-hidden="true"
          />

          {{ item.label }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.partners-enquiry {
  padding: 56px 0;

  scroll-margin-top: 88px;

  background: var(--color-surface-soft);
}

.partners-enquiry__inner {
  display: grid;

  grid-template-columns: minmax(0, 1fr) 240px;

  gap: 36px;

  align-items: start;
}

.partners-enquiry h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.partners-enquiry__lede {
  margin-top: 8px;

  font-size: var(--text-lede);
}

.partners-enquiry__form {
  margin-top: 22px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 14px 16px;
}

.partners-enquiry label {
  display: grid;

  gap: 6px;

  color: var(--color-text-primary);

  font-size: var(--text-small);
  font-weight: 650;
}

.partners-enquiry__wide {
  grid-column: 1 / -1;
}

.partners-enquiry input,
.partners-enquiry select,
.partners-enquiry textarea {
  width: 100%;

  padding: 12px 14px;

  color: var(--color-text-primary);

  background: var(--color-white);

  border: 1px solid var(--color-border-strong);

  border-radius: var(--radius-sm);

  font-family: var(--font-sans);
  font-size: var(--text-small);
  font-weight: 450;
}

.partners-enquiry textarea {
  resize: vertical;
}

.partners-enquiry input:focus,
.partners-enquiry select:focus,
.partners-enquiry textarea:focus {
  border-color: var(--color-blue-600);

  outline: none;
}

.partners-enquiry__status {
  grid-column: 1 / -1;

  color: var(--color-text-secondary);

  font-size: var(--text-small);
  font-weight: 450;

  line-height: 1.45;
}

.partners-enquiry button {
  width: fit-content;

  height: 46px;

  display: inline-flex;
  align-items: center;

  gap: 8px;

  padding-inline: 18px;

  color: var(--color-white);

  background: var(--color-blue-600);

  border-radius: var(--radius-sm);

  font-family: var(--font-sans);
  font-size: var(--text-ui);
  font-weight: 650;
}

.partners-enquiry button:hover {
  background: var(--color-blue-500);
}

.partners-enquiry__aside {
  display: grid;

  gap: 16px;

  padding-top: 72px;
}

.partners-enquiry__aside li {
  display: flex;
  align-items: flex-start;

  gap: 10px;

  color: var(--color-text-primary);

  font-size: var(--text-small);
  font-weight: 650;

  line-height: 1.4;
}

.partners-enquiry__aside svg {
  flex-shrink: 0;

  margin-top: 1px;

  color: var(--color-blue-600);
}

@media (max-width: 800px) {
  .partners-enquiry__inner,
  .partners-enquiry__form {
    grid-template-columns: 1fr;
  }

  .partners-enquiry__wide {
    grid-column: auto;
  }

  .partners-enquiry__status {
    grid-column: auto;
  }

  .partners-enquiry__aside {
    padding-top: 0;
  }

  .partners-enquiry button {
    width: 100%;

    justify-content: center;
  }
}
</style>
