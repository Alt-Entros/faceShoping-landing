<script setup>
import { onMounted, ref } from "vue";
import WhatsAppLogo from "@/assets/img/whatsApp.ico";
import Map from "@/components/map.vue";

const city = ref("Хабаровск"); // Текущий город
const address = ref([135.07419, 48.486327]);
const zoom = ref(15);
const isMobile = ref(window.innerWidth <= 896);

function switchMobileZoom() {
  isMobile.value = window.innerWidth <= 896;
  zoom.value = isMobile.value ? 13 : 15;
}
function switchCity() {
  city.value = city.value === "Хабаровск" ? "Владивосток" : "Хабаровск";
  if (city.value === "Хабаровск") {
    address.value = [135.07419, 48.486327];
    zoom.value = 15;
  } else {
    address.value = [131.882552, 43.118473];
    zoom.value = 17;
  }
}

onMounted(() => {
  switchMobileZoom();
  window.addEventListener("resize", switchMobileZoom);
});
</script>

<template>
  <div class="grid grid-cols-2 my-20 max-lg:grid-cols-1">
    <Map class="" :city="address" :zoom="zoom" />
    <div class="p-5 flex flex-col">
      <div>
        <nav class="relative flex gap-5">
          <button
            class="text-2xl link transition-all duration-300 ease-in-out"
            :class="{ link_active: city === 'Хабаровск' }"
            @click="switchCity"
          >
            Хабаровск
          </button>
          <button
            class="text-2xl link2 transition-all duration-300 ease-in-out"
            :class="{ link_active: city === 'Владивосток' }"
            @click="switchCity"
          >
            Владивосток
          </button>
        </nav>
      </div>
      <div>
        <h2 class="text-3xl font-bold">Наши магазины</h2>
        <transition name="fade" mode="out-in">
          <div v-if="city === 'Хабаровск'" class="grid grid-rows-2">
            <p class="shop">ТЦ "На Пушкина" (10:00 - 21:00)</p>
            <p class="shop">Ул. Карла Маркса, 61 (10:00 - 20:00)</p>
          </div>
          <div v-else class="grid grid-rows-2">
            <p class="shop">Ул. Семёновская, 12 (10:00 - 19:00)</p>
            <div />
          </div>
        </transition>
        <h2 class="text-3xl font-bold">Информация о доставке</h2>
        <ul class="pl-5">
          <h3 class="text-2xl font-bold">Условия доставки:</h3>
          <li class="flex gap-2 items-end">
            <p class="text-xl">🚚</p>
            <p>Бесплатная доставка при заказе от 3000 рублей</p>
          </li>
          <li class="flex gap-2 items-end">
            <p class="text-xl">⏳</p>
            <p>Средний срок доставки: 2-5 рабочих дней</p>
          </li>
        </ul>
        <ul class="pl-5">
          <h3 class="text-2xl font-bold">Методы доставки:</h3>
          <li class="flex gap-2 items-end">
            <p class="text-xl">🚚</p>
            <p>Курьерская доставка</p>
          </li>
          <li class="flex gap-2 items-end">
            <p class="text-xl">📦</p>
            <p>Самовывоз</p>
          </li>
          <li class="flex gap-2 items-end">
            <p class="text-xl">✉️</p>
            <p>Почта России</p>
          </li>
          <li class="flex gap-2 items-end">
            <p class="text-xl">⚡</p>
            <p>Экспресс-доставка: для срочных заказов в пределах города</p>
          </li>
        </ul>
        <ul class="pl-5">
          <h3 class="text-2xl font-bold">Контакты для связи:</h3>
          <li class="flex gap-2 items-end">
            <p class="text-xl">📞</p>
            <a href="tel:+79098201555">+7 909 802-15-55</a>
          </li>
          <li class="flex gap-2 items-end">
            <p class="text-xl w-6"><img :src="WhatsAppLogo" alt="" /></p>
            <a
              href="https://wa.me/79098201555?text=Здравствуйте,%20я%20хочу%20узнать%20о%20ваших%20услугах"
              target="_blank"
              class="flex gap-2 items-end"
            >
              <p>Связаться в WhatsApp</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.link {
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;
}

.link2 {
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;
}

.link_active {
  background-size: 100% 2px;
}

.fade-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
  opacity: 1;
  transform: translateX(0);
}

.fade-enter {
  opacity: 0;
  transform: translateX(20px);
}

.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
  opacity: 0;
  transform: translateX(-20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
