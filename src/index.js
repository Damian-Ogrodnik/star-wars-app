import 'regenerator-runtime/runtime';
import './styles.scss';

import Error404 from './views/pages/Error404';

import Navbar from './views/components/Navbar';


import { parseRequestURL } from './core/helpers';
import { routesWithComponents } from './core/config/variables';

const router = async () => {
  const body = null || document.getElementById('navigation');
  const content = null || document.getElementById('page_container');

  body.innerHTML = await Navbar.render();
  await Navbar.after_render();

  const request = parseRequestURL();

  const parsedURL = (request.resource ? `/${request.resource}` : '/')
    + (request.id ? '/:id' : '')
    + (request.verb ? `/${request.verb}` : '');

  const page = routesWithComponents[parsedURL] ? routesWithComponents[parsedURL] : Error404;
  content.innerHTML = await page.render();
  await page.after_render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
