<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import ProductCard from "@/components/productCard.vue";
import "@splidejs/vue-splide/css";
import products from "@/assets/data/products.js";
</script>

<template>
  <Splide
    class="slide"
    :options="{
      type: 'loop',
      rewind: true,
      arrows: false,
      type: 'loop',
      drag: 'free',
      snap: true,
      focus: 'center',
      perPage: 3,
      autoplay: true,
      interval: 3000,
      pagination: false,
      gap: '1.25em',
      breakpoints: {
        896: {
          perPage: 1,
          gap: '0.5em',
        },
      },
    }"
  >
    <SplideSlide
      v-for="product in products"
      :key="product.id"
      class="py-10 px-3"
    >
      <ProductCard
        :imgURL="product.imgURL"
        :name="product.name"
        :price="product.price"
        :link="product.link"
      />
    </SplideSlide>
  </Splide>
</template>

<style scoped>
.slide {
  overflow: visible !important;
}
</style>
