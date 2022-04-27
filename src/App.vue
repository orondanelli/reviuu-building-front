<template>
    <div class="main-layout">
      <div>
        <div class="header"></div>
          <div class="content">
            <router-view />
          </div>
      </div>
    </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: 'App',
  components: {  },
  setup() {
    const route = useRouter()
    const getRoot = computed(() => {
      route.afterEach((to, from) => {
        console.log(to.fullPath)
        if (to.fullPath === "/" && from.fullPath === "/") {
          return true;
        } else {
          return false;
        }
      })
    })
    console.log(getRoot)
  }
}
)
</script>

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