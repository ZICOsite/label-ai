<script setup>
import bithumb from "@/assets/images/exchanges/Bithumb.svg";
import HTX from "@/assets/images/exchanges/coinone.svg";
import Gate from "@/assets/images/exchanges/Gate.svg";
import Coinone from "@/assets/images/exchanges/HTX.svg";
import PancakeSwap from "@/assets/images/exchanges/pancakeswap.svg";

const exchanges = [bithumb, Coinone, Gate, HTX, PancakeSwap];
</script>

<template>
  <section class="exchanges">
    <div class="container">
      <h2 class="exchanges__title">Exchanges</h2>
      <div class="exchanges__cards">
        <div class="exchanges__card" v-for="item in exchanges" :key="item">
            <img :src="item" alt="" class="exchanges__card-logo">
        </div>
      </div>
    </div>
  </section>
</template>
