import {routes, tileTypes} from '../common/config/variables';
import {apiRoutes} from '../common/config/apiConfig';
import {validateData} from '../common/helpers';
import {swapiService} from './rootService';

import {Film} from '../views/pages/film';
import {Person} from '../views/pages/person';
import {Planet} from '../views/pages/planet';
import {Starship} from '../views/pages/starship';
import {Tiles} from '../views/components/Tiles';

export const routesWithDetails = {
  [routes.films]: {
    component: Tiles,
    fetchData: () => validateData(() => swapiService.getData(apiRoutes.films)),
    tileType: tileTypes.films,
    isPaginationAvailable: false,
  },
  [routes.film]: {
    component: Film,
    fetchData: id => validateData(() => swapiService.getData(`${apiRoutes.films}${id}/`)),
  },
  [routes.people]: {
    component: Tiles,
    fetchData: () => validateData(() => swapiService.getData(apiRoutes.people)),
    tileType: tileTypes.people,
    isPaginationAvailable: true,
  },
  [routes.person]: {
    component: Person,
    fetchData: id => validateData(() => swapiService.getData(`${apiRoutes.people}${id}/`)),
  },
  [routes.planets]: {
    component: Tiles,
    fetchData: () => validateData(() => swapiService.getData(apiRoutes.planets)),
    tileType: tileTypes.planets,
    isPaginationAvailable: true,
  },
  [routes.planet]: {
    component: Planet,
    fetchData: id => validateData(() => swapiService.getData(`${apiRoutes.planets}${id}/`)),
  },
  [routes.starships]: {
    component: Tiles,
    fetchData: () => validateData(() => swapiService.getData(apiRoutes.starships)),
    tileType: tileTypes.starships,
    isPaginationAvailable: true,
  },
  [routes.starship]: {
    component: Starship,
    fetchData: id => validateData(() => swapiService.getData(`${apiRoutes.starships}${id}/`)),
  },
};
