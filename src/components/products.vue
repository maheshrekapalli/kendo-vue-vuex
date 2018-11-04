<template>
   <div id="vueapp">
 
        <kendo-grid id="grid" :data-source="products" :editable="'inline'" :schema="schema" @save="onSave" @remove="onRemove">
            <kendo-grid-column :field="'ProductName'" :title="'Product Name'" :width="150"></kendo-grid-column>
            <kendo-grid-column :field="'ProductType'" :title="'Product Type'" :width="120"></kendo-grid-column>
            <kendo-grid-column :field="'Status'" :title="'Status'" :width="120"></kendo-grid-column>
            <kendo-grid-column :field="'Country'" :title="'Country'" :width="120"></kendo-grid-column>
            <kendo-grid-column :command='["edit", "destroy"]' :width="120"></kendo-grid-column>
        </kendo-grid>
    </div>
</template>

<script>


export default {
  name: 'products',
  data () {
    return {
      schema: {
           model: {
        ProductName: {
            type: 'string',
        },
        ProductType: {
            type: 'string',
        },
        Status: {
            type: 'string',
        },
        Country: {
            type: 'string',
          }
        } 
      }
    }
  },

   computed: {
    products () {
          return new kendo.data.SchedulerDataSource ({
            data: this.$store.state.products
          })
        }
  },

   methods: {
      onSave (ev) {
        this.$store.commit('edit', ev.model.toJSON())
        alert("Record updated successfully")
      },
      onRemove (ev) {
        this.$store.commit('remove', ev.row)
      }
   
    }
}
</script>

