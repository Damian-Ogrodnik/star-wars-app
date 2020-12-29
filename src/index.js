import 'regenerator-runtime/runtime';

import Error404 from './views/pages/Error404';
import Films from './views/pages/films';
import People from './views/pages/people';
import Starships from './views/pages/starships';
import Planets from './views/pages/planets';

import Navbar from './views/components/Navbar';
import Footer from './views/components/Footer';

import Utils from './services/Utils';

const routes = {
  '/': Films,
  '/films/:id': Films,
  '/people': People,
  '/people/:id': People,
  '/starships': Starships,
  '/starships/:id': Starships,
  '/planets': Planets,
  '/planets/:id': Planets,
};

const router = async () => {
  const header = null || document.getElementById('header_container');
  const content = null || document.getElementById('page_container');
  const footer = null || document.getElementById('footer_container');

  header.innerHTML = await Navbar.render();
  await Navbar.after_render();
  footer.innerHTML = await Footer.render();
  await Footer.after_render();

  const request = Utils.parseRequestURL();

  const parsedURL = (request.resource ? `/${request.resource}` : '/')
    + (request.id ? '/:id' : '')
    + (request.verb ? `/${request.verb}` : '');

  const page = routes[parsedURL] ? routes[parsedURL] : Error404;
  content.innerHTML = await page.render();
  await page.after_render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
