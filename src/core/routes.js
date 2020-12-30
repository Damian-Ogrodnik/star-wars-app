import {routes} from '../common/config/variables';
import {apiRoutes} from '../common/config/apiConfig';

import {swapiService} from './rootService';

import {Films} from '../views/pages/films';
import {Film} from '../views/pages/film';
import {People} from '../views/pages/people';
import {Person} from '../views/pages/person';
import {Planets} from '../views/pages/planets';
import {Planet} from '../views/pages/planet';
import {Starships} from '../views/pages/starships';
import {Starship} from '../views/pages/starship';

import {validateData} from '../common/helpers';

export const routesWithDetails = {
  [routes.films]: {
    component: Films,
    fetchData: () => validateData(() => swapiService.getData(apiRoutes.films)),
  },
  [routes.film]: {
    component: Film,
    fetchData: id => validateData(() => swapiService.getData(`${apiRoutes.films}${id}/`)),
  },
  [routes.people]: {
    component: People,
    fetchData: () => validateData(() => swapiService.getData(apiRoutes.people)),
  },
  [routes.person]: {
    component: Person,
    fetchData: id => validateData(() => swapiService.getData(`${apiRoutes.people}${id}/`)),
  },
  [routes.planets]: {
    component: Planets,
    fetchData: () => validateData(() => swapiService.getData(apiRoutes.planets)),
  },
  [routes.planet]: {
    component: Planet,
    fetchData: id => validateData(() => swapiService.getData(`${apiRoutes.planets}${id}/`)),
  },
  [routes.starships]: {
    component: Starships,
    fetchData: () => validateData(() => swapiService.getData(apiRoutes.starships)),
  },
  [routes.starship]: {
    component: Starship,
    fetchData: id => validateData(() => swapiService.getData(`${apiRoutes.starships}${id}/`)),
  },
};
