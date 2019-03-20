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
          <router-link class="navbar-item" :to="{ name: 'ReportForm' }">登録</router-link>
          <router-link class="navbar-item" :to="{ name: 'ReportList' }">一覧</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppHeader',
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'menuBurger',
    ]),
  },
  methods: {
    ...mapActions([
      'toggleBurger',
    ]),
  },
};
</script>
