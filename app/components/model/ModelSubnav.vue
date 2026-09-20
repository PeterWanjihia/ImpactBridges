<script setup lang="ts">
const links = [
  {
    label: 'Overview',
    href: '#overview',
    section: 'overview',
  },
  {
    label: 'Inside the Hub',
    href: '#hub',
    section: 'hub',
  },
  {
    label: 'Teacher Development',
    href: '#teachers',
    section: 'teachers',
  },
  {
    label: 'Deployment',
    href: '#deployment',
    section: 'deployment',
  },
  {
    label: 'Support',
    href: '#support',
    section: 'support',
  },
  {
    label: 'Measurement',
    href: '#measurement',
    section: 'measurement',
  },
]

const activeSection = ref('overview')

let observer: IntersectionObserver | null = null

function setActive(section: string) {
  activeSection.value = section
}

function onNavClick(event: MouseEvent, section: string) {
  const target = document.getElementById(section)

  if (!target) {
    event.preventDefault()
    return
  }

  setActive(section)
}

onMounted(() => {
  const sections = links
    .map(link => document.getElementById(link.section))
    .filter((section): section is HTMLElement => Boolean(section))

  if (!sections.length) {
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort(
          (a, b) =>
            Math.abs(a.boundingClientRect.top) -
            Math.abs(b.boundingClientRect.top),
        )

      if (visible[0]) {
        activeSection.value = visible[0].target.id
      }
    },
    {
      rootMargin: '-120px 0px -65% 0px',
      threshold: 0,
    },
  )

  sections.forEach(section => observer?.observe(section))
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <nav
    class="model-subnav"
    aria-label="On this page"
  >
    <ul class="container model-subnav__inner">
      <li
        v-for="link in links"
        :key="link.section"
      >
        <a
          :href="link.href"
          class="model-subnav__link"
          :class="{
            'model-subnav__link--active':
              activeSection === link.section,
          }"
          :aria-current="
            activeSection === link.section
              ? 'true'
              : undefined
          "
          @click="onNavClick($event, link.section)"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.model-subnav {
  position: sticky;

  top: 72px;

  z-index: 30;

  width: 100%;

  background: rgb(255 255 255 / 0.96);

  border-bottom: 1px solid var(--color-border);

  backdrop-filter: blur(10px);
}

.model-subnav__inner {
  height: 48px;

  display: flex;
  align-items: stretch;
  justify-content: center;
}

.model-subnav__inner li {
  display: flex;
}

.model-subnav__link {
  position: relative;

  padding-inline: 22px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: var(--color-text-secondary);

  font-family: var(--font-sans);
  font-size: var(--text-caption);
  font-weight: 600;

  line-height: 1;

  letter-spacing: 0.01em;

  white-space: nowrap;
}

.model-subnav__link:hover {
  color: var(--color-blue-600);
}

.model-subnav__link--active {
  color: var(--color-blue-600);

  font-weight: 700;
}

.model-subnav__link--active::after {
  content: "";

  position: absolute;

  left: 50%;
  bottom: 8px;

  width: 36px;
  height: 4px;

  background-image:
    radial-gradient(
      circle,
      var(--color-blue-600) 0.9px,
      transparent 1.1px
    );

  background-size: 5px 4px;

  background-repeat: repeat-x;

  background-position: center;

  transform: translateX(-50%);
}

@media (max-width: 1000px) {
  .model-subnav__inner {
    justify-content: flex-start;

    overflow-x: auto;

    scrollbar-width: none;

    -webkit-overflow-scrolling: touch;
  }

  .model-subnav__inner::-webkit-scrollbar {
    display: none;
  }

  .model-subnav__link {
    padding-inline: 16px;
  }

  .model-subnav__inner li:first-child .model-subnav__link {
    padding-left: 0;
  }
}

@media (max-width: 640px) {
  .model-subnav {
    top: 72px;
  }

  .model-subnav__inner {
    height: 46px;
  }
}
</style>
