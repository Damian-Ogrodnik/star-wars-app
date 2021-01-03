import './styles.scss';

import {routes} from '/src/common/config/variables';

export const Navbar = {
  render: async () => {
    const view = `
    <ul>
        <li><a href="#${routes.films}">Films</a></li>
        <li><a href="#${routes.people}">People</a></li>
        <li><a href="#${routes.planets}">Planets</a></li>
        <li><a href="#${routes.starships}">Starships</a></li>
    </ul>       
          `;
    return view;
  },
  after_render: async () => {},
};
