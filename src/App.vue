<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<style>
@import "@/assets/base.scss";
</style>
