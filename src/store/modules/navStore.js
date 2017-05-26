// import {GETCLICKCOUNT, GETNAVNAMES} from '../getters_type'
const navStore = {
  state: {
    name: 'navStore',
    navNames: [
      '简介',
      '信息',
      '卖点',
      '促销'
    ],
    clickCount: localStorage.getItem('clickCount') || 0
  },
  getters: {
    getClickCount: (state) => {
      return state.clickCount
    },
    getNavNames: (state) => {
      return state.navNames
    },
    getName: (state) => {
      return state.name
    }
  },
  mutations: {
    setClickCount: (state) => {
      ++state.clickCount
      localStorage.setItem('clickCount', state.clickCount)
    }
  },
  actions: {

  }
}

export {navStore}
