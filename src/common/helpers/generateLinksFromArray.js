import {getFormattedUrl} from './getFormattedUrl';

export const generateLinksFromArray = (arrayWithData, objectName = 'name') =>
  arrayWithData
    .map(data => `<a href="#/${getFormattedUrl(data.url)}">${data[objectName]}</a>`)
    .join(' ');
