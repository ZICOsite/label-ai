<script setup>
const partners = [
  "DWF Labs",
  "LG Electronics",
  "Pixel Realm",
  "Binance Custody",
  "BNB Chain",
  "eBest",
  "Polygon",
  "MoonPay",
  "Messari",
  "Gate.io",
  "Chainlink",
  "Solanium",
  "ONTO",
  "BitKeep",
  "Net.Storage",
  "IOST",
  "IceTea Labs",
  "Mindfulness Capital",
  "Galxe",
  "ANKR",
  "Certik",
  "CoinMarketCap",
  "IPFS",
  "TaskOn",
];
</script>

<template>
  <section class="partners">
    <div class="container">
      <h2 class="partners__title">Partners</h2>
      <div class="partners__cards">
        <div class="partners__card" v-for="item in partners" :key="item">
          <h3 class="partners__card-title">{{ item }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>
