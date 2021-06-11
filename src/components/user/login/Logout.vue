<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="Logout()">Log Out</button>
  </div>
</template>
<script>
export default {
  name: "logout",
  props: {
    title: {
      type: String,
      default: "Logout",
    },
  },
  data() {
    return {};
  },
  methods: {
    Logout() {
      localStorage.removeItem("token");
      localStorage.clear();
      location.replace("/");
    },
  },
};
</script>
<style scoped>
</style>