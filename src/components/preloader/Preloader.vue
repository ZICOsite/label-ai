<script setup>
import IconLogoPreloader from "@/components/icons/IconLogoPreloader.vue";
</script>

<template>
  <div class="preolader">
    <IconLogoPreloader :width="579" :height="140"/>
    <div class="preolader__counter">
      <span class="preolader__counter-span">%</span>
      <p>Loading...</p>
    </div>
  </div>
</template>
