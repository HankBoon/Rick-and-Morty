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

const urlApi = "https://rickandmortyapi.com/api/character?page=";

// States
let maxPage = 1;
let page = 1;
const searchQuery = "";

// Fetch and Render Character Cards

async function fetchCharacters(page) {
  const response = await fetch(urlApi + page);
  const data = await response.json();
  return data;
}

async function renderCharacters() {
  const apiList = await fetchCharacters(page);
  cardContainer.innerHTML = ``;
  apiList.results.forEach((character) => {
    const CharacterCard = createCharacterCard(character);
    cardContainer.append(CharacterCard);
  });
}

// Pagination

async function setPages() {
  const apiList = await fetchCharacters(page);
  maxPage = apiList.info.pages;
  pagination.textContent = `${page}/${maxPage}`;
}

nextButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (page < maxPage) {
    page++;
    renderCharacters();
    setPages();
    scrollTo(0, 0);
  }
});

prevButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (page > 1) {
    page--;
    renderCharacters();
    setPages();
    scrollTo(0, 0);
  }
});

//Initial Page Setup

renderCharacters();
setPages();
