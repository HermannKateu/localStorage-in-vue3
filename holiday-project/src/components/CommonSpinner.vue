<template>
  <div class="loader rounded-full bg-white">
    <div v-for="index in 10" :key="index"></div>
  </div>
</template>

<style scoped>
.loader div {
  @apply origin-[40px_57px] absolute right-[92px] bottom-[107px];

  animation: loader 1s linear infinite;
}

.loader div:after {
  @apply block absolute top-[22px] left-[37px] w-[5.24px] h-[20.95px] rounded-[20px] bg-gray-400;

  content: "";
}

.loader div:nth-child(1) {
  @apply transform rotate-[0deg];

  animation-delay: -0.9s;
}

.loader div:nth-child(2) {
  @apply transform rotate-[36deg];

  animation-delay: -0.8s;
}

.loader div:nth-child(3) {
  @apply transform rotate-[72deg];

  animation-delay: -0.7s;
}

.loader div:nth-child(4) {
  @apply transform rotate-[108deg];

  animation-delay: -0.6s;
}

.loader div:nth-child(5) {
  @apply transform rotate-[144deg];

  animation-delay: -0.5s;
}

.loader div:nth-child(6) {
  @apply transform rotate-[180deg];

  animation-delay: -0.4s;
}

.loader div:nth-child(7) {
  @apply transform rotate-[216deg];

  animation-delay: -0.3s;
}

.loader div:nth-child(8) {
  @apply transform rotate-[252deg];

  animation-delay: -0.2s;
}

.loader div:nth-child(9) {
  @apply transform rotate-[288deg];

  animation-delay: -0.1s;
}

.loader div:nth-child(10) {
  @apply transform rotate-[324deg];

  animation-delay: 0s;
}

@keyframes loader {
  0% {
    @apply opacity-100;
  }

  100% {
    @apply opacity-0;
  }
}
</style>
