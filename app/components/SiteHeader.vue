<script setup lang="ts">
import { Heart } from 'lucide-vue-next'
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">

      <!-- Brand -->
      <NuxtLink
        to="/"
        class="site-header__brand"
        aria-label="Impact Bridge home"
      >
        <img
          src="/images/brand/logo-mark.png"
          alt=""
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


      <!-- Navigation -->
      <nav
        class="site-header__nav"
        aria-label="Main navigation"
      >
        <NuxtLink to="/about">
          About
        </NuxtLink>

        <NuxtLink to="/our-model">
          Our Model
        </NuxtLink>

        <NuxtLink to="/impact">
          Impact
        </NuxtLink>

        <NuxtLink to="/stories">
          Stories
        </NuxtLink>

        <NuxtLink to="/get-involved">
          Get Involved
        </NuxtLink>

        <NuxtLink to="/corporate-partnerships">
          Corporate Partnerships
        </NuxtLink>

        <NuxtLink to="/transparency">
          Transparency
        </NuxtLink>
      </nav>


      <!-- Actions -->
      <div class="site-header__actions">

        <NuxtLink
          to="/about"
          class="
            site-header__button
            site-header__button--outline
          "
        >
          Who We Are
        </NuxtLink>

        <NuxtLink
          to="/donate"
          class="
            site-header__button
            site-header__button--primary
          "
        >
          <Heart
            :size="15"
            :stroke-width="2"
            aria-hidden="true"
          />

          Donate
        </NuxtLink>

      </div>
    </div>
  </header>
</template>


<style scoped>
.site-header {
  width: 100%;

  background: var(--color-white);

  border-bottom: 1px solid var(--color-border);
}


/* =========================
   Main row
   ========================= */

.site-header__inner {
  height: 72px;

  display: flex;
  align-items: center;
}


/* =========================
   Brand
   ========================= */

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

  font-size: 16px;
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

  font-size: 8px;
  font-weight: 500;

  line-height: 1.35;

  white-space: nowrap;
}


/* =========================
   Navigation
   ========================= */

.site-header__nav {
  margin-left: 46px;

  display: flex;
  align-items: center;

  gap: 22px;

  font-family: var(--font-sans);

  font-size: 11px;
  font-weight: 600;

  line-height: 1;
}


.site-header__nav a {
  color: var(--color-text-primary);

  white-space: nowrap;
}


.site-header__nav a:hover {
  color: var(--color-blue-600);
}


.site-header__nav a.router-link-active {
  color: var(--color-blue-600);
}


/* =========================
   Actions
   ========================= */

.site-header__actions {
  margin-left: auto;

  display: flex;
  align-items: center;

  gap: 10px;

  flex-shrink: 0;
}


.site-header__button {
  height: 38px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 7px;

  padding-inline: 17px;

  border: 1px solid transparent;

  border-radius: 6px;

  font-family: var(--font-sans);

  font-size: 11px;
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


/* =========================
   Responsive
   ========================= */

@media (max-width: 1200px) {
  .site-header__tagline {
    display: none;
  }

  .site-header__nav {
    margin-left: 36px;

    gap: 17px;
  }
}


@media (max-width: 1030px) {
  .site-header__nav {
    display: none;
  }

  .site-header__actions {
    margin-left: auto;
  }
}


@media (max-width: 640px) {
  .site-header__inner {
    height: 64px;
  }

  .site-header__mark {
    width: 34px;
    height: 42px;
  }

  .site-header__wordmark {
    font-size: 15px;
  }

  .site-header__actions {
    display: none;
  }
}
</style>
