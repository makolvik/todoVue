<script setup>
defineProps(["id", "title", "description"]);
defineEmits(["update:title", "update:description"]);
</script>
<template>
  <div class="modal-item">
    <form
      class="modal-item-content bg-body-tertiary rounded shadow-sm"
      @submit.prevent="$emit('submitButton')"
    >
      <span @click="$emit('toggle')" class="close">&times;</span>
      <div class="mb-3 mt-5">
        <div class="mb-5 form-floating">
          <input
            required
            class="form-control"
            id="titleinput"
            :value="title"
            @input="$emit('update:title', $event.target.value)"
          />
          <label for="titleinput">Title</label>
        </div>
        <div class="mb-5 form-floating">
          <textarea
            required
            class="form-control modal-input"
            style="height: 100px"
            id="descriptioninput"
            :value="description"
            @input="$emit('update:description', $event.target.value)"
          />
          <label for="descriptioninput">Description</label>
        </div>
      </div>

      <button type="submit" class="btn btn-light submit">Submit</button>
    </form>
  </div>
</template>
<style>
.modal-item {
  display: block;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
  padding-top: 100px;
}
.modal-item-content {
  background-color: rgba(255, 255, 255, 0.9);
  margin: auto;
  margin-top: 30px;
  padding: 25px;
  padding-top: 5px;
  border: 1px solid #888;
  width: 45%;
}
.close {
  color: #aaaaaa;
  float: right;
  font-size: 25px;
  font-weight: bold;
  z-index: 1;
}
.close:hover {
  color: #5a5a5a;
  cursor: pointer;
}
.input-group {
  margin-top: 30px;
}
</style>
