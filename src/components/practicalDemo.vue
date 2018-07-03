<template>
  <el-form label-width="80px">

    <el-form-item>
      <el-input v-model="watchMsg" placeholder="防抖函数(该效果采用了lodash的debounce(actions,time))"></el-input>
    </el-form-item>
    <el-form-item>
     <el-card>
       <el-row>
         <h3>问题</h3>
          假设网站有个搜索框, 用户输入文本我们会自动联想匹配出一些结果供用户选择,我们可能首先想到的做法就是监听keypress事件, 然后异步查询结果. 但是如果用户快速的输入了一串字符, 假设是10个字符, 那么就会在瞬间触发10次请求, 这无疑不是我们想要的, 我们想要的是用户停止输入的时候才去触发查询的请求.
       </el-row>
       <el-row>
         <h3>原理</h3>
         函数防抖就是让某个函数在上一次执行后, 满足等待某个时间内不再触发此函数后再执行, 而在这个等待时间内再次触发此函数, 等待时间会重新计算.
       </el-row>
       <el-row>
         <h3>使用场景</h3>
         <li>游戏射击，keydown 事件</li>
         <li> 文本输入、自动完成，keyup 事件</li>
       </el-row>
       <el-row>
         <h3>栗子</h3>
         {{watchMsg4Result}}
       </el-row>
     </el-card>
    </el-form-item>

    <el-form-item>
      <el-input v-model="number" placeholder="输入数字(该效果使用了TWEEN的插件)" type="number"></el-input>
    </el-form-item>
    <el-form-item>
      <el-card>
        <el-row>
          <h3>过渡动画效果</h3>
          {{animatedNumber}}
        </el-row>
      </el-card>
    </el-form-item>

  </el-form>
</template>

<script>
  import _ from 'lodash'
  import TWEEN from '@tweenjs/tween.js'
  export default {
    data: function () {
      return {
        watchMsg: '',
        watchMsg4Result: '',
        number: '',
        animatedNumber: 0
      }
    },
    watch: {
      watchMsg: function (newValue, oldValue) {
        this.lodashFn()
      },
      number: function (newValue, oldValue) {
        var vm = this
        function animate (time) {
          requestAnimationFrame(animate)
          TWEEN.update(time)
        }
        new TWEEN.Tween({ tweeningNumber: oldValue })
          .easing(TWEEN.Easing.Quadratic.Out)
          .to({ tweeningNumber: newValue }, 500)
          .onUpdate(function () {
            vm.animatedNumber = this.tweeningNumber.toFixed(0)
          })
          .start()
        animate()
      }
    },
    methods: {
      lodashFn: _.debounce(
        function () {
          this.watchMsg4Result = this.watchMsg
        },
        500
      )
    }
  }
</script>
