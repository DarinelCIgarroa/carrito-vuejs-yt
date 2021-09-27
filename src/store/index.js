import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    trolley:{}
  },
  mutations: {
    setProducts(state, payload){
      state.products = payload
    },
    setTrolley(state,payload){
      state.trolley[payload.id] = payload
    },
    cleanTrolley(state){
      state.trolley = {}
    },
    augmentedProduct(state,payload){
      state.trolley[payload].cantidad = state.trolley[payload].cantidad + 1
    },
    decreaseProduct(state,payload){
      state.trolley[payload].cantidad = state.trolley[payload].cantidad - 1
      if(state.trolley[payload].cantidad === 0 ){
        delete state.trolley[payload]
      }
    }
  },
  actions: {
    async fetchData({commit}){
      try {
        const response = await fetch('api.json')
        const data = await response.json()
        commit('setProducts', data)
      } catch (error) {
        console.error(error)
      }
    },
    addTrolley({commit,state},producto){
      console.log('addacar',producto.id)
      state.trolley.hasOwnProperty(producto.id)  ? producto.cantidad = state.trolley[producto.id].cantidad + 1 : producto.cantidad = 1
      commit('setTrolley',producto) 
    }
  },
  getters:{
    TotalQuantity(state){
      return Object.values(state.trolley).reduce( (acc, {cantidad} ) => acc + cantidad, 0)
    },
    TotalPrice(state){
      return Object.values(state.trolley).reduce( (acc, {cantidad, precio} ) => acc + cantidad * precio , 0)
    },
  },
  modules: {

  }
})
