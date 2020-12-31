import './styles.scss';

import {swapiService} from '/src/core/rootService';
import {generateLinksFromArray} from '/src/common/helpers';

export const Person = {
  render: async personData => {
    const filmsData = await swapiService.getDataFromUrlArray(personData.films);

    return `
      <main class="page-wrapper">
        <h1>${personData.name}</h1>
        <section class="page-details">
          <p>Height: ${personData.height}</p>
          <p>Weight: ${personData.mass}</p>
          <p>Gender: ${personData.gender}</p>
          <p>Birth Year: ${personData.birth_year}</p>
          <p>Eye color: ${personData.eye_color}</p>
          <p>Skin color: ${personData.skin_color}</p>
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
