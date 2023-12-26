<template>
  <div>
    <TabView :activeIndex="activeTab">
      <TabPanel header="Tron Scan">
        <NavComponent />
        <router-view></router-view>
      </TabPanel>
      <!-- <TabPanel header="Poligon Scan">
        <router-view></router-view>
      </TabPanel>
      <TabPanel header="Ether Scan">
        <router-view></router-view>
      </TabPanel> -->
    </TabView>
  </div>
</template>

<script setup lang="ts">
import NavComponent from "@/components/NavComponent.vue";
import { ref } from "vue";

const activeTab = ref(0);
</script>
