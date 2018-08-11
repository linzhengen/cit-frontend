import nprogress from '@/plugins/nprogress'
import authorize from '@/plugins/authorize'

export default {
  install (Vue) {
    nprogress(Vue)
    authorize(Vue)
  }
}
