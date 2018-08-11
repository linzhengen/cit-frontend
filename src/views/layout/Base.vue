<template>
  <div>
    <app-header v-if="showHeader"/>
    <transition>
      <router-view></router-view>
    </transition>
    <app-footer v-if="showFooter"/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import { mapState } from 'vuex'

export default {
  name: 'LayoutBase',
  components: {
    AppHeader,
    AppFooter
  },
  computed: {
    ...mapState(['showHeader', 'showFooter'])
  }
}
</script>

<style lang="scss" scoped>
</style>
