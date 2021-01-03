import {swapiService} from '/src/core/rootService';
import {generateLinksFromArray} from '/src/common/helpers';

export const Starship = {
  render: async starshipData => {
    const filmsData = await swapiService.getDataFromUrlArray(starshipData.films);

    return `
        <main class="page-wrapper">
          <h1>${starshipData.name}</h1>
          <section class="page-details">
            <p>Cargo capacity: ${starshipData.cargo_capacity}</p>
            <p>Cost in credits: ${starshipData.cost_in_credits}</p>
            <p>Crew: ${starshipData.crew}</p>
            <p>Length: ${starshipData.length}</p>
            <p>MGLT: ${starshipData.MGLT}</p>
            <p>Passengers: ${starshipData.passengers}</p>
            <p>Starship class: ${starshipData.starship_class}</p>
            <p>Manufacturer: ${starshipData.manufacturer}</p>
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
