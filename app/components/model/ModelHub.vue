<script setup lang="ts">
import {
  ArrowRight,
  Leaf,
  Lock,
  Users,
  WifiOff,
  Wrench,
} from 'lucide-vue-next'

const callouts = [
  {
    id: 'enclosure',
    title: 'Protective enclosure',
    description: 'Keeps everything safe, organised and ready to go.',
  },
  {
    id: 'storage',
    title: 'Offline content storage',
    description: 'Holds thousands of lessons, videos and curriculum resources.',
  },
  {
    id: 'micro',
    title: 'Microcomputer',
    description: 'Low-power, reliable and easy to maintain.',
  },
  {
    id: 'laptop',
    title: 'Teacher laptop',
    description: 'Easy access to lessons, resources and tools.',
  },
  {
    id: 'projector',
    title: 'Projector / display',
    description: 'Shares content with the entire class.',
  },
  {
    id: 'power',
    title: 'Power & accessories',
    description: 'Reliable power and connectivity components.',
  },
]

const traits = [
  {
    label: 'Works offline without internet',
    icon: WifiOff,
  },
  {
    label: 'Built for low power use',
    icon: Leaf,
  },
  {
    label: 'Designed for classroom use',
    icon: Users,
  },
  {
    label: 'Easy to service and update',
    icon: Wrench,
  },
  {
    label: 'Secure storage when not in use',
    icon: Lock,
  },
]
</script>

