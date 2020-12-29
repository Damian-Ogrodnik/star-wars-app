import { HttpService } from '../common/services/httpService';
import { SwapiService } from '../common/services/swapiService';
import { BASE_URL } from '../common/config/apiConfig';

export const httpService = new HttpService(BASE_URL);
export const swapiService = new SwapiService(httpService);
