<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const slices = [
  { label: 'Programmes (learning hubs, training and support)', share: '72%', color: '#0758e8' },
  { label: 'Equipment and content', share: '14%', color: '#12a69d' },
  { label: 'Operations and administration', share: '8%', color: '#7aa2e3' },
  { label: 'Fundraising', share: '6%', color: '#d5e4f8' },
]

const totals = [
  { label: 'Total income (2024)', value: '£436,210' },
  { label: 'Total expenditure (2024)', value: '£412,786' },
  { label: 'Surplus (2024)', value: '£23,424' },
]
</script>

<template>
  <section
    class="account-spend"
    aria-labelledby="account-spend-title"
  >
    <div class="container">
      <header>
        <h2 id="account-spend-title">
          Where your support goes
        </h2>

        <p>
          We are committed to using resources responsibly to create lasting impact in classrooms.
        </p>

        <NuxtLink to="/reports">
          View full financial reports

          <ArrowRight
            :size="14"
            :stroke-width="2"
            aria-hidden="true"
          />
        </NuxtLink>
      </header>

      <div class="account-spend__panel">
        <div class="account-spend__chart">
          <div
            class="account-spend__donut"
            role="img"
            aria-label="2024 expenditure: 72 percent programmes, 14 percent equipment and content, 8 percent operations, 6 percent fundraising. Total expenditure £412,786."
          >
            <div>
              <strong>2024</strong>
              <span>Total expenditure</span>
              <b>£412,786</b>
            </div>
          </div>

          <ul>
            <li
              v-for="slice in slices"
              :key="slice.label"
            >
              <i :style="{ background: slice.color }" />
              <span>{{ slice.label }}</span>
              <strong>{{ slice.share }}</strong>
            </li>
          </ul>
        </div>

        <ul class="account-spend__totals">
          <li
            v-for="total in totals"
            :key="total.label"
          >
            <span>{{ total.label }}</span>
            <strong>{{ total.value }}</strong>
          </li>
        </ul>
      </div>

      <p class="account-spend__note">
        Figures are unaudited and may be subject to rounding. Signed statements are listed on the reports page when they are published.
      </p>
    </div>
  </section>
</template>

<style scoped>
.account-spend {
  padding: 56px 0 24px;

  background: var(--color-white);
}

.account-spend h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.account-spend header > p {
  margin-top: 8px;

  max-width: 36rem;
}

.account-spend header a {
  margin-top: 12px;

  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-size: var(--text-small);
  font-weight: 650;
}

.account-spend header a:hover {
  text-decoration: underline;
}

.account-spend__panel {
  margin-top: 24px;

  display: grid;

  grid-template-columns: 1.4fr 0.7fr;

  gap: 20px;

  align-items: center;

  padding: 24px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.account-spend__chart {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 24px;
}

.account-spend__donut {
  width: 210px;
  height: 210px;

  display: grid;
  place-items: center;

  background:
    conic-gradient(
      #0758e8 0 72%,
      #12a69d 72% 86%,
      #7aa2e3 86% 94%,
      #d5e4f8 94% 100%
    );

  border-radius: 50%;
}

.account-spend__donut > div {
  width: 132px;
  height: 132px;

  display: grid;
  place-items: center;

  align-content: center;

  background: var(--color-white);

  border-radius: 50%;

  text-align: center;
}

.account-spend__donut strong {
  color: var(--color-blue-600);

  font-family: var(--font-serif);
  font-size: 1.6rem;
}

.account-spend__donut span,
.account-spend__donut b {
  display: block;

  color: var(--color-text-secondary);

  font-family: var(--font-sans);
  font-size: var(--text-caption);
  font-weight: 650;
}

.account-spend__donut b {
  color: var(--color-text-primary);

  font-size: var(--text-small);
}

.account-spend__chart ul,
.account-spend__totals {
  display: grid;

  gap: 10px;
}

.account-spend__chart li,
.account-spend__totals li {
  display: grid;

  grid-template-columns: 12px 1fr auto;

  gap: 8px;

  align-items: center;

  color: var(--color-text-secondary);

  font-size: var(--text-small);
}

.account-spend__chart i {
  width: 12px;
  height: 12px;

  border-radius: 3px;
}

.account-spend__chart strong,
.account-spend__totals strong {
  color: var(--color-text-primary);

  font-weight: 700;
}

.account-spend__totals li {
  grid-template-columns: 1fr auto;

  padding: 14px;

  background: var(--color-white);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-md);
}

.account-spend__totals strong {
  color: var(--color-teal-600);

  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 550;
}

.account-spend__note {
  margin-top: 12px;

  color: var(--color-text-muted);

  font-size: var(--text-caption);
}

@media (max-width: 800px) {
  .account-spend__panel {
    grid-template-columns: 1fr;
  }
}
</style>
