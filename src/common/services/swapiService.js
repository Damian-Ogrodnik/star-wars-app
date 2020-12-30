import {apiRoutes} from '../config/apiConfig';
import {getFormattedUrl} from '../helpers';

export class SwapiService {
  constructor(HttpService) {
    this.HttpService = HttpService;
  }

  getFilms() {
    return this.HttpService.GET(apiRoutes.films)
      .then(data => data.results)
      .catch(err => ({error: err.message}));
  }

  getFilm(id) {
    return this.HttpService.GET(`${apiRoutes.films}${id}/`)
      .then(data => data)
      .catch(err => ({error: err.message}));
  }

  getPeople() {
    return this.HttpService.GET(apiRoutes.people)
      .then(data => data.results)
      .catch(err => ({error: err.message}));
  }

  getPerson(id) {
    return this.HttpService.GET(`${apiRoutes.people}${id}/`)
      .then(data => data)
      .catch(err => ({error: err.message}));
  }

  getPlanets() {
    return this.HttpService.GET(apiRoutes.planets)
      .then(data => data.results)
      .catch(err => ({error: err.message}));
  }

  getPlanet(id) {
    return this.HttpService.GET(`${apiRoutes.planets}${id}/`)
      .then(data => data)
      .catch(err => ({error: err.message}));
  }

  getStarships() {
    return this.HttpService.GET(apiRoutes.starships)
      .then(data => data.results)
      .catch(err => ({error: err.message}));
  }

  getStarship(id) {
    return this.HttpService.GET(`${apiRoutes.starships}${id}/`)
      .then(data => data)
      .catch(err => ({error: err.message}));
  }

  getDataFromUrlArray(arrayOfUrl) {
    const data = arrayOfUrl.map(url =>
      this.HttpService.GET(`/${getFormattedUrl(url)}`)
        .then(data => data)
        .catch(err => ({error: err.message}))
    );

    return Promise.all(data).then(data => data);
  }
}
