<template>
  <div class="container">
    <h1 class="text-center">Tienda</h1>

    <hr />
    <div class="row">
      <card-component v-for="item of products" :key="item.id" :product="item" />
    </div>
    <div class="row">
      <trolley-component/>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import CardComponent from "@/components/CardComponent.vue";
import TrolleyComponent from "./components/TrolleyComponent.vue";

export default {
  name: "App",
  components: {
    CardComponent,
    TrolleyComponent,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("fetchData");
    });
    const products = computed(() => store.state.products);
    return { products };
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