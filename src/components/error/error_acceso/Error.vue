<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-danger" style="color: #fef9e7">
        <h5 class="modal-title">Error!!.</h5>

        <a type="button" :href="this.path"
          ><i class="bi-x-lg" style="color: black"></i
        ></a>
      </div>
      <div class="modal-body">
        <p>Usted no tiene permiso!!.</p>
        <p>Desea cerrar sesión e ingresar con otra cuenta?</p>
      </div>
      <div class="modal-footer">
        <a
          type="button"
          class="btn btn-danger"
          data-bs-dismiss="modal"
          :href="this.path"
          >No</a
        >
        <a
          type="button"
          class="btn btn-light"
          data-bs-dismiss="modal"
          href="/logout"
          >Si</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import GetUrls from "../../../services/Helpers";
export default {
  name: "error-acceso",
  data() {
    return {
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
};
</script>



