<script setup lang="ts">
import {
  FileText,
  Laptop,
  ShieldCheck,
  UsersRound,
  ArrowRight,
} from 'lucide-vue-next'

const resources = [
  {
    title: 'Corporate Partnership Pack',
    description:
      'Learn our approach, impact model and partnership opportunities.',
    linkLabel: 'View the pack',
    to: '/corporate-partnerships',
    icon: FileText,
  },

  {
    title: 'Equipment Donation Guidelines',
    description:
      'See the devices and conditions that ensure meaningful impact.',
    linkLabel: 'View guidelines',
    to: '/donate-equipment',
    icon: Laptop,
  },

  {
    title: 'Governance & Financial Reports',
    description:
      'Transparent reporting and responsible stewardship.',
    linkLabel: 'View reports',
    to: '/reports',
    icon: ShieldCheck,
  },

  {
    title: 'Safeguarding & Complaints',
    description:
      'Our commitment to child safety and accountability.',
    linkLabel: 'Learn more',
    to: '/safeguarding',
    icon: UsersRound,
  },
]
</script>


<template>
  <section class="home-responsibility">

    <div class="container home-responsibility__inner">

      <!-- =========================
           Heading
           ========================= -->

      <header class="home-responsibility__header">

        <h2 class="home-responsibility__title">
          Built for responsible implementation.
        </h2>

        <p class="home-responsibility__subtitle">
          Transparency. Accountability. Greater impact.
        </p>

      </header>


      <!-- =========================
           Resource cards
           ========================= -->

      <div class="home-responsibility__grid">

        <article
          v-for="resource in resources"
          :key="resource.title"
          class="responsibility-card"
        >

          <div class="responsibility-card__icon">

            <component
              :is="resource.icon"
              :size="29"
              :stroke-width="1.65"
              aria-hidden="true"
            />

          </div>


          <div class="responsibility-card__content">

            <h3 class="responsibility-card__title">
              {{ resource.title }}
            </h3>

            <p class="responsibility-card__description">
              {{ resource.description }}
            </p>

            <NuxtLink
              :to="resource.to"
              class="responsibility-card__link"
            >
              {{ resource.linkLabel }}

              <ArrowRight
                :size="13"
                :stroke-width="2"
                aria-hidden="true"
              />
            </NuxtLink>

          </div>

        </article>

      </div>

    </div>

  </section>
</template>


<style scoped>
@import '@fontsource-variable/newsreader';


/* =========================
   Section
   ========================= */

.home-responsibility {
  width: 100%;

  padding:
    17px 0 21px;

  background:
    var(--color-white);

  border-top:
    1px solid var(--color-border);
}


/* =========================
   Heading
   ========================= */

.home-responsibility__header {
  text-align:
    center;

  margin-bottom:
    11px;
}


.home-responsibility__title {
  color:
    var(--color-text-primary);

  font-family:
    'Newsreader Variable',
    Georgia,
    serif;

  font-size:
    clamp(27px, 1.8vw, 32px);

  font-weight:
    500;

  line-height:
    1;

  letter-spacing:
    -0.028em;
}


.home-responsibility__subtitle {
  margin-top:
    5px;

  color:
    var(--color-text-secondary);

  font-family:
    var(--font-sans);

  font-size:
    10px;

  line-height:
    1.4;
}


/* =========================
   Four-card grid
   ========================= */

.home-responsibility__grid {
  display:
    grid;

  grid-template-columns:
    repeat(4, minmax(0, 1fr));

  gap:
    11px;
}


/* =========================
   Card
   ========================= */

.responsibility-card {
  min-height:
    122px;

  padding:
    14px 14px 12px;

  display:
    grid;

  grid-template-columns:
    42px 1fr;

  align-items:
    start;

  column-gap:
    11px;

  background:
    var(--color-white);

  border:
    1px solid #d7e3f5;

  border-radius:
    7px;
}


/* =========================
   Icon
   ========================= */

.responsibility-card__icon {
  width:
    40px;

  height:
    40px;

  display:
    grid;

  place-items:
    center;

  color:
    var(--color-blue-600);
}


/* =========================
   Content
   ========================= */

.responsibility-card__content {
  min-width:
    0;
}


.responsibility-card__title {
  color:
    var(--color-text-primary);

  font-family:
    'Newsreader Variable',
    Georgia,
    serif;

  font-size:
    14px;

  font-weight:
    600;

  line-height:
    1.08;

  letter-spacing:
    -0.015em;
}


.responsibility-card__description {
  max-width:
    180px;

  margin-top:
    5px;

  color:
    var(--color-text-secondary);

  font-family:
    var(--font-sans);

  font-size:
    8.5px;

  line-height:
    1.4;
}


/* =========================
   Link
   ========================= */

.responsibility-card__link {
  margin-top:
    9px;

  display:
    inline-flex;

  align-items:
    center;

  gap:
    7px;

  color:
    var(--color-blue-600);

  font-family:
    var(--font-sans);

  font-size:
    8.5px;

  font-weight:
    700;

  line-height:
    1;
}


.responsibility-card__link:hover {
  text-decoration:
    underline;
}


/* =========================
   Tablet
   ========================= */

@media (max-width: 950px) {
  .home-responsibility__grid {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }
}


/* =========================
   Mobile
   ========================= */

@media (max-width: 560px) {
  .home-responsibility {
    padding:
      22px 0;
  }


  .home-responsibility__title {
    font-size:
      28px;
  }


  .home-responsibility__grid {
    grid-template-columns:
      1fr;

    gap:
      8px;
  }


  .responsibility-card {
    min-height:
      0;

    padding:
      14px;

    grid-template-columns:
      40px 1fr;
  }


  .responsibility-card__description {
    max-width:
      none;
  }
}
</style>
