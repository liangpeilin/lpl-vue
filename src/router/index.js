// import app from '../a'
import ManYiDu from '../components/ManYiDu'
import Carousel from '../components/Carousel'
import FormPerson from '../components/FormPerson'
import Music from '../components/Music'

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
  }
]
