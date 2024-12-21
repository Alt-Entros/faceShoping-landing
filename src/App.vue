<script setup>
import Hero from "@/blocks/header.vue";
import CardList from "@/blocks/cardList.vue";
import Slider from "@/blocks/slider.vue";
import Location from "@/blocks/location.vue";
import Footer from "@/blocks/footer.vue";
</script>

<template>
  <div class="w-full flex justify-center">
    <div class="w-4/5 pt-10 flex flex-col gap-10">
      <Hero URL="#slide" />
      <main class="flex flex-col gap-10">
        <CardList />
        <section class="">
          <Slider id="slide" />
        </section>
        <section>
          <Location />
        </section>
      </main>
      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
