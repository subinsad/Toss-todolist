// TheHeader.js

import { Component } from '../core/heropy';

export default class TheHeader extends Component {
    constructor(app) {
        super({
            tagName: 'header',
            state: {
                menus: [
                    {
                        name: 'Home',
                        href: '#/',
                        icon: 'home',
                    },
                    {
                        name: 'Todo',
                        href: '#/projects',
                        icon: 'list_alt',
                    },
                    {
                        name: 'About',
                        href: '#/about',
                        icon: 'info',
                    },
                ],
            },
        });
        this.app = app;
        window.addEventListener('popstate', () => {
            this.render();
        });
    }

    render() {
        this.el.innerHTML = /* html */ `
        <a href="#/" class="logo">
            <img src="/../img/logo.png" alt="Toss Logo" width="50" height="auto">
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
                            : '';
                        return /* html */ `
                        <li class="menu-link"> 
                            <a class="${isActive ? 'active' : ''}" href="${
                            menu.href
                        }"> 
                                ${iconClass}
                                ${menu.name}
                            </a>
                        </li>
                        `;
                    })
                    .join('')}
            </ul>
        </nav>
        `;

        const menuLinks = this.el.querySelectorAll('.menu-link a');
        menuLinks.forEach((link) => {
            link.addEventListener('click', (event) =>
                this.handleMenuClick(event)
            );
        });

        return this.el;
    }

    handleMenuClick(event) {
        const href = event.currentTarget.getAttribute('href'); //
        this.app.navigateTo(href);
    }
}
