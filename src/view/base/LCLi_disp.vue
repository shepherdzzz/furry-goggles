<template>
  <div class="li-disp">
    <div class="li-title">
      <i class="el-icon-circle-plus"></i>
      <span class="li-title-n">{{LCLi.title}}</span>
    </div>
    <div class="li-cont">
      {{LCLi.cont}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: [
    'LCLi'
  ]
}
</script>
<style scoped>
.li-cont{
  margin-top: 0.5rem;
  padding: 1rem;
}
.li-title{
  padding-left: 0.8rem;
}
.li-title i{
  cursor: pointer;
}
.li-title-n{
  font-size: 2rem;
  margin-left: 2rem;
}
</style>
