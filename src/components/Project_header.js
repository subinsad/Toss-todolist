import { Component } from '../core/heropy';

export default class Header extends Component {
    render() {
        this.el.classList.add('header');
        this.el.innerHTML = /* html */ `
            <h2>
                Project
            </h2>
            <div class="button">
                <button class="btn btn-nomal"> <span class="material-symbols-outlined"> tune </span>  </button>
                <button class="btn btn-primary"> + Create Project </button>
            </div>
            `;
    }
}
