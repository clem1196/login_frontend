<template>
  <div class="">
    <div class="container-sm">
      <div class="row">
        <div class="col-4 align-self-center mt-3 m-auto">
          <h1 class="text-center mt-2"></h1>
          <div class="form-header mt-3">
            <h2 class="text-center mt-2">
              <i
                class="bi-person-circle"
                style="font-size: 6rem; color: white"
              ></i>
            </h2>
          </div>
          <form @submit.prevent="onSubmit">
            <div class="div-input">
              <input
                type="text"
                class="form-control form-input"
                v-model="nombre_usuario"
                required
                placeholder="Usuario"
              />
            </div>
            <div class="div-input">
              <input
                type="password"
                class="form-control form-input"
                v-model="contraseña"
                required
                placeholder="Contraseña"
              />
            </div>
            <div class="div-button">
              <button
                class="form-button btn btn-sm"
                type="submit"
                value="Submit"
              >
                <h3 class="button-h3">Login</h3>
              </button>
              <a class="form-a btn btn-sm" :href="path"> <h5>Cancelar</h5></a>
            </div>
          </form>
          <div class="mt-5">
            <p v-if="success" class="alert alert-success">{{ success }}</p>
            <p v-if="err" class="alert alert-danger">{{ err }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import GetUrls from "../../../services/Helpers";

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
      //err
      err: "",
      success: "",
      //rutas
      url: [],
      rol: "",
      path: "",
    };
  },
  async mounted() {
    const roles = await GetUrls.getUrls();
    this.url = roles.url;
    this.rol = roles.rol;
    this.path = roles.path;
    //console.log(this.path);
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
          this.usuarios = result.data.user;
          this.success = result.data.Message;
          this.err = false;
          location.replace("/");
        }
      } catch (error) {
        this.err = "El usuario o la contraseña no es correcta!!";

        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.form-header {
  background: #3498db;
  height: 8rem;
}

.form-input {
  text-align: center;
  color: cornflowerblue;
  height: 3rem;
}
.div-input {
  column-fill: 12pt;
  margin-block: 10pt;
}
.div-button {
  display: grid;
  gap: 4pt;
  text-align: center;
  height: 7rem;
}
.form-button {
  background: #3498db;
  height: 4rem;
}
.form-a {
  background: #aed6f1;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
}
.button-h3 {
  color: white;
}
</style>