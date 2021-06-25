<template>
  <div class="container text-center mt-5">
    <div>
      <div class="card m-auto bg-light"><h3>Ventas</h3></div>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Productos</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(venta, index) in ventas" :key="index">
            <td>{{ index }}</td>
            <td>{{ venta.producto }}</td>
            <td>{{ venta.detalles }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "ventas",
  props: {
    title: {
      type: String,
      default: "Ventas",
    },
  },
  data() {
    return {
      ventas: [
        { producto: "papel bond", detalles: "2 resmas" },
        { producto: "papel canson", detalles: "1 millare" },
        { producto: "Papel bulky", detalles: "1 millare" },
      ],
    };
  },
};
</script>
<style scoped>
</style>