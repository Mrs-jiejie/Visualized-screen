const colors = ["#1aa05f", "#14819c"];
export const chart1 = {
  id: "main",
  title: "ECharts 入门示例",
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    axisLabel: {
      color: "#fff",
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#fff',
        type: 'solid'
      }
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: [
    {
      type: "value",
      name: "销量(件)",
      position: "left",
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[0],
        },
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#bcb8b84a'
        }
      },
      axisLabel: {
        color: "#fff",
        formatter: "{value}",
      },
      axisTick: {
        show: false,
      },
    },
    {
      type: "value",
      name: "利润(元)",
      position: "right",
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[1],
        },
      },
      axisLabel: {
        color: "#fff",
        formatter: "{value}",
      },
      axisTick: {
        show: false,
      },
    },
  ],
  legend: {
    show: true,
    textStyle: {
      color: "#fff",
    },
  },
  series: [
    {
      name: "销量",
      type: "bar",
      barWidth: "40%",
      data: [5, 20, 36, 10, 10, 20],
    },
    {
      name: "利润",
      type: "line",
      barWidth: "40%",
      smooth: true,
      data: [2.0, 2.2, 19, 4.5, 6.3, 26],
      yAxisIndex: 1,
    },
  ],
  grid: {
    bottom: 28,
    right: 40,
    left: 40,
  }
}