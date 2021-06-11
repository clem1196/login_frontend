<template>
  <div>
    <div>
      <h2 class="text-center">{{ title }}</h2>
    </div>
    <div class="mt-4">
      <h4>Counter</h4>
      <button @click="Aumentar">Aumentar Precio</button>
      <button @click="Disminuir">Disminuir Precio</button>
      <div>El precio del {{ producto }} es: {{ price }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  props: {
    title: {
      type: String,
      default: "Welcome to Your Vue.js App",
    },
  },
  data() {
    return {
      //Precio
      price: 0,
      producto: "plátano",
    };
  },
  methods: {
    Aumentar() {
      //const precioProducto = this.precio++;
      this.price++;
    },
    Disminuir() {
      //const precioProducto = this.precio++;
      this.price--;
    },
  },
};
</script>

<style scoped>
</style>
