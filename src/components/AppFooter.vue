<template>
  <footer class="footer">
    <div class="is-fixed is-pulled-right">
      <button
        id="jumpBtn"
        @click="jumpTop"
      >Top
      </button>
    </div>
    <div class="container">
      <div class="content has-text-centered">
        <p>
          Copyright ©Amen Life Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import jump from 'jump.js';

export default {
  name: 'AppFooter',
  methods: {
    jumpTop() {
      jump('html');
    },
  },
};
</script>

<style lang="scss" scoped>
  #jumpBtn {
    position: fixed; /* Fixed/sticky position */
    bottom: 10px; /* Place the button at the bottom of the page */
    right: 10px; /* Place the button 30px from the right */
    z-index: 999; /* Make sure it does not overlap */
    border: none; /* Remove borders */
    outline: none; /* Remove outline */
    background-color: rgba(2, 4, 2, 0.94); /* Set a background color */
    color: white; /* Text color */
    cursor: pointer; /* Add a mouse pointer on hover */
    padding: 10px; /* Some padding */
    border-radius: 10px; /* Rounded corners */
    font-size: 18px; /* Increase font size */
  }
</style>