<template>
  <section
    id="hub"
    class="model-hub"
    aria-labelledby="model-hub-title"
  >
    <div class="model-hub__stage">
      <img
        src="/images/model/hub-kit.png"
        alt="Impact Bridge learning hub kit including protective case, offline storage, microcomputer, laptop, projector and power accessories."
        width="1448"
        height="1086"
        class="model-hub__kit-image"
      >

      <div
        class="model-hub__shade"
        aria-hidden="true"
      />

      <img
        src="/images/model/hub-learner.png"
        alt=""
        width="960"
        height="1280"
        class="model-hub__learner"
      >

      <div class="model-hub__inner">
        <div class="model-hub__copy">
          <p class="model-hub__number">
            03
          </p>

          <h2
            id="model-hub-title"
            class="model-hub__title"
          >
            Inside the<br>
            learning hub
          </h2>

          <p class="model-hub__lede">
            Each component is chosen to solve a real classroom constraint —
            so teachers can do more, with what they have.
          </p>

          <NuxtLink
            to="/donate-equipment"
            class="model-hub__button"
          >
            <span>View technical specifications</span>

            <ArrowRight
              :size="15"
              :stroke-width="2"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>
      </div>

      <ul class="model-hub__callouts">
        <li
          v-for="callout in callouts"
          :key="callout.id"
          class="hub-callout"
          :class="`hub-callout--${callout.id}`"
        >
          <strong>
            {{ callout.title }}
          </strong>

          <span>
            {{ callout.description }}
          </span>

          <i
            class="hub-callout__leader"
            aria-hidden="true"
          />
        </li>
      </ul>
    </div>

    <div class="model-hub__bar">
      <ul class="model-hub__traits">
        <li
          v-for="trait in traits"
          :key="trait.label"
          class="model-hub__trait"
        >
          <component
            :is="trait.icon"
            :size="19"
            :stroke-width="1.6"
            aria-hidden="true"
            class="model-hub__trait-icon"
          />

          <span>
            {{ trait.label }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
/* =========================================================
   OUTER SECTION
========================================================= */

.model-hub {
  position: relative;

  width: min(calc(100% - 64px), 1500px);

  margin-inline: auto;

  overflow: hidden;

  scroll-margin-top: 132px;

  color: #fff;
  background: #031633;
}


/* =========================================================
   MAIN STAGE
========================================================= */

.model-hub__stage {
  position: relative;

  isolation: isolate;
  overflow: hidden;

  height: clamp(360px, 22vw, 395px);

  background:
    radial-gradient(
      circle at 56% 42%,
      rgb(31 105 235 / 0.31),
      transparent 37%
    ),
    linear-gradient(
      105deg,
      #031633 0%,
      #073585 43%,
      #0748a5 68%,
      #052b68 100%
    );
}


/* =========================================================
   EQUIPMENT IMAGE
========================================================= */

.model-hub__kit-image {
  position: absolute;
  z-index: 0;

  top: 0;
  bottom: 0;

  left: 27%;

  width: 52%;
  height: 100%;

  object-fit: cover;
  object-position: 34% 50%;

  pointer-events: none;

  -webkit-mask-image:
    linear-gradient(
      90deg,
      transparent 0%,
      #000 7%,
      #000 90%,
      transparent 100%
    );

  mask-image:
    linear-gradient(
      90deg,
      transparent 0%,
      #000 7%,
      #000 90%,
      transparent 100%
    );
}


/* =========================================================
   SHADING
========================================================= */

.model-hub__shade {
  position: absolute;
  z-index: 1;

  inset: 0;

  pointer-events: none;

  background:
    linear-gradient(
      90deg,
      #031633 0%,
      #031633 18%,
      rgb(3 22 51 / 0.68) 24%,
      rgb(3 22 51 / 0.12) 38%,
      transparent 52%,
      transparent 72%,
      rgb(3 22 51 / 0.13) 80%
    ),
    linear-gradient(
      180deg,
      rgb(2 16 43 / 0.18) 0%,
      transparent 18%,
      transparent 81%,
      rgb(2 16 43 / 0.34) 100%
    );
}


/* =========================================================
   LEARNER
========================================================= */

.model-hub__learner {
  position: absolute;
  z-index: 2;

  top: 0;
  right: 0;

  width: min(20vw, 310px);
  height: 100%;

  object-fit: cover;
  object-position: 52% 22%;

  pointer-events: none;

  -webkit-mask-image:
    linear-gradient(
      90deg,
      transparent 0%,
      rgb(0 0 0 / 0.26) 11%,
      #000 31%
    );

  mask-image:
    linear-gradient(
      90deg,
      transparent 0%,
      rgb(0 0 0 / 0.26) 11%,
      #000 31%
    );
}


/* =========================================================
   MAIN CONTENT WIDTH
========================================================= */

.model-hub__inner {
  position: relative;
  z-index: 4;

  width: min(calc(100% - 72px), 1360px);
  height: 100%;

  margin-inline: auto;

  display: flex;
  align-items: flex-start;

  padding-top: 22px;
  padding-bottom: 16px;
}


/* =========================================================
   LEFT COPY
========================================================= */

.model-hub__copy {
  position: relative;
  z-index: 5;

  width: 220px;
  flex: 0 0 220px;
}


.model-hub__number {
  width: 22px;
  height: 22px;

  margin: 0;

  display: grid;
  place-items: center;

  color: #fff;

  border: 1px solid rgb(255 255 255 / 0.42);
  border-radius: 50%;

  font-family: var(--font-sans);
  font-size: 0.61rem;
  font-weight: 700;
  line-height: 1;
}


.model-hub__title {
  margin: 10px 0 0;

  color: #fff;

  font-family: var(--font-serif);

  font-size: clamp(2rem, 2.35vw, 2.55rem);
  font-style: italic;
  font-weight: 430;

  line-height: 0.98;
  letter-spacing: -0.038em;
}


.model-hub__lede {
  max-width: 29ch;

  margin: 14px 0 0;

  color: rgb(255 255 255 / 0.82);

  font-family: var(--font-sans);
  font-size: 0.76rem;
  line-height: 1.42;
}


.model-hub__button {
  min-height: 40px;

  margin-top: 16px;
  padding-inline: 17px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  color: #fff;
  background: #1663f2;

  border-radius: 6px;

  font-family: var(--font-sans);
  font-size: 0.73rem;
  font-weight: 700;
  line-height: 1;

  text-decoration: none;
  white-space: nowrap;

  transition:
    background 160ms ease,
    transform 160ms ease;
}


.model-hub__button:hover {
  background: #2a70ff;

  transform: translateY(-1px);
}


/* =========================================================
   CALLOUT LAYER
========================================================= */

.model-hub__callouts {
  position: absolute;
  z-index: 5;

  inset: 0;

  margin: 0;
  padding: 0;

  list-style: none;

  pointer-events: none;
}


.hub-callout {
  position: absolute;

  width: 122px;

  color: #fff;

  text-shadow:
    0 1px 8px rgb(1 16 42 / 0.85);
}


.hub-callout strong {
  display: block;

  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 1.15;
}


.hub-callout span {
  display: block;

  margin-top: 2px;

  color: rgb(255 255 255 / 0.8);

  font-family: var(--font-sans);
  font-size: 0.59rem;
  line-height: 1.28;
}


/* =========================================================
   POINTER SYSTEM
========================================================= */

.hub-callout__leader {
  position: absolute;

  display: block;

  height: 1px;

  background: rgb(255 255 255 / 0.72);

  box-shadow:
    0 0 4px rgb(255 255 255 / 0.12);
}


.hub-callout__leader::after {
  content: '';

  position: absolute;

  width: 5px;
  height: 5px;

  background: #fff;

  border-radius: 50%;

  box-shadow:
    0 0 0 2px rgb(255 255 255 / 0.12);
}


/* =========================================================
   ENCLOSURE
========================================================= */

.hub-callout--enclosure {
  top: 7%;
  left: 22.5%;
}


.hub-callout--enclosure .hub-callout__leader {
  top: 11px;

  left: calc(100% + 5px);

  width: 55px;

  transform: rotate(9deg);
  transform-origin: left center;
}


.hub-callout--enclosure .hub-callout__leader::after {
  top: 50%;
  right: -2px;

  transform: translateY(-50%);
}


/* =========================================================
   STORAGE
========================================================= */

.hub-callout--storage {
  top: 45%;
  left: 24%;
}


.hub-callout--storage .hub-callout__leader {
  top: 28px;

  left: calc(100% + 4px);

  width: 103px;

  transform: rotate(39deg);
  transform-origin: left center;
}


.hub-callout--storage .hub-callout__leader::after {
  top: 50%;
  right: -2px;

  transform: translateY(-50%);
}


/* =========================================================
   MICROCOMPUTER
========================================================= */

.hub-callout--micro {
  left: 47.5%;
  bottom: 12%;
}


.hub-callout--micro .hub-callout__leader {
  left: 24px;

  bottom: calc(100% + 5px);

  width: 1px;
  height: 45px;
}


.hub-callout--micro .hub-callout__leader::after {
  top: -2px;
  left: 50%;

  transform: translateX(-50%);
}


/* =========================================================
   LAPTOP
========================================================= */

.hub-callout--laptop {
  top: 4%;
  left: 66%;
}


.hub-callout--laptop .hub-callout__leader {
  top: 12px;

  right: calc(100% + 5px);

  width: 48px;

  transform: rotate(-26deg);
  transform-origin: right center;
}


.hub-callout--laptop .hub-callout__leader::after {
  top: 50%;
  left: -2px;

  transform: translateY(-50%);
}


/* =========================================================
   PROJECTOR
========================================================= */

.hub-callout--projector {
  top: 24%;
  left: 73%;
}


.hub-callout--projector .hub-callout__leader {
  top: 22px;

  right: calc(100% + 5px);

  width: 58px;

  transform: rotate(-65deg);
  transform-origin: right center;
}


.hub-callout--projector .hub-callout__leader::after {
  top: 50%;
  left: -2px;

  transform: translateY(-50%);
}


/* =========================================================
   POWER
========================================================= */

.hub-callout--power {
  right: 15%;
  bottom: 12%;
}


.hub-callout--power .hub-callout__leader {
  top: 14px;

  right: calc(100% + 5px);

  width: 48px;

  transform: rotate(14deg);
  transform-origin: right center;
}


.hub-callout--power .hub-callout__leader::after {
  top: 50%;
  left: -2px;

  transform: translateY(-50%);
}


/* =========================================================
   BOTTOM FEATURE RAIL
========================================================= */

.model-hub__bar {
  position: relative;
  z-index: 6;

  background: #021735;

  border-top:
    1px solid rgb(255 255 255 / 0.13);
}


.model-hub__traits {
  width: min(calc(100% - 72px), 1360px);

  margin-inline: auto;
  padding: 0;

  display: grid;

  grid-template-columns:
    repeat(5, minmax(0, 1fr));

  list-style: none;
}


.model-hub__trait {
  min-height: 0;

  display: flex;
  align-items: center;

  gap: 9px;

  padding: 8px 12px;

  color: rgb(255 255 255 / 0.88);

  border-right:
    1px solid rgb(255 255 255 / 0.13);

  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 1.16;
}


.model-hub__trait:first-child {
  padding-left: 0;
}


.model-hub__trait:last-child {
  padding-right: 0;

  border-right: 0;
}


.model-hub__trait-icon {
  flex: 0 0 auto;

  color: rgb(255 255 255 / 0.9);
}


.model-hub__trait span {
  max-width: 15ch;
}


/* =========================================================
   SMALLER DESKTOP
========================================================= */

@media (max-width: 1280px) {

  .model-hub {
    width: min(calc(100% - 40px), 1180px);
  }


  .model-hub__stage {
    height: clamp(330px, 29vw, 360px);
  }


  .model-hub__inner,
  .model-hub__traits {
    width: calc(100% - 48px);

    max-width: 1080px;
  }


  .model-hub__inner {
    padding-top: 20px;
  }


  .model-hub__copy {
    width: 205px;

    flex-basis: 205px;
  }


  .model-hub__title {
    font-size:
      clamp(1.8rem, 2.6vw, 2.25rem);
  }


  .model-hub__lede {
    font-size: 0.7rem;
  }


  .model-hub__button {
    min-height: 37px;

    margin-top: 14px;

    font-size: 0.68rem;
  }


  .model-hub__kit-image {
    left: 27%;

    width: 53%;
  }


  .model-hub__learner {
    width: min(21vw, 275px);
  }


  .hub-callout {
    width: 108px;
  }


  .hub-callout strong {
    font-size: 0.64rem;
  }


  .hub-callout span {
    font-size: 0.54rem;
  }


  .hub-callout--enclosure .hub-callout__leader {
    width: 42px;
  }


  .hub-callout--storage .hub-callout__leader {
    width: 72px;
  }


  .hub-callout--micro .hub-callout__leader {
    height: 32px;
  }


  .hub-callout--laptop .hub-callout__leader {
    width: 38px;
  }


  .hub-callout--projector .hub-callout__leader {
    width: 42px;
  }


  .hub-callout--power .hub-callout__leader {
    width: 38px;
  }


  .model-hub__trait {
    gap: 8px;

    padding: 7px 9px;

    font-size: 0.63rem;
  }
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 900px) {

  /*
    Return to normal full-width mobile behaviour.
  */

  .model-hub {
    width: 100%;

    max-width: none;

    margin-inline: 0;
  }


  .model-hub__learner,
  .model-hub__shade {
    display: none;
  }


  .model-hub__stage {
    height: auto;

    display: grid;

    grid-template-areas:
      "copy"
      "kit"
      "notes";

    background: #031633;
  }


  .model-hub__inner {
    grid-area: copy;

    width: auto;
    max-width: none;
    height: auto;

    margin: 0;
    padding: 0;

    display: block;
  }


  .model-hub__copy {
    width: auto;

    max-width: 540px;

    padding:
      36px
      var(--page-gutter-mobile)
      18px;
  }


  .model-hub__number {
    width: 30px;
    height: 30px;

    font-size: 0.65rem;
  }


  .model-hub__title {
    margin-top: 14px;

    font-size:
      clamp(2.5rem, 9vw, 3.4rem);
  }


  .model-hub__lede {
    max-width: 35ch;

    margin-top: 16px;

    font-size: 0.86rem;
  }


  .model-hub__button {
    min-height: 44px;

    margin-top: 18px;

    font-size: 0.78rem;
  }


  .model-hub__kit-image {
    grid-area: kit;

    position: relative;

    top: auto;
    right: auto;
    bottom: auto;
    left: auto;

    width: 100%;
    height: 240px;

    object-fit: cover;
    object-position: center 49%;

    -webkit-mask-image:
      linear-gradient(
        180deg,
        transparent 0%,
        #000 8%,
        #000 92%,
        transparent 100%
      );

    mask-image:
      linear-gradient(
        180deg,
        transparent 0%,
        #000 8%,
        #000 92%,
        transparent 100%
      );
  }


  .model-hub__callouts {
    grid-area: notes;

    position: static;

    display: grid;

    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap: 8px;

    padding:
      14px
      var(--page-gutter-mobile)
      24px;
  }


  .hub-callout {
    position: static;

    width: auto;

    padding: 13px;

    color: #fff;

    background:
      rgb(255 255 255 / 0.055);

    border:
      1px solid rgb(255 255 255 / 0.1);

    border-radius: 8px;

    text-shadow: none;
  }


  .hub-callout strong {
    font-size: 0.8rem;
  }


  .hub-callout span {
    margin-top: 4px;

    font-size: 0.72rem;
  }


  .hub-callout__leader {
    display: none;
  }


  .model-hub__traits {
    width:
      min(
        100% - calc(
          var(--page-gutter-mobile) * 2
        ),
        700px
      );

    max-width: none;

    grid-template-columns:
      1fr 1fr;
  }


  .model-hub__trait {
    justify-content: flex-start;

    padding: 11px 10px;

    border-right: 0;

    border-bottom:
      1px solid rgb(255 255 255 / 0.1);

    font-size: 0.74rem;
  }
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 560px) {

  .model-hub__copy {
    padding-top: 30px;
  }


  .model-hub__title {
    font-size:
      clamp(2.3rem, 11vw, 3rem);
  }


  .model-hub__kit-image {
    height: 190px;
  }


  .model-hub__callouts {
    grid-template-columns: 1fr;
  }


  .model-hub__traits {
    grid-template-columns: 1fr;
  }


  .model-hub__trait {
    padding-block: 10px;
    padding-inline: 2px;
  }


  .model-hub__trait:last-child {
    border-bottom: 0;
  }
}
</style>
