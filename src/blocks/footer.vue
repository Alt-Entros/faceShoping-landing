<script setup></script>

<template>
  <footer class="flex flex-col">
    <ul class="grid grid-cols-3 justify-items-center max-lg:block">
      <li class="max-lg:hidden">
        <h1 class="font-bold text-2xl uppercase">Подробнее</h1>
        <ul class="mx-4 flex flex-col gap-2">
          <li>
            <a href="https://faceshopping.ru/"><p>Интернет-магазин</p></a>
          </li>
          <li>
            <a
              href="https://web.telegram.org/k/#@thefaceshopkhv"
              target="_blank"
            >
              <p>Telegram</p>
            </a>
          </li>
          <li>
            <a href="">
              <p>WhatsApp</p>
            </a>
          </li>
        </ul>
      </li>
      <li class="max-lg:hidden">
        <h1 class="font-bold text-2xl uppercase">поддержка</h1>
        <ul class="mx-4 flex flex-col gap-2">
          <li>
            <p>Режим работы: Ежедневно с 10:00 до 21:00</p>
            <a href="tel:+7(4212)464-001">Тел.:8(4212)464-001</a>
          </li>
          <li>
            <p>Режим работы: Ежедневно с 10:00 до 20:00</p>
            <a href="tel:+7(4212)681-555">Тел.:8(4212)681-555</a>
          </li>
        </ul>
      </li>
      <li
        class="bg-black text-white rounded-md px-10 pt-3 flex flex-col gap-2 pb-3"
      >
        <h1 class="font-bold text-2xl uppercase">Рассылка</h1>
        <div class="flex max-lg:flex-col max-lg:gap-3">
          <p class="text-xl">
            Подпишитесь на нашу рассылку в <strong>Telegram </strong>
          </p>
          <a
            href="https://web.telegram.org/k/#@TheFaceShopKHVBot"
            class="bg-white text-black rounded-md w-full flex justify-center items-center font-bold text-2xl"
          >
            <svg
              class="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </li>
    </ul>
    <p class="mt-10">
      2024 © Магазин корейской косметики и товаров для ухода за собой. Интернет
      магазин «Faceshopping.ru».
    </p>
  </footer>
</template>

<style scoped></style>
