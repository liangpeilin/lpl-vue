<template>
  <div>
    <!-- <el-popover
      ref="popover1"
      placement="top-start"
      title="vue使用props属性接收父组件数据"
      width="300"
      trigger="hover"
      content="这里是子组件==> 通过子组件属性props接收父组件的数据:parentData">
    </el-popover> -->
    <el-button v-popover:popover1>{{parentData}}</el-button>
  </div>
</template>

<script>
  export default {
    props: ['parentData']
  }
</script>
