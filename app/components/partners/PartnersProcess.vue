<script setup lang="ts">
import {
  ChartNoAxesColumnIncreasing,
  ClipboardCheck,
  FileText,
  Handshake,
  MessageCircle,
  School,
  Search,
  TrendingUp,
} from 'lucide-vue-next'

const steps = [
  {
    title: 'Share your intent',
    description: 'Tell us how you would like to contribute and the impact you want to achieve.',
    icon: MessageCircle,
  },
  {
    title: 'Discovery conversation',
    description: 'We explore alignment, possibilities and the way to partner.',
    icon: Search,
  },
  {
    title: 'Due diligence',
    description: 'We provide the information you need to make an informed decision.',
    icon: ClipboardCheck,
  },
  {
    title: 'Partnership agreement',
    description: 'We agree scope, roles, timelines and reporting together.',
    icon: Handshake,
  },
  {
    title: 'Implementation and deployment',
    description: 'Resources are deployed to schools with teacher support from day one.',
    icon: School,
  },
  {
    title: 'Monitor and measure',
    description: 'We track progress and learning outcomes together.',
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    title: 'Report and communicate',
    description: 'You receive clear, regular reports and impact stories.',
    icon: FileText,
  },
  {
    title: 'Review and grow',
    description: 'We reflect, learn and plan the next chapter together.',
    icon: TrendingUp,
  },
]
</script>

<template>
  <section
    class="partners-process"
    aria-labelledby="partners-process-title"
  >
    <div class="container">
      <h2 id="partners-process-title">
        How a partnership works
      </h2>

      <ol>
        <li
          v-for="(step, index) in steps"
          :key="step.title"
        >
          <span>
            <component
              :is="step.icon"
              :size="18"
              :stroke-width="1.7"
              aria-hidden="true"
            />
          </span>

          <p>
            <strong>{{ index + 1 }}. {{ step.title }}</strong>
            {{ step.description }}
          </p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.partners-process {
  padding: 36px 0;

  background: var(--color-white);
}

.partners-process h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.partners-process ol {
  margin-top: 28px;

  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 22px 16px;
}

.partners-process li {
  min-width: 0;
}

.partners-process li > span {
  width: 46px;
  height: 46px;

  display: grid;
  place-items: center;

  color: var(--color-blue-600);

  background: var(--color-blue-100);

  border-radius: 50%;
}

.partners-process strong {
  display: block;

  margin-top: 12px;

  color: var(--color-text-primary);

  font-size: var(--text-small);
}

.partners-process li p {
  margin-top: 4px;

  font-size: var(--text-caption);

  line-height: 1.45;
}

@media (max-width: 900px) {
  .partners-process ol {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .partners-process ol {
    grid-template-columns: 1fr;
  }
}
</style>
