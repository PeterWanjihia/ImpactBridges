<script setup lang="ts">
import {
  School,
} from 'lucide-vue-next'

const evidence = [
  {
    value: '60%',
    description:
      'of Ugandan schools lack reliable internet access',
  },

  {
    value: '1 in 3',
    description:
      'teachers lack access to digital teaching resources',
  },

  {
    icon: School,
    description:
      'Rural classrooms remain underserved by digital learning tools',
  },
]
</script>


<template>
  <section class="challenge">
    <div class="container challenge__inner">

      <!-- =========================
           Left content
           ========================= -->

      <div class="challenge__content">

        <p class="challenge__eyebrow">
          The Challenge
        </p>

        <h2 class="challenge__title">
          Too many learners<br>
          are left behind.
        </h2>

        <p class="challenge__description">
          In too many schools, unreliable internet and a lack of
          digital resources leave children without the opportunity
          to learn and grow.
        </p>


        <!-- =========================
             Evidence
             ========================= -->

        <div class="challenge__evidence">

          <article
            v-for="item in evidence"
            :key="item.value || item.description"
            class="evidence-card"
          >

            <strong
              v-if="item.value"
              class="evidence-card__value"
            >
              {{ item.value }}
            </strong>

            <div
              v-else
              class="evidence-card__icon"
            >
              <component
                :is="item.icon"
                :size="23"
                :stroke-width="1.7"
                aria-hidden="true"
              />
            </div>

            <p class="evidence-card__description">
              {{ item.description }}
            </p>

          </article>

        </div>


        <p class="challenge__source">
          *Sources: UNESCO (2023); MoES (2023)
        </p>

      </div>


      <!-- =========================
           Documentary image
           ========================= -->

      <div class="challenge__media">

        <img
          src="/images/home/challenge.png"
          alt="School environment in Uganda"
          class="challenge__image"
        >

      </div>

    </div>
  </section>
</template>


<style scoped>
@import '@fontsource-variable/newsreader';


/* =========================
   Section
   ========================= */

.challenge {
  width: 100%;

  padding:
    38px 0 50px;

  background:
    var(--color-white);
}


/* =========================
   Main layout
   ========================= */

.challenge__inner {
  display: grid;

  /*
    Left gets slightly more authority
    while the image becomes a touch narrower.
  */
  grid-template-columns:
    minmax(0, 0.82fr)
    minmax(0, 1fr);

  align-items: start;

  gap:
    44px;
}


/* =========================
   Left content
   ========================= */

.challenge__content {
  min-width: 0;

  padding-top:
    4px;
}


.challenge__eyebrow {
  margin-bottom:
    10px;

  color:
    var(--color-blue-600);

  font-family:
    var(--font-sans);

  font-size:
    10px;

  font-weight:
    700;

  line-height:
    1;

  letter-spacing:
    0.055em;

  text-transform:
    uppercase;
}


/* =========================
   Heading
   ========================= */

.challenge__title {
  color:
    var(--color-text-primary);

  font-family:
    'Newsreader Variable',
    Georgia,
    serif;

  /*
    Slightly quieter than before.
  */
  font-size:
    36px;

  font-weight:
    500;

  font-optical-sizing:
    auto;

  line-height:
    1.02;

  letter-spacing:
    -0.025em;
}


/* =========================
   Description
   ========================= */

.challenge__description {
  max-width:
    350px;

  margin-top:
    15px;

  color:
    var(--color-text-secondary);

  font-family:
    var(--font-sans);

  font-size:
    11px;

  line-height:
    1.58;
}


/* =========================
   Evidence grid
   ========================= */

.challenge__evidence {
  margin-top:
    20px;

  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap:
    8px;
}


/* =========================
   Evidence cards
   ========================= */

.evidence-card {
  min-height:
    92px;

  padding:
    12px;

  display: flex;

  flex-direction:
    column;

  align-items:
    flex-start;

  justify-content:
    flex-start;

  background:
    var(--color-white);

  border:
    1px solid
    var(--color-border);

  border-radius:
    7px;
}


/* =========================
   Evidence value
   ========================= */

.evidence-card__value {
  color:
    var(--color-blue-600);

  font-family:
    'Newsreader Variable',
    Georgia,
    serif;

  font-size:
    29px;

  font-weight:
    550;

  line-height:
    0.95;
}


/* =========================
   Evidence icon
   ========================= */

.evidence-card__icon {
  width:
    29px;

  height:
    29px;

  display:
    grid;

  place-items:
    center;

  color:
    var(--color-blue-600);
}


/* =========================
   Evidence description
   ========================= */

.evidence-card__description {
  margin-top:
    8px;

  color:
    var(--color-text-secondary);

  font-family:
    var(--font-sans);

  font-size:
    8.3px;

  line-height:
    1.38;
}


/* =========================
   Source
   ========================= */

.challenge__source {
  margin-top:
    6px;

  color:
    var(--color-text-muted);

  font-family:
    var(--font-sans);

  font-size:
    8.2px;

  font-weight:
    450;

  line-height:
    1.4;
}


/* =========================
   Image wrapper
   ========================= */

.challenge__media {
  width: 100%;

  overflow:
    hidden;

  border-radius:
    9px;

  background:
    var(--color-surface-soft);
}


/* =========================
   Image
   ========================= */

.challenge__image {
  width: 100%;

  /*
    Your 300px version was already much better.
    This trims another ~6%.
  */
  height:
    282px;

  display:
    block;

  object-fit:
    cover;

  object-position:
    center;

  filter:
    saturate(0.84)
    contrast(0.95)
    brightness(1.02);
}


/* =========================
   Tablet
   ========================= */

@media (max-width: 900px) {
  .challenge {
    padding:
      40px 0 48px;
  }


  .challenge__inner {
    grid-template-columns:
      1fr;

    gap:
      28px;
  }


  .challenge__description {
    max-width:
      500px;
  }


  .challenge__evidence {
    max-width:
      620px;
  }


  .challenge__media {
    max-width:
      760px;
  }


  .challenge__image {
    height:
      auto;

    aspect-ratio:
      16 / 9;
  }
}


/* =========================
   Mobile
   ========================= */

@media (max-width: 600px) {
  .challenge {
    padding:
      36px 0 42px;
  }


  .challenge__title {
    font-size:
      31px;
  }


  .challenge__evidence {
    grid-template-columns:
      1fr;

    gap:
      7px;
  }


  .evidence-card {
    min-height:
      0;

    padding:
      13px 14px;
  }


  .challenge__source {
    margin-top:
      7px;

    font-size:
      8px;
  }


  .challenge__image {
    height:
      auto;

    aspect-ratio:
      4 / 3;
  }
}
</style>
