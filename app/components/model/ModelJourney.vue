<script setup lang="ts">
import {
  School,
  ClipboardCheck,
  Handshake,
  Laptop,
  FileText,
  UsersRound,
  Wrench,
  GraduationCap,
  BarChart3,
  TrendingUp,
  Sprout,
} from 'lucide-vue-next'

const phases = [
  {
    name: 'Prepare',
    subtitle: 'Lay the foundation',
    span: 3,
  },
  {
    name: 'Build',
    subtitle: 'Get ready',
    span: 3,
  },
  {
    name: 'Launch',
    subtitle: 'Put into practice',
    span: 2,
  },
  {
    name: 'Sustain',
    subtitle: 'Create lasting change',
    span: 3,
  },
]

const milestones = [
  {
    label: 'School identified',
    icon: School,
  },
  {
    label: 'Readiness assessed',
    icon: ClipboardCheck,
  },
  {
    label: 'Partnership agreed',
    icon: Handshake,
  },
  {
    label: 'Hardware inspected',
    icon: Laptop,
  },
  {
    label: 'Content prepared',
    icon: FileText,
  },
  {
    label: 'Teachers trained',
    icon: UsersRound,
  },
  {
    label: 'Hub installed',
    icon: Wrench,
  },
  {
    label: 'First lessons supported',
    icon: GraduationCap,
  },
  {
    label: 'Ongoing support',
    icon: BarChart3,
    id: 'support',
  },
  {
    label: 'Monitor & measure',
    icon: TrendingUp,
    id: 'measurement',
  },
  {
    label: 'Improve & grow',
    icon: Sprout,
  },
]
</script>

<template>
  <section
    id="deployment"
    class="model-journey"
    aria-labelledby="model-journey-title"
  >
    <div class="container model-journey__inner">
      <div class="model-journey__intro">
        <div class="model-journey__marker">
          <span class="model-journey__number">
            07
          </span>

          <span
            class="model-journey__marker-line"
            aria-hidden="true"
          />
        </div>

        <h2
          id="model-journey-title"
          class="model-journey__title"
        >
          From preparation<br>
          to long-term<br>
          impact.
        </h2>

        <p class="model-journey__description">
          A proven process we follow
          for every hub.
        </p>
      </div>

      <div class="journey-panel">
        <div class="journey-panel__phases">
          <div
            v-for="phase in phases"
            :key="phase.name"
            class="journey-phase"
            :style="{ gridColumn: `span ${phase.span}` }"
          >
            <strong>{{ phase.name }}</strong>
            <span>{{ phase.subtitle }}</span>
          </div>
        </div>

        <div class="journey-panel__track">
          <div
            class="journey-panel__rail"
            aria-hidden="true"
          />

          <div class="journey-panel__milestones">
            <article
              v-for="(milestone, index) in milestones"
              :id="milestone.id"
              :key="milestone.label"
              class="journey-milestone"
            >
              <div
                class="journey-milestone__node"
                :aria-hidden="true"
              />

              <span class="journey-milestone__index">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <div
                class="journey-milestone__drop"
                aria-hidden="true"
              />

              <div class="journey-milestone__icon">
                <component
                  :is="milestone.icon"
                  :size="18"
                  :stroke-width="1.7"
                  aria-hidden="true"
                />
              </div>

              <h3>{{ milestone.label }}</h3>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.model-journey {
  overflow: hidden;

  scroll-margin-top: 132px;

  background:
    linear-gradient(
      180deg,
      #f7f9fd 0%,
      var(--color-white) 58%,
      #fbfdff 100%
    );

  border-bottom: 1px solid rgb(220 228 240 / 0.8);
}

.model-journey__inner {
  display: grid;
  grid-template-columns: minmax(196px, 228px) minmax(0, 1fr);
  align-items: start;
  gap: 20px 24px;

  padding-top: 22px;
  padding-bottom: 22px;
}

.model-journey__intro {
  padding-top: 4px;
}

.model-journey__marker {
  display: flex;
  align-items: center;
  gap: 10px;
}

.model-journey__number {
  width: 24px;
  height: 24px;

  display: grid;
  place-items: center;

  color: var(--color-blue-600);

  background: var(--color-white);

  border: 1px solid #b8cff5;
  border-radius: 50%;

  font-family: var(--font-sans);
  font-size: 0.6875rem;
  font-weight: 700;
  line-height: 1;
}

.model-journey__marker-line {
  width: 28px;
  height: 1px;

  background: #bdd3f7;
}

.model-journey__title {
  margin-top: 12px;

  color: var(--color-text-primary);

  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 2.1vw, 1.85rem);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -0.032em;
}

.model-journey__description {
  max-width: 28ch;

  margin-top: 12px;

  color: var(--color-text-secondary);

  font-family: var(--font-sans);
  font-size: 0.8125rem;
  line-height: 1.5;
}

.journey-panel {
  position: relative;

  min-width: 0;

  padding: 14px 14px 16px;

  background:
    linear-gradient(
      180deg,
      rgb(255 255 255 / 0.92) 0%,
      #f4f8ff 100%
    );

  border: 1px solid #d7e3f4;
  border-radius: 16px;

  box-shadow:
    0 18px 40px rgb(16 48 110 / 0.06);
}

