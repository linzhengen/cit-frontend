<template>
  <div class="container">
    <section class="section">
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <h1 class="title">404</h1>
            <p class="title">Page Not Found</p>
          </div>
        </div>
      </nav>
      <nav class="level">
        <div class="level-item has-text-centered">
          <div>
            <router-link :to="{ name: 'ReportList' }">Home</router-link>
          </div>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style lang="scss" scoped>

</style>
