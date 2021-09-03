<template>
  <div class="container">
    <card-component />
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue"

export default {
  name: 'App',
  components: {
    CardComponent
  }
}
</script>

<style>
@import  "../node_modules/bootstrap/dist/css/bootstrap.min.css"
</style>