<template>
  <div class="container text-center mt-5">
    <div class="card m-auto">
      <button class="btn btn-light btn-lg">Inicio</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquid
        cumque reprehenderit, animi est quaerat doloremque magnam, in excepturi
        assumenda quod numquam dolorum similique necessitatibus autem ad modi at
        quisquam.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  props: {
    title: {
      type: String,
      default: "Home",
    },
  },
};
</script>
<style scoped>
</style>
