<script setup lang="ts">
import {
  ArrowRight,
  Building2,
  Laptop,
  MapPin,
  School,
} from 'lucide-vue-next'

const campaign = {
  raised: 18450,
  goal: 30000,
  hubs: 6,
  devices: 38,
  schools: 2,
  deployed: 1,
}

const money = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  maximumFractionDigits: 0,
})

const raisedLabel = money.format(campaign.raised)
const goalLabel = money.format(campaign.goal)
const progress = Math.round((campaign.raised / campaign.goal) * 100)

const stats = [
  { value: String(campaign.hubs), label: 'Hubs funded', icon: MapPin },
  { value: String(campaign.devices), label: 'Suitable devices committed', icon: Laptop },
  { value: String(campaign.schools), label: 'Schools in preparation', icon: School },
  { value: String(campaign.deployed), label: 'Hub deployed', icon: Building2 },
]
</script>

<template>
  <section
    id="campaign"
    class="donate-campaign"
    aria-labelledby="donate-campaign-title"
  >
    <div class="container donate-campaign__grid">
      <article class="campaign-panel">
        <header>
          <div>
            <p>The next ten hubs</p>
            <h2 id="donate-campaign-title">
              {{ raisedLabel }}
            </h2>
            <p>raised of {{ goalLabel }} goal</p>
          </div>

          <p class="campaign-panel__badge">
            Active campaign
          </p>
        </header>

        <div
          class="campaign-panel__bar"
          role="progressbar"
          :aria-valuenow="progress"
          aria-valuemin="0"
          aria-valuemax="100"
          :aria-valuetext="`${progress} percent of the fundraising goal`"
        >
          <span :style="{ width: `${progress}%` }" />
          <strong>{{ progress }}%</strong>
        </div>

        <ul>
          <li
            v-for="stat in stats"
            :key="stat.label"
          >
            <component
              :is="stat.icon"
              :size="16"
              :stroke-width="1.8"
              aria-hidden="true"
            />

            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </li>
        </ul>

        <a href="#choose">
          See campaign details

          <ArrowRight
            :size="14"
            :stroke-width="2"
            aria-hidden="true"
          />
        </a>
      </article>

      <div class="other-ways">
        <h2>Other ways to give</h2>

        <article>
          <Building2
            :size="20"
            :stroke-width="1.7"
            aria-hidden="true"
          />

          <h3>Representing an organisation?</h3>

          <p>
            Partner with us to fund complete hubs, support teachers, engage employees or share expertise.
          </p>

          <NuxtLink to="/corporate-partnerships">
            Explore corporate partnerships

            <ArrowRight
              :size="14"
              :stroke-width="2"
              aria-hidden="true"
            />
          </NuxtLink>
        </article>

        <article>
          <Laptop
            :size="20"
            :stroke-width="1.7"
            aria-hidden="true"
          />

          <h3>Have equipment to offer?</h3>

          <p>
            Help us turn suitable technology into powerful learning tools for classrooms.
          </p>

          <NuxtLink to="/donate-equipment">
            Donate equipment

            <ArrowRight
              :size="14"
              :stroke-width="2"
              aria-hidden="true"
            />
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.donate-campaign {
  padding: 28px 0 48px;

  scroll-margin-top: 88px;

  background: var(--color-white);
}

.donate-campaign__grid {
  display: grid;

  grid-template-columns: 1.15fr 0.85fr;

  gap: 16px;
}

.campaign-panel,
.other-ways article {
  padding: 22px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.campaign-panel header {
  display: flex;
  justify-content: space-between;

  gap: 12px;
}

.campaign-panel header p:first-child,
.other-ways > h2 {
  color: var(--color-text-muted);

  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.06em;

  text-transform: uppercase;
}

.campaign-panel h2 {
  margin-top: 6px;

  font-size: clamp(2rem, 3vw, 2.6rem);
}

.campaign-panel header p:last-of-type {
  margin-top: 4px;

  color: var(--color-text-secondary);

  font-size: var(--text-small);
}

.campaign-panel__badge {
  height: fit-content;

  padding: 4px 8px;

  color: var(--color-teal-600);

  background: var(--color-teal-100);

  border-radius: var(--radius-round);

  font-size: var(--text-caption);
  font-weight: 700;
}

.campaign-panel__bar {
  position: relative;

  height: 8px;

  margin-top: 18px;

  background: var(--color-border);

  border-radius: var(--radius-round);
}

.campaign-panel__bar span {
  display: block;

  height: 100%;

  background: var(--color-blue-600);

  border-radius: inherit;
}

.campaign-panel__bar strong {
  position: absolute;

  right: 0;
  top: -22px;

  color: var(--color-blue-600);

  font-size: var(--text-small);
}

.campaign-panel ul {
  margin-top: 18px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 12px;
}

.campaign-panel li {
  display: grid;

  grid-template-columns: 18px auto;

  gap: 2px 8px;

  align-items: center;

  color: var(--color-text-secondary);

  font-size: var(--text-caption);
}

.campaign-panel svg {
  grid-row: span 2;

  color: var(--color-blue-600);
}

.campaign-panel li strong {
  color: var(--color-text-primary);

  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-weight: 550;
}

.campaign-panel a,
.other-ways a {
  margin-top: 16px;

  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-size: var(--text-small);
  font-weight: 650;
}

.campaign-panel a:hover,
.other-ways a:hover {
  text-decoration: underline;
}

.other-ways {
  display: grid;

  gap: 12px;
}

.other-ways article {
  background: var(--color-white);
}

.other-ways svg {
  color: var(--color-blue-600);
}

.other-ways h3 {
  margin-top: 10px;

  font-family: var(--font-sans);
  font-size: 1.05rem;
  font-weight: 700;

  letter-spacing: 0;
}

.other-ways p {
  margin-top: 6px;

  font-size: var(--text-small);

  line-height: 1.45;
}

@media (max-width: 900px) {
  .donate-campaign__grid {
    grid-template-columns: 1fr;
  }
}
</style>
