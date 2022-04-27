<template>
<div class="sidenav">
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="true"
    @open="handleOpen"
    @close="handleClose"
  >
    <routerLink to="/buildings">
      <el-menu-item index="2">
        <el-icon>
          <Location />
        </el-icon>
        <template #title>Buildings</template>
      </el-menu-item>
    </routerLink>
    <routerLink to="/devices">
      <el-menu-item index="3">
        <el-icon>
          <House />
        </el-icon>
        <template #title>Devices</template>
      </el-menu-item>
    </routerLink>
  </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { House, Location } from "@element-plus/icons-vue";

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.el-menu-vertical-demo {
  height: 100%;
  width: 100%;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100vh;
}
</style>
