<template>
  <div>
    <div id="echarts" style="height: 500px;width: 500px;margin: 0 auto;"></div>
    <div id="echarts2" style="height: 500px;width: 500px;margin: 0 auto;"></div>
  </div>
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
//      asdasassssssssssssssssssssssssssssssssssssssssssssssssssss

      option = {
        title: {
          text: '未来一周气温变化',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['最高气温']
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {},
            dataView: {readOnly: true},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          show: true,
          type: 'value',
          axisLabel: {
            formatter: '{value}°C'
          }
        },
        series: [
          {
            symbol: 'circle',
            symbolSize: 20,
            name: '最高气温',
            type: 'line',
            data: [10, 11, 15, 13, 12, 13, 10],
            markPoint: {
              data: [
                {type: 'max', name: '最大值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          }
        ]
      }
      const myChart2 = echarts.init(document.getElementById('echarts2'))
      myChart2.setOption(option)
    }
  }
</script>

