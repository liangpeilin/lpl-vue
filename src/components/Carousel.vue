<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in carouselResouses" :key="item">
      <h3><img :src="item" /></h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  import i1 from '../assets/1.JPG'
  import i2 from '../assets/2.JPG'
  import i3 from '../assets/3.JPG'
  import i4 from '../assets/4.JPG'
  import i5 from '../assets/5.JPG'
  import i6 from '../assets/6.JPG'
  import i7 from '../assets/7.JPG'
  import i8 from '../assets/8.JPG'
  import i9 from '../assets/9.JPG'

  export default{
    data: function () {
      return {
        carouselResouses: [
          i1,
          i2,
          i3,
          i4,
          i5,
          i6,
          i7,
          i8,
          i9
        ]
      }
    }
  }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    /*opacity: 0.75;*/
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item img{
    width: 294px;
  }
</style>

