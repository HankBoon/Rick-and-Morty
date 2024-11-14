const nextButton = document.querySelector('[data-js="button-next"]');
const prevButton = document.querySelector('[data-js="button-prev"]');

export const nextButtonFunction = nextButton.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    if (page < maxPage) {
      page++;
      renderCharacters(page);
      setPages();
      scrollTo(0, 0);
    }
  }
);

export const prevButtonFunction = prevButton.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    if (page > 1) {
      page--;
      renderCharacters(page);
      setPages();
      scrollTo(0, 0);
    }
  }
);
