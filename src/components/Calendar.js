import { Component } from '../core/heropy';

export default class MyPage extends Component {
    render() {
        this.el.innerHTML = /* html */ `
        <div>
            <span> calendar </span>
        </div>
        `;
    }
}
