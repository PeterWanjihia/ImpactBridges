<script setup lang="ts">
import {
  ArrowRight,
  Briefcase,
  Heart,
  Laptop,
  School,
  UsersRound,
} from 'lucide-vue-next'

const ways = [
  {
    title: 'Fund complete learning hubs',
    description: 'Sponsor end-to-end hub deployments, including technology, content, training and support.',
    to: '/our-model',
    icon: School,
    tone: 'blue',
  },
  {
    title: 'Support teacher development',
    description: 'Invest in Champion Teacher programmes, training materials and ongoing professional support.',
    to: '/our-model#teachers',
    icon: UsersRound,
    tone: 'teal',
  },
  {
    title: 'Donate suitable technology',
    description: 'Provide laptops, projectors or other equipment that meets our suitability criteria.',
    to: '/donate-equipment',
    icon: Laptop,
    tone: 'blue',
  },
  {
    title: 'Contribute expertise and services',
    description: 'Share professional skills in tech, content, mentoring, logistics or strategy.',
    to: '/corporate-partnerships#enquiry',
    icon: Briefcase,
    tone: 'warm',
  },
  {
    title: 'Mobilise your employees',
    description: 'Inspire employees through volunteering, fundraising or matched-giving programmes.',
    to: '/corporate-partnerships#enquiry',
    icon: Heart,
    tone: 'rose',
  },
]
</script>

<template>
  <section
    id="ways"
    class="partners-ways"
    aria-labelledby="partners-ways-title"
  >
    <div class="container">
      <header>
        <h2 id="partners-ways-title">
          Ways to partner
        </h2>

        <p>
          Choose how your organisation can create lasting change with Impact Bridge.
        </p>
      </header>

      <ul>
        <li
          v-for="way in ways"
          :key="way.title"
        >
          <article>
            <span :class="`tone-${way.tone}`">
              <component
                :is="way.icon"
                :size="20"
                :stroke-width="1.7"
                aria-hidden="true"
              />
            </span>

            <h3>{{ way.title }}</h3>

            <p>{{ way.description }}</p>

            <NuxtLink :to="way.to">
              Learn more

              <ArrowRight
                :size="14"
                :stroke-width="2"
                aria-hidden="true"
              />
            </NuxtLink>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.partners-ways {
  padding: 48px 0 24px;

  scroll-margin-top: 88px;

  background: var(--color-white);
}

.partners-ways header p {
  margin-top: 8px;

  font-size: var(--text-lede);
}

.partners-ways h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.partners-ways ul {
  margin-top: 24px;

  display: grid;

  grid-template-columns: repeat(5, minmax(0, 1fr));

  gap: 14px;
}

.partners-ways article {
  height: 100%;

  padding: 18px 16px 20px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.partners-ways article > span {
  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  color: var(--color-white);

  border-radius: 50%;
}

.tone-blue {
  background: var(--color-blue-600);
}

.tone-teal {
  background: var(--color-teal-600);
}

.tone-warm {
  background: var(--color-warning);
}

.tone-rose {
  background: #c74646;
}

.partners-ways h3 {
  margin-top: 14px;

  font-family: var(--font-sans);
  font-size: 1.02rem;
  font-weight: 700;

  line-height: 1.3;

  letter-spacing: 0;
}

.partners-ways article > p {
  margin-top: 8px;

  font-size: var(--text-small);

  line-height: 1.45;
}

.partners-ways a {
  margin-top: 14px;

  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-size: var(--text-small);
  font-weight: 650;
}

.partners-ways a:hover {
  text-decoration: underline;
}

@media (max-width: 1100px) {
  .partners-ways ul {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .partners-ways ul {
    grid-template-columns: 1fr;
  }
}
</style>
