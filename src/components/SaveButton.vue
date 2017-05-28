<template>
  <el-button type="primary" @click="saveLocalStorage($store.state)">{{$t('saveButtonName')}}<i class="el-icon-upload el-icon--right"></i></el-button>
</template>

<script>
  //  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
    import {mapGetters} from 'vuex'
    export default{
      computed: {
        ...mapGetters([
          'getActiveNav'
        ])
      },
      methods: {
        saveLocalStorage: function (state) {
//          console.log(state.buttonStore)
          let object = state[this.getActiveNav]
          console.log(this.getActiveNav)
          for (let key in object) {
            if (typeof object[key] === 'function') {
              console.log(object[key]())
            } else {
              console.log(key + ':::' + object[key])
              localStorage.setItem(key, JSON.stringify(object[key]))
            }
          }
          this.$notify.info({
            title: '成功',
            message: '当前页面对象已保存成功至云端',
            offset: 100
          })
//          Array.prototype.forEach.call(arry, function (e) {
//            console.log(e)
//          })
        }
      }
    }
</script>
