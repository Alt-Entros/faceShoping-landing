<script setup>
import { onMounted, ref } from "vue";
import { animate, stagger } from "motion";
import Card from "@/components/card.vue";
import cards from "@/assets/data/cards.js";

const isMobile = ref(window.innerWidth <= 896);
const visibleCards = ref(cards);

function chechMobileView() {
  isMobile.value = window.innerWidth <= 896;
  visibleCards.value = isMobile.value ? cards.slice(0, 3) : cards;
  console.log(visibleCards.value);
}

onMounted(() => {
  chechMobileView();
  window.addEventListener("resize", chechMobileView);
  animate(
    ".card",
    { opacity: [0, 1], y: [-80, 0] },
    {
      duration: 0.8,
      easing: [0.17, 0.55, 0.55, 1],
      delay: stagger(0.2),
    }
  );
});
</script>

<template>
  <section class="bg-[#252525] p-5 rounded-xl">
    <h2 class="text-white text-3xl text-bold mt-3 ml-2">
      Почему именно TheFaceShop?
    </h2>
    <div class="grid grid-cols-3 gap-3 max-lg:grid-cols-1">
      <Card
        v-for="card in visibleCards"
        :key="card.id"
        v-bind="card"
        class="card"
      />
    </div>
  </section>
</template>

<style scoped></style>
