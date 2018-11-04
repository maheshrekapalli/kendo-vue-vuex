<template>
  <nav>
    <kendo-menu>
      <router-link to="/product-view"  tag="li" active-class="k-state-active" class="k-item k-state-default k-first">List of Products</router-link>
      <router-link to="/add-product"  tag="li" active-class="k-state-active" class="k-item k-state-default k-first">Add</router-link>
      <router-link to="/remove-product"  tag="li" active-class="k-state-active" class="k-item k-state-default k-first">Remove</router-link>
    </kendo-menu>
  </nav>
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>