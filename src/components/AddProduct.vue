<template>
  <div>
    <ul>
      <!-- <li>
        <label>Product ID</label> <span class="hint">(Product ID must be unique! Use the autocomplete to only see the existing IDs and create a unique one.)</span>
        <br />
        <kendo-autocomplete :data-source="products" :data-text-field="'ProductID'" v-model="newProduct.ProductID"></kendo-autocomplete>
      </li> -->

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
        <!--<kendo-autocomplete :class="'k-autocomplete'" :width="'120'"  :data-source="status"  v-model="newProduct.Status"></kendo-autocomplete> -->
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
            console.log(this.newProduct)
        console.log('Got some user data, now lets show something with it')
        this.$router.push('/product-view')}, (error) => {
        console.log('Got nothing for this user except bad news.')
        })},      
        onCancel () {
          this.$router.push({name: 'products'})
        }
      }
    }
  </script>

  <style scoped>
    li {
      list-style-type: none;
      margin-top: 20px;
    }

    label {
      font-weight: bold;
    }

    span.hint {
      font-size: 12px;
      font-style: italic;
    }

    .k-autocomplete.k-header {
    width: 300px;
}
  </style>