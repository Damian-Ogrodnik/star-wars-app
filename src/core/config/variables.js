import Films from '../../views/pages/films';
import People from '../../views/pages/people';
import Starships from '../../views/pages/starships';
import Planets from '../../views/pages/planets';

export const routes = {
  films: '/',
  film: '/films/:id',
  people: '/people',
  person: '/people/:id',
  starships: '/starships',
  starship: '/starships/:id',
  planets: '/planets',
  planet: '/planets/:id',
};

export const routesWithComponents = {
  [routes.films]: Films,
  [routes.singleFilm]: Films,
  [routes.people]: People,
  [routes.person]: People,
  [routes.starships]: Starships,
  [routes.starship]: Starships,
  [routes.planets]: Planets,
  [routes.planet]: Planets,
};
