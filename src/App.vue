<template>
  <div class="container">
    <h1 class="text-center">CARRITO</h1>
    {{ trolley }}
    <hr />
    <div class="row">
      <card-component v-for="item of products" :key="item.id" :product="item" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "App",
  components: {
    CardComponent,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("fetchData");
    });
    const products = computed(() => store.state.products);
    const trolley = computed(() => store.state.trolley);

    return { products, trolley };
  },
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
.row {
  display: flex;
  justify-content: space-around;
}
</style>