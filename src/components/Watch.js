import { Component } from '../core/heropy';

export default class Watch extends Component {
    render() {
        this.el.classList.add('watch');
        this.el.innerHTML = /* html */ `
        <button class="btn btn-primary"> Watch Now </button>
        <button class="btn btn-nomal"> + </button>
        `;
    }
}
