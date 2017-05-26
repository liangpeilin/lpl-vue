/**
 * Created by LPL on 2017/5/15.
 */
const formPersonStore = {
  state: {
    formPerson: {
      headImg: '',
      personName: '',
      region: '',
      date1: new Date(),
      date2: new Date(),
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    },
    rules: {
      personName: [
        { required: true, message: '请输入姓名', trigger: 'blur' },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ],
      region: [
        { required: true, message: '请选择活动区域', trigger: 'change' }
      ],
      date1: [
        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
      ],
      date2: [
        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
      ],
      type: [
        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
      ],
      resource: [
        { required: true, message: '请选择活动资源', trigger: 'change' }
      ],
      desc: [
        { required: true, message: '请填写活动形式', trigger: 'blur' }
      ]
    }
  },
  getters: {
    // getFormPerson: state => {
    //   let formPerson = JSON.parse(localStorage.getItem('formPerson'))
    //   state.formPerson = formPerson
    //   return state.formPerson
    // },
    getFormPerson: state => {
      state.formPerson = JSON.parse(localStorage.getItem('formPerson')) || state.formPerson
      return state.formPerson
    },
    getRules: state => {
      return state.rules
    }
  },
  mutations: {
    setFormPerson_headImg: (state, payload = '') => {
      console.log(payload.length)
      state.formPerson.headImg = payload
    },
    setFormPerson_personName: (state, payload) => {
      state.formPerson.personName = payload
    },
    setFormPerson_region: (state, payload) => {
      state.formPerson.region = payload
    },
    setFormPerson_date1: (state, payload) => {
      state.formPerson.date1 = payload
    },
    setFormPerson_date2: (state, payload) => {
      state.formPerson.date2 = payload
    },
    setFormPerson_delivery: (state, payload) => {
      state.formPerson.delivery = payload
    },
    setFormPerson_type: (state, payload) => {
      state.formPerson.type = payload
    },
    setFormPerson_resource: (state, payload) => {
      state.formPerson.resource = payload
    },
    setFormPerson_desc: (state, payload) => {
      state.formPerson.desc = payload
    },
    resetFormPerson: (state) => {
      state.formPerson.personName = ''
      state.formPerson.region = ''
      state.formPerson.date1 = new Date()
      state.formPerson.date2 = new Date()
      state.formPerson.delivery = false
      state.formPerson.type = []
      state.formPerson.resource = ''
      state.formPerson.desc = ''
      state.formPerson.headImg = ''
    }
  },
  actions: {
  }
}

export {formPersonStore}
