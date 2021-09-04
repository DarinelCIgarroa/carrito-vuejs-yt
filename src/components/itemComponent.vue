<template>
  <tr>
    <th scope="row">{{ product.id }}</th>
    <td>{{ product.title }}</td>
    <td>${{ product.precio }}</td>
    <td>{{ product.cantidad }}</td>
    <td>${{ totalProduct }}</td>
    <td>
      <button class="btn btn-success" @click="augmentedProduct(product.id)">
        +
      </button>
      <button class="btn btn-danger" @click="decreaseProduct(product.id)">
        -
      </button>
    </td>
  </tr>
</template>

<script>
import { useStore } from "vuex";
import { computed } from 'vue';
export default {
  name: "productComponent",
  props: {
    product: {
      type: Object,
      Required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const totalProduct = computed(() => props.product.cantidad * props.product.precio );

    const augmentedProduct = id => {
      store.commit("augmentedProduct", id);
    };
    const decreaseProduct = id => {
      store.commit("decreaseProduct", id);
    };
    return { augmentedProduct, decreaseProduct, totalProduct };
  },
};
</script>
<style scoped>
button {
  margin: 2px;
}
</style>