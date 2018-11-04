import products from "../assets/data-provider.json"
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
     state : {
        products: products
    },
    getters : {
        id : state => {
            return state.products.map((id) => {
                return id.ProductID
            })
        },
        status: state => {
            let allStatus = state.products.map((val) => {
                return val.Status
            })
            return allStatus.filter((value, index, self) => {
                return self.indexOf(value) === index;
            })
        }
    },
    mutations : {
        add (state, product) {
        state.products.sort((a,b) => {
                return b.ProductID - a.ProductID
            })
            product.ProductID = state.products[0].ProductID + 1
            state.products.push(product)
        },
        remove (state, index) {
            state.products.splice(index, 1)
        },
        edit (state, product) {
           let foundProduct = state.products.find((prod) => {
                return prod.ProductID === product.ProductID
            })
            let index = state.products.indexOf(foundProduct)
            state.products[index] = product
        },
    },  

    actions : {
        add (context, product) {
            return new Promise((resolve, reject) => {
                context.commit('add', product)
                resolve(context.getters.id.indexOf(product.ProductID))
            })
        },
        remove (context, product) {
            return new Promise((resolve, reject) => {
                let foundProduct = context.state.products.find((prod) => {
                    return prod.ProductID === product.ProductID
                })

                let index = context.state.products.indexOf(foundProduct)
               if (!product || index < 0 ) {
                    reject('product not found!')
                } else {
                    context.commit('remove', index)
                    resolve(Object.assign({}, foundProduct))
                }
            })
        }
    }

})

