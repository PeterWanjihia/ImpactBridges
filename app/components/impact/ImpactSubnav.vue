<script setup lang="ts">
const links = [
  { label: 'Overview', href: '#overview', section: 'overview' },
  { label: 'Reach', href: '#reach', section: 'reach' },
  { label: 'Outcomes', href: '#outcomes', section: 'outcomes' },
  { label: 'Sustainability', href: '#sustainability', section: 'sustainability' },
  { label: 'Methodology', href: '#methodology', section: 'methodology' },
  { label: 'Reports', href: '#reports', section: 'reports' },
]

const activeSection = ref('overview')

let observer: IntersectionObserver | null = null

function setActive(section: string) {
  activeSection.value = section
}

function onNavClick(event: MouseEvent, section: string) {
  if (!document.getElementById(section)) {
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
            Math.abs(a.boundingClientRect.top)
            - Math.abs(b.boundingClientRect.top),
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
    class="impact-subnav"
    aria-label="On this page"
  >
    <ul class="container impact-subnav__inner">
      <li
        v-for="link in links"
        :key="link.section"
      >
        <a
          :href="link.href"
          class="impact-subnav__link"
          :class="{
            'impact-subnav__link--active': activeSection === link.section,
          }"
          :aria-current="activeSection === link.section ? 'true' : undefined"
          @click="onNavClick($event, link.section)"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.impact-subnav {
  position: sticky;
  top: 72px;
  z-index: 30;

  width: 100%;

  background: rgb(255 255 255 / 0.96);

  border-bottom: 1px solid var(--color-border);

  backdrop-filter: blur(10px);
}

.impact-subnav__inner {
  height: 48px;

  display: flex;
  align-items: stretch;
  justify-content: center;
}

.impact-subnav__inner li {
  display: flex;
}

.impact-subnav__link {
  position: relative;

  padding-inline: 18px;

  display: inline-flex;
  align-items: center;

  color: var(--color-text-secondary);

  font-family: var(--font-sans);
  font-size: var(--text-caption);
  font-weight: 600;

  line-height: 1;

  white-space: nowrap;
}

.impact-subnav__link:hover,
.impact-subnav__link--active {
  color: var(--color-blue-600);
}

.impact-subnav__link--active {
  font-weight: 700;
}

.impact-subnav__link--active::after {
  content: "";

  position: absolute;

  left: 50%;
  bottom: 8px;

  width: 36px;
  height: 4px;

  background-image: radial-gradient(
    circle,
    var(--color-blue-600) 0.9px,
    transparent 1.1px
  );

  background-size: 5px 4px;
  background-repeat: repeat-x;
  background-position: center;

  transform: translateX(-50%);
}

@media (max-width: 900px) {
  .impact-subnav__inner {
    justify-content: flex-start;

    overflow-x: auto;

    scrollbar-width: none;
  }

  .impact-subnav__inner::-webkit-scrollbar {
    display: none;
  }

  .impact-subnav__inner li:first-child .impact-subnav__link {
    padding-left: 0;
  }
}
</style>
