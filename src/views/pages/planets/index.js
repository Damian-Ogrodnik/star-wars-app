import {generateTiles, handlePagination} from '/src/common/helpers';
import {tileTypes} from '/src/common/config/variables';

export const Planets = {
  render: async planetsData => {
    const planets = generateTiles(planetsData, tileTypes.planets);

    return `
            <main class="tiles-wrapper">
                ${planets}
            </main>
        `;
  },
  after_render: async peopleData => {
    handlePagination(peopleData, tileTypes.planets);
  },
};
