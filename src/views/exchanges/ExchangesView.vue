<script setup>
import bithumb from "@/assets/images/exchanges/Bithumb.svg";
import HTX from "@/assets/images/exchanges/coinone.svg";
import Gate from "@/assets/images/exchanges/Gate.svg";
import Coinone from "@/assets/images/exchanges/HTX.svg";
import PancakeSwap from "@/assets/images/exchanges/pancakeswap.svg";

const exchanges = [
  {
    path: "https://www.bithumb.com/react/trade/order/LBL-KRW",
    logo: bithumb,
  },
  {
    path: "https://coinone.co.kr/exchange/trade/lbl/krw",
    logo: Coinone,
  },
  {
    path: "https://www.gate.io/trade/LBL_USDT?ref=12312805",
    logo: Gate,
  },
  {
    path: "https://www.htx.com/trade/lbl_usdt?inviter_id=11345710&invite_code=zh5i6223",
    logo: HTX,
  },
  {
    path: "https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x77edFaE59a7948d66E9911A30cC787d2172343d4",
    logo: PancakeSwap,
  },
];
</script>

<template>
  <section class="exchanges">
    <div class="container">
      <h2 class="exchanges__title">Exchanges</h2>
      <div class="exchanges__cards">
        <div class="exchanges__card" v-for="item in exchanges" :key="item.path">
          <a :href="item.path" target="_blank">
            <img :src="item.logo" alt="" class="exchanges__card-logo" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
