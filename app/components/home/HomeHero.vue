<script setup lang="ts">
import {
  Building2,
  Heart,
  Laptop,
  MapPin,
  UsersRound,
} from 'lucide-vue-next'

const campaign = {
  raised: 18450,
  goal: 30000,
  hubs: 6,
  devices: 38,
  learners: '500+',
}

const raisedLabel = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  maximumFractionDigits: 0,
}).format(campaign.raised)

const goalLabel = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  maximumFractionDigits: 0,
}).format(campaign.goal)

const progressPercent = Math.round(
  (campaign.raised / campaign.goal) * 100,
)
</script>

<template>
  <section class="home-hero">
    <div class="home-hero__background" />
    <div class="home-hero__overlay" />

    <div class="container home-hero__inner">
      <div class="home-hero__content">
        <p class="home-hero__eyebrow">
          Every child. Every class. Everywhere.
        </p>

        <h1 class="home-hero__title">
          The internet<br>
          should not decide<br>
          who gets to <em>learn.</em>
        </h1>

        <p class="home-hero__description">
          We bring offline digital learning hubs, teacher training
          and resources to schools without reliable internet—so
          every child can learn, no matter where they are.
        </p>

        <div class="home-hero__actions">
          <NuxtLink
            to="/donate"
            class="home-hero__button home-hero__button--primary"
          >
            <Heart
              :size="16"
              :stroke-width="2"
              aria-hidden="true"
            />

            Fund the Next Classroom
          </NuxtLink>

          <NuxtLink
            to="/corporate-partnerships"
            class="home-hero__button home-hero__button--secondary"
          >
            <Building2
              :size="16"
              :stroke-width="2"
              aria-hidden="true"
            />

            Partner as a Company
          </NuxtLink>
        </div>

        <p class="home-hero__supporting">
          Fund learning hubs, donate suitable technology
          or contribute expertise.
        </p>
      </div>

      <aside
        class="campaign-card"
        aria-label="Launch 10 Learning Hubs campaign"
      >
        <div class="campaign-card__top">
          <h2 class="campaign-card__title">
            Launch 10<br>
            Learning Hubs
          </h2>

          <strong class="campaign-card__amount">
            {{ raisedLabel }}
          </strong>

          <p class="campaign-card__goal">
            raised of {{ goalLabel }} goal
          </p>

          <div
            class="campaign-card__progress"
            role="progressbar"
            :aria-valuemin="0"
            :aria-valuemax="campaign.goal"
            :aria-valuenow="campaign.raised"
            :aria-valuetext="`${progressPercent} percent of fundraising goal reached`"
          >
            <span :style="{ width: `${progressPercent}%` }" />
          </div>
        </div>

        <div class="campaign-card__stats">
          <div class="campaign-card__stat">
            <div class="campaign-card__icon">
              <MapPin
                :size="19"
                :stroke-width="1.8"
                aria-hidden="true"
              />
            </div>

            <div class="campaign-card__stat-copy">
              <strong>{{ campaign.hubs }}</strong>
              <p>hubs funded</p>
            </div>
          </div>

          <div class="campaign-card__stat">
            <div class="campaign-card__icon">
              <Laptop
                :size="19"
                :stroke-width="1.8"
                aria-hidden="true"
              />
            </div>

            <div class="campaign-card__stat-copy">
              <strong>{{ campaign.devices }}</strong>
              <p>suitable devices committed</p>
            </div>
          </div>

          <div class="campaign-card__stat">
            <div class="campaign-card__icon">
              <UsersRound
                :size="20"
                :stroke-width="1.8"
                aria-hidden="true"
              />
            </div>

            <div class="campaign-card__stat-copy">
              <strong>{{ campaign.learners }}</strong>
              <p>learners expected to benefit</p>
            </div>
          </div>
        </div>

        <div class="campaign-card__links">
          <NuxtLink to="/corporate-partnerships">
            <span>View corporate partnership pack</span>
            <span aria-hidden="true">→</span>
          </NuxtLink>

          <NuxtLink to="/donate-equipment">
            <span>View equipment donation guidelines</span>
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.home-hero {
  position: relative;

  min-height: 500px;

  overflow: hidden;

  background: var(--color-navy-950);
}

.home-hero__background {
  position: absolute;

  inset: 0;

  background-image: url('/images/home/hero.png');

  background-size: cover;

  background-position: 58% center;

  filter:
    saturate(1.08)
    brightness(1.05)
    contrast(1.02);

  transform: scale(1.035);

  transform-origin: 60% center;
}

.home-hero__overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgb(0 15 42 / 0.99) 0%,
      rgb(0 15 42 / 0.97) 16%,
      rgb(0 15 42 / 0.82) 26%,
      rgb(0 15 42 / 0.45) 36%,
      rgb(0 15 42 / 0.14) 46%,
      transparent 58%
    );
}

.home-hero__inner {
  position: relative;

  z-index: 1;

  min-height: 500px;

  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    326px;

  gap: 48px;

  padding-block: 36px;
}

.home-hero__content {
  align-self: center;

  max-width: 540px;

  padding-left: 24px;
}

.home-hero__eyebrow {
  margin-bottom: 14px;

  color: var(--color-blue-500);

  font-family: var(--font-sans);

  font-size: var(--text-caption);
  font-weight: 700;

  line-height: 1;

  letter-spacing: 0.055em;

  text-transform: uppercase;
}

