<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/">
          Amen Life
        </a>
        <span
          :class="{ 'is-active': menuBurger }"
          class="navbar-burger burger"
          @click="toggleBurger(!menuBurger)">
          <span/>
          <span/>
          <span/>
        </span>
      </div>
      <div
        :class="{ 'is-active': menuBurger }"
        class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            登録
          </a>
          <a class="navbar-item">
            一覧
          </a>
        </div>
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
