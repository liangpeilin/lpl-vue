<template>
  <el-col :span="24">
    <el-steps :space="100" :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    <!--<p>{{this.$store.state.i18nStore.messages.ja.message.hello}}</p>-->
    <p>{{$t("name")}}</p>
    <!--<p>{{this.$i18n.store.sate.mdStore.manyiDu}}</p>-->
  </el-col>

</template>
<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        active: 0
//        messages: {
//          en: {
//            message: {
//              hello: 'hello world'
//            }
//          },
//          ja: {
//            message: {
//              hello: 'こんにちは、世界'
//            }
//          }
//        }
      }
    },
    computed: {
      ...mapState({
        messages: (state) => {
          return state.navStore.name
        }
      })
    },
    methods: {
      next () {
        if (this.active++ > 2) this.active = 0
      }
    }
  }
</script>
