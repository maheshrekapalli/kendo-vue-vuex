import Vue from 'vue'
import Router from 'vue-router'
import products from '@/components/products.vue'
import addProduct from '@/components/AddProduct.vue'
import removeProduct from '@/components/RemoveProduct.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/product-view'
  },
    {
      path: '/product-view',
      name: 'products',
      component: products
    },
    {
      path: '/add-product',
      name: 'addProduct',
      component: addProduct
    },
    {
      path: '/remove-product',
      name: 'removeProduct',
      component: removeProduct
    }
  ]
})
