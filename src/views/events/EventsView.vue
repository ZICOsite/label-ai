<script setup>
import IconArrow from "@/components/icons/IconArrow.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import event1 from "@/assets/images/events/1.png";
import event2 from "@/assets/images/events/2.png";
import event3 from "@/assets/images/events/3.png";
import event4 from "@/assets/images/events/4.png";
import event5 from "@/assets/images/events/5.png";
import event6 from "@/assets/images/events/6.png";

const slides = [
  {
    date: "JUN 15 2024",
    title: "LABEL Foundation Rebranding",
    link: "https://www.cryptoglobe.com/latest/2024/06/label-foundation-rebrands-into-label-ai-shaping-the-future-of-music-with-ai-and-blockchain-innovation/",
    img: event1,
  },
  {
    date: "MAY 31 2024",
    title: "LABEL Foundation Partners with NVIDIA Inception",
    link: "https://medium.com/labelfoundation/label-foundation-partners-with-nvidia-inception-to-revolutionize-sound-ai-with-advanced-ai-8e136715764a",
    img: event2,
  },
  {
    date: "MAY 30 2024",
    title: "SignAil OBT Official Launch",
    link: "https://medium.com/labelfoundation/signail-obt-official-launch-experience-the-future-of-sound-with-cutting-edge-ai-technology-2a9e54129fca",
    img: event3,
  },
  {
    date: "MAY 23 2024",
    title: "Collaboration with Alibaba Cloud",
    link: "https://coinstats.app/news/b7dc8b07a4082e7468dfa06889aaa0a1242d26f3c8c68304229bcecbbe77ed05_LABEL-Foundation-and-Clesson-Venture-into-AI-Sector%2C-Strengthened-by-Collaboration-with-Alibaba-Cloud/",
    img: event4,
  },
  {
    date: "APR 30 2024",
    title: "Label Foundation 2024 Project Roadmap",
    link: "https://medium.com/labelfoundation/label-foundation-2024-project-roadmap-3eac4fac3f61",
    img: event5,
  },
  {
    date: "JAN 25 2024",
    title: "Tracks Launches Web3 Music dApp on LG Smart TVs",
    link: "https://news.bitcoin.com/label-foundations-tracks-launches-web3-music-dapp-on-lg-smart-tvs/",
    img: event6,
  },
];

const breakpoints = {
  480: {
    slidesPerView: 1.3,
    spaceBetween: 30,
  },
  850: {
    slidesPerView: 2.3,
    spaceBetween: 30,
  },
  1140: {
    slidesPerView: 3.3,
    spaceBetween: 40,
  },
  1440: {
    slidesPerView: 4.3,
    spaceBetween: 40,
  },
};
</script>

<template>
  <section class="events" id="news">
    <div class="container">
      <h2 class="events__title">Recent news</h2>
    </div>
    <swiper
      class="mySwiper events__carousel"
      :slidesPerView="1"
      :breakpoints="breakpoints"
      :spaceBetween="10"
    >
      <swiper-slide v-for="item in slides" :key="item.title">
        <div class="events__carousel-card">
          <img :src="item.img" alt="" class="events__carousel-image" />
          <span class="events__carousel-date">{{ item.date }}</span>
          <h3 class="events__carousel-title">{{ item.title }}</h3>
          <a :href="item.link" class="events__carousel-btn btn"
            >Read now <IconArrow direction="right" color="#38761D"
          /></a>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>
