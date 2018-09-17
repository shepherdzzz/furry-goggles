<template>
  <div id="app">
    <all-header></all-header>
    <router-view></router-view>
  </div>
</template>
<script>
import allHeader from '@/view/base/allHeader.vue'
export default {
  name: 'App',
  components: {
    'all-header': allHeader
  }
}
</script>
