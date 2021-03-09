<template>
  <div class="container">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/views/cesium_demo/components/HelloWorld'

export default {
  name: 'Cesium1',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.container {
  width: 100%;
  height: calc(100vh - 130px);
  background-color: #ededed;
}
</style>
