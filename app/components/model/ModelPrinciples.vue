<script setup lang="ts">
import {
  BookOpen,
  ChartNoAxesCombined,
  RefreshCw,
  Presentation,
  UsersRound,
  WifiOff,
} from 'lucide-vue-next'

const principles = [
  { title: 'Offline-first', icon: WifiOff },
  { title: 'Teacher-led', icon: Presentation },
  { title: 'Curriculum-aligned', icon: BookOpen },
  { title: 'Locally implemented', icon: UsersRound },
  { title: 'Continuously supported', icon: RefreshCw },
  { title: 'Transparently measured', icon: ChartNoAxesCombined },
]
</script>

<template>
  <section class="model-principles">
    <ul class="container model-principles__inner">
      <li
        v-for="principle in principles"
        :key="principle.title"
        class="model-principle"
      >
        <div class="model-principle__icon">
          <component
            :is="principle.icon"
            :size="16"
            :stroke-width="1.8"
            aria-hidden="true"
          />
        </div>

        <p>{{ principle.title }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.model-principles {
  position: relative;

  z-index: 2;

  margin-top: -64px;

  color: var(--color-white);

  background: rgb(0 18 47 / 0.92);
}

.model-principles__inner {
  min-height: 64px;

  display: grid;

  grid-template-columns: repeat(6, minmax(0, 1fr));

  align-items: center;
}

.model-principle {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  padding: 18px 8px;
}

.model-principle__icon {
  width: 28px;
  height: 28px;

  flex-shrink: 0;

  display: grid;
  place-items: center;

  color: var(--color-white);

  border: 1px solid rgb(255 255 255 / 0.42);

  border-radius: 50%;
}

.model-principle p {
  margin: 0;

  color: var(--color-white);

  font-size: var(--text-caption);
  font-weight: 600;

  line-height: 1.2;
}

@media (max-width: 1000px) {
  .model-principles {
    margin-top: 0;
  }

  .model-principles__inner {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .model-principle {
    justify-content: flex-start;
  }
}

@media (max-width: 560px) {
  .model-principles__inner {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
