import {getFormattedUrl} from '../helpers';

export class SwapiService {
  constructor(HttpService) {
    this.HttpService = HttpService;
  }

  getData(url) {
    return this.HttpService.GET(url)
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
