<template>
  <div>
    <div class="card" style="width: 33rem">
      <div class="card-header bg-info">
        <h2 class="text-center mt-2">
          <img
            src="../../../assets/icons/person-fill.svg"
            width="50"
            height="50"
          />
        </h2>
      </div>
      <form
        @submit.prevent="onSubmit"
        class="m-4 text-center"
        style="width: 30rem"
      >
        <div class="row mb-3">
          <div class="col-sm-12">
            <label for="nombre_usuario" class="col-sm-4 col-form-label"
              >Usuario: {{ nombre_usuario }}</label
            >
            <input
              type="text"
              class="form-control text-center"
              id="usuario"
              v-model="nombre_usuario"
              required
            />
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-12">
            <label for="contraseña" class="col-sm-4 col-form-label"
              >Contraseña: {{ contraseña }}</label
            >
            <input
              type="password"
              class="form-control text-center"
              id="contraseña"
              v-model="contraseña"
              required
            />
          </div>
        </div>
        <div class="d-grid gap-2 text-center">
          <button type="submit" class="btn btn-info" value="Submit">
            <h3>Login</h3>
          </button>
          <a class="btn btn-light" href="/"> Cancelar</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  props: {
    title: {
      type: String,
      default: "Login",
    },
  },
  data() {
    return {
      //usuario
      nombre_usuario: "",
      contraseña: "",
    };
  },
  methods: {
    async onSubmit() {
      try {
        let login = {
          nombre_usuario: this.nombre_usuario,
          contraseña: this.contraseña,
        };
        this.$emit("login-submitted", login);
        this.nombre_usuario = "";
        this.contraseña = "";
        const result = await axios({
          method: "POST",
          url: "http://localhost:4000/api/ingreso",
          data: login,
        });
        if (result.data.Message.length > 0) {
          localStorage.setItem("token", JSON.stringify(result.data.token));
          location.replace("/");
          this.usuarios = result.data.user;
          console.log(result.data.Message);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
</style>