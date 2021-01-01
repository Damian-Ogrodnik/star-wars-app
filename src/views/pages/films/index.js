import {getFormattedUrl} from '/src/common/helpers';

export const Films = {
  render: async filmsArray => {
    const films = filmsArray.results
      .map(
        filmData => `
          <section class="tile">
            <h2>${filmData.title}</h2>
            <p>${filmData.director}</p>
            <p>${filmData.release_date}</p>
            <a href="#/${getFormattedUrl(filmData.url)}">Details</a>
          </section>`
      )
      .join(' ');

    return `
            <main class="tiles-wrapper">
                ${films}
            </main>
        `;
  },
  after_render: async () => {},
};
