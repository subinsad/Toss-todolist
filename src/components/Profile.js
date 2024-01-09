import { Component } from '../core/heropy';

export default class MyPage extends Component {
    constructor() {
        super({
            tagName: 'article',
            className: 'calendar',
        });
    }
    render() {
        this.el.innerHTML = /* html */ `
            <div class="icon-box">
            <span class="material-symbols-outlined">settings</span>
            <span class="material-symbols-outlined">notifications</span>
            </div>

        <div class="name-box">
            <div class="name-box__textBox"> 
                <span class="name"> subin </span>
                <span class="email"> subin_1118@naver.com </span>
            </div>
            <img src="/img/profile-small.jpg" class="profile" alt="profile" width="60" height="auto">
            <span class="dot"></span>
        </div>

        
        
        `;
    }
}
