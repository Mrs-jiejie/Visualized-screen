<template>
  <div class="visualized">
    <header class="header"><h2>数据可视化大屏</h2></header>
    <main>
      <el-row class="main">
        <el-col :span="7" class="left">
          <section class="item">
            <h6>折线图</h6>
            <!-- <ve-line :data="chartData" height="300px"></ve-line> -->
          </section>
          <section class="item">
            <!-- <h6>折线图2</h6> -->
            <div id="main" style="width: 100%; height: 100%"></div>
          </section>
          <section class="item">3</section>
        </el-col>
        <el-col :span="10" class="center">
          <section class="item1"></section>
          <section class="item2"></section>
        </el-col>
        <el-col :span="7" class="left">
          <section class="item">1</section>
          <section class="item">2</section>
          <section class="item">3</section>
        </el-col>
      </el-row>
    </main>
  </div>
</template>
<script>
import { myChart } from "./components/myChart";
import {chart1} from './components/chartsOption'
export default {
  data() {
    return {
      chartData: {
        columns: ["日期", "销售额"],
        rows: [
          { 日期: "1月1日", 销售额: 123 },
          { 日期: "1月2日", 销售额: 1223 },
          { 日期: "1月3日", 销售额: 2123 },
          { 日期: "1月4日", 销售额: 4123 },
          { 日期: "1月5日", 销售额: 3123 },
          { 日期: "1月6日", 销售额: 7123 },
        ],
      },
    };
  },
  mounted() {
    this.getEchart();
  },
  methods: {
    getEchart() {
      myChart(chart1,this);
    },
  },
};
</script>

<style scoped lang="scss">

@import "~@/assets/styles/mixin.scss";
@import "./components/visualized.scss";

</style>
<style scoped>
/* .main{
   height: calc(100vh - 48px);
} */
</style>
