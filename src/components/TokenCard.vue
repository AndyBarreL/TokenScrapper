<template>
  <div
    class="grid mt-2 px-3 py-2 border-round-sm border-500 border-1 align-items-center justify-content-between hover:bg-gray-100"
  >
    <div class="col-3 flex align-items-center">
      <Image
        :src="token.imgUrl"
        alt="Image"
        :image-style="{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          marginRight: '5px',
        }"
      />
      <p
        class="hover:text-primary-500 cursor-pointer"
        @click="loadDetails(token)"
      >
        {{ token.abbr }}({{ token.name }})
      </p>
    </div>
    <div class="col-6 text-left flex">
      <p v-if="token.name !== 'TRX'">
        Address:
        <span class="text-sm underline">{{ token.contractAddress }}</span>
        <i
          class="pi pi-copy ml-2 cursor-pointer hover:text-primary-500"
          @click="copyAddress(token.contractAddress)"
        />
      </p>
    </div>
    <div class="text-right">
      <span class="mr-2">
        <i class="pi pi-github" />
      </span>
      <span>
        <i class="pi pi-twitter" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TronTokens } from "@/pages/tron/store/tron.model";
import { defineProps } from "vue";

interface Props {
  token: TronTokens;
}

defineProps<Props>();

const copyAddress = (address: string) => {
  navigator.clipboard.writeText(address);
};

const loadDetails = (token: TronTokens) => {
  console.log(token);
};
</script>
