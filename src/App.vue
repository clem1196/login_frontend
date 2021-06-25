<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-color navbar-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            class="bi bi-list"
            style="font-size: 2.5rem; color: white"
          ></span>
        </button>
        <div
          v-if="!token"
          class="collapse navbar-collapse"
          id="navbarTogglerDemo01"
        >
          <a class="navbar-brand" style="color: white" href="/"
            ><i class="bi-house-door-fill"></i> Home</a
          >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                style="color: white"
                aria-current="page"
                href="/about"
                >About</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                style="color: rgb(163, 211, 238)"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Ventas</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                style="color: rgb(163, 211, 238)"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Compras</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                style="color: rgb(163, 211, 238)"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Usuarios</a
              >
            </li>
          </ul>

          <div>
            <a class="btn btn-primary nav-link li-a" href="/login"
              ><i class="bi-person-fill"></i> Iniciar Sesión</a
            >
          </div>
        </div>

        <div v-else class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" style="color: white" href="/"
            ><i class="bi-house-door-fill"></i> Home</a
          >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active"
                style="color: white"
                aria-current="page"
                href="/about"
                >About</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                style="color: white"
                aria-current="page"
                href="/ventas"
                >Ventas</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                style="color: white"
                aria-current="page"
                href="/compras"
                >Compras</a
              >
            </li>

            <li class="nav-item">
              <a class="nav-link" style="color: white" href="/usuarios"
                >Usuarios</a
              >
            </li>
          </ul>
          <div>
            <a class="btn btn-primary nav-link li-a" href="/logout"
              ><i class="bi-person-fill"></i> Cerrar sesión</a
            >
          </div>
        </div>
      </div>
    </nav>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      token: localStorage.token,
    };
  },
};
</script>
<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar-color {
  background: #2e86c1;
  color: whitesmoke;
}
.li-a {
  color: white;
}
</style>


