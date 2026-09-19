<script setup lang="ts">
import {
  Laptop,
  UserRound,
  UsersRound,
  Heart,
  Handshake,
  ArrowRight,
} from 'lucide-vue-next'

const steps = [
  {
    title: '1. Offline Learning Hub',
    description:
      'Local curriculum and resources without continuous internet.',
    icon: Laptop,
  },

  {
    title: '2. Trained Teacher',
    description:
      'A supported teacher leads and maintains the programme.',
    icon: UserRound,
  },

  {
    title: '3. Engaged Classroom',
    description:
      'Lessons become interactive and collaborative.',
    icon: UsersRound,
  },

  {
    title: '4. Confident Learners',
    description:
      'Understanding, participation and confidence improve.',
    icon: Heart,
  },

  {
    title: '5. Stronger Communities',
    description:
      'Local ownership sustains educational access.',
    icon: Handshake,
  },
]
</script>


<template>
  <section class="home-model">

    <div
      class="home-model__wash"
      aria-hidden="true"
    />


    <!-- =========================
         Heading
         ========================= -->

    <header class="home-model__header">

      <p class="home-model__eyebrow">
        Our Model
      </p>

      <h2 class="home-model__title">
        A simple model. Lasting change.
      </h2>

      <p class="home-model__intro">
        From access to opportunity — a proven, community-driven approach.
      </p>

    </header>


    <!-- =========================
         Model + outcome image
         ========================= -->

    <div class="home-model__body">

      <!-- =========================
           Journey
           ========================= -->

      <div class="home-model__journey">

        <template
          v-for="(step, index) in steps"
          :key="step.title"
        >

          <article class="model-step">

            <div class="model-step__icon">
              <component
                :is="step.icon"
                :size="34"
                :stroke-width="1.7"
                aria-hidden="true"
              />
            </div>

            <h3 class="model-step__title">
              {{ step.title }}
            </h3>

            <p class="model-step__description">
              {{ step.description }}
            </p>

          </article>


          <div
            v-if="index < steps.length - 1"
            class="model-connector"
            aria-hidden="true"
          >
            <span class="model-connector__line" />

            <span class="model-connector__arrow">
              <ArrowRight
                :size="14"
                :stroke-width="2.2"
              />
            </span>

            <span class="model-connector__line" />
          </div>

        </template>

      </div>


      <!-- =========================
           Outcome visual
           ========================= -->

      <aside class="home-model__visual">

        <span
          class="home-model__arc home-model__arc--one"
          aria-hidden="true"
        />

        <span
          class="home-model__arc home-model__arc--two"
          aria-hidden="true"
        />

        <span
          class="home-model__dot home-model__dot--small"
          aria-hidden="true"
        />

        <span
          class="home-model__dot home-model__dot--large"
          aria-hidden="true"
        />


        <div class="home-model__photo-wrap">

          <img
            src="/images/home/model-students.png"
            alt="Two pupils walking towards their school"
            class="home-model__photo"
          >

        </div>


        <p class="home-model__quote">
          Bridging<br>
          futures<br>
          together.
        </p>

      </aside>

    </div>

  </section>
</template>


<style scoped>
@import '@fontsource-variable/newsreader';


/* =========================
   Section
   ========================= */

.home-model {
  position: relative;

  width: 100%;

  overflow: hidden;

  padding:
    26px 0 14px;

  background:
    linear-gradient(
      180deg,
      #ffffff 0%,
      #fbfcff 100%
    );

  border-top:
    1px solid var(--color-border);

  border-bottom:
    1px solid var(--color-border);
}


/* =========================
   Header
   ========================= */

.home-model__header {
  position: relative;

  z-index: 2;

  width:
    min(
      700px,
      calc(100% - 40px)
    );

  margin-inline:
    auto;

  text-align:
    center;
}


.home-model__eyebrow {
  color:
    var(--color-blue-600);

  font-family:
    var(--font-sans);

  font-size:
    9px;

  font-weight:
    700;

  line-height:
    1;

  letter-spacing:
    0.055em;

  text-transform:
    uppercase;
}


