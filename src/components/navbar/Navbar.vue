<script setup>
import { onMounted, ref } from "vue";

const pages = [
  {
    path: "#!",
    name: "About",
  },
  {
    path: "#!",
    name: "Ecosystem",
  },
  {
    path: "#!",
    name: "Events",
  },
  {
    path: "https://label-bridge.multibaas.app/",
    name: "ETH-BSC Bridge",
  },
  {
    path: "#!",
    name: "Git book",
  },
];

const logo = ref(null);
const logoBlack = ref(null);

const menuToggler = ref(false)

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 580) {
      logoBlack.value.style.display = "none";
      logo.value.style.display = "block";
    } else {
      logoBlack.value.style.display = "block";
      logo.value.style.display = "none";
    }
  });
});
</script>

<template>
  <nav class="nav">
    <div class="container">
      <a href="#!" class="nav__logo" ref="logo"
        ><img src="/logo.svg" alt=""
      /></a>
      <a href="#!" class="nav__logo-black" ref="logoBlack"
        ><img src="@/assets/images/logo-black.svg" alt=""
      /></a>
      <div class="nav__menu" :class="{'active': menuToggler}">
        <ul class="nav__list">
          <li class="nav__item" v-for="item in pages" :key="item.name">
            <a :href="item.path" class="nav__link">{{ item.name }}</a>
          </li>
        </ul>
        <a href="https://linktr.ee/labelfoundation" class="nav__menu-btn btn"> Community </a>
      </div>
      <div class="nav__burger" :class="{'active': menuToggler}" @click="menuToggler = !menuToggler"></div>
    </div>
  </nav>
</template>
