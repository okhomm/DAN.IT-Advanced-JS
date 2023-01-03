const url = 'https://ajax.test-danit.com/api/swapi/films';
const cardImg = 'https://t4.ftcdn.net/jpg/04/56/20/89/240_F_456208906_h2bZ51348xqpFcYXh4sGUiQDF5zolfRm.jpg';
const filmsList = document.querySelector('#films-list');

const addSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner-border', 'text-primary');
  spinner.setAttribute('role', 'status');
  const span = document.createElement('span');
  span.classList.add('visually-hidden');
  span.textContent = 'Loading...';
  spinner.append(span);
  return spinner;
}

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.sort((a, b) => a.episodeId - b.episodeId);
    data.forEach(({ name, characters, episodeId, openingCrawl }) => {

      const col = document.createElement('div');
      col.classList.add('col');
      filmsList.append(col);

      const card = document.createElement('div');
      card.classList.add('card', 'h-100');
      col.append(card);

      const img = document.createElement('img');
      img.classList.add('card-img-top');
      img.src = cardImg;
      card.append(img);

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      card.append(cardBody);

      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = `Episode ${episodeId} - ${name}`;
      cardBody.append(cardTitle);

      const filmInfo = document.createElement('p');
      filmInfo.textContent = openingCrawl;
      cardBody.append(filmInfo);

      const charactersListTitle = document.createElement('p');
      charactersListTitle.textContent = `Characters:`;
      charactersListTitle.style.fontWeight = 'bold';
      cardBody.append(charactersListTitle);

      const charactersList = document.createElement('ul');

      const spinner = addSpinner();
      charactersList.append(spinner);

      characters.forEach((elem) => {
        fetch(elem)
          .then((response) => {
            return response.json()
          })
          .then(({ name }) => {
            let filmCharacters = document.createElement('li');
            filmCharacters.classList.add('card-text');
            filmCharacters.innerHTML = name;
            spinner.remove();
            charactersList.append(filmCharacters)
          })
      })
      cardBody.append(charactersList);
    });
  })