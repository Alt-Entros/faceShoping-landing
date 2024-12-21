<script setup>
const props = defineProps(["title", "description", "icon"]);
</script>

<template>
  <div class="flex flex-col gap-2 text-slate-200 m-8">
    <div class="flex">
      <p class="">{{ props.icon }}</p>
      <h3 class="text-xl font-bold">{{ props.title }}</h3>
    </div>
    <p class="">{{ props.description }}</p>
  </div>
</template>
<style scoped></style>
