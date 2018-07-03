<template>
  <div class="parent">
    <div id="order" ref="profile">
      <p>AQ1033 2017-4-21 广州-北京</p>
      <button @click="p2pew" v-for="(value, key) in persons" :key="key" class="toggle1" :name="value">{{value}}</button>
    </div>
    <div class="label">
      <div>
        <div class="labelItem2"></div>
        <label>已选座位</label>
      </div>
      <div>
        <div class="labelItem1"></div>
        <label>可选座位</label>
      </div>
      <div>
        <div class="labelItem0"></div>
        <label>不可选座位</label>
      </div>
    </div>
    <div class="box">
      <div class="item">
        <h3>A</h3>
        <div v-for="(value, key) in pews[0]" :key="key">
          <div :class="('i'+value)" :id="key" @click="selectItem" ></div>
        </div>
      </div>
      <div class="item">
        <h3>B</h3>
        <div v-for="(value, key) in pews[1]" :key="key">
          <div :class="('i'+value)" :id="key" @click="selectItem" ></div>
        </div>
      </div>
      <div class="item">
        <h3>C</h3>
        <div v-for="(value, key) in pews[2]" :key="key">
          <div :class="('i'+value)" :id="key" @click="selectItem" ></div>
        </div>
      </div>
      <!--分界线..............................................-->
      <div class="item">
        <h3>&nbsp;&nbsp;</h3>
        <div class="iNum">1</div>
        <div class="iNum">2</div>
        <div class="iNum">3</div>
        <div class="iNum">4</div>
        <div class="iNum">5</div>
        <div class="iNum">6</div>
      </div>
      <!--分界线..............................................-->
      <div class="item">
        <h3>D</h3>
        <div v-for="(value, key) in pews[3]" :key="key">
          <div :class="('i'+value)" :id="key" @click="selectItem" ></div>
        </div>
      </div>
      <div class="item">
        <h3>E</h3>
        <div v-for="(value, key) in pews[4]" :key="key">
          <div :class="('i'+value)" :id="key" @click="selectItem"></div>
        </div>
      </div>
      <div class="item">
        <h3>F</h3>
        <div v-for="(value, key) in pews[5]" :key="key">
          <div :class="('i'+value)" :id="key" @click="selectItem" ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data: function () {
      return {
        pews: [
          {A1: 0, A2: 0, A3: 1, A4: 1, A5: 1, A6: 1},
          {B1: 0, B2: 0, B3: 1, B4: 1, B5: 0, B6: 1},
          {C1: 0, C2: 0, C3: 1, C4: 1, C5: 0, C6: 1},
          {D1: 0, D2: 0, D3: 1, D4: 1, D5: 0, D6: 1},
          {E1: 0, E2: 0, E3: 1, E4: 1, E5: 0, E6: 1},
          {F1: 0, F2: 0, F3: 1, F4: 1, F5: 0, F6: 1}
        ],
        p2pewData: {},
        persons: ['高圆圆', '柳岩', '林志玲', '范冰冰']
      }
    },
    methods: {
      selectItem: function (event) {
        let obj = event.target
        if (obj.className === 'i0') return
//        人名
        let hasObj = document.getElementsByClassName('toggle2')[0].getAttribute('name')
//        id
        let hasId = this.p2pewData[hasObj]
        if (hasObj && hasId) {
          document.getElementById(hasId).className = 'i1'
        }
//        对号入座
        if (obj.className === 'i1') {
          obj.className = 'i2'
          this.p2pewData[hasObj] = obj.id
          console.log(this.p2pewData)
          document.getElementsByClassName('toggle2')[0].innerHTML = hasObj + ' ' + obj.id
        }
      },
      p2pew: function (event) {
        let obj = event.target
//        alert(this.$refs.profile.outerHTML)---$refs可以定位dom节点
        let elList = obj.parentNode.getElementsByTagName('button')
        Array.prototype.forEach.call(elList, function (i) {
          i.className = 'toggle1'
        })
        obj.className = 'toggle2'
      }
    },
    mounted: function () {
      document.getElementsByClassName('toggle1')[0].className = 'toggle2'
    }
  }
</script>

<style>
  .parent{
    margin: 10px;
    border: solid 1px;
    display: flex;
    justify-content: left;
    flex-flow: row wrap;
    align-items:center;
  }
  .box{
    margin: 10px;
    border: solid 1px;
    display: flex;
    justify-content: left;
    flex-flow: row wrap-reverse;
    order: 1;
    align-items:center;
  }
  #order{
    flex-basis: 100%;
    order: 0;
    margin-left: 20px;
  }
  #order button {
    margin-left: 20px;
    margin-top: 100px;
    margin-bottom: 20px;
  }
  .label{
    order: 0;
    flex-grow: 0.5;
  }
  .label .labelItem0{
    background-color: dimgrey;
    width: 10px;
    height: 10px;
    margin: 10px;
  }
  .label .labelItem1{
    background-color: #32cd32;
    width: 10px;
    height: 10px;
    margin: 10px;
  }
  .label .labelItem2 {
    background-color: #ffA500;
    width: 10px;
    height: 10px;
    margin: 10px;
  }
  .label div{
    display: -webkit-flex; /* Safari */
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    align-items: center;
  }
  .i0{
     background-color: dimgrey;
     width: 20px;
     height: 20px;
     margin: 10px;
     cursor: pointer;
   }
  .i1{
    background-color: #32cd32;
    width: 20px;
    height: 20px;
    margin: 10px;
    cursor: pointer;
  }
  .i2{
    background-color: #ffA500;
    width: 20px;
    height: 20px;
    margin: 10px;
    cursor: pointer;
  }
  .iNone{
    width: 20px;
    height: 20px;
    margin: 10px;
  }
  .iNum{
    width: 20px;
    height: 20px;
    margin: 10px;
  }
  .toggle1 {
    margin-right: 35px;
    border-radius: 4px;
    border: 1px solid #ffA500;
    width: 80px;
    height: 30px;
    cursor: pointer;
    outline:none !important;
    background-color : #fff;
    color : #000;
  }
  .toggle2 {
    margin-right: 35px;
    border-radius: 4px;
    border: 1px solid #ffA500;
    width: 80px;
    height: 30px;
    cursor: pointer;
    outline:none !important;
    background-color : #ffA500;
    color : #fff;
  }
</style>
