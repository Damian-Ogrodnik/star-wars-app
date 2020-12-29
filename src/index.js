import 'regenerator-runtime/runtime';
import './styles/main.scss';

import {Error404} from './views/components/Error/Error404';
import Navbar from './views/components/Navbar';
import {parseRequestURL} from './common/helpers';
import {routesWithDetails} from './core/routes';

const router = async () => {
  const body = null || document.getElementById('navigation');
  const content = null || document.getElementById('root');

  body.innerHTML = await Navbar.render();
  await Navbar.after_render();

  const request = parseRequestURL();

  const parsedURL =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');

  if (!routesWithDetails[parsedURL]) return (content.innerHTML = await Error404.render());

  const {component, fetchData} = routesWithDetails[parsedURL];
  const data = await fetchData(request.id);
  content.innerHTML = await component.render(data);
  await component.after_render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
