import ToastComponent from './toast'

let instance
let defaults = {
  message: '',
  type: 'success',
  value: true,
  duration: 3000
}

const plugin = {
  install (Vue) {
    if (!instance) {
      const ToastPlugin = Vue.extend(ToastComponent)
      instance = new ToastPlugin({
        el: document.createElement('div')
      })
      document.body.appendChild(instance.$el)
    }
    let toast = option => {
      let options = Object.assign(defaults, option)
      Object.getOwnPropertyNames(options).forEach(prop => {
        instance[prop] = options[prop]
      })
    }
    if (!Vue.$toast) {
      Vue.$toast = toast
    }
    // Vue.prototype.$loading = Vue.$loading
    Vue.mixin({
      created () {
        this.$toast = Vue.$toast
      }
    })
  }
}

export default plugin
