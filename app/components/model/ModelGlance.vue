<script setup lang="ts">
import {
  BookOpen,
  UserRound,
  Fingerprint,
} from 'lucide-vue-next'
import { h, type FunctionalComponent } from 'vue'

type IconProps = {
  size?: number | string
  strokeWidth?: number | string
}

function strokeIcon(
  draw: () => ReturnType<typeof h>[],
): FunctionalComponent<IconProps> {
  const Icon: FunctionalComponent<IconProps> = (props) =>
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: props.size ?? 24,
        height: props.size ?? 24,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        'stroke-width': props.strokeWidth ?? 2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'aria-hidden': 'true',
      },
      draw(),
    )

  return Icon
}

const ServerStack = strokeIcon(() => [
  h('rect', { width: '18', height: '5.2', x: '3', y: '2.2', rx: '1.2' }),
  h('rect', { width: '18', height: '5.2', x: '3', y: '9.4', rx: '1.2' }),
  h('rect', { width: '18', height: '5.2', x: '3', y: '16.6', rx: '1.2' }),
  h('line', { x1: '7', x2: '7.01', y1: '4.8', y2: '4.8' }),
  h('line', { x1: '7', x2: '7.01', y1: '12', y2: '12' }),
  h('line', { x1: '7', x2: '7.01', y1: '19.2', y2: '19.2' }),
])

const UsersTwo = strokeIcon(() => [
  h('circle', { cx: '9', cy: '7.2', r: '3.1' }),
  h('path', { d: 'M3.2 19v-1.15A5.15 5.15 0 0 1 8.35 12.7h1.3A5.15 5.15 0 0 1 14.8 17.85V19' }),
  h('circle', { cx: '17.1', cy: '7.4', r: '2.35' }),
  h('path', { d: 'M22 19v-.95a4.1 4.1 0 0 0-3.05-3.95' }),
])

const BoardTeacher = strokeIcon(() => [
  h('rect', { width: '18', height: '13', x: '3', y: '3', rx: '3' }),
  h('circle', { cx: '12', cy: '8.6', r: '2.15' }),
  h('path', { d: 'M8.2 14.6c.55-2 1.9-3.05 3.8-3.05s3.25 1.05 3.8 3.05' }),
])

const UsersThree = strokeIcon(() => [
  h('circle', { cx: '6', cy: '8', r: '2.2' }),
  h('path', { d: 'M2.35 19v-1.05A3.05 3.05 0 0 1 5.4 14.9h.55' }),
  h('circle', { cx: '18', cy: '8', r: '2.2' }),
  h('path', { d: 'M21.65 19v-1.05A3.05 3.05 0 0 0 18.6 14.9h-.55' }),
  h('circle', { cx: '12', cy: '6.4', r: '2.55' }),
  h('path', {
    d: 'M8.15 19v-1.2A3.85 3.85 0 0 1 12 14a3.85 3.85 0 0 1 3.85 3.8V19',
  }),
])

const ChartRising = strokeIcon(() => [
  h('path', { d: 'M4 20V13' }),
  h('path', { d: 'M10 20V9' }),
  h('path', { d: 'M16 20V11' }),
  h('path', { d: 'M13 6.5 19 3.5' }),
  h('path', { d: 'M19 3.5v4.2' }),
  h('path', { d: 'M19 3.5h-4.1' }),
])

const stages = [
  {
    title: 'Appropriate infrastructure',
    description: 'Reliable technology built for real classroom conditions.',
    icon: ServerStack,
  },
  {
    title: 'Curated offline content',
    description: 'Curriculum-relevant resources available without the internet.',
    icon: BookOpen,
  },
  {
    title: 'Prepared teachers',
    description: 'Teachers trained to integrate technology into lessons.',
    icon: UsersTwo,
  },
  {
    title: 'Classroom practice',
    description: 'Interactive teaching that engages and deepens learning.',
    icon: BoardTeacher,
  },
  {
    title: 'Local ownership and support',
    description: 'Champion Teachers and school leaders carry it forward.',
    icon: UsersThree,
  },
  {
    title: 'Measurement and improvement',
    description: 'We monitor, learn and make the model stronger.',
    icon: ChartRising,
  },
]
</script>

