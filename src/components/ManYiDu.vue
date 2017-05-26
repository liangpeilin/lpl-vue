<template>
  <div>
    {{getManyiDu}}
    <el-rate
      v-model="star"
      show-text
      @change="setManyiDu"
    >
    </el-rate>
  </div>
</template>


<script>
//  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  import { mapState, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        star: Number(localStorage.getItem('manyiDu')) || null
      }
    },
    computed: {
      ...mapState({
        manyiDuStar: (state) => {
          return state.mdStore.manyiDu
        }
      }),
      ...mapGetters([
        'getManyiDu'
      ])
    },
    methods: {
      setManyiDu: function (obj) {
        this.$store.commit({
          type: 'setManyiDu',
          val: Number(obj),
          name: 'manyiDu'
        })
      }
    }
  }
</script>

<style>
  .el-rate {
    padding: 50px;
  }
</style>
