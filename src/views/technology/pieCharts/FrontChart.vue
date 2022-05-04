<template>
  <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
  <div id="main" style="width: 600px; height: 600px"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "FrontChart",
  data() {
    return {};
  },
  mounted() {
    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      title: {
        textStyle: {
          fontSize: 18,
        },
      },
      legend: {
        top: "bottom",
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      series: [
        {
          name: "Nightingale Chart",
          type: "pie",
          radius: [50, 210],
          center: ["50%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 6,
          },
          data: [
            { value: 40, name: "js" },
            { value: 38, name: "css" },
            { value: 32, name: "html" },
            { value: 30, name: "vue全家桶" },
            { value: 28, name: "echarts" },
            { value: 26, name: "less" },
          ],
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
