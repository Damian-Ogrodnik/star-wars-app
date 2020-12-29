export class SwapiService {
  constructor(HttpService) {
    this.HttpService = HttpService;
  }

  getFilms() {
    return this.HttpService
      .GET('/films/').then((data) => data.results).catch((err) => ({ error: err.message }));
  }
}
