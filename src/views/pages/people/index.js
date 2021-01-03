import {generateTiles, handlePagination} from '/src/common/helpers';
import {tileTypes} from '/src/common/config/variables';

export const People = {
  render: async peopleData => {
    const people = generateTiles(peopleData, tileTypes.people);

    return `
            <main class="tiles-wrapper">
                ${people}
            </main>
        `;
  },

  after_render: async peopleData => {
    handlePagination(peopleData, tileTypes.people);
  },
};
