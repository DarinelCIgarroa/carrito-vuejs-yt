<template>
  <div class="card" style="width: 18rem">
    <img
      :src="product.url"
      class="card-img-top"
      :alt="`Imagen-${product.title}`"
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">$ {{ product.precio }}</p>
    </div>
    <div class="card-body">
      <button class="btn btn-info" @click="addProduct(product)">Comprar</button>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'

export default {
  name: "CardComponent",
  props: {
    product: {
      type: Object,
      Required: true,
    },
  },
  setup(){
      const store = useStore();
      
      const addProduct = ((product) =>{
          store.dispatch('addTrolley', product)
      })
    
      return {addProduct}
  }
};
</script>

<style scoped>
    .card{
        margin: 5px;
    }
</style>