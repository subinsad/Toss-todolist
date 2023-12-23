import { Component } from '../core/heropy';
import Profile from './profile';
import Calendar from './Calendar';

export default class MyPage extends Component {
    constructor() {
        super({
            tagName: 'section',
        });
    }
    render() {
        const profile = new Profile(); // 프로필
        const profileEl = profile.el;

        const calendar = new Calendar();
        const calendarEl = calendar.el;

        this.el.innerHTML = /* html */ `
        ${profileEl.outerHTML}
        ${calendarEl.outerHTML}
        `;
    }
}
