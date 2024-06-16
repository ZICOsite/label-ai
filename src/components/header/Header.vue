<script setup>
import { onMounted, ref } from "vue";
import IconArrow from "@/components/icons/IconArrow.vue";

const header = ref(null);

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY <= 500) {
      header.value.style.transform = `translateY(-${window.scrollY * 2}px)`;
    }
  });
});

</script>

<template>
  <header class="header" ref="header">
    <div class="header__content">
      <h2 class="header__content-title">
        Revolutionizing the Creator Economy With <span>AI & Blockchain</span>
      </h2>
      <p class="header__content-subtitle">PARTNERSHIPS ALL AROUND THE WORLD</p>
      <div class="header__content-logos">
        <img src="@/assets/images/header/lg.svg" alt="" />
        <img src="@/assets/images/header/alibabaCloud.svg" alt="" />
        <img src="@/assets/images/header/BNBChain.svg" alt="" />
        <img src="@/assets/images/header/particleNetwork.svg" alt="" />
      </div>
      <a href="#!" class="header__content-btn btn"
        >Scroll down <IconArrow direction="down" color="#fff"
      /></a>
      <img
        src="@/assets/images/header/pic.png"
        alt="pic"
        class="header__content-pic"
      />
    </div>
  </header>
</template>
