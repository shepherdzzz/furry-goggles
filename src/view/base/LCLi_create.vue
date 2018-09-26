<template>
  <div class="li-use">
    <div class="li-title">
      <i class="el-icon-circle-plus"></i>
      <my-ipt :preName="'标题'"></my-ipt>
    </div>
  </div>
</template>
<script>
import myIpt from '@/view/base/ipt.vue'
export default {
  data() {
    return {}
  },
  components: {
    'my-ipt': myIpt
  }
}
</script>
<style scoped>
  .li-title{
    display: flex;
  }
  .li-title i{
    margin-top: 0.6rem;
    cursor: pointer;
  }
</style>
