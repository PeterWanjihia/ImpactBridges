<script setup lang="ts">
import {
  Heart,
  Building2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-vue-next'

const individualPoints = [
  'One-time or monthly giving',
  'Direct classroom support',
  'A receipt when payments are live',
  'No dummy checkout on this site',
]

const companyPoints = [
  'Fund or sponsor learning hubs',
  'Donate suitable technology',
  'Employee giving & volunteering',
  'Strategic partnerships & reporting',
]
</script>


<template>
  <section
    id="ways"
    class="home-ways"
  >

    <div class="container home-ways__inner">

      <!-- =========================
           Section heading
           ========================= -->

      <header class="home-ways__header">

        <h2 class="home-ways__title">
          Two ways to build brighter futures.
        </h2>

        <p class="home-ways__subtitle">
          Different ways to give. A shared belief in what’s possible.
        </p>

      </header>


      <!-- =========================
           Giving options
           ========================= -->

      <div class="home-ways__grid">

        <!-- =========================
             Individual
             ========================= -->

        <article class="giving-card giving-card--individual">

          <div class="giving-card__content">

            <div class="giving-card__heading">

              <div class="giving-card__icon giving-card__icon--blue">
                <Heart
                  :size="25"
                  :stroke-width="1.8"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 class="giving-card__title">
                  Give as an individual
                </h3>

                <p class="giving-card__intro">
                  Your support today helps a child learn,
                  a teacher teach and a community grow.
                </p>
              </div>

            </div>


            <ul class="giving-card__list">

              <li
                v-for="point in individualPoints"
                :key="point"
              >
                <CheckCircle2
                  :size="15"
                  :stroke-width="2"
                  aria-hidden="true"
                />

                <span>{{ point }}</span>
              </li>

            </ul>


            <NuxtLink
              to="/donate"
              class="giving-card__button giving-card__button--blue"
            >
              Give Personally

              <ArrowRight
                :size="15"
                :stroke-width="2"
                aria-hidden="true"
              />
            </NuxtLink>

          </div>


          <div class="giving-card__media">

            <img
              src="/images/home/give-individual.png"
              alt="Students learning together with a tablet"
              width="1448"
              height="900"
              loading="lazy"
              class="giving-card__image"
            >

            <div
              class="giving-card__fade"
              aria-hidden="true"
            />

            <p class="giving-card__photo-copy">
              Learning<br>
              today.<br>
              Brighter<br>
              tomorrows.
            </p>

          </div>

        </article>


        <!-- =========================
             Company
             ========================= -->

        <article class="giving-card giving-card--company">

          <div class="giving-card__content">

            <div class="giving-card__heading">

              <div class="giving-card__icon giving-card__icon--green">
                <Building2
                  :size="24"
                  :stroke-width="1.8"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 class="giving-card__title">
                  Partner as a company
                </h3>

                <p class="giving-card__intro">
                  Work with us to expand access to learning
                  and create long-term impact.
                </p>
              </div>

            </div>


            <ul class="giving-card__list giving-card__list--green">

              <li
                v-for="point in companyPoints"
                :key="point"
              >
                <CheckCircle2
                  :size="15"
                  :stroke-width="2"
                  aria-hidden="true"
                />

                <span>{{ point }}</span>
              </li>

            </ul>


            <NuxtLink
              to="/corporate-partnerships"
              class="giving-card__button giving-card__button--green"
            >
              Start a Corporate Partnership

              <ArrowRight
                :size="15"
                :stroke-width="2"
                aria-hidden="true"
              />
            </NuxtLink>

          </div>


          <div class="giving-card__media">

            <img
              src="/images/home/company-partnership.png"
              alt="Professional working on a laptop"
              width="1448"
              height="900"
              loading="lazy"
              class="giving-card__image"
            >

            <div
              class="giving-card__fade"
              aria-hidden="true"
            />

            <p class="giving-card__photo-copy">
              Stronger<br>
              partnerships.<br>
              Brighter<br>
              futures.
            </p>

          </div>

        </article>

      </div>

    </div>

  </section>
</template>


<style scoped>


/* =========================
   Section
   ========================= */

.home-ways {
  width: 100%;

  padding:
    18px 0 24px;

  background:
    var(--color-white);

  border-top:
    1px solid var(--color-border);
}


/* =========================
   Heading
   ========================= */

.home-ways__header {
  text-align:
    center;

  margin-bottom:
    15px;
}


.home-ways__title {
  color:
    var(--color-text-primary);

  font-family:
    var(--font-serif);

  font-size:
    clamp(28px, 2vw, 34px);

  font-weight:
    500;

  line-height:
    1;

  letter-spacing:
    -0.027em;
}


.home-ways__subtitle {
  margin-top:
    6px;

  color:
    var(--color-text-secondary);

  font-family:
    var(--font-sans);

  font-size:
    var(--text-ui);

  line-height:
    1.45;
}


/* =========================
   Two-column grid
   ========================= */

.home-ways__grid {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap:
    16px;
}


/* =========================
   Card
   ========================= */

.giving-card {
  min-height:
    258px;

  display: grid;

  grid-template-columns:
    minmax(0, 1.03fr)
    minmax(0, 0.97fr);

  overflow:
    hidden;

  background:
    var(--color-white);

  border:
    1px solid
    #d9e4f4;

  border-radius:
    10px;
}


/* =========================
   Content
   ========================= */

.giving-card__content {
  position:
    relative;

  z-index:
    2;

  padding:
    18px 10px 16px 18px;

  display:
    flex;

  flex-direction:
    column;
}


/* =========================
   Heading row
   ========================= */

.giving-card__heading {
  display: grid;

  grid-template-columns:
    48px 1fr;

  align-items:
    start;

  gap:
    12px;
}


.giving-card__icon {
  width:
    46px;

  height:
    46px;

  display:
    grid;

  place-items:
    center;

  border-radius:
    50%;
}


.giving-card__icon--blue {
  color:
    var(--color-blue-600);

  background:
    #eef4ff;
}


.giving-card__icon--green {
  color:
    var(--color-teal-600);

  background:
    var(--color-teal-100);
}


.giving-card__title {
  color:
    var(--color-text-primary);

  font-family:
    var(--font-serif);

  font-size:
    20px;

  font-weight:
    550;

  line-height:
    1.05;

  letter-spacing:
    -0.02em;
}


.giving-card__intro {
  max-width:
    245px;

  margin-top:
    7px;

  color:
    var(--color-text-secondary);

  font-family:
    var(--font-sans);

  font-size:
    var(--text-caption);

  line-height:
    1.45;
}


/* =========================
   Bullet list
   ========================= */

.giving-card__list {
  margin-top:
    15px;

  display:
    grid;

  gap:
    7px;
}


.giving-card__list li {
  display:
    flex;

  align-items:
    center;

  gap:
    8px;

  color:
    var(--color-text-secondary);

  font-family:
    var(--font-sans);

  font-size:
    var(--text-caption);

  line-height:
    1.25;
}


.giving-card__list svg {
  flex:
    0 0 auto;

  color:
    var(--color-blue-600);
}


.giving-card__list--green svg {
  color:
    var(--color-teal-600);
}


/* =========================
   CTA
   ========================= */

.giving-card__button {
  width:
    min(100%, 260px);

  height:
    44px;

  margin-top:
    auto;

  display:
    inline-flex;

  align-items:
    center;

  justify-content:
    center;

  gap:
    11px;

  border-radius:
    6px;

  color:
    var(--color-white);

  font-family:
    var(--font-sans);

  font-size:
    var(--text-ui);

  font-weight:
    650;
}


.giving-card__button--blue {
  background:
    var(--color-blue-600);
}


.giving-card__button--blue:hover {
  background:
    var(--color-blue-500);
}


.giving-card__button--green {
  background:
    var(--color-teal-600);
}


.giving-card__button--green:hover {
  background:
    #06615c;
}


/* =========================
   Image area
   ========================= */

.giving-card__media {
  position:
    relative;

  min-width:
    0;

  overflow:
    hidden;
}


.giving-card__image {
  position:
    absolute;

  inset:
    0;

  width:
    100%;

  height:
    100%;

  object-fit:
    cover;
}


.giving-card--individual
.giving-card__image {
  object-position:
    48% center;
}


.giving-card--company
.giving-card__image {
  object-position:
    56% center;
}


/* =========================
   Soft blend into copy
   ========================= */

.giving-card__fade {
  position:
    absolute;

  inset:
    0;

  background:
    linear-gradient(
      90deg,
      rgb(255 255 255 / 0.98) 0%,
      rgb(255 255 255 / 0.72) 14%,
      rgb(255 255 255 / 0.18) 34%,
      transparent 52%
    );
}


/* =========================
   Photo copy
   ========================= */

.giving-card__photo-copy {
  position:
    absolute;

  right:
    12px;

  bottom:
    12px;

  color:
    var(--color-white);

  font-family:
    var(--font-serif);

  font-size:
    var(--text-caption);

  font-style:
    italic;

  line-height:
    1.07;

  text-align:
    right;

  text-shadow:
    0 1px 5px
    rgb(0 0 0 / 0.35);
}


/* =========================
   Tablet
   ========================= */

@media (max-width: 960px) {
  .home-ways__grid {
    grid-template-columns:
      1fr;
  }


  .giving-card {
    min-height:
      250px;
  }
}


/* =========================
   Mobile
   ========================= */

@media (max-width: 620px) {
  .home-ways {
    padding:
      22px 0;
  }


  .home-ways__title {
    font-size:
      28px;
  }


  .giving-card {
    grid-template-columns:
      1fr;

    min-height:
      0;
  }


  .giving-card__content {
    padding:
      18px;
  }


  .giving-card__media {
    min-height:
      220px;
  }


  .giving-card__button {
    margin-top:
      18px;
  }


  .giving-card__fade {
    background:
      linear-gradient(
        180deg,
        rgb(255 255 255 / 0.55),
        transparent 38%
      );
  }
}
</style>
