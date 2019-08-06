<template>
  <div class="mycharts">
    <Chart class="full-height full-width" :option="lineOption"></Chart>
  </div>
</template>
<script>
import { lineOption } from './chartOption/lineOption';
export default {
  
}
</script>
<style lang="scss" scoped>
.myChart{
  width: 800px;
  height: 800px;
  border: 1px solid red;
}
</style>
