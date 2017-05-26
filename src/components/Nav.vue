<template>
  <el-menu  router theme="dark" default-active="/Carousel" class="el-menu-demo"  @select="handleSelect">
    <el-menu-item index="/Carousel"><i class="el-icon-setting"></i>最后的晚餐</el-menu-item>
    <el-submenu index="/form">
      <template slot="title" ><i class="el-icon-message"></i>我的创意</template>
      <el-menu-item index="/formPersonStore">个人表单</el-menu-item>
      <el-menu-item index="/musicStore">生命周期</el-menu-item>
      <el-menu-item index="2-3">国际化</el-menu-item>
    </el-submenu>
    <el-menu-item index="/mdStore"><i class="el-icon-star-on"></i>满意度</el-menu-item>
  </el-menu>
</template>
<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  import ElMenuItem from '../../node_modules/element-ui/packages/menu/src/menu-item'

  export default {
    components: {ElMenuItem},
    data () {
      return {
        activeIndex: ''
      }
    },
    computed: {
      ...mapState({
        clickCount: state => {
          return state.navStore.clickCount
        }
      }),
      ...mapGetters([
        'getClickCount',
        'getNavNames',
        'getName'
      ])
    },
    methods: {
      handleSelect (key, keyPath, state) {
        this.$store.commit({
          type: 'atNav',
          name: keyPath
        })
        console.log('key:' + key + '          keyPath:' + keyPath)
        this.setClickCount()
        this.$notify.info({
          title: '成功',
//          this.clickCount----指向computed计算属性定义的clickCount
//          message: '当前该用户点击量' + this.$store.state.navStore.clickCount,
          message: '当前该用户点击量' + this.getClickCount,
          offset: 100
        })

//        this.$http({
//          method: 'get',
//          url: 'aq/GetFlightLine',
//          withCredentials: true
//        }).then(function (res) {
//          console.log(res.data)
//        }).catch(function (err) {
//          console.log(err)
//        })
      },
      ...mapMutations([
        'setClickCount'
      ]),
      ...mapActions([
        ''
      ])
    }
  }
</script>
