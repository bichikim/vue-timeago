import Vue from 'vue'
import Timeago from '../src'
import App from './App.vue'

const r = require.context('date-fns/locale', true, /^\.\/([\w\_]+)\/index\.js/)
const locales = {}
r.keys().forEach(v => {
  const [, name] = /^\.\/([\w\_]+)\/index\.js/.exec(v)
  locales[name] = r(v)
})

Vue.use(Timeago, {
  locales
})

new Vue({
  el: '#app',
  render: h => h(App, {
    props: {
      localeNames: Object.keys(locales)
    }
  })
})
