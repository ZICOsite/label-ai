<script setup>
import IconArrow from "@/components/icons/IconArrow.vue";

const sections = [
  "about",
  "ecosystem",
  "tracks",
  "lg tv",
  "signail",
  "Events",
  "eth-bscbridge",
  "whitepaper",
];

const socials = [
  "twitter",
  "telegram",
  "discord",
  "medium",
  "facebook",
  "linkedin",
  "kakao talk",
  "naver",
];
</script>

<template>
  <footer class="footer">
    <div class="container">
      <h2 class="footer__title">Contact us</h2>
      <div class="footer__content">
        <form action="#!" class="footer__form">
          <input
            type="text"
            class="footer__form-inp"
            placeholder="First name"
            required
          />
          <input
            type="text"
            class="footer__form-inp"
            placeholder="Last name"
            required
          />
          <input
            type="email"
            class="footer__form-inp"
            placeholder="Work email"
            required
          />
          <input
            type="text"
            class="footer__form-inp"
            placeholder="Organization name"
            required
          />
          <input
            type="text"
            class="footer__form-inp"
            placeholder="Tell a bit more what you are looking for"
            required
          />
          <button class="footer__form-btn btn">
            Send now <IconArrow direction="right" color="#38761D" />
          </button>
        </form>
        <div class="footer__row">
          <div class="footer__row-col">
            <h3 class="footer__row-title">Sections</h3>
            <ul class="footer__row-list">
              <li class="footer__row-item" v-for="item in sections" :key="item">
                <a href="#!" class="footer__row-link">{{ item }}</a>
              </li>
            </ul>
          </div>
          <div class="footer__row-col">
            <h3 class="footer__row-title">Social</h3>
            <ul class="footer__row-list">
              <li class="footer__row-item" v-for="item in socials" :key="item">
                <a href="#!" class="footer__row-link">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
