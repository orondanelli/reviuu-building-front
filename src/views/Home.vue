<template>
  <div class="home-bg">
    <el-row>
      <el-col :sm="24" :md="12" :lg="12" :xl="12">
        <div class="content-title">
          <h1 class="home-title">
            Organiza y optimiza el comportamiento de los gastos de tu edificio
          </h1>
          <RouterLink :to="'/buildings'">
            <el-button type="success" class="btn-home">Comenzar</el-button>
          </RouterLink>
        </div>
      </el-col>

      <el-col :sm="24" :md="12" :lg="12" :xl="12">
        <div class="grid-content bg-img">
          <img src="../assets/img_home.svg" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style>
/* home */

.home-bg {
  background-color: #ffffff;
  height: 100vh;
}

.home-title {
  font-size: 2.4em;
  font-weight: 600;
  font-family: "Muli", sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #172b4d;
  line-height: 60px;
}

.content-title {
  margin-top: calc(70% - 230px);
  width: 80%;
  margin-left: 10%;
}

.btn-home {
  height: 60px;
  width: 200px;
}
</style>
