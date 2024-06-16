<script setup>
import IconArrow from "@/components/icons/IconArrow.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import event1 from "@/assets/images/events/1.png";
import event2 from "@/assets/images/events/2.png";
import event3 from "@/assets/images/events/3.png";
import event4 from "@/assets/images/events/4.png";
import event5 from "@/assets/images/events/5.png";

const slides = [
  {
    date: "JUN 15 2024",
    title: "LABEL Foundation Rebranding",
    link: "#!",
    img: event1,
  },
  {
    date: "MAY 31 2024",
    title: "LABEL Foundation Partners with NVIDIA Inception",
    link: "#!",
    img: event2,
  },
  {
    date: "MAY 30 2024",
    title: "SignAil OBT Official Launch",
    link: "#!",
    img: event3,
  },
  {
    date: "MAY 23 2024",
    title: "Collaboration with Alibaba Cloud",
    link: "#!",
    img: event4,
  },
  {
    date: "APR 30 2024",
    title: "Label Foundation 2024 Project Roadmap",
    link: "#!",
    img: event5,
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
  <section class="events">
    <div class="container">
      <h2 class="events__title">Recent events</h2>
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
