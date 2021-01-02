import {getFormattedUrl} from '/src/common/helpers';

export const People = {
  render: async peopleData => {
    const people = peopleData.results
      .map(
        personData => `
        <section class="tile">
          <h2>${personData.name}</h2>
          <a href="#/${getFormattedUrl(personData.url)}">Details</a>
        </section>`
      )
      .join(' ');

    return `
            <main class="tiles-wrapper">
                ${people}
            </main>
        `;
  },
  after_render: async () => {},
};
