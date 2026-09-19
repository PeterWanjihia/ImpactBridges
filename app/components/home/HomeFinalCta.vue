<script setup lang="ts">
import {
  Heart,
  Building2,
} from 'lucide-vue-next'
</script>


<template>
  <section class="final-cta">
    <div class="container final-cta__inner">

      <!-- =========================
           Brand / illustration
           ========================= -->

      <div class="final-cta__brand">

        <div class="final-cta__brand-top">

          <img
            src="/images/brand/logo-mark.png"
            alt=""
            class="final-cta__logo"
          >

          <div class="final-cta__brand-copy">
            <strong>
              Impact Bridge
            </strong>

            <span>
              People · Learning · Brighter Futures
            </span>
          </div>

        </div>


        <!-- Decorative bridge line art -->
        <div
          class="final-cta__art"
          aria-hidden="true"
        >
          <span class="final-cta__mountain final-cta__mountain--one" />
          <span class="final-cta__mountain final-cta__mountain--two" />

          <span class="final-cta__bridge-line final-cta__bridge-line--top" />
          <span class="final-cta__bridge-line final-cta__bridge-line--bottom" />

          <span class="final-cta__tower final-cta__tower--left" />
          <span class="final-cta__tower final-cta__tower--right" />
        </div>

      </div>


      <!-- =========================
           Main message
           ========================= -->

      <div class="final-cta__message">

        <h2 class="final-cta__title">
          Be the bridge.
        </h2>

        <p class="final-cta__subtitle">
          Help us launch the next 10 learning hubs.
        </p>

      </div>


      <!-- =========================
           Actions
           ========================= -->

      <div class="final-cta__actions">

        <NuxtLink
          to="/donate"
          class="final-cta__button final-cta__button--primary"
        >
          <Heart
            :size="18"
            :stroke-width="2"
            aria-hidden="true"
          />

          Donate Now
        </NuxtLink>


        <NuxtLink
          to="/corporate-partnerships"
          class="final-cta__button final-cta__button--secondary"
        >
          <Building2
            :size="18"
            :stroke-width="1.9"
            aria-hidden="true"
          />

          Partner With Us
        </NuxtLink>

      </div>


      <!-- =========================
           Closing statement
           ========================= -->

      <div class="final-cta__motto">

        <p>
          A more<br>
          equitable<br>
          tomorrow<br>
          is possible.
        </p>

        <span />

      </div>

    </div>
  </section>
</template>


<style scoped>
@import '@fontsource-variable/newsreader';


/* =========================
   CTA shell
   ========================= */

.final-cta {
  width: 100%;

  padding:
    10px 14px 14px;

  background:
    var(--color-white);
}


.final-cta__inner {
  position: relative;

  min-height:
    118px;

  overflow:
    hidden;

  padding:
    16px 30px;

  display:
    grid;

  grid-template-columns:
    300px
    minmax(260px, 1fr)
    auto
    105px;

  align-items:
    center;

  gap:
    28px;

  background:
    linear-gradient(
      100deg,
      #0b2346 0%,
      #102d55 52%,
      #0d274c 100%
    );

  border:
    1px solid
    rgb(255 255 255 / 0.05);

  border-radius:
    8px;
}


/* =========================
   Brand
   ========================= */

.final-cta__brand {
  position: relative;

  align-self:
    stretch;

  min-width:
    0;
}


.final-cta__brand-top {
  position:
    relative;

  z-index:
    2;

  display:
    flex;

  align-items:
    center;

  gap:
    10px;
}


.final-cta__logo {
  width:
    45px;

  height:
    45px;

  object-fit:
    contain;

  opacity:
    0.92;
}


.final-cta__brand-copy {
  display:
    flex;

  flex-direction:
    column;
}


.final-cta__brand-copy strong {
  color:
    rgb(255 255 255 / 0.94);

  font-family:
    'Newsreader Variable',
    Georgia,
    serif;

  font-size:
    16px;

  font-weight:
    550;

  line-height:
    1;
}


.final-cta__brand-copy span {
  margin-top:
    4px;

  color:
    rgb(255 255 255 / 0.56);

  font-family:
    var(--font-sans);

  font-size:
    5px;

  font-weight:
    600;

  letter-spacing:
    0.04em;

  text-transform:
    uppercase;
}


/* =========================
   Decorative bridge art
   ========================= */

.final-cta__art {
  position:
    absolute;

  z-index:
    1;

  left:
    -34px;

  right:
    -14px;

  bottom:
    -19px;

  height:
    68px;

  opacity:
    0.34;
}


.final-cta__bridge-line {
  position:
    absolute;

  left:
    0;

  width:
    260px;

  border-top:
    1px solid #3268ad;

  transform-origin:
    left center;
}


.final-cta__bridge-line--top {
  bottom:
    37px;

  transform:
    rotate(-1deg);
}


