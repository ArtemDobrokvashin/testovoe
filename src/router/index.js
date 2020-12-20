import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contacts from '@/views/Contacts.vue'
import Bancheck from '@/views/Bancheck.vue'
import RegionSelect from '@/components/region-select.vue'
import CountrySelect from '@/components/country-select.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bancheck',
    name: 'Bancheck',
    component: Bancheck,   
  },
  {
    path: '/contacts',
    name: 'Contacts',   
    component: Contacts,
  }
]

const router = new VueRouter({
  routes
})

export default router; VueCountryRegionSelect

const install = function (Vue) {
  const components = { CountrySelect, RegionSelect }
  Object.keys(components).forEach(name => {
      Vue.component(name, components[name])
  })
}

const VueCountryRegionSelect = { CountrySelect, RegionSelect, install }
export { CountrySelect, RegionSelect }
