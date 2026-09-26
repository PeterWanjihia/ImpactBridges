<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const assets = [
  { ticker: 'USDT', network: 'TRON (TRC-20)' },
  { ticker: 'USDT', network: 'Ethereum (ERC-20)' },
  { ticker: 'USDC', network: 'Solana' },
  { ticker: 'BTC', network: 'Bitcoin' },
  { ticker: 'TRX', network: 'TRON' },
  { ticker: 'USDC', network: 'Polygon' },
]

const showNote = ref(false)
</script>

<template>
  <section
    id="crypto"
    class="donate-crypto"
    aria-labelledby="donate-crypto-title"
  >
    <div class="container donate-crypto__inner">
      <div>
        <h2 id="donate-crypto-title">
          Give with the assets you already hold
        </h2>

        <p>
          Contribute using stablecoins and cryptocurrencies across
          multiple blockchain networks. Choose your asset and network,
          get an exact invoice and track confirmation in real time.
        </p>

        <p class="donate-crypto__limit">
          That checkout is not live. Do not send crypto to this website.
          No deposit address is published here.
        </p>

        <a href="#faq">
          How crypto donations work

          <ArrowRight
            :size="14"
            :stroke-width="2"
            aria-hidden="true"
          />
        </a>
      </div>

      <div>
        <p class="donate-crypto__label">
          Popular options
        </p>

        <ul>
          <li
            v-for="asset in assets"
            :key="`${asset.ticker}-${asset.network}`"
          >
            <strong>{{ asset.ticker }}</strong>
            <span>{{ asset.network }}</span>
          </li>

          <li>
            <button
              type="button"
              :aria-expanded="showNote"
              @click="showNote = !showNote"
            >
              View all assets and networks
            </button>
          </li>
        </ul>

        <p
          v-if="showNote"
          class="donate-crypto__note"
        >
          These six are the only assets listed. None of them can be paid on this page yet.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.donate-crypto {
  padding: 56px 0 20px;

  scroll-margin-top: 88px;

  background: var(--color-white);
}

.donate-crypto__inner {
  display: grid;

  grid-template-columns: 0.9fr 1.1fr;

  gap: 36px;

  align-items: start;
}

.donate-crypto h2 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.donate-crypto__inner > div > p {
  margin-top: 12px;

  font-size: var(--text-lede);

  line-height: 1.55;
}

.donate-crypto__limit {
  color: var(--color-text-primary);

  font-size: var(--text-small);
  font-weight: 650;
}

.donate-crypto a {
  margin-top: 16px;

  display: inline-flex;
  align-items: center;

  gap: 6px;

  color: var(--color-blue-600);

  font-size: var(--text-small);
  font-weight: 650;
}

.donate-crypto a:hover {
  text-decoration: underline;
}

.donate-crypto__label {
  color: var(--color-text-muted);

  font-size: var(--text-caption);
  font-weight: 700;

  letter-spacing: 0.06em;

  text-transform: uppercase;
}

.donate-crypto ul {
  margin-top: 12px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 10px;
}

.donate-crypto li {
  min-height: 64px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 12px 14px;

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-md);

  text-align: left;
}

.donate-crypto li:last-child {
  padding: 0;

  background: transparent;

  border: 0;
}

.donate-crypto button {
  width: 100%;
  min-height: 64px;

  padding: 12px 14px;

  color: var(--color-blue-600);

  background: var(--color-surface-soft);

  border: 1px solid var(--color-border);

  border-radius: var(--radius-md);

  font-family: var(--font-sans);
  font-size: var(--text-small);
  font-weight: 650;

  text-align: left;

  cursor: pointer;
}

.donate-crypto strong {
  color: var(--color-text-primary);

  font-size: var(--text-ui);
}

.donate-crypto li span {
  color: var(--color-text-secondary);

  font-size: var(--text-caption);
  font-weight: 650;
}

.donate-crypto__note {
  margin-top: 10px;

  font-size: var(--text-small);
}

@media (max-width: 800px) {
  .donate-crypto__inner,
  .donate-crypto ul {
    grid-template-columns: 1fr;
  }
}
</style>
