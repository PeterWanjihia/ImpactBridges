<script setup lang="ts">
import {
  ArrowRight,
  ChevronUp,
  Instagram,
  Linkedin,
  Youtube,
} from 'lucide-vue-next'

const exploreLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Model', to: '/our-model' },
  { label: 'Our Impact', to: '/impact' },
  { label: 'Stories', to: '/stories' },
  { label: 'Get Involved', to: '/get-involved' },
  { label: 'Corporate Partnerships', to: '/corporate-partnerships' },
  { label: 'Transparency', to: '/transparency' },
]

const resourceLinks = [
  { label: 'Partnership Pack', to: '/corporate-partnerships' },
  { label: 'Equipment Guidelines', to: '/donate-equipment' },
  { label: 'Impact Reports', to: '/reports' },
  { label: 'Safeguarding', to: '/safeguarding' },
  { label: 'FAQ', to: '/faqs' },
  { label: 'News & Updates', to: '/stories' },
  { label: 'Contact Us', to: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Use', to: '/terms' },
  { label: 'Safeguarding Policy', to: '/safeguarding' },
  { label: 'Cookie Policy', to: '/privacy' },
]
</script>

<template>
  <footer class="site-footer">
    <!-- =========================
         Top footer
         ========================= -->
    <div class="container site-footer__top">
      <!-- Brand -->
      <div class="footer-brand">
        <NuxtLink
          to="/"
          class="footer-brand__identity"
          aria-label="Impact Bridge home"
        >
          <img
            src="/images/brand/logo-mark.png"
            alt=""
            class="footer-brand__logo"
          >

          <div class="footer-brand__wordmark">
            <strong>IMPACT</strong>
            <strong>BRIDGE</strong>
          </div>
        </NuxtLink>

        <p class="footer-brand__tagline">
          Bridging connectivity.<br>
          Building futures.
        </p>

        <p class="footer-brand__description">
          We bring offline digital learning hubs, teacher
          training and resources to schools without reliable
          internet—so every child can learn, no matter
          where they are.
        </p>

        <div class="footer-brand__socials">
          <a
            href="#"
            class="footer-social"
            aria-label="Impact Bridge on LinkedIn"
          >
            <Linkedin
              :size="17"
              :stroke-width="1.8"
            />
          </a>

          <a
            href="#"
            class="footer-social footer-social--x"
            aria-label="Impact Bridge on X"
          >
            X
          </a>

          <a
            href="#"
            class="footer-social"
            aria-label="Impact Bridge on Instagram"
          >
            <Instagram
              :size="17"
              :stroke-width="1.8"
            />
          </a>

          <a
            href="#"
            class="footer-social"
            aria-label="Impact Bridge on YouTube"
          >
            <Youtube
              :size="18"
              :stroke-width="1.8"
            />
          </a>
        </div>
      </div>

      <!-- Explore -->
      <nav
        class="footer-column"
        aria-label="Explore"
      >
        <h2 class="footer-column__title">
          Explore
        </h2>

        <NuxtLink
          v-for="link in exploreLinks"
          :key="link.label"
          :to="link.to"
          class="footer-column__link"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Resources -->
      <nav
        class="footer-column"
        aria-label="Resources"
      >
        <h2 class="footer-column__title">
          Resources
        </h2>

        <NuxtLink
          v-for="link in resourceLinks"
          :key="link.label"
          :to="link.to"
          class="footer-column__link"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Legal -->
      <nav
        class="footer-column"
        aria-label="Legal"
      >
        <h2 class="footer-column__title">
          Legal
        </h2>

        <NuxtLink
          v-for="link in legalLinks"
          :key="link.label"
          :to="link.to"
          class="footer-column__link"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Newsletter -->
      <div class="footer-newsletter">
        <h2 class="footer-newsletter__title">
          Stay in the loop
        </h2>

        <p class="footer-newsletter__description">
          Get updates on our work, new learning hubs and
          stories from the communities we serve.
        </p>

        <form
          class="footer-newsletter__form"
          @submit.prevent
        >
          <label
            for="footer-email"
            class="sr-only"
          >
            Email address
          </label>

          <input
            id="footer-email"
            type="email"
            name="email"
            autocomplete="email"
            placeholder="Enter your email address"
            class="footer-newsletter__input"
          >

          <button
            type="submit"
            class="footer-newsletter__button"
          >
            Subscribe

            <ArrowRight
              :size="16"
              :stroke-width="2"
              aria-hidden="true"
            />
          </button>
        </form>

        <p class="footer-newsletter__privacy">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>

    <!-- =========================
         Bottom utility bar
         ========================= -->
    <div class="site-footer__bottom">
      <div class="container site-footer__bottom-inner">
        <div class="site-footer__legal-copy">
          <span>
            © 2026 Impact Bridge. All rights reserved.
          </span>

          <span
            class="site-footer__divider"
            aria-hidden="true"
          />

          <span>
            Education. Opportunity. Stronger Communities.
          </span>
        </div>

        <a
          href="#top"
          class="site-footer__back-top"
        >
          <ChevronUp
            :size="16"
            :stroke-width="2"
            aria-hidden="true"
          />

          Back to top
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import '@fontsource-variable/newsreader';

/* =========================
   Footer shell
   ========================= */

.site-footer {
  width: 100%;

  color: var(--color-white);

  background:
    linear-gradient(
      180deg,
      #081d39 0%,
      #071a34 55%,
      #06162d 100%
    );
}


/* =========================
   Top area
   ========================= */

.site-footer__top {
  padding:
    50px 0 42px;

  display: grid;

  grid-template-columns:
    1.45fr
    0.9fr
    0.95fr
    0.82fr
    1.45fr;

  align-items: start;

  gap: 42px;
}


/* =========================
   Brand
   ========================= */

.footer-brand {
  min-width: 0;
}


.footer-brand__identity {
  display: flex;

  align-items: center;

  gap: 11px;

  width: max-content;
}


.footer-brand__logo {
  width: 52px;
  height: 58px;

  object-fit: contain;
}


.footer-brand__wordmark {
  display: flex;

  flex-direction: column;

  color: rgb(255 255 255 / 0.96);

  font-family: var(--font-sans);

  font-size: 22px;

  font-weight: 800;

  line-height: 0.86;

  letter-spacing: -0.045em;
}


.footer-brand__tagline {
  margin-top: 10px;
  margin-left: 63px;

  color: rgb(255 255 255 / 0.78);

  font-family: var(--font-sans);

  font-size: 9px;

  line-height: 1.4;
}


.footer-brand__description {
  max-width: 290px;

  margin-top: 30px;

  color: rgb(255 255 255 / 0.82);

  font-family: var(--font-sans);

  font-size: 11px;

  line-height: 1.62;
}


/* =========================
   Social links
   ========================= */

.footer-brand__socials {
  margin-top: 22px;

  display: flex;

  align-items: center;

  gap: 10px;
}


.footer-social {
  width: 36px;
  height: 36px;

  display: grid;
  place-items: center;

  color: rgb(255 255 255 / 0.92);

  background: rgb(255 255 255 / 0.08);

  border: 1px solid rgb(255 255 255 / 0.04);

  border-radius: 50%;
}


.footer-social:hover {
  background: rgb(255 255 255 / 0.13);
}


.footer-social--x {
  font-family: var(--font-sans);

  font-size: 14px;
  font-weight: 500;
}


/* =========================
   Nav columns
   ========================= */

.footer-column {
  display: flex;

  flex-direction: column;

  align-items: flex-start;

  gap: 10px;
}


.footer-column__title,
.footer-newsletter__title {
  margin-bottom: 4px;

  color: rgb(255 255 255 / 0.96);

  font-family: 'Newsreader Variable', Georgia, serif;

  font-size: 18px;
  font-weight: 500;

  line-height: 1;
}


.footer-column__link {
  color: rgb(255 255 255 / 0.76);

  font-family: var(--font-sans);

  font-size: 10px;

  line-height: 1.3;
}


.footer-column__link:hover {
  color: var(--color-white);
}


/* =========================
   Newsletter
   ========================= */

.footer-newsletter {
  min-width: 0;
}


.footer-newsletter__description {
  max-width: 300px;

  margin-top: 16px;

  color: rgb(255 255 255 / 0.76);

  font-family: var(--font-sans);

  font-size: 10px;

  line-height: 1.55;
}


.footer-newsletter__form {
  margin-top: 18px;

  display: grid;

  gap: 9px;
}


.footer-newsletter__input {
  width: 100%;
  height: 45px;

  padding-inline: 16px;

  color: var(--color-white);

  background: rgb(3 18 39 / 0.3);

  border: 1px solid rgb(182 201 229 / 0.32);

  border-radius: 6px;

  outline: none;

  font-family: var(--font-sans);

  font-size: 10px;
}


.footer-newsletter__input::placeholder {
  color: rgb(255 255 255 / 0.5);
}


.footer-newsletter__input:focus {
  border-color: rgb(106 151 219 / 0.8);
}


.footer-newsletter__button {
  height: 44px;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 12px;

  color: var(--color-white);

  background: #2f6fda;

  border-radius: 6px;

  font-family: var(--font-sans);

  font-size: 11px;
  font-weight: 650;
}


.footer-newsletter__button:hover {
  background: #3979df;
}


.footer-newsletter__privacy {
  margin-top: 11px;

  color: rgb(255 255 255 / 0.57);

  font-family: var(--font-sans);

  font-size: 7.5px;

  line-height: 1.4;
}


/* =========================
   Bottom bar
   ========================= */

.site-footer__bottom {
  border-top: 1px solid rgb(255 255 255 / 0.14);
}


.site-footer__bottom-inner {
  min-height: 68px;

  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 24px;
}


.site-footer__legal-copy {
  display: flex;

  align-items: center;

  gap: 20px;

  color: rgb(255 255 255 / 0.64);

  font-family: var(--font-sans);

  font-size: 8.5px;
}


.site-footer__divider {
  width: 1px;
  height: 15px;

  background: rgb(255 255 255 / 0.34);
}


.site-footer__back-top {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  color: rgb(255 255 255 / 0.82);

  font-family: var(--font-sans);

  font-size: 8.5px;
  font-weight: 600;
}


.site-footer__back-top:hover {
  color: var(--color-white);
}


/* =========================
   Accessibility
   ========================= */

.sr-only {
  position: absolute;

  width: 1px;
  height: 1px;

  padding: 0;
  margin: -1px;

  overflow: hidden;

  clip: rect(0, 0, 0, 0);

  white-space: nowrap;

  border: 0;
}


/* =========================
   Responsive
   ========================= */

@media (max-width: 1100px) {
  .site-footer__top {
    grid-template-columns:
      1.4fr
      repeat(3, 0.8fr);

    gap: 32px;
  }

  .footer-newsletter {
    grid-column: 1 / -1;

    max-width: 520px;

    margin-top: 10px;
  }
}


@media (max-width: 760px) {
  .site-footer__top {
    padding: 42px 0 36px;

    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap: 36px 24px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-newsletter {
    grid-column: 1 / -1;
  }

  .site-footer__bottom-inner {
    padding-block: 18px;

    flex-direction: column;

    align-items: flex-start;
  }

  .site-footer__legal-copy {
    flex-wrap: wrap;
  }
}


@media (max-width: 520px) {
  .site-footer__top {
    grid-template-columns: 1fr;
  }

  .footer-column,
  .footer-newsletter,
  .footer-brand {
    grid-column: 1;
  }

  .footer-brand__description {
    max-width: 100%;
  }

  .site-footer__legal-copy {
    display: grid;

    gap: 7px;
  }

  .site-footer__divider {
    display: none;
  }
}
</style>
