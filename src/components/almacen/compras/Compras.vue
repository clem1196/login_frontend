<template>
  <div class="container text-center mt-5">
    <div>
      <div class="card m-auto bg-light"><h3>Compras</h3></div>

      <table class="table table-light table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Productos</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(compra, index) in compras" :key="index">
            <td>{{ index }}</td>
            <td>{{ compra.producto }}</td>
            <td>{{ compra.detalles }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "compras",
  props: {
    title: {
      type: String,
      default: "Compras",
    },
  },
  data() {
    return {
      compras: [
        { producto: "papel bond", detalles: "8 resmas" },
        { producto: "papel canson", detalles: "2 millares" },
        { producto: "Papel bulky", detalles: "2 millares" },
      ],
    };
  },
};
</script>
<style scoped>
</style>