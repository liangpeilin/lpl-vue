<template>
  <div id="echarts" style="height: 500px;width: 500px;margin: 0 auto;"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    mounted: function () {
      const myChart = echarts.init(document.getElementById('echarts'))
//         基于准备好的dom，初始化echarts实例
      // 绘制图表
//      myChart.setOption({
//        title: {text: 'ECharts 统计图'},
//        tooltip: {},
//        xAxis: {
//          data: ['菜单点击量']
//        },
//        yAxis: {},
//        series: [{
//          name: '销量',
//          type: 'bar',
//          data: [this.$store.state.navStore.clickCount]
//        }]
//      })
      let result = (this.$store.state.navStore.clickCount / 365).toFixed(0)
      let option = {
        tooltip: {
          formatter: `{a} <br/>{b} : {c}%`
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          },
          left: 'center'
        },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter: `{value}%`},
            data: [{value: result, name: '年化点击量完成率'}]
          }
        ]
      }
      myChart.setOption(option)
    }
  }
</script>

