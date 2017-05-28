<template>
  <el-col :span="24">
    <el-steps :space="100" :active="active" finish-status="success">
      <el-step :title='$t("Korean")'></el-step>
      <el-step :title='$t("Chinese")'></el-step>
      <el-step :title='$t("Thai")'></el-step>
    </el-steps>
    <el-card class="box-card">
      <div class="text item">
        {{$t("language")}}
      </div>
    </el-card>
    <el-button style="margin-top: 12px;" @click="next">切换语言</el-button>
  </el-col>

</template>
<script>
  export default {
    data () {
      return {
        active: 0
      }
    },
    methods: {
      next () {
        if (this.active++ > 1) this.active = 0
        switch (this.active) {
          case 0: this.$i18n.locale = 'Korean'
            break
          case 1: this.$i18n.locale = 'Chinese'
            break
          case 2: this.$i18n.locale = 'Thai'
            break
        }
      }
    }
  }
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }
  .box-card{
    text-align: left;
  }
</style>
