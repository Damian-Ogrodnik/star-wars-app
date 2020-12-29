import { routes } from '../common/config/variables';

import { swapiService } from './rootService';

import Films from '../views/pages/films';
import People from '../views/pages/people';
import Starships from '../views/pages/starships';
import Planets from '../views/pages/planets';

import { validateData } from '../common/helpers';

export const routesWithDetails = {
  [routes.films]: { component: Films, fetchData: () => validateData(() => swapiService.getFilms()) },
  [routes.singleFilm]: { component: People, fetchData: swapiService.getFilms },
  [routes.people]: { component: People, fetchData: () => validateData(() => swapiService.getPeople()) },
  [routes.person]: { component: People, fetchData: swapiService.getFilms },
  [routes.starships]: { component: Starships, fetchData: () => validateData(() => swapiService.getStarships()) },
  [routes.starship]: { component: Starships, fetchData: swapiService.getFilms },
  [routes.planets]: { component: Planets, fetchData: () => validateData(() => swapiService.getPlanets()) },
  [routes.planet]: { component: Planets, fetchData: swapiService.getFilms },
};
