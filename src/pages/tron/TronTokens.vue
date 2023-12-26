<template>
  <div>
    <TokenCard v-for="token in tokens" :key="token.name" :token="token" />
  </div>
</template>

<script setup lang="ts">
import { useTronStore } from "./store/tron.store";

import TokenCard from "@/components/TokenCard.vue";

const { tokens, getTokens } = useTronStore();
</script>
