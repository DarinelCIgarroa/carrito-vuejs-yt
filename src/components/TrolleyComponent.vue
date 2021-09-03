<template>
  <h1 class="text-center">Carrito</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Precio</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Total</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
        <item-component v-for="item in trolleys" :key="item.id" :product="item"/>
    </tbody>
    <tfoot>
        <tr id="footer-carrito">
            <th scope="row" colspan="5" v-if="Object.keys(trolleys).length === 0">Carrito vacío -- Compre productos</th>
            <footer-component v-else />
        </tr>
    </tfoot>
  </table>
</template>

<script>
import itemComponent from './itemComponent.vue';
import FooterComponent from './FooterComponent.vue';
import { useStore} from 'vuex';
import {computed} from 'vue'

export default {
  components: { itemComponent, FooterComponent },
  name: "TrolleyComponent",
  setup(){
    const store = useStore();
    const trolleys = computed(() => store.state.trolley);
    return {trolleys}
  }
};
</script>