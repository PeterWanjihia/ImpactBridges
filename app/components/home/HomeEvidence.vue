<script setup lang="ts">
import {
  UsersRound,
  UserRound,
  School,
  ChartNoAxesColumnIncreasing,
  Heart,
  ArrowRight,
} from 'lucide-vue-next'

const stats = [
  {
    value: '52',
    label: 'learners enrolled',
    icon: UsersRound,
  },

  {
    value: '2',
    label: 'teachers trained',
    icon: UserRound,
  },

  {
    value: '1',
    label: 'learning hub operating',
    icon: School,
  },

  {
    value: '85%',
    label: 'improved assessment scores',
    icon: ChartNoAxesColumnIncreasing,
  },

  {
    value: '90%',
    label: 'reported greater confidence',
    icon: Heart,
  },
]
</script>


<template>
  <section class="home-evidence">
    <div class="container home-evidence__inner">

      <!-- =========================
           Left: evidence
           ========================= -->

      <div class="home-evidence__left">

        <h2 class="home-evidence__title">
          Early evidence. Real lives.
        </h2>

        <div class="evidence-panel">

          <p class="evidence-panel__period">
            Pilot period: Jan–June 2026 · Kiryandongo District
          </p>

          <div class="evidence-panel__stats">

            <article
              v-for="stat in stats"
              :key="stat.label"
              class="evidence-stat"
            >
              <strong class="evidence-stat__value">
                {{ stat.value }}
              </strong>

              <p class="evidence-stat__label">
                {{ stat.label }}
              </p>

              <component
                :is="stat.icon"
                class="evidence-stat__icon"
                :size="20"
                :stroke-width="1.7"
                aria-hidden="true"
              />
            </article>

          </div>

          <NuxtLink
            to="/impact"
            class="evidence-panel__link"
          >
            How we measure impact

            <ArrowRight
              :size="14"
              :stroke-width="2"
              aria-hidden="true"
            />
          </NuxtLink>

        </div>

      </div>


      <!-- =========================
           Right: student story
           ========================= -->

      <article class="student-story">

        <img
          src="/images/home/evidence-student.png"
          alt="Student in a classroom"
          class="student-story__image"
        >

        <div
          class="student-story__overlay"
          aria-hidden="true"
        />

        <div class="student-story__content">

          <blockquote class="student-story__quote">
            “I feel like I can now<br>
            finish my schooling.”
          </blockquote>

          <p class="student-story__person">
            — Namulava, P7 Student
          </p>

          <p class="student-story__description">
            Namulava is part of our pilot at Bwikya Primary School.
            With offline lessons and a supportive teacher, she’s
            gaining the confidence to learn and lead.
          </p>

          <NuxtLink
            to="/stories/namulava"
            class="student-story__link"
          >
            Read Namulava’s story

            <ArrowRight
              :size="14"
              :stroke-width="2"
              aria-hidden="true"
            />
          </NuxtLink>

        </div>

      </article>

    </div>
  </section>
</template>


<style scoped>
@import '@fontsource-variable/newsreader';


/* =========================
   Section
   ========================= */

.home-evidence {
  width: 100%;

  padding:
    28px 0 26px;

  background:
    var(--color-white);
}


.home-evidence__inner {
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    minmax(0, 1fr);

  align-items: end;

  gap: 20px;
}


/* =========================
   Left
   ========================= */

.home-evidence__left {
  min-width: 0;
}


.home-evidence__title {
  margin-bottom: 10px;

  color:
    var(--color-text-primary);

  font-family:
    'Newsreader Variable',
    Georgia,
    serif;

  font-size:
    clamp(30px, 2.3vw, 39px);

  font-weight:
    500;

  line-height:
    1;

  letter-spacing:
    -0.03em;
}


/* =========================
   Evidence panel
   ========================= */

.evidence-panel {
  padding:
    14px 16px 13px;

  background:
    #eff5fd;

  border-radius:
    9px;
}


.evidence-panel__period {
  margin-bottom:
    10px;

  color:
    var(--color-blue-600);

  font-family:
    var(--font-sans);

  font-size:
    9px;

  font-weight:
    650;

  line-height:
    1.3;

  letter-spacing:
    0.01em;

  text-transform:
    uppercase;
}


/* =========================
   Evidence stats
   ========================= */

.evidence-panel__stats {
  display: grid;

  grid-template-columns:
    repeat(5, minmax(0, 1fr));

  gap:
    6px;
}


