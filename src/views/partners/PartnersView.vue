<script setup>
import {
  ANKR,
  Binance_Custody,
  bitkeep,
  bnb,
  certik,
  chainlink,
  cmc,
  DWFLabs,
  eBest,
  Galxe,
  gate_io,
  icetealabs,
  IOST,
  IPFS,
  Lg,
  pixelrealm,
  messari,
  mindfulness,
  MoonPay,
  nftstorage,
  onto,
  Polygon,
  Solanium,
  TaskOn,
} from "@/helpers/images";

const partners = [
  ANKR,
  Binance_Custody,
  bitkeep,
  bnb,
  certik,
  chainlink,
  cmc,
  DWFLabs,
  eBest,
  Galxe,
  gate_io,
  icetealabs,
  IOST,
  IPFS,
  Lg,
  pixelrealm,
  messari,
  mindfulness,
  MoonPay,
  nftstorage,
  onto,
  Polygon,
  Solanium,
  TaskOn,
];
</script>

<template>
  <section class="partners">
    <div class="container">
      <h2 class="partners__title">Partners</h2>
      <div class="partners__cards">
        <div class="partners__card" v-for="item in partners" :key="item">
          <img :src="item" alt="" class="partners__card-logo">
        </div>
      </div>
    </div>
  </section>
</template>
