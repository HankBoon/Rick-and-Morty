import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
// const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

const urlApi = "https://rickandmortyapi.com/api/character";

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

// Fetch and Render Character Cards

async function fetchCharacters(pageUrl, searchqueryOrPageNumber) {
  const response = await fetch(urlApi + pageUrl + searchqueryOrPageNumber);
  const data = await response.json();
  // console.log("urlApi+param:", urlApi + );
  return data;
}

async function renderCharacters() {
  const apiList = await fetchCharacters("?page=", page);
  cardContainer.innerHTML = ``;
  apiList.results.forEach((character) => {
    const CharacterCard = createCharacterCard(character);
    cardContainer.append(CharacterCard);
  });
}

async function renderSingleChar(query) {
  const apiList = await fetchCharacters("?name=", query);
  cardContainer.innerHTML = ``;
  console.log("?name=", query);
  console.log("names:", apiList);
  apiList.results.forEach((character) => {
    const CharacterCard = createCharacterCard(character);
    cardContainer.append(CharacterCard);
  });
}

// Pagination

async function setPages() {
  // console.log("foo", `?page=${page}`);
  const apiList = await fetchCharacters("?page=", page);
  maxPage = apiList.info.pages;
  pagination.textContent = `${page}/${maxPage}`;
  // console.log("apiList: ", apiList);
}

nextButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (page < maxPage) {
    page++;
    renderCharacters(page);
    setPages();
    scrollTo(0, 0);
  }
});

prevButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (page > 1) {
    page--;
    renderCharacters(page);
    setPages();
    scrollTo(0, 0);
  }
});

searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event.target.elements);
  searchQuery = event.target.elements.query.value;
  renderSingleChar(searchQuery);
  event.target.reset();
  searchQuery.focus;
});

//Initial Page Setup

renderCharacters();
setPages();
