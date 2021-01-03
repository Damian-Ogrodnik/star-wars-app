import {generateTiles, handlePagination} from '/src/common/helpers';
import {tileTypes} from '/src/common/config/variables';

export const Starships = {
  render: async starshipsData => {
    const starships = generateTiles(starshipsData, tileTypes.starships);

    return `
            <main class="tiles-wrapper">
                ${starships}
            </main>
        `;
  },
  after_render: async starshipsData => {
    handlePagination(starshipsData, tileTypes.starships);
  },
};
