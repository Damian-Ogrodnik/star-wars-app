import {routes} from '../common/config/variables';

import {swapiService} from './rootService';

import Films from '../views/pages/films';
import People from '../views/pages/people';
import Starships from '../views/pages/starships';
import Planets from '../views/pages/planets';

import {validateData} from '../common/helpers';

export const routesWithDetails = {
  [routes.films]: {
    component: Films,
    fetchData: () => validateData(() => swapiService.getFilms()),
  },
  [routes.film]: {
    component: People,
    fetchData: id => validateData(() => swapiService.getFilm(id)),
  },
  [routes.people]: {
    component: People,
    fetchData: () => validateData(() => swapiService.getPeople()),
  },
  [routes.person]: {
    component: People,
    fetchData: id => validateData(() => swapiService.getPerson(id)),
  },
  [routes.starships]: {
    component: Starships,
    fetchData: () => validateData(() => swapiService.getStarships()),
  },
  [routes.starship]: {
    component: Starships,
    fetchData: id => validateData(() => swapiService.getStarship(id)),
  },
  [routes.planets]: {
    component: Planets,
    fetchData: () => validateData(() => swapiService.getPlanets()),
  },
  [routes.planet]: {
    component: Planets,
    fetchData: id => validateData(() => swapiService.getPlanet(id)),
  },
};
