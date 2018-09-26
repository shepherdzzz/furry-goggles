<template>
  <div id="home">
    <div class="test" v-for="item in data1">
      {{item.runoob_id}}
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
window.$ = $
window.jQuery = $
// import {testGet} from '@/api/test1.js'
// import Vue from 'vue'
export default {
  data () {
    return {
      data1: []
    }
  },
  created () {
    // this.getTest()
    // this.getOne()
  },
  methods: {
    getOne: function () {
      let _this = this
      $.ajax({
        url: '/api/test/getTable.php?action=',
        type: 'get',
        dataType: 'json',
        success: function (res) {
          _this.data1 = res
        },
        error: function (res) {
          console.log(res)
        }
      })
    }
  }
}
</script>
<style scoped></style>
