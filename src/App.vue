<template>
    <el-col id="app"  class="tac" :span="24">
      <h5>{{$t('project')}} {{seconds}}</h5>
      <el-col :span="6">
        <navComponents></navComponents>
      </el-col>
      <el-col :span="18">
        <router-view :parentData="seconds"></router-view>
      </el-col>
      <el-col :span="24" class="lpl-bottom">
        <saveButton></saveButton>
      </el-col>
    </el-col>
</template>

<script>
  import navComponents from './components/Nav'
  import saveButton from './components/SaveButton'

  export default {
    name: 'APP',
    components: {
      navComponents: navComponents,
      saveButton: saveButton
    },
    data: function () {
      return {
        seconds: new Date().getTime()
      }
    },
    mounted: function () {
      const that = this
      setInterval(
        function () {
          that.seconds = new Date().getTime()
        },
        1000
      )
    }
  }
</script>

<style>
  #app  {
    background:#EFF2F7;
    padding-left:5%;
    padding-right:5%;
  }
  h5  {
    font:20px Extra large;
    color: #58B7FF;
  }
  .el-col {
    text-align: center;
  }
  .lpl-bottom{
    padding: 30px;
  }
</style>

