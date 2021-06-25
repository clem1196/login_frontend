<template>
  <div>
    <div class="container mt-5 text-center">
      <div class="card m-auto bg-light"><h3>Usuarios</h3></div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Nombre</th>
            <th>Creado</th>
            <th>Ultimo acceso</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(usuario, index) in usuarios" :key="usuario.idusuario">
            <td>{{ index }}</td>
            <td>{{ usuario.idusuario }}</td>
            <td>{{ usuario.nombre_usuario }}</td>
            <td>{{ usuario.registrado }}</td>
            <td>{{ usuario.ultimo_acceso }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "usuarios",
  props: {
    title: {
      type: String,
      default: "Lista de Usuarios",
    },
  },
  data() {
    return {
      usuarios: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        const token = localStorage.getItem("token");
        const result = await axios.get("http://localhost:4000/api/usuarios", {
          headers: {
            Authorization: JSON.parse(token),
          },
        });
        this.usuarios = result.data.usuarios;
        //console.log(result.data.usuarios);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>