<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary bg-opacity-50 mb-3"
    style="height: 100px"
  >
    <div class="container-fluid text-white">
      <a class="navbar-brand text-white" href="#">Planner</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <!-- <RouterLink to="/"
            ><a class="nav-link text-white">All Cards</a></RouterLink
          > -->

          <span @click="$emit('create')" class="material-symbols-outlined">
            add_circle
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>
<style>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0, "opsz" 48;
}
.material-symbols-outlined:hover {
  font-variation-settings: "FILL" 1, "wght" 200, "GRAD" 0, "opsz" 48;
}
</style>
