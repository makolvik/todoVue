<script setup>
import CardItem from "../components/CardItem.vue";
import CardItemModal from "../components/CardItemModal.vue";
import NavBar from "../components/NavBar.vue";

import { useCardsStore } from "@/stores/cards";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useCardsStore();

const editCard = ref({});

const { cards, modalCard } = storeToRefs(store);

const { toggleModalCard, getCard, updateCard, deleteCard, createCard } = store;

function editCardFunc(id) {
  editCard.value = {};
  let getItemStore = getCard(id)[0];
  editCard.value = {
    id: getItemStore.id,
    title: getItemStore.title,
    description: getItemStore.description,
  };
  toggleModalCard();
}

function submitCard() {
  if (editCard.value.id == undefined || editCard.value.id == null) {
    createCard(editCard.value);
  } else {
    updateCard(editCard.value);
  }

  editCard.value = {};
  toggleModalCard();
}
function deleteCardButton(id) {
  console.log(id);
  deleteCard(id);
}
function addnewButton() {
  editCard.value = {};

  toggleModalCard();
}
</script>

<template>
  <NavBar @create="addnewButton" />
  <div class="container text-center">
    <div class="row row-cols-auto g-3 justify-content-md-center">
      <div v-if="cards" v-for="(card, index) in cards" class="col">
        <CardItem
          :title="card.title"
          :description="card.description"
          :id="card.id"
          @edit="editCardFunc(card.id)"
          @delete="($event) => deleteCardButton(card.id)"
        />
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col col-lg-4">
        <CardItemModal
          v-if="modalCard"
          @toggle="toggleModalCard"
          @submitButton="submitCard"
          v-model:title="editCard.title"
          v-model:description="editCard.description"
        />
      </div>
    </div>
  </div>
</template>
<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
  }
}
</style>
