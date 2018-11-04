<template>
  <div>
    <label>Product Name</label>
    <kendo-autocomplete :data-source="products" :data-text-field="'ProductName'"
      @change="onChange"
      :template="'#: ProductName # | #: ProductID #'"></kendo-autocomplete>
    <button class="k-button" @click="onRemove">Remove</button>
    <button class="k-button"  @click="onCancel">Cancel</button>
  </div>
</template>

<script>
  export default {
    name: 'removeProduct',
    data () {
      return {
      }
    },
    computed: {
      products () {
        return this.$store.state.products
      }
    },
    methods: {
      onRemove () {
        this.$store.dispatch('remove',  this.product).then((responce) => {
          alert('Product was removed!')
          this.$router.push({name: 'products'})
        }).catch((reason) => {
          alert(reason)
        })
      },
      onChange (ev) {
          this.product = ev.sender.dataItem()
          console.log(this.product)
      },
      onCancel () {
        this.$router.push({name: 'products'})
      }
    }
  }
</script>