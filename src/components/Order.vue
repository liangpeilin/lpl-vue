<template>
  <div id="order">
    <h2>乘机人信息</h2>
    <div>
      <h3>常用乘机人</h3>
      <el-radio-group v-model="data_radio">
        <el-radio :label="0">林志玲</el-radio>
        <el-radio :label="1">高圆圆</el-radio>
        <el-radio :label="2">范冰冰</el-radio>
        <el-radio :label="3">柳岩</el-radio>
        <el-radio :label="4">赵奕欢</el-radio>
      </el-radio-group>
      <div>
        <div v-for="(item, index) in dataArray" :key="index">
          <h3 @click="switchShow(index)">乘机人{{index+1}} <i :class="item.form.icon[0]"></i></h3>
          <el-form  :model="item" label-width="80px" v-if="item.form.isShow">
            <el-form-item label="旅客类型 :">{{item.form.person}}</el-form-item>
            <el-form-item label="旅客姓名 :">
              <el-input v-model="item.form.name"></el-input>
            </el-form-item>
            <el-form-item label="旅客性别 :">
              <el-radio-group v-model="item.form.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="联系方式 :" >
              <el-input v-model="item.form.phone" ></el-input>
            </el-form-item>
            <el-form-item label="证件类型 :">
              <el-select v-model="item.form.type" placeholder="请选择有效证件">
                <el-option label="身份证" value=shenfenzheng></el-option>
                <el-option label="护照" value="huzhao"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="证件号码 :">
              <el-input v-model="item.form.number"  placeholder="请输入有效证件号码"></el-input>
            </el-form-item>
            <el-form-item label="出生年月 :">
              <el-date-picker
                v-model="item.form.birth"
                type="month"
                popper-class="afdsafasfdsadf"
                placeholder="选择月">
              </el-date-picker>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <el-button @click="appendTemplate('成人')" style="background-color: #ffA500;color: #fff;border: none;">添加成人</el-button>
          <el-button @click="appendTemplate('儿童')" style="background-color: #ffA500;color: #fff;border: none;">添加儿童</el-button>
          <el-button @click="appendTemplate('婴儿')" style="background-color: #ffA500;color: #fff;border: none;">添加婴儿 </el-button>
        </div>
      </div>
    </div>
    <div>
      <a>灵动实惠  单程  广州 → 南京</a><a>退改规则</a>
      <div>
        <p>AQ1033 2017-06-15</p>
        <a>广州 白云机场T1 - 06:35 →</a>
        <a>北京 首都机场T2 - 06:35</a>
      </div>
      <hr>
      <div>
        <h2>总计:<a>￥16220.00</a></h2>
        <p class="mingxi">票价、税费</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        pickerOptions0: {
        },
        data_radio: 4,
        dataArray: [
        ],
        watchMsg: '',
        number: 0,
        animatedNumber: 0
      }
    },
    methods: {
      switchShow: function (index) {
        this.dataArray[index].form.isShow = !this.dataArray[index].form.isShow
        this.dataArray[index].form.icon.reverse()
      },
      appendTemplate: function (person) {
        let formTemplate = {
          form: {
            person: '',
            name: '',
            sex: '',
            phone: '',
            type: '',
            number: '',
            birth: '',
            isShow: true,
            icon: ['el-icon-caret-bottom', 'el-icon-caret-top']
          }
        }
        formTemplate.form.person = person
        this.dataArray.push(formTemplate)
      }
    },
    mounted: function () {
      this.appendTemplate('成人')
    }
  }
</script>

<style lang="less">
  .order_Style {
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-flow: row wrap;
    align-items:flex-start;
  }
  .title{
    font-size: 1.17em;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    margin: 20px;
  }
  #order {
    .order_Style;
    h2 {
      flex-basis: 100%;
      align-self: flex-start;
      font-weight: normal;
    }
    .el-button{
      margin-top: 20px;
    }
    h3 {
      cursor: pointer;
      font-weight: normal;
    }
    .el-icon-caret-bottom::before{
      content: '\E604';
    }
    &>div:last-child{
        width: 400px;
        height: 500px;
        border: 1px solid #324157;
        margin: 8px 100px;
        text-align: left;
      &>a,div,.mingxi{
        .title
      }
      &>a:nth-child(2){
        color: #20a0ff;
        cursor: pointer;
      }
      &>div{
        font-size: 14px;
      }
      &>div:nth-child(2){
        h2{
          a{
            margin-left: 50%;
          }
        }
      }
    }
  }
  mingxi{
    .title;
    color: red;
  }
</style>
