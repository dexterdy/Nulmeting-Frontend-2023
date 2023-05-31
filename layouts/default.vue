<template>
  <div class="layout-wrapper">
    <LevGlobalLoader v-if="globalStore.loading"></LevGlobalLoader>
    <div class="application-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { useGlobalStore } from '../stores/global';

const globalStore = useGlobalStore();
</script>