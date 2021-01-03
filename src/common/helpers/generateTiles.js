import {getFormattedUrl} from './getFormattedUrl';
import {tileTypes} from '/src/common/config/variables';

export const generateTiles = (fetchedData, tileType) =>
  fetchedData.results.map(tileData => tileTypeTemplates[tileType](tileData)).join(' ');

const tileTypeTemplates = {
  [tileTypes.films]: filmData => `
    <section class="tile">
      <h2>${filmData.title}</h2>
      <p>Director: ${filmData.director}</p>
      <p>Release: ${filmData.release_date}</p>
      <a href="#/${getFormattedUrl(filmData.url)}">Details</a>
    </section>`,
  [tileTypes.people]: personData => `
    <section class="tile">
      <h2>${personData.name}</h2>
      <p>Birth year: ${personData.birth_year}</p>
      <a href="#/${getFormattedUrl(personData.url)}">Details</a>
    </section>`,
  [tileTypes.planets]: planetData => `
    <section class="tile">
      <h2>${planetData.name}</h2>
      <p>Population: ${planetData.population}</p>
      <p>Climate: ${planetData.climate}</p>
      <a href="#/${getFormattedUrl(planetData.url)}">Details</a>
    </section>`,
  [tileTypes.starships]: starshipData => `
    <section class="tile">
      <h2>${starshipData.name}</h2>
      <p>Cost: ${starshipData.cost_in_credits}</p>
      <p>Crew: ${starshipData.crew}</p>
      <a href="#/${getFormattedUrl(starshipData.url)}">Details</a>
    </section>`,
};
