import { createRouter } from '../core/heropy';
import Home from './Home.js';
import Project from './Projects';
import About from './About.js';

export default createRouter([
    { path: '#/', component: Home },
    { path: '#/projects', component: Project },
    { path: '#/about', component: About },
]);
