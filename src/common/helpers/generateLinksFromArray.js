import {getFormattedUrl} from './getFormattedUrl';

export const generateLinksFromArray = arrayWithData =>
  arrayWithData.map(data => `<a href="#/${getFormattedUrl(data.url)}">${data.name}</a>`).join(' ');
