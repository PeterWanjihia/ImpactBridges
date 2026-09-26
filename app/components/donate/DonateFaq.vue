<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

const questions = [
  {
    q: 'Which cryptocurrencies do you accept?',
    a: 'The assets listed on this page are USDT on TRON and Ethereum, USDC on Solana and Polygon, BTC and TRX. Checkout is not live, so none of them can be paid here yet.',
  },
  {
    q: 'Can I donate USDT using TRON?',
    a: 'USDT on TRON (TRC-20) is one of the networks we intend to accept. There is no invoice or deposit address on this site.',
  },
  {
    q: 'How are crypto contributions valued?',
    a: 'When crypto giving is live, the gift will be valued in pounds at the time the transfer is confirmed, and that figure will be what the receipt shows.',
  },
  {
    q: 'Do I receive a receipt for crypto donations?',
    a: 'A receipt will be sent when a payment is actually taken. This page does not issue one, because it does not take a payment.',
  },
  {
    q: 'Why does the crypto invoice expire?',
    a: 'A live invoice would expire so the rate and the address stay current. No invoice is created here yet.',
  },
  {
    q: 'Is my payment secure?',
    a: 'Card, wallet and bank details are not collected on this page. When a provider is connected, payment will run through that provider.',
  },
  {
    q: 'Can I donate monthly?',
    a: 'You can choose a monthly gift in the form. A recurring charge is not created until checkout is connected.',
  },
  {
    q: 'Can I make a bank transfer?',
    a: 'Bank transfer is one of the three methods. Account details are not published here. Use the contact page if you need to give before checkout is live.',
  },
  {
    q: 'Can my employer match my donation?',
    a: 'Employer matching can be part of a partnership. Start that conversation on the corporate partnerships page.',
  },
  {
    q: 'What if I need a refund?',
    a: 'Nothing on this form is charged. When a real gift has been taken, a refund request goes through the contact page.',
  },
]

const open = ref<string | null>(questions[0].q)

const columns = [
  questions.slice(0, 5),
  questions.slice(5),
]

function toggle(question: string) {
  open.value = open.value === question ? null : question
}

function openAll() {
  open.value = open.value === '__all__' ? null : '__all__'
}
</script>

<template>
  <section
    id="faq"
    class="donate-faq"
    aria-labelledby="donate-faq-title"
  >
    <div class="container">
      <header>
        <h2 id="donate-faq-title">
          Frequently asked questions
        </h2>

        <button
          type="button"
          @click="openAll"
        >
          {{ open === '__all__' ? 'Hide answers' : 'See all answers' }}

          <ChevronDown
            :size="16"
            :stroke-width="2"
            aria-hidden="true"
          />
        </button>
      </header>

      <div class="donate-faq__grid">
        <div
          v-for="(column, index) in columns"
          :key="index"
        >
          <article
            v-for="item in column"
            :key="item.q"
          >
            <h3>
              <button
                type="button"
                :aria-expanded="open === item.q || open === '__all__'"
                @click="toggle(item.q)"
              >
                {{ item.q }}

                <ChevronDown
                  :size="16"
                  :stroke-width="2"
                  aria-hidden="true"
                />
              </button>
            </h3>

            <p v-if="open === item.q || open === '__all__'">
              {{ item.a }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.donate-faq {
  padding: 12px 0 56px;

  scroll-margin-top: 88px;

  background: var(--color-white);
}

.donate-faq header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;

  gap: 12px;
}

.donate-faq h2 {
  font-size: clamp(1.8rem, 3vw, 2.3rem);
}

.donate-faq header > button,
.donate-faq h3 button {
  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-family: var(--font-sans);
  font-size: var(--text-small);
  font-weight: 650;
}

.donate-faq__grid {
  margin-top: 18px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 12px 28px;
}

.donate-faq article {
  border-bottom: 1px solid var(--color-border);
}

.donate-faq h3 button {
  width: 100%;

  justify-content: space-between;

  padding: 14px 0;

  color: var(--color-text-primary);

  text-align: left;
}

.donate-faq article p {
  padding-bottom: 14px;

  font-size: var(--text-small);

  line-height: 1.5;
}

@media (max-width: 800px) {
  .donate-faq__grid {
    grid-template-columns: 1fr;
  }
}
</style>
