<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="gradient-container">
    <div class="gradient"></div>
  </div>

  <RouterView />
</template>

<style>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.gradient-container {
  display: flex;
  place-content: center;
  align-items: center;

  position: fixed;
  top: 25%;
  left: 25%;
}

.gradient {
  --size: 280px;
  --speed: 30s;
  --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);

  width: var(--size);
  height: var(--size);
  filter: blur(calc(var(--size) / 5));
  background-image: linear-gradient(#361b99, #c0107c);
  animation: rotate var(--speed) var(--easing) alternate infinite;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

@media (min-width: 720px) {
  .gradient {
    --size: 875px;
  }
}

/* This is just to transition when you change the viewport size. */
* {
  transition: all 0.25s ease-out;
}
</style>
