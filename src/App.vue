<template>
  <div id="app">
   <p>Product Details</p>
   <navigation></navigation>
    <router-view></router-view>

   <hr>
  </div>
</template>

<script>


export default {
  name: 'App',
  computed: {
    gridEvents () {
      return new kendo.data.DataSource ({
        data: this.$store.state.customers
      })
    }
  }
}
</script>

<style>
 
</style>
