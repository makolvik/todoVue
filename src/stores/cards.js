import { defineStore } from "pinia";
import { ref } from "vue";

export const useCardsStore = defineStore("cards", () => {
  const cards = ref([
    {
      id: 12312123,
      title: "Card 1",
      description:
        " Some quick example text to build on the card title and make up the   bulk of the card's content.",
    },
    {
      id: 123121222312,
      title: "Card 2",
      description:
        " Some quick example text to build on the card title and make up the.",
    },
    {
      id: 12312123123,
      title: "Card 3",
      description: " Some quick example.",
    },
    {
      id: 1237898712123,
      title: "Card 3",
      description: " Some quick example.",
    },
    {
      id: 12312342123,
      title: "Card 3",
      description: " Some quick example.",
    },
  ]);
  const modalCard = ref(false);

  function getCard(itemid) {
    let card = cards.value.filter((card) => card.id == itemid);
    return card;
  }

  function toggleModalCard() {
    modalCard.value = !modalCard.value;
    console.log("toggle");
  }
  function updateCard(item) {
    console.log(item);
    let cardIndex = cards.value.findIndex((card) => card.id == item.id);
    cards.value[cardIndex] = item;
    console.log(cards.value[cardIndex]);
  }
  function deleteCard(id) {
    let store = cards.value.filter((card) => card.id != id);
    cards.value = store;
  }
  function createCard(item) {
    let newItem = item;
    newItem.id = Math.floor(Math.random() * 9999999999);
    cards.value.push(item);
  }

  return {
    cards,
    getCard,
    toggleModalCard,
    modalCard,
    updateCard,
    deleteCard,
    createCard,
  };
});
