import { createRouter } from '../core/heropy';
import Home from './Home.js';
import About from './About.js';

export default createRouter([
    { path: '#/', component: Home },
    { path: '#/about', component: About },
]);
