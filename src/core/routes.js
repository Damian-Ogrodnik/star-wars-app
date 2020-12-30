import {routes} from '../common/config/variables';

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
    fetchData: () => validateData(() => swapiService.getFilms()),
  },
  [routes.film]: {
    component: Film,
    fetchData: id => validateData(() => swapiService.getFilm(id)),
  },
  [routes.people]: {
    component: People,
    fetchData: () => validateData(() => swapiService.getPeople()),
  },
  [routes.person]: {
    component: Person,
    fetchData: id => validateData(() => swapiService.getPerson(id)),
  },
  [routes.planets]: {
    component: Planets,
    fetchData: () => validateData(() => swapiService.getPlanets()),
  },
  [routes.planet]: {
    component: Planet,
    fetchData: id => validateData(() => swapiService.getPlanet(id)),
  },
  [routes.starships]: {
    component: Starships,
    fetchData: () => validateData(() => swapiService.getStarships()),
  },
  [routes.starship]: {
    component: Starship,
    fetchData: id => validateData(() => swapiService.getStarship(id)),
  },
};
