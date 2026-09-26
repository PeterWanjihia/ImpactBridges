<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const trustees = [
  {
    name: 'Sarah Achieng',
    role: 'Chair of Trustees',
    bio: 'Non-executive director with 20+ years in education and social impact.',
    more: 'Sarah leads the board’s oversight of mission, safeguarding and the use of funds.',
    initials: 'SA',
  },
  {
    name: 'Daniel Okello',
    role: 'Trustee, Finance and Audit',
    bio: 'Chartered accountant with extensive experience in finance and governance.',
    more: 'Daniel reviews the accounts, the audit trail and the questions a donor is entitled to ask.',
    initials: 'DO',
  },
  {
    name: 'Ruth Nankya',
    role: 'Trustee, Education and Community Leadership',
    bio: 'Education leader and advocate for equitable learning opportunities.',
    more: 'Ruth keeps the classroom, the teacher and the community at the centre of board decisions.',
    initials: 'RN',
  },
  {
    name: 'Michael Ssemakula',
    role: 'Trustee, Safeguarding and Governance',
    bio: 'Governance professional focused on safeguarding and risk management.',
    more: 'Michael is responsible for the standard of safeguarding practice the board expects.',
    initials: 'MS',
  },
]

const open = ref<string | null>(null)
</script>

<template>
  <section
    id="trustees"
    class="account-trustees"
    aria-labelledby="account-trustees-title"
  >
    <div class="container">
      <header>
        <div>
          <h2 id="account-trustees-title">
            Our trustees
          </h2>

          <p>
            Our board of trustees provides oversight, guidance and stewardship to ensure we deliver on our mission with integrity and impact. They bring a range of expertise and lived experience to support strong governance and accountability.
          </p>
        </div>

        <a href="#trustees">
          Meet all trustees

          <ArrowRight
            :size="14"
            :stroke-width="2"
            aria-hidden="true"
          />
        </a>
      </header>

      <ul>
        <li
          v-for="trustee in trustees"
          :key="trustee.name"
        >
          <article>
            <p
              class="account-trustees__avatar"
              aria-hidden="true"
            >
              {{ trustee.initials }}
            </p>

            <h3>{{ trustee.name }}</h3>

            <p class="account-trustees__role">
              {{ trustee.role }}
            </p>

            <p>{{ trustee.bio }}</p>

            <p v-if="open === trustee.name">
              {{ trustee.more }}
            </p>

            <button
              type="button"
              :aria-expanded="open === trustee.name"
              @click="open = open === trustee.name ? null : trustee.name"
            >
              {{ open === trustee.name ? 'Hide profile' : 'Read profile' }}

              <ArrowRight
                :size="14"
                :stroke-width="2"
                aria-hidden="true"
              />
            </button>
          </article>
        </li>
      </ul>

      <p class="account-trustees__note">
        Portrait photographs will be added when the board approves them for this page.
      </p>
    </div>
  </section>
</template>

<style scoped>
.account-trustees {
  padding: 36px 0;

  scroll-margin-top: 88px;

  background: var(--color-white);
}

.account-trustees header {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  justify-content: space-between;

  gap: 12px;
}

.account-trustees h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.account-trustees header p {
  max-width: 42rem;

  margin-top: 8px;
}

.account-trustees header a,
.account-trustees button {
  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-family: var(--font-sans);
  font-size: var(--text-small);
  font-weight: 650;
}

.account-trustees header a:hover,
.account-trustees button:hover {
  text-decoration: underline;
}

.account-trustees ul {
  margin-top: 22px;

  display: grid;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 14px;
}

.account-trustees article {
  height: 100%;

  padding: 16px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-lg);
}

.account-trustees__avatar {
  width: 100%;
  height: 160px;

  display: grid;
  place-items: center;

  color: var(--color-blue-600);

  background: var(--color-blue-100);

  border-radius: var(--radius-md);

  font-family: var(--font-serif);
  font-size: 2.4rem;
}

.account-trustees h3 {
  margin-top: 12px;

  font-family: var(--font-sans);
  font-size: 1.05rem;
  font-weight: 700;

  letter-spacing: 0;
}

.account-trustees__role {
  margin-top: 4px;

  color: var(--color-blue-600);

  font-size: var(--text-caption);
  font-weight: 700;
}

.account-trustees article > p:not(.account-trustees__role) {
  margin-top: 8px;

  font-size: var(--text-small);

  line-height: 1.45;
}

.account-trustees button {
  margin-top: 12px;
}

.account-trustees__note {
  margin-top: 12px;

  color: var(--color-text-muted);

  font-size: var(--text-caption);
}

@media (max-width: 1000px) {
  .account-trustees ul {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .account-trustees ul {
    grid-template-columns: 1fr;
  }
}
</style>