<template>
  <section
    id="model-glance"
    class="model-glance"
    aria-labelledby="model-glance-title"
  >
    <div class="container model-glance__inner">
      <div class="model-glance__intro">
        <p class="model-glance__number">01</p>

        <h2
          id="model-glance-title"
          class="model-glance__title"
        >
          The model<br>
          at a glance
        </h2>

        <p class="model-glance__description">
          Every component is useful on its own.
          Real learning happens when they work together.
        </p>
      </div>

      <div class="model-glance__diagram">
        <div
          class="model-glance__rail"
          aria-hidden="true"
        />

        <div
          class="model-glance__collector"
          aria-hidden="true"
        />

        <ol class="model-glance__stages">
          <li
            v-for="stage in stages"
            :key="stage.title"
            class="model-stage"
          >
            <div class="model-stage__icon-wrap">
              <component
                :is="stage.icon"
                :size="26"
                :stroke-width="1.7"
                aria-hidden="true"
              />
            </div>

            <div class="model-stage__copy">
              <h3 class="model-stage__title">
                {{ stage.title }}
              </h3>

              <p class="model-stage__description">
                {{ stage.description }}
              </p>
            </div>
          </li>
        </ol>

        <p class="model-glance__outcome">
          <UserRound
            :size="18"
            :stroke-width="1.7"
            aria-hidden="true"
          />

          <em>A functioning classroom.</em>

          <Fingerprint
            :size="20"
            :stroke-width="1.6"
            aria-hidden="true"
          />
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.model-glance {
  --glance-icon: 64px;
  --glance-wire: #c5d6ee;
  --glance-ink: #2f68d4;

  position: relative;

  scroll-margin-top: 132px;

  background:
    linear-gradient(
      180deg,
      var(--color-white) 0%,
      var(--color-white) 72%,
      #f6f9fe 100%
    );

  border-bottom: 1px solid rgb(221 229 241 / 0.72);
}

.model-glance__inner {
  padding-top: 28px;
  padding-bottom: 28px;

  display: grid;
  grid-template-columns: minmax(168px, 196px) minmax(0, 1fr);
  align-items: start;
  gap: 28px;
}

.model-glance__intro {
  padding-top: 2px;
}

