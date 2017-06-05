// import app from '../a'
import ManYiDu from '../components/ManYiDu'
import Carousel from '../components/Carousel'
import FormPerson from '../components/FormPerson'
import Music from '../components/Music'
import I18n from '../components/I18n'
import Echarts from '../components/echarts'

export default [
  {
    path: '/mdStore',
    components: {
      default: ManYiDu
    }
  },
  {
    path: '/carousel',
    components: {
      default: Carousel
    }
  },
  {
    path: '/formPersonStore',
    components: {
      default: FormPerson
    }
  },
  {
    path: '/musicStore',
    components: {
      default: Music
    }
  },
  {
    path: '/i18n',
    components: {
      default: I18n
    }
  },
  {
    path: '/echartsStore',
    components: {
      default: Echarts
    }
  }
]
