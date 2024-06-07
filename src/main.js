import Vue from 'vue'
import App from './App.vue'
// 第一步：导入button组件
import OneButton from './components/button.vue'
import OneDialog from './components/dialog.vue'
import OneInput from './components/input.vue'
import OneSwitch from './components/switch.vue'
import OneRadio from './components/radio.vue'


Vue.config.productionTip = false
 
// 第二步：注册组件,设置(组件名，组件)
Vue.component(OneButton.name, OneButton)
Vue.component(OneDialog.name, OneDialog)
Vue.component(OneInput.name, OneInput)
Vue.component(OneSwitch.name, OneSwitch)
Vue.component(OneRadio.name, OneRadio)


new Vue({ 
  render: h => h(App)
}).$mount('#app')