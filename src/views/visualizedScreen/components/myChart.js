export function myChart({color, legend,title, xAxis, tooltip, series, grid, id ,yAxis},_this) {
  var myChart = _this.echarts.init(document.getElementById(id));
  // 绘制图表
  myChart.setOption({
    color: color || ['#1aa05f','#14819c'],
    title: {
      text: title || '',
      textStyle:{
        color:'#fff',
        fontSize: 14
      }
    },
    legend: legend || {},
    tooltip: tooltip || {},
    xAxis: xAxis || {},
    yAxis: yAxis || {},
    series: series || [],
    grid: grid || {}
  });
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}