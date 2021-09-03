<template>
  <h1 class="text-center">Carrito</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Precio</th>
        <th scope="col">Cantidad</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in trolleys" :key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.title }}</td>
        <td>{{ item.precio }}</td>
        <td>{{ item.cantidad }}</td>
      </tr>
    </tbody>
    
  </table>
</template>

<script>
export default {
  name: "TrolleyComponent",
  props: {
    trolleys: {
      type: Object,
      Required: true,
    },
  },
};
</script>