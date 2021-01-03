import {Error404} from '../views/components/Error/Error404';
import {Loader} from '../views/components/Loader';
import {Navbar} from '../views/components/Navbar';
import {parseRequestURL} from '../common/helpers';
import {routesWithDetails} from './routes';

export const router = async () => {
  const navigation = null || document.getElementById('navigation');
  const content = null || document.getElementById('root');

  navigation.innerHTML = await Navbar.render();
  await Navbar.after_render();

  content.innerHTML = await Loader.render();

  const request = parseRequestURL();

  const parsedURL =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');

  if (!routesWithDetails[parsedURL]) return (content.innerHTML = await Error404.render());

  const {component, fetchData, tileType, isPaginationAvailable} = routesWithDetails[parsedURL];
  const data = await fetchData(request.id);
  content.innerHTML = await component.render(data, tileType);
  await component.after_render(data, isPaginationAvailable);
};
