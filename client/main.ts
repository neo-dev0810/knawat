import Vue from 'vue'

import '../imports/ui/plugins'
import store from "../imports/ui/store";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';


import App from '../imports/ui/App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Meteor.startup(() => {
  new Vue({
    el: '#app',
    store: store,
    ...App, 
  })
})

