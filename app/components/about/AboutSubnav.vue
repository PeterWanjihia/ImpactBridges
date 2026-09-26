<script setup lang="ts">
const links = [
  {
    label: 'Our Story',
    href: '#story',
    section: 'story',
  },
  {
    label: 'The Journey',
    href: '#journey',
    section: 'journey',
  },
  {
    label: 'The Trouble',
    href: '#reality',
    section: 'reality',
  },
  {
    label: 'Our Beliefs',
    href: '#beliefs',
    section: 'beliefs',
  },
  {
    label: 'The Next Chapter',
    href: '#next',
    section: 'next',
  },
]

const activeSection = ref('story')

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
    class="about-subnav"
    aria-label="On this page"
  >
    <ul class="container about-subnav__inner">
      <li
        v-for="link in links"
        :key="link.section"
      >
        <a
          :href="link.href"
          class="about-subnav__link"
          :class="{
            'about-subnav__link--active':
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
.about-subnav {
  position: sticky;

  top: 72px;

  z-index: 30;

  width: 100%;

  background: rgb(255 255 255 / 0.96);

  border-bottom: 1px solid var(--color-border);

  backdrop-filter: blur(10px);
}

.about-subnav__inner {
  height: 48px;

  display: flex;
  align-items: stretch;
  justify-content: center;
}

.about-subnav__inner li {
  display: flex;
}

.about-subnav__link {
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

  white-space: nowrap;
}

.about-subnav__link:hover {
  color: var(--color-blue-600);
}

.about-subnav__link--active {
  color: var(--color-blue-600);

  font-weight: 700;
}

.about-subnav__link--active::after {
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
  .about-subnav__inner {
    justify-content: flex-start;

    overflow-x: auto;

    scrollbar-width: none;

    -webkit-overflow-scrolling: touch;
  }

  .about-subnav__inner::-webkit-scrollbar {
    display: none;
  }

  .about-subnav__link {
    padding-inline: 16px;
  }

  .about-subnav__inner li:first-child .about-subnav__link {
    padding-left: 0;
  }
}

@media (max-width: 640px) {
  .about-subnav__inner {
    height: 46px;
  }
}
</style>
