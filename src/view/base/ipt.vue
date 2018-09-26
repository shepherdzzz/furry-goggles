<template>
  <div class="ipt">
    <el-input
      v-model="input"
      placeholder="请输入内容"
      clearable
    >
      <template slot="prepend">{{preName}}</template>
    </el-input>
  </div>
</template>
<script>
export default {
  data () {
    return {
      input: ''
    }
  },
  props: [
    'preName'
  ]
}
</script>
<style scoped>
  .ipt{
    display: inline;
  }
</style>
