// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import { store } from './store'
import navigation from './components/navigation.vue'

import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { AutoComplete,
        ComboBox,
   DropdownsInstaller  } from '@progress/kendo-dropdowns-vue-wrapper'
import { DataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'
import { Menu, LayoutInstaller } from '@progress/kendo-layout-vue-wrapper'


Vue.use(DataSourceInstaller)
Vue.use(LayoutInstaller)
Vue.use(GridInstaller)
Vue.use(DropdownsInstaller)
Vue.component('navigation', navigation)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App},
  template: '<App/>',
  render: J => J(App)
})
