/**
 * Created by LPL on 2017/5/8.
 */
const buttonStore = {
  state: {
    activeNav: 'no active nav!!!!!'
  },
  getters: {
    getActiveNav: state => {
      return state.activeNav
    }
  },
  mutations: {
    atNav: (state, nav) => {
      let regExp = /.*\//
      let strName = nav.name.join('').toString()
      strName = strName.replace(regExp, '')
      state.activeNav = strName
    }
  }
}
export {buttonStore}

