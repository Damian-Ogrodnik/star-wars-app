import {generateTiles, handlePagination} from '/src/common/helpers';
import {tileTypes} from '/src/common/config/variables';

export const Films = {
  render: async filmsArray => {
    const films = generateTiles(filmsArray, tileTypes.films);

    return `
            <main class="tiles-wrapper">
                ${films}
            </main>
        `;
  },
  after_render: async () => {},
};
