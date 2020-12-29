import './styles.scss';

import {routes} from '/src/common/config/variables';
import {getFormattedUrl} from '/src/common/helpers';

const Films = {
  render: async filmsArray => {
    const films = filmsArray
      .map(
        filmData => `
          <section class="film-tile">
            <h2>${filmData.title}</h2>
            <p>${filmData.director}</p>
            <p>${filmData.release_date}</p>
            <a href="#/${getFormattedUrl(filmData.url)}">Details</a>
          </section>`
      )
      .join(' ');

    console.log(filmsArray);

    return `
            <main class="films">
                ${films}
            </main>
        `;
  },
  after_render: async () => {},
};

export default Films;
