const mdStore = {
  state: {
    manyiDu: Number(localStorage.getItem('manyiDu')) || null
  },
  getters: {
    getManyiDu: state => {
      return state.manyiDu
    }
  },
  mutations: {
    setManyiDu: (state, obj) => {
      state.manyiDu = obj.val
    }
  },
  actions: {
  }
}

export {mdStore}

