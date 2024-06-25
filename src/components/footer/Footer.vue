<script setup>

import IconLogoPreloader from "@/components/icons/IconLogoPreloader.vue";
import twitterX from "@/assets/images/footer/twitterX.svg"
import telegram from "@/assets/images/footer/telegram.svg"
import discord from "@/assets/images/footer/discord.svg"
import medium from "@/assets/images/footer/medium.svg"
import kakao from "@/assets/images/footer/kakao.svg"
import naver from "@/assets/images/footer/naver.svg"

const socials = [
  {
    logo: twitterX,
    link: "https://x.com/LABELFoundation"
  },
  {
    logo: telegram,
    link: "https://t.me/labelfoundation"
  },
  {
    logo: discord,
    link: "https://discord.com/invite/label-foundation-991242808818159758"
  },
  {
    logo: medium,
    link: "https://medium.com/labelfoundation"
  },
  {
    logo: kakao,
    link: "https://open.kakao.com/o/gn55Lpnc"
  },
  {
    logo: naver,
    link: "https://blog.naver.com/labelfoundation"
  },
];
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <a href="#!" class="footer__content-logo">
          <IconLogoPreloader :width="250" :height="70"/>
        </a>
        <ul class="footer__socials">
          <li class="footer__socials-item" v-for="item in socials" :key="item.link">
            <a :href="item.link" class="footer__socials-link" target="_blank"><img :src="item.logo" alt=""></a>
          </li>
        </ul>
      </div>
      <p class="footer__copyright">Copyright 2024 SONIC AI powered by Label AI All Rights Reserved</p>
    </div>
  </footer>
</template>