.final-cta__bridge-line--bottom {
  bottom:
    16px;

  transform:
    rotate(1deg);
}


.final-cta__tower {
  position:
    absolute;

  bottom:
    11px;

  width:
    28px;

  height:
    55px;

  border-left:
    1px solid #3268ad;

  border-right:
    1px solid #3268ad;
}


.final-cta__tower::before,
.final-cta__tower::after {
  content: "";

  position:
    absolute;

  left:
    50%;

  width:
    1px;

  height:
    62px;

  background:
    #3268ad;

  transform-origin:
    bottom;
}


.final-cta__tower::before {
  transform:
    rotate(59deg);
}


.final-cta__tower::after {
  transform:
    rotate(-59deg);
}


.final-cta__tower--left {
  left:
    50px;
}


.final-cta__tower--right {
  left:
    203px;
}


.final-cta__mountain {
  position:
    absolute;

  width:
    52px;

  height:
    52px;

  border-left:
    1px solid #3268ad;

  border-top:
    1px solid #3268ad;

  transform:
    rotate(45deg);
}


.final-cta__mountain--one {
  left:
    150px;

  top:
    12px;
}


.final-cta__mountain--two {
  left:
    188px;

  top:
    4px;

  width:
    40px;

  height:
    40px;
}


/* =========================
   Main message
   ========================= */

.final-cta__message {
  min-width:
    0;
}


.final-cta__title {
  color:
    rgb(255 255 255 / 0.96);

  font-family:
    'Newsreader Variable',
    Georgia,
    serif;

  font-size:
    clamp(35px, 2.7vw, 45px);

  font-weight:
    500;

  line-height:
    0.95;

  letter-spacing:
    -0.035em;
}


.final-cta__subtitle {
  margin-top:
    8px;

  color:
    rgb(255 255 255 / 0.72);

  font-family:
    var(--font-sans);

  font-size:
    12px;

  line-height:
    1.4;
}


/* =========================
   Buttons
   ========================= */

.final-cta__actions {
  display:
    flex;

  align-items:
    center;

  gap:
    14px;
}


.final-cta__button {
  height:
    54px;

  min-width:
    190px;

  padding-inline:
    24px;

  display:
    inline-flex;

  align-items:
    center;

  justify-content:
    center;

  gap:
    10px;

  border:
    1px solid transparent;

  border-radius:
    7px;

  font-family:
    var(--font-sans);

  font-size:
    13px;

  font-weight:
    650;

  white-space:
    nowrap;
}


.final-cta__button--primary {
  color:
    var(--color-white);

  background:
    #2f6fda;
}


.final-cta__button--primary:hover {
  background:
    #3979df;
}


.final-cta__button--secondary {
  color:
    rgb(255 255 255 / 0.9);

  background:
    rgb(255 255 255 / 0.015);

  border-color:
    rgb(255 255 255 / 0.5);
}


.final-cta__button--secondary:hover {
  background:
    rgb(255 255 255 / 0.06);

  border-color:
    rgb(255 255 255 / 0.62);
}


/* =========================
   Motto
   ========================= */

.final-cta__motto {
  align-self:
    center;

  padding-left:
    10px;
}


.final-cta__motto p {
  color:
    rgb(255 255 255 / 0.58);

  font-family:
    var(--font-sans);

  font-size:
    7px;

  font-weight:
    700;

  line-height:
    1.55;

  letter-spacing:
    0.24em;

  text-transform:
    uppercase;
}


.final-cta__motto span {
  display:
    block;

  width:
    16px;

  height:
    1px;

  margin-top:
    9px;

  background:
    rgb(255 255 255 / 0.45);
}


/* =========================
   Responsive
   ========================= */

@media (max-width: 1150px) {
  .final-cta__inner {
    grid-template-columns:
      220px
      1fr
      auto;

    gap:
      22px;
  }


  .final-cta__motto {
    display:
      none;
  }


  .final-cta__actions {
    flex-direction:
      column;

    gap:
      8px;
  }


  .final-cta__button {
    width:
      190px;

    height:
      45px;
  }
}


@media (max-width: 820px) {
  .final-cta__inner {
    grid-template-columns:
      1fr;

    gap:
      20px;

    padding:
      28px;
  }


  .final-cta__brand {
    display:
      none;
  }


  .final-cta__message {
    text-align:
      center;
  }


  .final-cta__actions {
    flex-direction:
      row;

    justify-content:
      center;
  }
}


@media (max-width: 560px) {
  .final-cta {
    padding-inline:
      10px;
  }


  .final-cta__inner {
    padding:
      26px 20px;
  }


  .final-cta__title {
    font-size:
      36px;
  }


  .final-cta__actions {
    width:
      100%;

    flex-direction:
      column;
  }


  .final-cta__button {
    width:
      100%;
  }
}
</style>
