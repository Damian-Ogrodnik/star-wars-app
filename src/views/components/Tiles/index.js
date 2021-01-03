import {generateTiles, handlePagination} from '/src/common/helpers';

export const Tiles = {
  render: async (fetchedData, tileType) => {
    const tiles = generateTiles(fetchedData, tileType);

    return `
            <main class="tiles-wrapper">
                ${tiles}
            </main>
        `;
  },

  after_render: async (fetchedData, tileType, isPaginationAvailable) => {
    isPaginationAvailable && handlePagination(fetchedData, tileType);
  },
};
