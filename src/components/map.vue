<script setup>
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
} from "vue-yandex-maps";
import markers from "@/assets/data/cordinates";

const props = defineProps({
  city: Array,
  zoom: Number,
});

console.log(props.city);
</script>
<template>
  <div class="rounded-3xl overflow-hidden ">
    <yandex-map
      :settings="{
        location: {
          center: props.city,
          zoom: props.zoom,
        },
      }"
      width="100%"
      height="500px"
    >
      <yandex-map-default-scheme-layer />
      <yandex-map-default-features-layer />
      <yandex-map-default-marker
        v-for="marker in markers"
        :key="marker.title"
        :settings="marker"
      >
      </yandex-map-default-marker>
    </yandex-map>
  </div>
</template>

<style scoped></style>
