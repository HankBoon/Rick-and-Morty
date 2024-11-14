import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

const urlApi = "https://rickandmortyapi.com/api/character";

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchAndRenderCharacters() {
  cardContainer.innerHTML = ``;
  const response = await fetch(urlApi);
  const data = await response.json();
  console.log(data);

  data.results.forEach((character) => {
    cardContainer.append(createCharacterCard(character));
  });

  console.log(data.results);
}

fetchAndRenderCharacters();
