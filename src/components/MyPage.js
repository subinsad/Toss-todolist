import { Component } from '../core/heropy';
import Profile from './profile';
import Calendar from './Calendar';

export default class MyPage extends Component {
    constructor(app) {
        super({
            tagName: 'section',
            state: {},
        });
        this.app = app;
    }
    render() {
        const profile = new Profile(); // 프로필
        const profileEl = profile.el;

        const calendar = new Calendar();
        const calendarEl = calendar.el;

        this.el.innerHTML = /* html */ `
        ${profileEl.outerHTML}
        <div class="calendar"> 
            ${calendarEl.outerHTML}
        </div>

        `;
        return this.el;
    }
}
