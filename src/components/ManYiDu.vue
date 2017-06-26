<template>
  <div>
    {{getManyiDu}}
    <el-rate
      v-model="star"
      show-text
      @change="setManyiDu"
    >
    </el-rate>

    <div class="box1">
      <h1>个人介绍</h1>
      <img src="../assets/person0.JPG">
      <p>
        基于es6语言环境，这个自娱自乐框架主要运用vue2.X搭建,应用到了vue-router,vuex,axios、flex弹性布局,element-ui、TWEEN、lodash、vue-i18n插件,
        因为是本人初涉猎，所以很多技术在运用方面不成熟
      </p>
    </div>
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

  .box1{
    width: 300px;
    margin: 20px;
    padding: 10px;
    min-height: 200px;
    position:relative;
    display: inline-block;
    background: -webkit-gradient(linear, 0% 20%, 0% 1000%, from(#fff), to(#fff), color-stop(.1,#f3f3f3));
    border: 1px solid #ccc;
    box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1) inset;
    border-bottom-right-radius: 6px 50px;
  }

  .box1:before{
    content: '';
    width: 50px;
    height: 100px;
    position:absolute;
    bottom:0; right:0;
    box-shadow: 20px 20px 10px rgba(0, 0, 0, 0.1);
    z-index:-1;
    transform: translate(-35px,-40px)
    skew(0deg,30deg)
    rotate(-25deg);
  }

  .box1:after{
    content: '';
    width: 100px;
    height: 100px;
    top:0; left:0;
    position:absolute;
    z-index:-1;
    box-shadow: -10px -10px 10px rgba(0, 0, 0, 0.2);
    transform: rotate(2deg)
    translate(20px,25px)
    skew(20deg);
  }

  .box1 img {
    width: 100%;
    margin-top: 15px;
  }

  p{
    margin-top: 15px;
    text-align: justify;
  }

  h1{
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
  }
</style>
