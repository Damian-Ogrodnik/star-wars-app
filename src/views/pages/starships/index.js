import {getFormattedUrl} from '/src/common/helpers';

export const Starships = {
  render: async starshipsData => {
    const starships = starshipsData.results
      .map(
        starshipData => `
        <section class="tile">
          <h2>${starshipData.name}</h2>
          <a href="#/${getFormattedUrl(starshipData.url)}">Details</a>
        </section>
        `
      )
      .join(' ');

    return `
            <main class="tiles-wrapper">
                ${starships}
            </main>
        `;
  },
  after_render: async () => {},
};