.home-model__title {
  margin-top:
    8px;

  color:
    var(--color-text-primary);

  font-family:
    'Newsreader Variable',
    Georgia,
    serif;

  font-size:
    clamp(32px, 2.2vw, 39px);

  font-weight:
    500;

  font-optical-sizing:
    auto;

  line-height:
    0.98;

  letter-spacing:
    -0.033em;
}


.home-model__intro {
  margin-top:
    7px;

  color:
    var(--color-text-secondary);

  font-family:
    var(--font-sans);

  font-size:
    11px;

  line-height:
    1.4;
}


/* =========================
   Main body
   ========================= */

.home-model__body {
  position: relative;

  z-index: 2;

  width:
    min(
      calc(100% - 44px),
      1360px
    );

  margin:
    10px auto 0;

  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    clamp(280px, 19vw, 320px);

  align-items:
    center;

  gap:
    0;
}


/* =========================
   Journey
   ========================= */

.home-model__journey {
  width: 100%;

  max-width:
    1010px;

  margin-inline:
    auto;

  display:
    flex;

  align-items:
    flex-start;

  justify-content:
    center;
}


/* =========================
   Step
   ========================= */

.model-step {
  width:
    clamp(126px, 8.7vw, 148px);

  flex:
    0 0 clamp(126px, 8.7vw, 148px);

  min-width:
    0;

  text-align:
    center;
}


/* =========================
   Icon circle
   ========================= */

.model-step__icon {
  width:
    clamp(66px, 4.6vw, 74px);

  height:
    clamp(66px, 4.6vw, 74px);

  margin-inline:
    auto;

  display:
    grid;

  place-items:
    center;

  color:
    var(--color-blue-600);

  background:
    #f0f4ff;

  border:
    1px solid #e5ecff;

  border-radius:
    50%;
}


/* =========================
   Step title
   ========================= */

.model-step__title {
  margin-top:
    8px;

  color:
    var(--color-text-primary);

  font-family:
    var(--font-sans);

  font-size:
    clamp(10.5px, 0.76vw, 11.5px);

  font-weight:
    750;

  line-height:
    1.2;

  letter-spacing:
    -0.012em;
}


/* =========================
   Step description
   ========================= */

.model-step__description {
  max-width:
    136px;

  margin:
    6px auto 0;

  color:
    var(--color-text-secondary);

  font-family:
    var(--font-sans);

  font-size:
    clamp(8.8px, 0.65vw, 9.8px);

  font-weight:
    400;

  line-height:
    1.42;
}


/* =========================
   Connectors
   ========================= */

.model-connector {
  height:
    clamp(66px, 4.6vw, 74px);

  width:
    clamp(30px, 2.4vw, 42px);

  flex:
    0 1 clamp(30px, 2.4vw, 42px);

  display:
    flex;

  align-items:
    center;
}


.model-connector__line {
  height:
    1px;

  flex:
    1;

  background:
    #8eaded;
}


.model-connector__arrow {
  width:
    25px;

  height:
    25px;

  flex:
    0 0 25px;

  display:
    grid;

  place-items:
    center;

  color:
    var(--color-blue-600);

  background:
    #f6f9ff;

  border:
    1px solid #b9ccf6;

  border-radius:
    50%;
}


/* =========================
   Right visual
   ========================= */

.home-model__visual {
  position:
    relative;

  width:
    clamp(280px, 19vw, 320px);

  height:
    clamp(220px, 15vw, 250px);

  margin-left:
    -24px;
}


/* =========================
   Organic image
   ========================= */

.home-model__photo-wrap {
  position:
    absolute;

  z-index:
    3;

  top:
    0;

  right:
    37px;

  width:
    clamp(195px, 13.4vw, 220px);

  height:
    clamp(215px, 14.6vw, 244px);

  overflow:
    hidden;

  background:
    #e8eef8;

  border-radius:
    49% 51% 45% 55%
    /
    35% 43% 57% 65%;

  transform:
    rotate(3deg);
}


.home-model__photo {
  width:
    100%;

  height:
    100%;

  display:
    block;

  object-fit:
    cover;

  object-position:
    50% 57%;

  transform:
    rotate(-3deg)
    scale(1.1);

  filter:
    saturate(0.92)
    contrast(0.97)
    brightness(1.02);
}