.journey-panel__phases {
  display: grid;
  grid-template-columns: repeat(11, minmax(0, 1fr));
  gap: 8px;
}

.journey-phase {
  min-width: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 48px;
  padding: 8px 6px;

  text-align: center;

  background:
    linear-gradient(
      180deg,
      #ffffff 0%,
      #eaf2ff 100%
    );

  border: 1px solid rgb(186 208 245 / 0.7);
  border-radius: 999px;
}

.journey-phase strong {
  color: var(--color-blue-600);

  font-family: var(--font-sans);
  font-size: 0.6875rem;
  font-weight: 750;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1;
}

.journey-phase span {
  margin-top: 4px;

  color: var(--color-text-secondary);

  font-family: var(--font-sans);
  font-size: 0.6875rem;
  line-height: 1.2;
}

.journey-panel__track {
  position: relative;

  margin-top: 18px;
}

.journey-panel__rail {
  position: absolute;
  z-index: 0;

  top: 7px;
  right: 4.2%;
  left: 4.2%;

  height: 2px;

  background:
    linear-gradient(
      90deg,
      rgb(47 97 201 / 0.18) 0%,
      var(--color-blue-600) 18%,
      var(--color-blue-600) 82%,
      rgb(47 97 201 / 0.18) 100%
    );

  border-radius: 999px;
}

.journey-panel__milestones {
  position: relative;
  z-index: 1;

  display: grid;
  grid-template-columns: repeat(11, minmax(0, 1fr));
}

.journey-milestone {
  position: relative;

  min-width: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 4px;

  text-align: center;

  scroll-margin-top: 132px;
}

.journey-milestone__node {
  position: relative;
  z-index: 2;

  width: 16px;
  height: 16px;

  background: var(--color-blue-600);

  border: 3px solid var(--color-white);
  border-radius: 50%;

  box-shadow: 0 0 0 1.5px #8fb0e4;
}

.journey-milestone__index {
  margin-top: 6px;

  color: var(--color-blue-600);

  font-family: var(--font-sans);
  font-size: 0.625rem;
  font-weight: 750;
  letter-spacing: 0.04em;
  line-height: 1;
  white-space: nowrap;
}

.journey-milestone__drop {
  width: 1px;
  height: 14px;

  background:
    linear-gradient(
      180deg,
      #8fb0e4 0%,
      rgb(143 176 228 / 0.15) 100%
    );
}

.journey-milestone__icon {
  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  color: #163a86;

  background: var(--color-white);

  border: 1px solid #d4e2f7;
  border-radius: 50%;

  box-shadow: 0 8px 18px rgb(20 59 120 / 0.06);

  transition:
    transform var(--transition-fast),
    border-color var(--transition-fast),
    background var(--transition-fast),
    color var(--transition-fast);
}

.journey-milestone:hover .journey-milestone__icon {
  color: var(--color-white);

  background: var(--color-blue-600);

  border-color: var(--color-blue-600);

  transform: translateY(-2px);
}

.journey-milestone h3 {
  max-width: 9.5ch;

  margin-top: 8px;

  color: var(--color-text-primary);

  font-family: var(--font-sans);
  font-size: 0.6875rem;
  font-weight: 650;
  line-height: 1.3;
}

@media (max-width: 1180px) {
  .model-journey__inner {
    grid-template-columns: minmax(176px, 200px) minmax(0, 1fr);
    gap: 16px 20px;
  }

  .journey-milestone__icon {
    width: 38px;
    height: 38px;
  }
}

@media (max-width: 900px) {
  .model-journey__inner {
    grid-template-columns: 1fr;
    gap: 16px;

    padding-top: 20px;
    padding-bottom: 22px;
  }

  .model-journey__intro {
    max-width: 36rem;
  }

  .model-journey__description {
    max-width: 42ch;
  }

  .journey-panel {
    overflow-x: auto;

    scrollbar-width: thin;
  }

  .journey-panel__phases,
  .journey-panel__milestones {
    min-width: 860px;
  }

  .journey-panel__rail {
    right: auto;
    left: 48px;

    width: 764px;
  }
}

@media (max-width: 580px) {
  .journey-panel {
    overflow: visible;

    padding: 12px;
  }

  .journey-panel__phases,
  .journey-panel__rail {
    display: none;
  }

  .journey-panel__track {
    margin-top: 0;
  }

  .journey-panel__milestones {
    min-width: 0;

    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }

  .journey-milestone {
    display: grid;
    grid-template-columns: 16px 40px minmax(0, 1fr);
    align-items: center;
    column-gap: 12px;

    min-height: 64px;
    padding: 8px 4px;

    text-align: left;
  }

  .journey-milestone__node {
    grid-column: 1;
    grid-row: 1;
  }

  .journey-milestone__index,
  .journey-milestone__drop {
    display: none;
  }

  .journey-milestone__icon {
    grid-column: 2;
    grid-row: 1;

    width: 40px;
    height: 40px;
  }

  .journey-milestone h3 {
    grid-column: 3;
    grid-row: 1;

    max-width: none;

    margin-top: 0;

    font-size: 0.8125rem;
    text-align: left;
  }

  .journey-milestone:not(:last-child)::after {
    content: "";

    position: absolute;

    right: 0;
    bottom: 0;
    left: 28px;

    height: 1px;

    background: rgb(215 227 244 / 0.9);
  }
}
</style>
