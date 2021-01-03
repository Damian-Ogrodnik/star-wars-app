import {swapiService} from '/src/core/rootService';
import {generateLinksFromArray} from '/src/common/helpers';

export const Planet = {
  render: async planetData => {
    const filmsData = await swapiService.getDataFromUrlArray(planetData.films);

    return `
        <main class="page-wrapper">
        <h1>${planetData.name}</h1>
          <section class="page-details">
            <p>Climate: ${planetData.climate}</p>
            <p>Terrain: ${planetData.terrain}</p>
            <p>Gravity: ${planetData.gravity}</p>
            <p>Population: ${planetData.population}</p>
            <p>Diameter: ${planetData.diameter}</p>
            <p>Orbital period: ${planetData.orbital_period}</p>
          </section>
          <section class="page-movies">
            <h3>Movies</h3>
            ${generateLinksFromArray(filmsData, 'title')}
          </section>
        </main>
            `;
  },
  after_render: async () => {},
};
