<template>
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
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  House,
  Location,
  List,
} from "@element-plus/icons-vue";

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
