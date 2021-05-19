<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">El Rincon del Cinefilo</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0" style="justify-content">
            <li class="nav-item">
              <router-link to="populares" class="nav-link"
                >Populares</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="mejor-valoradas" class="nav-link"
                >Mejor Valoradas</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Usa el componente router-link la navegación. -->
    <!-- Especifica la ruta usando la propiedad `to`. -->
    <!-- `<router-link>` será renderizado como una etiqueta `<a>` por defecto -->
    <router-view />
  </div>
</template>
<script>

</script>
<style>

</style>