/* =========================
   Decorative arcs
   ========================= */

.home-model__arc {
  position:
    absolute;

  z-index:
    1;

  pointer-events:
    none;

  border:
    1px solid
    rgb(63 116 238 / 0.25);

  border-right-color:
    transparent;

  border-bottom-color:
    transparent;

  border-radius:
    50%;
}


.home-model__arc--one {
  top:
    -3px;

  left:
    0;

  width:
    78%;

  height:
    108%;

  transform:
    rotate(-19deg);
}


.home-model__arc--two {
  top:
    12px;

  left:
    20px;

  width:
    69%;

  height:
    98%;

  opacity:
    0.55;

  transform:
    rotate(-16deg);
}


/* =========================
   Dots
   ========================= */

.home-model__dot {
  position:
    absolute;

  z-index:
    5;

  display:
    block;

  border-radius:
    50%;
}


.home-model__dot--small {
  top:
    3px;

  right:
    51px;

  width:
    6px;

  height:
    6px;

  background:
    #dce7ff;
}


.home-model__dot--large {
  top:
    11px;

  right:
    13px;

  width:
    20px;

  height:
    20px;

  background:
    #3975ef;
}


/* =========================
   Quote
   ========================= */

.home-model__quote {
  position:
    absolute;

  z-index:
    4;

  right:
    0;

  bottom:
    5px;

  color:
    #52698d;

  font-family:
    'Newsreader Variable',
    Georgia,
    serif;

  font-size:
    12px;

  font-style:
    italic;

  font-weight:
    450;

  line-height:
    1.06;
}


/* =========================
   Background wash
   ========================= */

.home-model__wash {
  position:
    absolute;

  right:
    -70px;

  bottom:
    -115px;

  width:
    350px;

  height:
    305px;

  border-radius:
    50%;

  background:
    radial-gradient(
      circle at center,
      rgb(230 238 255 / 0.68) 0%,
      rgb(239 244 255 / 0.28) 48%,
      transparent 72%
    );
}


/* =========================
   Medium desktop
   ========================= */

@media (max-width: 1250px) {
  .home-model__body {
    width:
      calc(100% - 40px);

    grid-template-columns:
      minmax(0, 1fr)
      245px;
  }


  .home-model__visual {
    width:
      245px;

    height:
      205px;

    margin-left:
      -16px;
  }


  .home-model__photo-wrap {
    right:
      30px;

    width:
      170px;

    height:
      198px;
  }


  .model-step {
    width:
      122px;

    flex-basis:
      122px;
  }


  .model-connector {
    width:
      28px;

    flex-basis:
      28px;
  }


  .home-model__quote {
    font-size:
      10px;
  }
}


/* =========================
   Tablet
   ========================= */

@media (max-width: 1000px) {
  .home-model {
    padding:
      28px 0 30px;
  }


  .home-model__body {
    grid-template-columns:
      1fr;

    margin-top:
      18px;
  }


  .home-model__visual {
    display:
      none;
  }


  .home-model__journey {
    max-width:
      850px;
  }
}


/* =========================
   Smaller tablet
   ========================= */

@media (max-width: 800px) {
  .home-model__journey {
    display:
      grid;

    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap:
      26px 18px;
  }


  .model-step {
    width:
      auto;

    flex:
      initial;
  }


  .model-connector {
    display:
      none;
  }


  .model-step__description {
    max-width:
      190px;
  }
}


/* =========================
   Mobile
   ========================= */

@media (max-width: 520px) {
  .home-model {
    padding:
      25px 0 28px;
  }


  .home-model__header {
    width:
      calc(100% - 40px);
  }


  .home-model__title {
    font-size:
      29px;
  }


  .home-model__intro {
    font-size:
      10px;
  }


  .home-model__body {
    width:
      calc(100% - 40px);

    margin-top:
      20px;
  }


  .home-model__journey {
    grid-template-columns:
      1fr;

    gap:
      21px;
  }


  .model-step__icon {
    width:
      58px;

    height:
      58px;
  }


  .model-step__title {
    font-size:
      11px;
  }


  .model-step__description {
    max-width:
      250px;

    font-size:
      9px;
  }
}
</style>
