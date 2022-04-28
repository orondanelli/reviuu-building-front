<template>
  <main>
    <AppLayout />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppLayout from "@/layouts/AppLayout.vue";

export default defineComponent({
  name: "App",
  components: {
    AppLayout,
  },
});
</script>

<style>
@import "@/assets/base.scss";

* {
  padding: 0;
  margin: 0;
}

main {
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
  width: 100%;
}
</style>