.evidence-stat {
  min-height:
    88px;

  padding:
    9px 6px 8px;

  display: flex;

  flex-direction:
    column;

  align-items:
    center;

  text-align:
    center;

  background:
    var(--color-white);

  border:
    1px solid #d9e5f8;

  border-radius:
    7px;
}


.evidence-stat__value {
  color:
    var(--color-blue-600);

  font-family:
    'Newsreader Variable',
    Georgia,
    serif;

  font-size:
    25px;

  font-weight:
    600;

  line-height:
    1;
}


.evidence-stat__label {
  max-width:
    72px;

  margin-top:
    4px;

  color:
    var(--color-text-primary);

  font-family:
    var(--font-sans);

  font-size:
    7.5px;

  line-height:
    1.3;
}


.evidence-stat__icon {
  margin-top:
    auto;

  color:
    var(--color-blue-600);
}


/* =========================
   Evidence link
   ========================= */

.evidence-panel__link {
  width:
    max-content;

  margin-top:
    10px;

  display:
    inline-flex;

  align-items:
    center;

  gap:
    8px;

  color:
    var(--color-blue-600);

  font-family:
    var(--font-sans);

  font-size:
    9px;

  font-weight:
    650;
}


.evidence-panel__link:hover {
  text-decoration:
    underline;
}


/* =========================
   Student story
   ========================= */

.student-story {
  position:
    relative;

  height:
    222px;

  overflow:
    hidden;

  border-radius:
    9px;

  background:
    var(--color-navy-950);
}


/* =========================
   Story photograph
   ========================= */

.student-story__image {
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

  object-position:
    72% center;
}


/* =========================
   Dark photographic overlay
   ========================= */

.student-story__overlay {
  position:
    absolute;

  inset:
    0;

  background:
    linear-gradient(
      90deg,
      rgb(0 18 47 / 0.98) 0%,
      rgb(0 18 47 / 0.94) 30%,
      rgb(0 18 47 / 0.72) 47%,
      rgb(0 18 47 / 0.22) 68%,
      transparent 82%
    );
}


/* =========================
   Story content
   ========================= */

.student-story__content {
  position:
    relative;

  z-index:
    2;

  width:
    53%;

  padding:
    23px 0 18px 23px;

  color:
    var(--color-white);
}


.student-story__quote {
  color:
    var(--color-white);

  font-family:
    'Newsreader Variable',
    Georgia,
    serif;

  font-size:
    25px;

  font-weight:
    500;

  line-height:
    1.02;

  letter-spacing:
    -0.025em;
}


.student-story__person {
  margin-top:
    9px;

  color:
    rgb(255 255 255 / 0.95);

  font-family:
    var(--font-sans);

  font-size:
    8.5px;

  font-weight:
    650;
}


.student-story__description {
  max-width:
    250px;

  margin-top:
    14px;

  color:
    rgb(255 255 255 / 0.88);

  font-family:
    var(--font-sans);

  font-size:
    8px;

  line-height:
    1.5;
}


.student-story__link {
  margin-top:
    12px;

  display:
    inline-flex;

  align-items:
    center;

  gap:
    8px;

  color:
    var(--color-white);

  font-family:
    var(--font-sans);

  font-size:
    8.5px;

  font-weight:
    650;
}


.student-story__link:hover {
  text-decoration:
    underline;
}


/* =========================
   Tablet
   ========================= */

@media (max-width: 960px) {
  .home-evidence__inner {
    grid-template-columns:
      1fr;

    gap:
      18px;
  }


  .student-story {
    height:
      250px;
  }
}


/* =========================
   Smaller tablet
   ========================= */

@media (max-width: 700px) {
  .evidence-panel__stats {
    grid-template-columns:
      repeat(3, minmax(0, 1fr));
  }


  .evidence-stat {
    min-height:
      92px;
  }
}


/* =========================
   Mobile
   ========================= */

@media (max-width: 520px) {
  .home-evidence {
    padding:
      24px 0;
  }


  .home-evidence__title {
    font-size:
      30px;
  }


  .evidence-panel {
    padding:
      14px;
  }


  .evidence-panel__stats {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }


  .student-story {
    height:
      330px;
  }


  .student-story__image {
    object-position:
      64% center;
  }


  .student-story__overlay {
    background:
      linear-gradient(
        90deg,
        rgb(0 18 47 / 0.96) 0%,
        rgb(0 18 47 / 0.82) 58%,
        rgb(0 18 47 / 0.3) 100%
      );
  }


  .student-story__content {
    width:
      72%;

    padding:
      24px 0 20px 20px;
  }


  .student-story__quote {
    font-size:
      24px;
  }
}
</style>
