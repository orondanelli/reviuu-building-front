<template>
  <sideNav />
  <PrincipalTable />
</template>

<script lang="ts">
import PrincipalTable from "../components/PrincipalTable.vue";
import sideNav from "../components/Sidenav.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "buildings",
  components: { PrincipalTable, sideNav },
});
</script>
