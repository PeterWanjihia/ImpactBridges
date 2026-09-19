<script setup lang="ts">
import {
  Building2,
  Heart,
  Laptop,
  MapPin,
  UsersRound,
} from 'lucide-vue-next'
</script>

<template>
  <section class="home-hero">
    <div class="home-hero__background" />
    <div class="home-hero__overlay" />

    <div class="container home-hero__inner">

      <!-- Editorial content -->
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
              :size="14"
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
              :size="14"
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


      <!-- Campaign card -->
      <aside class="campaign-card">

        <div class="campaign-card__top">

          <h2 class="campaign-card__title">
            Launch 10<br>
            Learning Hubs
          </h2>

          <strong class="campaign-card__amount">
            £18,450
          </strong>

          <p class="campaign-card__goal">
            raised of £30,000 goal
          </p>

          <div
            class="campaign-card__progress"
            aria-label="62 percent of fundraising goal reached"
          >
            <span />
          </div>

        </div>


        <div class="campaign-card__stats">

          <div class="campaign-card__stat">
            <div class="campaign-card__icon">
              <MapPin
                :size="19"
                :stroke-width="1.8"
              />
            </div>

            <div class="campaign-card__stat-copy">
              <strong>6</strong>
              <p>hubs funded</p>
            </div>
          </div>


          <div class="campaign-card__stat">
            <div class="campaign-card__icon">
              <Laptop
                :size="19"
                :stroke-width="1.8"
              />
            </div>

            <div class="campaign-card__stat-copy">
              <strong>38</strong>
              <p>suitable devices committed</p>
            </div>
          </div>


          <div class="campaign-card__stat">
            <div class="campaign-card__icon">
              <UsersRound
                :size="20"
                :stroke-width="1.8"
              />
            </div>

            <div class="campaign-card__stat-copy">
              <strong>500+</strong>
              <p>learners expected to benefit</p>
            </div>
          </div>

        </div>


        <div class="campaign-card__links">

          <NuxtLink to="/corporate-partnerships">
            <span>
              View corporate partnership pack
            </span>

            <span aria-hidden="true">→</span>
          </NuxtLink>

          <NuxtLink to="/donate-equipment">
            <span>
              View equipment donation guidelines
            </span>

            <span aria-hidden="true">→</span>
          </NuxtLink>

        </div>

      </aside>

    </div>
  </section>
</template>


<style scoped>
@import '@fontsource-variable/newsreader';


/* =========================
   Hero shell
   ========================= */

.home-hero {
  position: relative;

  height: 500px;

  overflow: hidden;

  background: var(--color-navy-950);
}


/* =========================
   Photograph
   ========================= */

.home-hero__background {
  position: absolute;

  inset: 0;

  background-image:
    url('/images/home/hero.png');

  background-size: cover;

  background-position:
    58% center;

  filter:
    saturate(1.08)
    brightness(1.05)
    contrast(1.02);

  transform:
    scale(1.035);

  transform-origin:
    60% center;
}


/* =========================
   Gradient
   ========================= */

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


/* =========================
   Main layout
   ========================= */

.home-hero__inner {
  position: relative;

  z-index: 1;

  height: 100%;

  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    326px;

  gap: 66px;
}


/* =========================
   Editorial column
   ========================= */

.home-hero__content {
  align-self: start;

  max-width: 520px;

  padding-top: 42px;
  padding-left: 48px;
}


.home-hero__eyebrow {
  margin-bottom: 14px;

  color: #2784ff;

  font-family: var(--font-sans);

  font-size: 10px;
  font-weight: 700;

  line-height: 1;

  letter-spacing: 0.055em;

  text-transform: uppercase;
}


/* =========================
   Main headline
   ========================= */

.home-hero__title {
  color: var(--color-white);

  font-family:
    'Newsreader Variable',
    Georgia,
    serif;

  font-size: 49px;

  font-weight: 480;

  font-optical-sizing: auto;

  line-height: 0.99;

  letter-spacing: -0.03em;
}


.home-hero__title em {
  color: #2681ff;

  font-family:
    'Newsreader Variable',
    Georgia,
    serif;

  font-style: italic;

  font-weight: 430;

  letter-spacing: -0.02em;
}


/* =========================
   Description
   ========================= */

.home-hero__description {
  max-width: 365px;

  margin-top: 17px;

  color:
    rgb(255 255 255 / 0.88);

  font-family:
    var(--font-sans);

  font-size: 12px;

  line-height: 1.58;
}


/* =========================
   CTA row
   ========================= */

.home-hero__actions {
  margin-top: 20px;

  display: flex;
  align-items: center;

  gap: 10px;
}


.home-hero__button {
  height: 40px;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 7px;

  padding-inline: 15px;

  border: 1px solid transparent;

  border-radius: 6px;

  font-family: var(--font-sans);

  font-size: 10px;
  font-weight: 650;

  line-height: 1;

  white-space: nowrap;
}


.home-hero__button--primary {
  color:
    var(--color-white);

  background:
    var(--color-blue-600);
}


