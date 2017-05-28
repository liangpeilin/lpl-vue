// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(Router)
Vue.use(Vuex)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, {locale})

import routes from './router/index.js'
const router = new Router({
  routes: routes,
  mode: 'history'
})

import {navStore} from './store/modules/navStore'
import {mdStore} from './store/modules/mdStore'
import {buttonStore} from './store/modules/buttonStore'
import {formPersonStore} from './store/modules/formPersonStore'
const store = new Vuex.Store({
  modules: {
    navStore: navStore,
    mdStore: mdStore,
    buttonStore: buttonStore,
    formPersonStore: formPersonStore
  },
  debug: true
})

import axios from 'axios'
Vue.prototype.$http = axios

// ----------------------------------------------------------------------------------------------
const messages = {
  Chinese: {
    project: '窒息工作室',
    language: `
    爱因斯坦（1879－1955），美籍德国犹太人。他创立了代表现代科学的相对论，并为核能开发奠定了理论基础，在现代科学技术和他的深刻影响及广泛应用方面开创了现代科学新纪元，
    被公认为自伽利略、牛顿以来最伟大的科学家、思想家。1921年诺贝尔物理学奖获得者。
    现代物理学的开创者和奠基人，相对论——“质能关系”的提出者，“决定论量子力学诠释”的捍卫者（振动的粒子）——不掷骰子的上帝。 
    1940年写了一篇著名论文---“我不信仰一个人格化的神[1]  “，
    1999年12月26日，爱因斯坦被美国《时代周刊》评选为“世纪伟人”。爱因斯坦是世上最伟大的科学家之一。
    `,
    saveButtonName: '保存数据至云端',
    Chinese: '中文',
    Korean: '韩语',
    Thai: '泰语'
  },
  Korean: {
    project: '숨 스튜디오',
    language: `
    아인슈타인 (1879－1955), 미국 독일 유대인.그는 대통령의 대표 현대 과학 상대성이론 하 고 원자로 마련할 이론적 기초, 현대 과학 기술 및 그의 심각한 영향을 및 응용 분야 널리 열다 현대 과학 신기원, 관한 권위자로 널리 스스로 갈릴레이 · 뉴턴 이후 가장 위대한 과학자 · 사상가.1921년 노벨 물리학상을 받았다.현대 물리학의 개척자, 창시자, 상대성이론 맞아 '질 수 있는 자는 사이 "의" 결정론 양자역학의 해석' 챔피언 (진동의 입자) 안 다이스 하느님.1940년 쓴 유명 논문 --- "한 편 안 신앙 한 인격 신 [1]" 1999년 12월 26일 아인슈타인 의해 미국 《 시대 주간 》 을 '세기의 위인 "선정하다.아인슈타인은 세상에서 가장 위대한 과학자 중의 하나다.
    `,
    saveButtonName: '데이터를 저장합니다 ~ 구름',
    Chinese: '중국어',
    Korean: '한국어',
    Thai: '타이어'
  },
  Thai: {
    project: 'สตูดิโอ .',
    language: `
    ไอน์สไตน์ ( 1879-1955 ) ชาวเยอรมันเชื้อสายยิว - อเมริกัน เขาได้สร้างทฤษฎีสัมพัทธภาพในนามของวิทยาศาสตร์สมัยใหม่และเป็นผู้วางรากฐานของการพัฒนาพลังงานนิวเคลียร์ในวิทยาศาสตร์และเทคโนโลยีที่ทันสมัยและอิทธิพลของเขาและใช้กันอย่างแพร่หลายในด้านของวิทยาศาสตร์สมัยใหม่เริ่มต้นศักราชใหม่ที่ได้รับการยอมรับว่าเป็นกาลิเลโอและนิวตันเป็นนักวิทยาศาสตร์และนักคิดที่ยิ่งใหญ่ที่สุดของเวลาทั้งหมด ปี 1921 ผู้ได้รับรางวัลโนเบลสาขาฟิสิกส์ ผู้ก่อตั้งของฟิสิกส์สมัยใหม่และผู้ก่อตั้งทฤษฎีสัมพัทธภาพ . . . " ความสัมพันธ์ระหว่างมวลและพลังงาน " ของผู้เขียน " ทฤษฏีกลศาสตร์ควอนตัมอธิบาย " ผู้พิทักษ์ ( การสั่นสะเทือนของอนุภาคพระเจ้าไม่เล่นทอยลูกเต๋า ) . . . ปี 1940 เขียนวิทยานิพนธ์ที่มีชื่อเสียง -- " ผมไม่ได้เชื่อในพระเจ้าส่วนบุคคล [ 1 ] " วันที่ 26 ธันวาคมพ.ศ. 2542 ไอน์สไตน์ถูกสหรัฐอเมริกานิตยสารเลือกเป็น " ผู้ยิ่งใหญ่แห่งศตวรรษ " ไอน์สไตน์เป็นหนึ่งในนักวิทยาศาสตร์ที่ยิ่งใหญ่ที่สุด
    `,
    saveButtonName: 'บันทึกข้อมูลไปยังเมฆ',
    Chinese: 'ภาษาจีน',
    Korean: 'ภาษาเกาหลี',
    Thai: 'ภาษาไทย'
  }
}
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'Korean',
  messages
})

// ----------------------------------------------------------------------------------------------

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router,
  store: store,
  i18n
})
