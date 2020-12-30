import {getFormattedUrl} from '/src/common/helpers';

export const Starships = {
  render: async starshipsData => {
    const starships = starshipsData
      .map(
        starshipData =>
          `<h1>            
            <a href="#/${getFormattedUrl(starshipData.url)}">${starshipData.name}</a>
          </h1>`
      )
      .join(' ');

    return /* html */ `
            <section class="section">
                <h1> Post Id : ${starships}</h1>
            </section>
        `;
  },
  after_render: async () => {},
};
