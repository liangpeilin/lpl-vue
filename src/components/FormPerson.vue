<template>
  <el-form :model="formPerson" :rules="getRules" ref="formPerson" label-width="100px" class="demo-formPerson">
    <figure>
      <canvas  v-if="computed_headImg === ''" id="canvas" width="100" height="100" style="
      border:1px solid #d3d3d3;
      background:#ffffff;
      border-radius: 50px;">
      </canvas>
      <img v-else="computed_headImg !== ''" :src="computed_headImg" width="100" height="100" style="
      border:1px solid #d3d3d3;
      background:#ffffff;
      border-radius: 50px;"/>
      <figcaption>{{computed_personName}}</figcaption>
    </figure>
    <el-form-item label="上传头像" prop="personImg">
      <input type="file" @change="drawImage($event)">
    </el-form-item>

    <el-form-item label="姓名" prop="personName">
      <el-input v-model="computed_personName"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" prop="region">
      <el-select v-model="computed_region" placeholder="请选择活动区域">
        <el-option label="上海" value="上海"></el-option>
        <el-option label="北京" value="北京"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="工作年限" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker type="date" placeholder="选择日期" v-model="computed_date1" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-date-picker type="date" placeholder="选择日期" v-model="computed_date2" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="单身中" prop="delivery">
      <el-switch on-text="" off-text="" v-model="computed_isSingle"></el-switch>
    </el-form-item>
    <el-form-item label="性格特征" prop="type">
      <el-checkbox-group v-model="computed_type">
        <el-checkbox label="贱人双子" name="type"></el-checkbox>
        <el-checkbox label="顾家巨蟹" name="type"></el-checkbox>
        <el-checkbox label="败家狮子" name="type"></el-checkbox>
        <el-checkbox label="沉稳金牛" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="社会身份" prop="resource">
      <el-radio-group v-model="computed_resource">
        <el-radio label="有钱仔"></el-radio>
        <el-radio label="不羁男"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="个人简介" prop="desc">
      <el-input type="textarea" v-model="computed_desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('formPerson')">立即创建</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import ElInput from '../../node_modules/element-ui/packages/input/src/input'
  import {mapGetters} from 'vuex'

  export default {
    components: {ElInput},
    data: function () {
      return {
        formPerson: {
          headImg: '',
          personName: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    computed: {
      ...mapGetters([
        'getFormPerson',
        'getRules',
        'getLocalStorage_FormPerson'
      ]),
      computed_headImg: function () {
        return this.getFormPerson.headImg
      },
      computed_personName: {
        get () {
          return this.getFormPerson.personName
        },
        set (value) {
          this.$store.commit('setFormPerson_personName', value)
        }
      },
      computed_region: {
        get () {
          return this.getFormPerson.region
        },
        set (value) {
          this.$store.commit('setFormPerson_region', value)
        }
      },
      computed_date1: {
        get () {
          return this.getFormPerson.date1
        },
        set (value) {
          this.$store.commit('setFormPerson_date1', value)
        }
      },
      computed_date2: {
        get () {
          return this.getFormPerson.date2
        },
        set (value) {
          this.$store.commit('setFormPerson_date2', value)
        }
      },
      computed_isSingle: {
        get () {
          return this.getFormPerson.isSingle
        },
        set (value) {
          this.$store.commit('setFormPerson_isSingle', value)
        }
      },
      computed_type: {
        get () {
          return this.getFormPerson.type
        },
        set (value) {
          this.$store.commit('setFormPerson_type', value)
        }
      },
      computed_resource: {
        get () {
          return this.getFormPerson.resource
        },
        set (value) {
          this.$store.commit('setFormPerson_resource', value)
        }
      },
      computed_desc: {
        get () {
          return this.getFormPerson.desc
        },
        set (value) {
          this.$store.commit('setFormPerson_desc', value)
        }
      }
    },
    methods: {
      submitForm  (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm () {
        this.$store.commit('resetFormPerson')
      },
      drawImage (eventObj) {
        this.$store.commit(
          'setFormPerson_headImg',
          ''
        )
        let that = this
        let objElement = eventObj.target
        let file = objElement.files[0]
        let fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onloadend = function () {
          console.log(fileReader.DONE + '===' + fileReader.readyState)
          if (fileReader.DONE === fileReader.readyState) {
            let image = new Image()
            image.src = fileReader.result
            let imgCanvas = document.getElementById('canvas')
            let imgContext = imgCanvas.getContext('2d')
            image.onload = function () {
              // 渲染图片到canvas中
              imgContext.drawImage(image, 0, 0, 100, 100)
            }
            that.$store.commit(
              'setFormPerson_headImg',
              fileReader.result
            )
          }
        }
      }
    }
  }
</script>

<style>
  .el-form-item {
    text-align: left;
  }
  #drawTarget {
    border-radius: 50px;
    width: 100px;
    height: 100px;
  }
</style>
