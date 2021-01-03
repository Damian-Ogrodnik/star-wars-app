import 'regenerator-runtime/runtime';
import './styles/main.scss';

import {router} from './core/router';

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
