<template>
  <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
  <div id="Back_charts" style="width: 600px; height: 600px"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "BackChart",
  data() {
    return {};
  },
  mounted() {
    var chartDom = document.getElementById("Back_charts");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: "后端我所熟悉的技术站",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "rear end",
          type: "pie",
          radius: "60%",
          data: [
            { value: 1048, name: "Java" },
            { value: 735, name: "Springboot" },
            { value: 400, name: "c++" },
            { value: 484, name: "redis" },
            { value: 300, name: "MySql" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    option && myChart.setOption(option);
  },
};
</script>

<style>
#main {
}
</style>
