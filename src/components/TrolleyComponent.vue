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
        <tr>
            <td>lalsdlasd</td>
        </tr>
    </tfoot>
  </table>
</template>

<script>
import itemComponent from './itemComponent.vue';
import { useStore} from 'vuex';
import {computed} from 'vue'
export default {
  components: { itemComponent },
  name: "TrolleyComponent",
  setup(){
    const store = useStore();
    const trolleys = computed(() => store.state.trolley);
    return {trolleys}
  }
};
</script>