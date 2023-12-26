<template>
  <div class="grid flex gap-2">
    <PrimeButton
      link
      label="Tokens"
      :class="activeRoute === '/tron/tokens' ? 'bg-gray-500 text-white' : ''"
      @click="goToTokens"
    />
    <PrimeButton
      :class="activeRoute === '/tron/contracts' ? 'bg-gray-500 text-white' : ''"
      link
      label="Contracts"
      @click="goToContracts"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const activeRoute = ref(route.path);

watch(
  () => route.path,
  () => {
    activeRoute.value = route.path;
  }
);

const goToTokens = () => {
  router.push("/tron/tokens");
};

const goToContracts = () => {
  router.push("/tron/contracts");
};
</script>
