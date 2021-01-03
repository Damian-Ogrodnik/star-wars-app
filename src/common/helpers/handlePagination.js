import {swapiService} from '/src/core/rootService';
import {getFormattedUrl} from '/src/common/helpers';
import {Loader} from '/src/views/components/loader';

import {generateTiles} from './generateTiles';

export const handlePagination = (data, tileType) => {
  window.removeEventListener('scroll', function paginationHandler() {});

  window.addEventListener('scroll', function paginationHandler() {
    if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight && data.next) {
      window.removeEventListener('scroll', paginationHandler);
      handleScroll(data, tileType);
    }
  });
};

const handleScroll = async (data, tileType) => {
  if (data.next) {
    const newData = await fetchNextTiles(data, tileType);
    window.addEventListener('scroll', function paginationHandler() {
      if (window.innerHeight + window.pageYOffset >= document.body.scrollHeight && newData.next) {
        window.removeEventListener('scroll', paginationHandler);
        handleScroll(newData, tileType);
      }
    });
  }
};

const fetchNextTiles = async (data, tileType) => {
  const container = document.getElementsByClassName('tiles-wrapper')[0];
  container.innerHTML += await Loader.render();

  const fetchedData = await swapiService.getData(`/${getFormattedUrl(data.next)}`);

  const tiles = generateTiles(fetchedData, tileType);

  const loader = document.getElementById('loader');
  loader.remove();

  container.innerHTML += tiles;

  return fetchedData;
};
