import Vue from 'vue'
import Router from 'vue-router'
import CesiumViewer from '@/components/cesiumViewer'
import cesiumPosition from '@/components/cesiumPosition'
import cesiumEntities from '@/components/cesiumEntities'
import cesiumFly from '@/components/cesiumFly'
import cesiumTip from '@/components/cesiumTip'
import resource from '@/components/resource'
import flight from '@/components/flight'
import draw from '@/components/cesiumDrawHelper'
import test from '@/components/cesiumDrawHelperTest'
import convert from '@/components/cesiumDrawHelperConvert'
import drag from '@/components/vuedrraggable'
Vue.use(Router)

export default new Router({
  // mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      name: 'cesiumViewer',
      component: CesiumViewer
    },
    {
      path: '/position',
      name: 'cesiumPosition',
      component: cesiumPosition
    },
    {
      path: '/entities',
      name: 'entities',
      component: cesiumEntities
    },
    {
      path: '/fly',
      name: 'fly',
      component: cesiumFly
    },
    {
      path: '/tip',
      name: 'tip',
      component: cesiumTip
    },
    {
      path: '/resource',
      name: 'resource',
      component: resource
    },
    {
      path: '/flight',
      name: 'flight',
      component: flight
    },
    {
      path: '/draw',
      name: 'draw',
      component: draw
    },
    
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/convert',
      name: 'congvert',
      component: convert
    },
    {
      path: '/drag',
      name: 'drag',
      component: drag
    }
  ]
})
