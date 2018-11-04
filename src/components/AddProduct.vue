<template>
  <div>
    <ul>
      <li>
          <label>Product Name</label>
          <br />
          <input type="text" class="k-textbox"  v-model="newProduct.ProductName" />
        </li>

      <li>
        <label>Product Type</label>
        <br />
        <input type="text" class="k-textbox"  v-model="newProduct.ProductType" />
      </li>

      <li>
        <label>Status</label>
       
        <kendo-combobox
                    v-model="newProduct.Status"
                    :placeholder="'Select'"
                    :data-source="status"
                    :filter="'contains'">
      </kendo-combobox> 
      </li>

      <li>
        <label>Country</label>
        <br />
        <input type="text" class="k-textbox" v-model="newProduct.Country" />
      </li>

      <li>
          <button class="k-button" @click="onAdd">Add</button>
          <button class="k-button"  @click="onCancel">Cancel</button>
      </li>
    </ul>
  </div>
</template>

<script>

  
    export default {
      name: 'addProduct',
      data () {
        return {
          newProduct: {
            ProductID: '',
            ProductName: '',
            ProductType:'',
            Status: '',
            Country: ''
          }
        }
      },
      computed: {
        products () {
          return this.$store.state.products
        },
        status () {
            return this.$store.getters.status
        }
    
      },
      methods: {
       onAdd () {
        this.$store.dispatch('add', this.newProduct).then(response => {
          this.$router.push('/product-view')}, (error) => {
       })},      
        onCancel () {
          this.$router.push({name: 'products'})
        }
      }
    }
  </script>

  