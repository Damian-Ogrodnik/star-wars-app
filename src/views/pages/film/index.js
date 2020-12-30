import './styles.scss';

import {swapiService} from '/src/core/rootService';
import {generateLinksFromArray} from '/src/common/helpers';

export const Film = {
  render: async filmData => {
    const peopleData = await swapiService.getDataFromUrlArray(filmData.characters);
    const starshipsData = await swapiService.getDataFromUrlArray(filmData.starships);
    const planetsData = await swapiService.getDataFromUrlArray(filmData.planets);

    return `
            <main class="film">
                <h1>${filmData.title}</h1>
                <p>${filmData.opening_crawl}</p>
                <div class="film-details">
                  <section>
                    <h3>Characters</h3>
                    ${generateLinksFromArray(peopleData)}
                  </section>
                  <section>
                    <h3>Starships</h3>
                    ${generateLinksFromArray(starshipsData)}
                  </section>
                  <section>
                    <h3>Planets</h3>
                    ${generateLinksFromArray(planetsData)}
                  </section>
                </div>
            </main>
        `;
  },

  after_render: async () => {},
};
