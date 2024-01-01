import { Component } from '../core/heropy';

export default class List extends Component {
    render() {
        this.el.classList.add('list');

        this.el.innerHTML = /* html */ `
        <div class="contents">
            <span class="material-symbols-outlined">apps</span>
            <span class="material-symbols-outlined"> more_vert</span>

            <div class="">
                <b> App Development </b>
                <p> Belong lnteractive </p>
            </div>

            <div class="">
                <div>
                    <b> Progress </b>
                    <p> 45% </p>
                </div>
                <progress value="20" max="100"></progress>

            <div>
                

            </div>
        </div>
        `;
    }
}
