import Layout from '@/layout'
import CesiumDom from '@/views/cesium_demo/cesium1'

export default {
  path: '/cesium',
  component: Layout,
  redirect: '/cesium/demo1',
  name: 'cesium',
  meta: {
    title: 'Cesium',
    icon: 'sidebar-keep-alive'
  },
  children: [
    {
      path: 'demo1',
      name: 'cesiumDemo1',
      // component: () => import(/* webpackChunkName: 'keep_alive_example' */ '@/views/cesium_demo/cesium1'),
      component: CesiumDom,
      meta: {
        title: 'cesium演示',
        sidebar: false,
        activeMenu: '/cesium_demo'
      }
    }
  ]
}
