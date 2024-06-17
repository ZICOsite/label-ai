<script setup>
import Preloader from "@/components/preloader/Preloader.vue";
import Header from "@/components/header/Header.vue";
import Navbar from "@/components/navbar/Navbar.vue";
import Footer from "@/components/footer/Footer.vue";
import About from "@/views/about/AboutView.vue";
import EcosystemView from "@/views/ecosystem/EcosystemView.vue";
import ExchangesView from "@/views/exchanges/ExchangesView.vue";
import PartnersView from "@/views/partners/PartnersView.vue";
import EventsView from "@/views/events/EventsView.vue";

import { onMounted, ref } from "vue";

const image = ref(null);

onMounted(() => {
  const lenis = new Lenis({
    lerp: 0.08,
    smoothWeel: true,
  });

  lenis.on("scroll", ({ scroll }) => {
    if (scroll >= 0 && scroll <= 1000)
      image.value.style.transform = `scale(${100 + scroll / 2}%)`;
    else if (scroll < 0) image.value.style.transform = `scale(1)`;
    if (window.innerWidth <= 680)
      image.value.style.transform = `scale(${100 + window.scrollY * 1.5}%)`;
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  window.addEventListener("beforeunload", () => {
    window.scrollTo({
      top: 0,
    });
  });
});
</script>

<template>
  <div class="wrapper">
    <Preloader />
    <img
      src="@/assets/images/Subtract.svg"
      alt="Subtract"
      ref="image"
      class="arc"
    />
    <Navbar />
    <Header />
    <main>
      <About />
      <EcosystemView />
      <ExchangesView />
      <PartnersView />
      <EventsView />
    </main>
    <Footer />
  </div>
</template>
