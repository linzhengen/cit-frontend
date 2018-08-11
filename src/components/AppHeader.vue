<template>
  <nav class="navbar is-transparent is-fixed-top">
    <div class="navbar-brand">
      <a
        class="navbar-item"
        href="/">
        Amen Life
      </a>
      <div
        :class="{ 'is-active': menuBurger }"
        class="navbar-burger burger"
        @click="toggleBurger(!menuBurger)">
        <span/>
        <span/>
        <span/>
      </div>
    </div>
    <div
      :class="{ 'is-active': menuBurger }"
      class="navbar-menu">
      <div class="navbar-item">
        登録
      </div>
      <div class="navbar-item">
        一覧
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'AppHeader',
    data () {
      return {}
    },
    computed: {
      ...mapGetters([
        'menuBurger'
      ])
    },
    methods: {
      ...mapActions([
        'toggleBurger'
      ]),
    }
  }
</script>
