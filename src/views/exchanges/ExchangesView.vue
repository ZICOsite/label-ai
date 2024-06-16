<script setup>
const exchanges = ["bithumb", "HTX", "Gate.io", "Coinone", "PancakeSwap"];
</script>

<template>
  <section class="exchanges">
    <div class="container">
      <h2 class="exchanges__title">Exchanges</h2>
      <div class="exchanges__cards">
        <div class="exchanges__card" v-for="item in exchanges" :key="item">
            <h3 class="exchanges__card-title">{{ item }}</h3> 
        </div>
      </div>
    </div>
  </section>
</template>
