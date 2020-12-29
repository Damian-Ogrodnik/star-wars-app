import { apiRoutes } from '../config/apiConfig';

export class SwapiService {
  constructor(HttpService) {
    this.HttpService = HttpService;
  }

  getFilms() {
    return this.HttpService
      .GET(apiRoutes.films).then((data) => data.results).catch((err) => ({ error: err.message }));
  }

  getPeople() {
    return this.HttpService
      .GET(apiRoutes.people).then((data) => data.results).catch((err) => ({ error: err.message }));
  }

  getPlanets() {
    return this.HttpService
      .GET(apiRoutes.planets).then((data) => data.results).catch((err) => ({ error: err.message }));
  }

  getStarships() {
    return this.HttpService
      .GET(apiRoutes.starships).then((data) => data.results).catch((err) => ({ error: err.message }));
  }
}
