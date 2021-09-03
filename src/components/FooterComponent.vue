<template id="template-footer">
  <th scope="row" colspan="2">Total productos</th>
  <td>{{ TotalQuantity }}</td>
  <td>
    <button class="btn btn-danger btn-sm" id="vaciar-carrito" @click="cleanTrolley">
      vaciar todo
    </button>
  </td>
  <td class="font-weight-bold">Cantiada total a pagar: $<span> {{ TotalPrice }}</span></td>
</template>

<script>
import {useStore} from 'vuex'
import { computed } from 'vue';

export default {
    name: 'FooterComponent',
    setup(){
        const store = useStore();

        const TotalQuantity = computed( () => store.getters.TotalQuantity)
        const TotalPrice = computed( () => store.getters.TotalPrice)

        const cleanTrolley = () => {store.commit('cleanTrolley')}

        return {TotalQuantity, TotalPrice, cleanTrolley}
    }
};
</script>