<template>
  <div class="bg-opacity-50">
    <div class="card" style="width: 18rem">
      <div class="card-body bg-opacity-50">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          {{ description }}
        </p>
        <a @click="$emit('edit')" href="#" class="card-link">Edit</a>
        <a @click="$emit('delete')" href="#" class="card-link">Delete</a>
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
