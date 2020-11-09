<template>
  <div id="#app" class="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>

import EmptyLayout from '@/layouts/EmptyLayout'
import BaseLayout from '@/layouts/BaseLayout'

  export default {
    computed: {
      layout() {
        console.log()
        return (this.$route.meta.layout || 'empty') + '-layout'
      }
    },
    components: {
      EmptyLayout, BaseLayout
    }
  }
</script>

<style lang="scss">
  @import '~bootstrap-vue/dist/bootstrap-vue.min.css';

  @import '../src/assets/style.scss';


</style>
