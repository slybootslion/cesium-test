<template>
  <div class="hello">
    <div id="cesiumContainer" />
  </div>
</template>

<script>
import { Viewer, ScreenSpaceEventType, Clock, ArcGisMapServerImageryProvider, SceneMode, WebMercatorProjection, DataSourceCollection, EllipsoidTerrainProvider } from 'cesium'
import 'cesium/Source/Widgets/widgets.css'

export default {
  name: 'HelloWorld',
  mounted() {
    const options = {
      animation: false, // 是否创建动画小器件，左下角仪表
      baseLayerPicker: false, // 是否显示图层选择器
      fullscreenButton: false, // 是否显示全屏按钮
      geocoder: false, // 是否显示geocoder小器件，右上角查询按钮
      homeButton: false, // 是否显示Home按钮
      infoBox: false, // 是否显示信息框
      sceneModePicker: false, // 是否显示3D/2D选择器
      selectionIndicator: false, // 是否显示选取指示器组件
      timeline: false, // 是否显示时间轴
      navigationHelpButton: false, // 是否显示右上角的帮助按钮
      scene3DOnly: true, // 如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
      clock: new Clock(), // 用于控制当前时间的时钟对象
      selectedImageryProviderViewModel: undefined, // 当前图像图层的显示模型，仅baseLayerPicker设为true有意义
      selectedTerrainProviderViewModel: undefined, // 当前地形图层的显示模型，仅baseLayerPicker设为true有意义
      imageryProvider: new ArcGisMapServerImageryProvider({
        url:
          'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
      }),
      terrainProvider: new EllipsoidTerrainProvider(), // 地形图层提供者，仅baseLayerPicker设为false有意义
      fullscreenElement: document.body, // 全屏时渲染的HTML元素,
      useDefaultRenderLoop: true, // 如果需要控制渲染循环，则设为true
      targetFrameRate: undefined, // 使用默认render loop时的帧率
      showRenderLoopErrors: false, // 如果设为true，将在一个HTML面板中显示错误信息
      automaticallyTrackDataSourceClocks: true, // 自动追踪最近添加的数据源的时钟设置
      contextOptions: {
        webgl: {
          preserveDrawingBuffer: true // 设置canvas截图使用，不设置截屏图片黑色
        }
      }, // 传递给Scene对象的上下文参数（scene.options）
      sceneMode: SceneMode.SCENE3D, // 初始场景模式
      mapProjection: new WebMercatorProjection(), // 地图投影体系
      dataSources: new DataSourceCollection()
      // 需要进行可视化的数据源的集合
    }

    new Promise(resolve => {
      // 主要地球
      let viewer = new Viewer('cesiumContainer', options)
      viewer._cesiumWidget._creditContainer.style.display = 'none'
      viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
        ScreenSpaceEventType.LEFT_DOUBLE_CLICK
      ) // 取消双击锁定
      viewer.scene.postProcessStages.fxaa.enabled = false
      resolve(viewer)
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.hello {
  width: 100%;
  height: 100%;
}
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
