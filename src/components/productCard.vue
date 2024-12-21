<script setup>
const props = defineProps({
  imgURL: URL,
  name: String,
  price: String,
  link: String,
});
</script>

<template>
  <div
    class="h-full p-10 relative rounded-3xl shadow-xl flex justify-center items-center hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out"
  >
    <div
      class="absolute z-1 backdrop-blur-xl rounded-3xl p-10 inset-0 opacity-0 hover:opacity-100 transition duration-300 ease-in-out flex flex-col items-end justify-start gap-5"
    >
      <p class="font-bold mt-4">
        {{ props.name }}
      </p>
      <div class="flex flex-col gpa-4">
        <p class="font-medium text-md">Цена: {{ props.price }} руб</p>
        <a
          target="_blank"
          :href="props.link"
          class="uppercase font-bold px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition duration-300 ease-in-out active:bg-white active:text-black"
          >подробнее</a
        >
      </div>
    </div>
    <img :src="imgURL" alt="" />
  </div>
</template>

<style scoped></style>
