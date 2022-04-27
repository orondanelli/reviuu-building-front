<script setup lang="ts">
import { RouterView, useRouter } from "vue-router";
import Sidenav from "@/components/Sidenav.vue";
import { onMounted } from "vue";

const route = useRouter();
let isRoot = true;

onMounted(() => {
  route.afterEach((to, from) => {
    if (to.fullPath === "/" && from.fullPath === "/") {
      isRoot = true;
    } else {
      isRoot = false;
    }
  });
});
</script>

<template>
  <template v-if="isRoot">
    <router-view />
  </template>
  <template v-else>
    <div class="main-layout">
      <div class="sidenav">
        <sidenav />
      </div>
      <div>
        <div class="header"></div>
        <div class="main">
          <div class="content">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<style>
@import "@/assets/base.scss";

* {
  padding: 0;
  margin: 0;
}

.main-layout {
  display: flex;
  background-color: #f8f8f8;
}

.sidenav {
  height: 100vh;
  width: 4vw;
}

.header {
  width: 96vw;
  height: 5vh;
}

.main {
  width: 96vw;
  height: 95vh;
}

.content {
  padding: 0 15px;
}
</style>
