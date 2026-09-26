<script setup lang="ts">
import { Heart, Menu, X } from 'lucide-vue-next'

const menuOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const route = useRoute()

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Our Model', to: '/our-model' },
  { label: 'Impact', to: '/impact' },
  { label: 'Stories', to: '/stories' },
  { label: 'Corporate Partnerships', to: '/corporate-partnerships' },
  { label: 'Accountability', to: '/transparency' },
]

function closeMenu() {
  menuOpen.value = false
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  },
)

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

function onKeydown(event: KeyboardEvent) {
  if (event.key !== 'Escape' || !menuOpen.value) {
    return
  }

  closeMenu()
  menuButton.value?.focus()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <NuxtLink
        to="/"
        class="site-header__brand"
        aria-label="Impact Bridge home"
      >
        <img
          src="/images/brand/logo-mark.png"
          alt=""
          width="39"
          height="48"
          class="site-header__mark"
        >

        <div class="site-header__wordmark">
          <span>IMPACT</span>
          <span>BRIDGE</span>
        </div>

        <p class="site-header__tagline">
          Bridging connectivity.<br>
          Building futures.
        </p>
      </NuxtLink>

      <nav
        id="site-navigation"
        class="site-header__nav"
        :class="{ 'is-open': menuOpen }"
        aria-label="Main navigation"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="site-header__actions">
        <NuxtLink
          to="/about"
          class="site-header__button site-header__button--outline"
        >
          Who We Are
        </NuxtLink>

        <NuxtLink
          to="/donate"
          class="site-header__button site-header__button--primary"
        >
          <Heart
            :size="15"
            :stroke-width="2"
            aria-hidden="true"
          />

          Donate
        </NuxtLink>

        <button
          ref="menuButton"
          type="button"
          class="site-header__menu"
          :aria-expanded="menuOpen"
          aria-controls="site-navigation"
          @click="toggleMenu"
        >
          <X
            v-if="menuOpen"
            :size="20"
            :stroke-width="2"
            aria-hidden="true"
          />
          <Menu
            v-else
            :size="20"
            :stroke-width="2"
            aria-hidden="true"
          />

          <span class="sr-only">
            {{ menuOpen ? 'Close menu' : 'Open menu' }}
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 40;

  width: 100%;

  background: var(--color-white);

  border-bottom: 1px solid var(--color-border);
}

.site-header__inner {
  position: relative;

  min-height: 72px;

  display: flex;
  align-items: center;
}

.site-header__brand {
  display: flex;
  align-items: center;

  flex-shrink: 0;
}

.site-header__mark {
  width: 39px;
  height: 48px;

  object-fit: contain;

  flex-shrink: 0;
}

.site-header__wordmark {
  margin-left: 8px;

  display: flex;
  flex-direction: column;

  color: var(--color-text-primary);

  font-family: var(--font-sans);

  font-size: var(--text-body);
  font-weight: 800;

  line-height: 0.87;

  letter-spacing: -0.045em;
}

.site-header__tagline {
  margin-left: 14px;

  padding-left: 14px;

  border-left: 1px solid var(--color-border);

  color: var(--color-text-secondary);

  font-family: var(--font-sans);

  font-size: var(--text-caption);
  font-weight: 500;

  line-height: 1.35;

  white-space: nowrap;
}

.site-header__nav {
  margin-left: 32px;

  display: flex;
  align-items: center;

  gap: 18px;

  font-family: var(--font-sans);

  font-size: var(--text-small);
  font-weight: 600;

  line-height: 1;
}

.site-header__nav a {
  color: var(--color-text-primary);

  white-space: nowrap;
}

.site-header__nav a:hover,
.site-header__nav a.router-link-active {
  color: var(--color-blue-600);
}

.site-header__actions {
  margin-left: auto;

  display: flex;
  align-items: center;

  gap: 10px;

  flex-shrink: 0;
}

.site-header__button {
  height: 40px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 7px;

  padding-inline: 16px;

  border: 1px solid transparent;

  border-radius: var(--radius-sm);

  font-family: var(--font-sans);

  font-size: var(--text-small);
  font-weight: 650;

  line-height: 1;

  white-space: nowrap;
}

.site-header__button--outline {
  color: var(--color-text-primary);

  background: var(--color-white);

  border-color: var(--color-blue-600);
}

.site-header__button--outline:hover {
  color: var(--color-blue-600);

  background: var(--color-blue-100);
}

.site-header__button--primary {
  color: var(--color-white);

  background: var(--color-blue-600);
}

.site-header__button--primary:hover {
  background: var(--color-blue-500);
}

.site-header__menu {
  display: none;

  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;

  color: var(--color-text-primary);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-sm);
}

@media (max-width: 1200px) {
  .site-header__tagline {
    display: none;
  }

  .site-header__nav {
    margin-left: 24px;

    gap: 14px;
  }
}

@media (max-width: 1080px) {
  .site-header__inner {
    flex-wrap: wrap;
  }

  .site-header__menu {
    display: inline-flex;
  }

  .site-header__nav {
    display: none;

    order: 3;

    flex: 1 0 100%;

    margin: 0;
    padding: 0 0 12px;

    flex-direction: column;
    align-items: stretch;

    gap: 0;
  }

  .site-header__nav.is-open {
    display: flex;
  }

  .site-header__nav a {
    padding: 14px 0;

    font-size: var(--text-ui);

    border-top: 1px solid var(--color-border);
  }
}

@media (max-width: 720px) {
  .site-header__button--outline {
    display: none;
  }
}

@media (max-width: 640px) {
  .site-header__inner {
    min-height: 64px;
  }

  .site-header__mark {
    width: 34px;
    height: 42px;
  }

  .site-header__wordmark {
    font-size: 15px;
  }

  .site-header__nav a {
    padding-inline: 0;
  }
}
</style>
