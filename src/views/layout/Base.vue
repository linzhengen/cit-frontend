<template>
  <div>
    <app-header/>
    <transition>
      <router-view/>
    </transition>
    <app-footer/>
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader'
  import AppFooter from '@/components/AppFooter'

  export default {
    name: 'LayoutBase',
    components: {
      AppHeader,
      AppFooter
    },
  }
</script>

<style lang="scss" scoped>
</style>
