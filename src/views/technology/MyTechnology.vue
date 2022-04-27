<template>
  <div class="technology">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-card shadow="always">
            <h3 class="title">前端技术栈</h3>
            <front-chart></front-chart>
          </el-card></div
      ></el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple">
          <el-card shadow="always">
            <h3 class="title">后端技术栈</h3>
            <back-chart></back-chart>
          </el-card></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import BackChart from "./pieCharts/BackChart.vue";
import FrontChart from "./pieCharts/FrontChart.vue";
export default {
  components: { FrontChart, BackChart },
  name: "MyTechnology",
  mounted() {},
};
</script>
<style lang="less" scoped>
.technology {
  position: relative;
  width: 1500px;
  height: 800px;
  left: 250px;
  bottom: 300px;
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
</style>
