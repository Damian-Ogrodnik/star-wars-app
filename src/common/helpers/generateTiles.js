import {getFormattedUrl} from './getFormattedUrl';
import {tileTypes} from '/src/common/config/variables';

export const generateTiles = (fetchedData, tileType) =>
  fetchedData.results.map(tileData => tileTypeTemplates[tileType](tileData)).join(' ');

const tileTypeTemplates = {
  [tileTypes.films]: filmData => `
    <section class="tile">
      <h2>${filmData.title}</h2>
      <p>${filmData.director}</p>
      <p>${filmData.release_date}</p>
      <a href="#/${getFormattedUrl(filmData.url)}">Details</a>
    </section>`,
  [tileTypes.people]: personData => `
    <section class="tile">
      <h2>${personData.name}</h2>
      <a href="#/${getFormattedUrl(personData.url)}">Details</a>
    </section>`,
  [tileTypes.planets]: planetData => `
    <section class="tile">
      <h2>${planetData.name}</h2>
      <a href="#/${getFormattedUrl(planetData.url)}">Details</a>
    </section>`,
  [tileTypes.starships]: starshipData => `
    <section class="tile">
      <h2>${starshipData.name}</h2>
      <a href="#/${getFormattedUrl(starshipData.url)}">Details</a>
    </section>`,
};
