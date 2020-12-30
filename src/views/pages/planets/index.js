import {getFormattedUrl} from '/src/common/helpers';

export const Planets = {
  render: async planetsData => {
    const planets = planetsData.results
      .map(
        planetData =>
          `<h1>
            <a href="#/${getFormattedUrl(planetData.url)}">${planetData.name}</a>
          </h1>`
      )
      .join(' ');

    return /* html */ `
            <section class="section">
                <h1> Planets : ${planets}</h1>
            </section>
        `;
  },
  after_render: async () => {},
};
