<script setup lang="ts">
import {
  WifiOff,
  Presentation,
  Handshake,
  ChartNoAxesCombined,
} from 'lucide-vue-next'

const principles = [
  {
    title: 'Offline-First Learning',
    description:
      'Quality education that works without the internet.',
    icon: WifiOff,
  },

  {
    title: 'Teacher-Led',
    description:
      'We train and support teachers to lead lasting change.',
    icon: Presentation,
  },

  {
    title: 'Locally Implemented',
    description:
      'Built with communities, for communities.',
    icon: Handshake,
  },

  {
    title: 'Measurable Impact',
    description:
      'We track what matters and share it transparently.',
    icon: ChartNoAxesCombined,
  },
]
</script>


<template>
  <section class="principles-strip">
    <div class="container principles-strip__inner">

      <article
        v-for="principle in principles"
        :key="principle.title"
        class="principle"
      >
        <div class="principle__icon">
          <component
            :is="principle.icon"
            :size="20"
            :stroke-width="1.7"
            aria-hidden="true"
          />
        </div>

        <div class="principle__content">
          <h3 class="principle__title">
            {{ principle.title }}
          </h3>

          <p class="principle__description">
            {{ principle.description }}
          </p>
        </div>
      </article>

    </div>
  </section>
</template>


<style scoped>
.principles-strip {
  width: 100%;

  background:
    #f7f9fc;

  border-bottom:
    1px solid var(--color-border);
}


/* =========================
   Four-column strip
   ========================= */

.principles-strip__inner {
  min-height: 96px;

  display: grid;

  grid-template-columns:
    repeat(4, minmax(0, 1fr));

  align-items: stretch;
}


/* =========================
   Individual principle
   ========================= */

.principle {
  position: relative;

  display: grid;

  grid-template-columns:
    42px 1fr;

  align-items: center;

  column-gap: 13px;

  padding:
    18px 24px;
}


/* =========================
   Dividers
   ========================= */

.principle:not(:last-child)::after {
  content: "";

  position: absolute;

  top: 20px;
  right: 0;
  bottom: 20px;

  width: 1px;

  background:
    rgb(220 227 238 / 0.72);
}


/* =========================
   Icon
   ========================= */

.principle__icon {
  width: 40px;
  height: 40px;

  display: grid;
  place-items: center;

  color:
    var(--color-blue-600);

  background:
    #eaf2ff;

  border:
    1px solid
    #dbe8ff;

  border-radius:
    50%;
}


/* =========================
   Copy
   ========================= */

.principle__content {
  min-width: 0;
}


.principle__title {
  color:
    var(--color-text-primary);

  font-family:
    var(--font-sans);

  font-size: 12px;

  font-weight: 700;

  line-height: 1.2;

  letter-spacing:
    -0.01em;
}


.principle__description {
  max-width: 180px;

  margin-top: 3px;

  color:
    var(--color-text-secondary);

  font-family:
    var(--font-sans);

  font-size: 9px;

  line-height: 1.45;
}


/* =========================
   Responsive
   ========================= */

@media (max-width: 950px) {
  .principles-strip__inner {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }


  .principle:nth-child(2)::after {
    display: none;
  }


  .principle:nth-child(-n + 2) {
    border-bottom:
      1px solid var(--color-border);
  }
}


@media (max-width: 560px) {
  .principles-strip__inner {
    grid-template-columns: 1fr;
  }


  .principle {
    padding:
      16px 8px;

    grid-template-columns:
      38px 1fr;

    column-gap: 12px;
  }


  .principle:not(:last-child) {
    border-bottom:
      1px solid var(--color-border);
  }


  .principle::after {
    display: none;
  }


  .principle__icon {
    width: 36px;
    height: 36px;
  }


  .principle__title {
    font-size: 12px;
  }


  .principle__description {
    max-width: none;

    font-size: 9px;
  }
}
</style>
