import { Component } from '../core/heropy';

export default class TheHeader extends Component {
    constructor() {
        super({
            tagName: 'header',
            state: {
                menus: [
                    {
                        name: 'Home',
                        href: '#/',
                        icon: 'home', // Google Material Icons home icon
                    },
                    {
                        name: 'Todo',
                        href: '#/projects',
                        icon: 'list_alt', // Google Material Icons list_alt icon
                    },
                    {
                        name: 'About',
                        href: '#/about',
                        icon: 'info', // Google Material Icons info icon
                    },
                ],
            },
        });
        window.addEventListener('popstate', () => {
            this.render();
        });
    }

    render() {
        this.el.innerHTML = /* html */ `
        <a href="#/" class="logo">
            <img src="src/img/logo.png" alt="Toss Logo" width="50" height="auto">
        </a>
        <nav>
            <ul>
                ${this.state.menus
                    .map((menu) => {
                        const href = menu.href.split('?')[0];
                        const hash = location.hash.split('?')[0];
                        const isActive = href === hash;
                        const iconClass = menu.icon
                            ? `<i class="material-symbols-outlined">${menu.icon}</i>`
                            : ''; // Icon class
                        return /* html */ `
                        <li> 
                            <a class="${isActive ? 'active' : ''}" href="${
                            menu.href
                        }"> 
                                ${iconClass}
                            </a>
                        </li>
                        `;
                    })
                    .join('')}
            </ul>
        </nav>
        `;
    }
}
