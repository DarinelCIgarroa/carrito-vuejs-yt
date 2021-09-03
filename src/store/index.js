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
      state.trolley.hasOwnProperty(producto.id)  ? producto.cantidad = state.trolley[producto.id].cantidad + 1 : producto.cantidad = 1
      commit('setTrolley',producto) 
    }
  },
  modules: {

  }
})