.model-glance__number {
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

.model-glance__title {
  margin-top: 10px;

  color: var(--color-text-primary);

  font-family: var(--font-serif);
  font-size: clamp(1.625rem, 2vw, 1.75rem);
  font-weight: 500;
  line-height: 1.04;
  letter-spacing: -0.032em;
}

.model-glance__description {
  max-width: 24ch;

  margin-top: 12px;

  color: var(--color-text-secondary);

  font-family: var(--font-sans);
  font-size: 0.6875rem;
  line-height: 1.55;
}

.model-glance__diagram {
  position: relative;

  min-width: 0;

  padding-bottom: 72px;
}

.model-glance__rail {
  position: absolute;
  z-index: 0;

  top: calc(var(--glance-icon) / 2);
  left: calc(100% / 12);
  right: calc(100% / 12);

  height: 0;

  border-top: 1.5px dotted var(--glance-wire);
}

.model-glance__collector {
  position: absolute;
  z-index: 0;

  top: calc(var(--glance-icon) / 2);
  right: calc(100% / 12);
  bottom: 20px;
  left: calc(100% / 12);

  pointer-events: none;

  border: 1.5px dotted var(--glance-wire);
  border-top: 0;
  border-radius: 0 0 22px 22px;
}

.model-glance__stages {
  position: relative;
  z-index: 1;

  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  align-items: start;

  margin: 0;
  padding: 0;

  list-style: none;
}

.model-stage {
  min-width: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
}

.model-stage__icon-wrap {
  position: relative;
  z-index: 2;

  width: var(--glance-icon);
  height: var(--glance-icon);

  display: grid;
  place-items: center;

  color: var(--glance-ink);

  background: var(--color-white);

  border: 1.5px solid #c8d7ee;
  border-radius: 50%;
}

.model-stage__copy {
  position: relative;
  z-index: 1;

  width: 100%;

  margin-top: 8px;
  padding-bottom: 2px;

  background: var(--color-white);
}

.model-stage__title {
  width: 100%;
  max-width: 9.2em;

  min-height: 2.55em;

  margin-inline: auto;

  color: var(--color-text-primary);

  font-family: var(--font-sans);
  font-size: 0.6875rem;
  font-weight: 700;
  line-height: 1.3;
}

.model-stage__description {
  max-width: 16.5em;

  margin-top: 4px;
  margin-inline: auto;

  color: var(--color-text-secondary);

  font-family: var(--font-sans);
  font-size: 0.625rem;
  font-weight: 400;
  line-height: 1.45;
}

.model-glance__outcome {
  position: absolute;
  z-index: 4;

  left: 50%;
  bottom: 0;

  width: min(20.5rem, calc(100% - 40px));
  min-width: 0;

  padding: 8px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  color: var(--glance-ink);

  background: var(--color-white);

  border: 1px solid #d3dff1;
  border-radius: var(--radius-round);

  transform: translateX(-50%);
}

.model-glance__outcome em {
  flex: 1;

  color: var(--color-text-primary);

  font-family: var(--font-serif);
  font-size: 0.9375rem;
  font-style: italic;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.02em;

  text-align: center;
  white-space: nowrap;
}

@media (max-width: 1180px) {
  .model-glance {
    --glance-icon: 56px;
  }

  .model-glance__inner {
    grid-template-columns: minmax(156px, 176px) minmax(0, 1fr);
    gap: 20px;
  }

  .model-glance__outcome {
    width: min(19rem, calc(100% - 32px));
  }
}

@media (max-width: 900px) {
  .model-glance__inner {
    padding-top: 28px;
    padding-bottom: 32px;

    grid-template-columns: 1fr;
    gap: 24px;
  }

  .model-glance__intro {
    max-width: 32rem;
  }

  .model-glance__description {
    max-width: 36ch;
  }

  .model-glance__diagram {
    padding-bottom: 0;
  }

  .model-glance__rail,
  .model-glance__collector {
    display: none;
  }

  .model-glance__stages {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px 16px;
  }

  .model-glance {
    --glance-icon: 60px;
  }

  .model-stage__copy {
    background: transparent;
  }

  .model-glance__outcome {
    position: relative;

    left: auto;
    bottom: auto;

    width: min(100%, 22.5rem);
    min-width: 0;

    margin: 24px auto 0;

    transform: none;
  }
}

@media (max-width: 580px) {
  .model-glance__inner {
    padding-top: 24px;
    padding-bottom: 28px;
    gap: 20px;
  }

  .model-glance__stages {
    gap: 0;
    grid-template-columns: 1fr;
  }

  .model-glance__stages::before {
    content: "";

    position: absolute;
    z-index: 0;

    top: calc(var(--glance-icon) / 2);
    bottom: 58px;
    left: calc(var(--glance-icon) / 2);

    width: 0;

    border-left: 1.5px dotted var(--glance-wire);
  }

  .model-stage {
    position: relative;
    z-index: 1;

    min-height: 84px;

    display: grid;
    grid-template-columns: var(--glance-icon) 1fr;
    column-gap: 14px;
    align-items: center;

    text-align: left;
  }

  .model-stage__icon-wrap {
    grid-column: 1;
  }

  .model-stage__copy {
    grid-column: 2;

    margin-top: 0;
    padding-bottom: 0;

    text-align: left;
  }

  .model-stage__title {
    min-height: 0;
    max-width: none;
    margin-inline: 0;

    text-align: left;
  }

  .model-stage__description {
    max-width: 38ch;
    margin-top: 4px;
    margin-inline: 0;

    text-align: left;
  }

  .model-glance__outcome {
    width: 100%;

    margin-top: 16px;
    padding-inline: 14px;
  }

  .model-glance__outcome em {
    font-size: 0.875rem;

    white-space: normal;
  }
}
</style>
