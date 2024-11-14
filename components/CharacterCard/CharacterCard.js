export function createCharacterCard(characterList) {
  const CharacterCard = document.createElement("li");
  CharacterCard.classList.add("character-card");
  CharacterCard.innerHTML = `
          <div class="card__image-container">
            <img
              class="card__image"
              src="${characterList.results[2].image}"
              alt="${characterList.results[0].name}"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${characterList.results[0].name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${characterList.results[0].status}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${characterList.results[0].type}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${characterList.results[2].episode.length}</dd>
            </dl>
          </div>`;
  return CharacterCard;
}
