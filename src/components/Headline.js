import { Component } from '../core/heropy';
import Watch from './Watch';

export default class Headline extends Component {
    render() {
        const watchComponent = new Watch(); // Watch 컴포넌트 생성
        const watchElement = watchComponent.el; // Watch 컴포넌트의 root 엘리먼트 가져오기

        this.el.classList.add('main-banner');
        this.el.innerHTML = /* html */ `
        <div class="contents">
        <h2> 
            Good Morning, <span> subin </span>
        </h2>
        <p>
            Have a nice day at work
        </p>
        </div>

        <!-- ${watchElement.outerHTML} -->
        `;
    }
}
