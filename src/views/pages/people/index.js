import {getFormattedUrl} from '/src/common/helpers';

export const People = {
  render: async peopleData => {
    const people = peopleData
      .map(
        personData =>
          `<h1>
          <a href="#/${getFormattedUrl(personData.url)}">${personData.name}</a>
          
          </h1>`
      )
      .join(' ');

    return /* html */ `
            <section class="section">
                <h1> ${people} </h1>
            </section>
        `;
  },
  after_render: async () => {},
};
