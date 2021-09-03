<template>
  <tr>
    <th scope="row">{{ product.id }}</th>
    <td>{{ product.title }}</td>
    <td>${{ product.precio }}</td>
    <td>{{ product.cantidad }}</td>
    <td>${{ product.precio * product.cantidad }}</td>
    <td>
        <button class="btn btn-success">+</button>
        <button class="btn btn-danger">-</button>
    </td>
  </tr>
</template>

<script>
export default {
    name: "productComponent",
    props:{
        product:{
            type: Object,
            Required: true
        }
    }
}
</script>
<style scoped>
button{
    margin: 2px;
}
</style>