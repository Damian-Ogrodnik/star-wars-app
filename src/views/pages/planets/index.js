import {getFormattedUrl} from '/src/common/helpers';

export const Planets = {
  render: async planetsData => {
    const planets = planetsData.results
      .map(
        planetData => `
        <section class="tile">
          <h2>${planetData.name}</h2>
          <a href="#/${getFormattedUrl(planetData.url)}">Details</a>
        </section>`
      )
      .join(' ');

    return `
            <main class="tiles-wrapper">
                ${planets}
            </main>
        `;
  },
  after_render: async () => {},
};
