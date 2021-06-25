
<script>
export default {
  name: "logout",
  mounted() {
    this.Logout();
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