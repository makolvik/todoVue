<template>
  <div class="bg-opacity-50">
    <div class="card" style="width: 18rem">
      <div class="card-body bg-opacity-50">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          {{ description }}
        </p>
        <span class="material-symbols-outlined card-link"> check_circle </span>

        <span
          @click="$emit('edit')"
          class="material-symbols-outlined card-link"
        >
          edit
        </span>
        <span
          @click="$emit('delete')"
          class="material-symbols-outlined card-link"
        >
          cancel
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  id: Number,
  title: String,
  description: String,
});

// function deleteItem(id) {
//   console.log("delete " + id);
// }
</script>

<style></style>
