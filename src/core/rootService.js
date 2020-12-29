import { HttpService } from '../common/services/httpService';
import { BASE_URL } from '../common/config/variables';

export const httpService = new HttpService(BASE_URL);
// export const booksService = new BooksService(httpService, BOOKS_ON_REQUEST);