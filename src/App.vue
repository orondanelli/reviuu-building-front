<script setup lang="ts">
import { RouterView } from "vue-router";
import Sidenav from "./components/Sidenav.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Sidenav />
      </el-aside>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<style>
@import "@/assets/base.scss";
</style>
