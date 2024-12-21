<script setup>
import heroImg from "@/assets/img/hero-img.png";

const props = defineProps({
  URL: String,
});
</script>

<template>
  <div>
    <header class="mt-20">
      <div class="grid grid-cols-2 gap-10 justify-items-center items-center max-lg:grid-cols-1">
        <div class="flex flex-col gap-5 items-start">
          <h1 class="font-black text-6xl">
            Подарки, которые заботятся о коже!
          </h1>
          <h2 class="text-xl">
            Встреть Новый год с TheFaceShop — премиальная корейская косметика
            для ухода за лицом, телом и волосами. Удиви близких идеальными
            наборами!
          </h2>
          <a
            :href="props.URL"
            class="text-2xl px-10 py-2 bg-black text-white rounded-3xl"
          >
            Вперед
          </a>
        </div>
        <img :src="heroImg" alt="" class="w-2/3 max-lg:hidden" />
      </div>
    </header>
  </div>
</template>

<style scoped></style>