.home-hero__button--primary:hover {
  background:
    var(--color-blue-500);
}


.home-hero__button--secondary {
  color:
    var(--color-white);

  background:
    rgb(0 15 42 / 0.28);

  border-color:
    rgb(255 255 255 / 0.76);
}


.home-hero__button--secondary:hover {
  background:
    rgb(255 255 255 / 0.1);
}


/* =========================
   Supporting copy
   ========================= */

.home-hero__supporting {
  width: 270px;

  margin-top: 7px;
  margin-left: 166px;

  color:
    rgb(255 255 255 / 0.68);

  font-size: 8px;

  line-height: 1.4;
}


/* =========================
   Campaign card
   ========================= */

.campaign-card {
  align-self: start;

  width: 326px;

  margin-top: 14px;

  padding:
    24px 24px
    18px;

  display: flex;
  flex-direction: column;

  color:
    var(--color-text-primary);

  background:
    rgb(255 255 255 / 0.98);

  border:
    1px solid
    rgb(255 255 255 / 0.7);

  border-radius: 12px;

  box-shadow:
    0 14px 38px
    rgb(0 15 40 / 0.18);
}


/* =========================
   Card heading
   ========================= */

.campaign-card__top {
  padding-bottom: 2px;
}


.campaign-card__title {
  max-width: 230px;

  color:
    var(--color-text-primary);

  font-family:
    'Newsreader Variable',
    Georgia,
    serif;

  font-size: 28px;

  font-weight: 500;

  font-optical-sizing: auto;

  line-height: 0.96;

  letter-spacing:
    -0.026em;
}


.campaign-card__amount {
  display: block;

  margin-top: 17px;

  color:
    var(--color-text-primary);

  font-family:
    'Newsreader Variable',
    Georgia,
    serif;

  font-size: 22px;

  font-weight: 550;

  line-height: 1;
}


.campaign-card__goal {
  margin-top: 4px;

  color:
    var(--color-text-secondary);

  font-family:
    var(--font-sans);

  font-size: 9px;

  line-height: 1.35;
}


/* =========================
   Progress
   ========================= */

.campaign-card__progress {
  height: 5px;

  margin-top: 11px;

  overflow: hidden;

  background:
    #e5eaf3;

  border-radius: 999px;
}


.campaign-card__progress span {
  display: block;

  width: 62%;
  height: 100%;

  background:
    var(--color-blue-600);

  border-radius: inherit;
}


/* =========================
   Statistics
   ========================= */

.campaign-card__stats {
  margin-top: 10px;
}


.campaign-card__stat {
  min-height: 62px;

  display: grid;

  grid-template-columns:
    34px 1fr;

  align-items: center;

  column-gap: 10px;

  border-bottom:
    1px solid
    var(--color-border);
}


.campaign-card__icon {
  width: 28px;
  height: 28px;

  display: grid;
  place-items: center;

  color:
    var(--color-blue-600);
}


.campaign-card__stat-copy {
  min-width: 0;
}


.campaign-card__stat strong {
  display: block;

  color:
    var(--color-text-primary);

  font-family:
    var(--font-sans);

  font-size: 16px;

  font-weight: 700;

  line-height: 1;
}


.campaign-card__stat p {
  max-width: 180px;

  margin-top: 3px;

  color:
    var(--color-text-secondary);

  font-family:
    var(--font-sans);

  font-size: 9px;

  line-height: 1.25;
}


/* =========================
   Supporting links
   ========================= */

.campaign-card__links {
  padding-top: 13px;

  display: grid;

  gap: 10px;
}


.campaign-card__links a {
  display: grid;

  grid-template-columns:
    1fr auto;

  align-items: center;

  column-gap: 12px;

  color:
    var(--color-blue-600);

  font-family:
    var(--font-sans);

  font-size: 9px;

  font-weight: 650;

  line-height: 1.3;
}


.campaign-card__links a:hover {
  text-decoration: underline;
}


/* =========================
   Tablet
   ========================= */

@media (max-width: 1000px) {
  .home-hero {
    height: auto;
  }


  .home-hero__inner {
    min-height: 650px;

    grid-template-columns: 1fr;

    gap: 40px;

    padding-block: 60px;
  }


  .home-hero__content {
    max-width: 600px;

    padding-top: 0;
    padding-left: 0;
  }


  .campaign-card {
    width:
      min(100%, 380px);

    margin: 0;
  }


  .home-hero__supporting {
    margin-left: 0;
  }
}


/* =========================
   Mobile
   ========================= */

@media (max-width: 640px) {
  .home-hero__background {
    background-position:
      66% center;

    transform:
      scale(1.02);
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
    min-height: 0;

    padding-block: 52px;
  }


  .home-hero__title {
    font-size: 41px;
  }


  .home-hero__description {
    max-width: 100%;

    font-size: 13px;
  }


  .home-hero__actions {
    flex-direction: column;

    align-items: stretch;
  }


  .home-hero__button {
    width: 100%;

    height: 42px;

    font-size: 11px;
  }


  .campaign-card {
    padding: 22px;
  }
}
</style>