.home-hero__title {
  color: var(--color-white);

  font-family: var(--font-serif);

  font-size: clamp(2.5rem, 4vw, 3.05rem);

  font-weight: 480;

  font-optical-sizing: auto;

  line-height: 0.99;

  letter-spacing: -0.03em;
}

.home-hero__title em {
  color: var(--color-blue-500);

  font-family: var(--font-serif);

  font-style: italic;

  font-weight: 430;

  letter-spacing: -0.02em;
}

.home-hero__description {
  max-width: 38rem;

  margin-top: 18px;

  color: rgb(255 255 255 / 0.9);

  font-family: var(--font-sans);

  font-size: var(--text-body);

  line-height: 1.58;
}

.home-hero__actions {
  margin-top: 22px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 10px;
}

.home-hero__button {
  height: 44px;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 8px;

  padding-inline: 16px;

  border: 1px solid transparent;

  border-radius: var(--radius-sm);

  font-family: var(--font-sans);

  font-size: var(--text-ui);
  font-weight: 650;

  line-height: 1;

  white-space: nowrap;
}

.home-hero__button--primary {
  color: var(--color-white);

  background: var(--color-blue-600);
}

.home-hero__button--primary:hover {
  background: var(--color-blue-500);
}

.home-hero__button--secondary {
  color: var(--color-white);

  background: rgb(0 15 42 / 0.28);

  border-color: rgb(255 255 255 / 0.76);
}

.home-hero__button--secondary:hover {
  background: rgb(255 255 255 / 0.1);
}

.home-hero__supporting {
  max-width: 28rem;

  margin-top: 12px;

  color: rgb(255 255 255 / 0.72);

  font-size: var(--text-small);

  line-height: 1.45;
}

.campaign-card {
  align-self: center;

  width: 326px;

  padding: 24px 24px 18px;

  display: flex;
  flex-direction: column;

  color: var(--color-text-primary);

  background: rgb(255 255 255 / 0.98);

  border: 1px solid rgb(255 255 255 / 0.7);

  border-radius: 12px;

  box-shadow: var(--shadow-md);
}

.campaign-card__title {
  max-width: 230px;

  color: var(--color-text-primary);

  font-family: var(--font-serif);

  font-size: 28px;

  font-weight: 500;

  font-optical-sizing: auto;

  line-height: 0.96;

  letter-spacing: -0.026em;
}

.campaign-card__amount {
  display: block;

  margin-top: 17px;

  color: var(--color-text-primary);

  font-family: var(--font-serif);

  font-size: 22px;

  font-weight: 550;

  line-height: 1;
}

.campaign-card__goal {
  margin-top: 4px;

  color: var(--color-text-secondary);

  font-family: var(--font-sans);

  font-size: var(--text-caption);

  line-height: 1.35;
}

.campaign-card__progress {
  height: 6px;

  margin-top: 11px;

  overflow: hidden;

  background: var(--color-border);

  border-radius: var(--radius-round);
}

.campaign-card__progress span {
  display: block;

  height: 100%;

  background: var(--color-blue-600);

  border-radius: inherit;
}

.campaign-card__stats {
  margin-top: 10px;
}

.campaign-card__stat {
  min-height: 62px;

  display: grid;

  grid-template-columns: 34px 1fr;

  align-items: center;

  column-gap: 10px;

  border-bottom: 1px solid var(--color-border);
}

.campaign-card__icon {
  width: 28px;
  height: 28px;

  display: grid;
  place-items: center;

  color: var(--color-blue-600);
}

.campaign-card__stat-copy {
  min-width: 0;
}

.campaign-card__stat strong {
  display: block;

  color: var(--color-text-primary);

  font-family: var(--font-sans);

  font-size: var(--text-body);

  font-weight: 700;

  line-height: 1;
}

.campaign-card__stat p {
  max-width: 180px;

  margin-top: 3px;

  color: var(--color-text-secondary);

  font-family: var(--font-sans);

  font-size: var(--text-caption);

  line-height: 1.25;
}

.campaign-card__links {
  padding-top: 13px;

  display: grid;

  gap: 10px;
}

.campaign-card__links a {
  display: grid;

  grid-template-columns: 1fr auto;

  align-items: center;

  column-gap: 12px;

  color: var(--color-blue-600);

  font-family: var(--font-sans);

  font-size: var(--text-small);

  font-weight: 650;

  line-height: 1.3;
}

.campaign-card__links a:hover {
  text-decoration: underline;
}

@media (max-width: 1000px) {
  .home-hero__inner {
    min-height: 0;

    grid-template-columns: 1fr;

    gap: 40px;

    padding-block: 60px;
  }

  .home-hero__content {
    max-width: 600px;

    padding-left: 0;
  }

  .campaign-card {
    width: min(100%, 380px);
  }
}

@media (max-width: 640px) {
  .home-hero__background {
    background-position: 66% center;

    transform: scale(1.02);
  }

  .home-hero__overlay {
    background:
      linear-gradient(
        90deg,
        rgb(0 15 42 / 0.98),
        rgb(0 15 42 / 0.72)
      );
  }

  .home-hero__inner {
    padding-block: 52px;
  }

  .home-hero__actions {
    flex-direction: column;

    align-items: stretch;
  }

  .home-hero__button {
    width: 100%;
  }

  .campaign-card {
    width: 100%;

    padding: 22px;
  }
}
</style>
