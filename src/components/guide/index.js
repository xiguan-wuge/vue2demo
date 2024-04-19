import Guide from './VTour'
import GuideStep from './VStep.vue'

const install = (Vue) => {
  Vue.component('Guide', Guide)
  Vue.component('GuideStep', GuideStep)
}

export default install