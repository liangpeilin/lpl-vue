<template>
  <el-row>
    <el-col :span="24" :offset="3">
      <p>mounted钩子___ 挂在完成后的生命周期钩子注册</p>
      <p>$nextTick___ 等待下一次更新完成后执行业务处理代码。</p>
      <p>axios___ 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新</p>
      <img
        id="baiduImg"
        src="http://business.cdn.qianqian.com/qianqian/pic/bos_client_c49310115801d43d42a98fdc357f6057.jpg"
      />
    </el-col>
    <el-col :span="4" v-for="(item,index) in arry" :key="item.artist_name" :offset="index % 5  > 0 ? 0:3">
      <el-card :body-style="{ padding: '0px',margin:'0px'}">
        <img :src="item.pic_big"  class="image"/>
        <div style="padding: 14px;">
          <span>{{ item.album_title }}</span>
          <div class="bottom clearfix">
            <time class="time">{{ item.artist_name }}</time>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
//  var link = 'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000'
  export default {
    data: function () {
      return {
        arry: []
      }
    },
    mounted: function () {
      let that = this
      this.$nextTick(function () {
        that.$http({
          method: 'get',
          url: 'baiduMusic'
        }).then(function (res) {
          that.arry = res.data.song_list
        }).catch(function (err) {
          console.log(err)
        })
      })
    }
  }
</script>

<style>
  p{
    text-align: left;
  }
  #baiduImg{
    float: left;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
