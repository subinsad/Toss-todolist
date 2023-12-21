import { Component } from '../core/heropy';

export default class Report extends Component {
    render() {
        this.el.classList.add('report-contents');
        this.el.innerHTML = /* html */ `
            <div class="report-contents__item-box">
                <div class="icon">
                <span class="material-symbols-outlined">event</span>
                </div>
                <p>event</p>
                <span class="value"> 7 </span>
            </div>

            <div class="report-contents__item-box">
                <div class="icon">
                <span class="material-symbols-outlined">notifications</span>
                </div>
                <p>Alarm </p>
                <span class="value"> 9 </span>
            </div>

            <div class="report-contents__item-box">
                <div class="icon">
                    <span class="material-symbols-outlined">forward_to_inbox</span>
                </div>
                <p>Send E-mail </p>
                <span class="value"> 12 </span>
            </div>

            <div class="report-contents__item-box">
                <div class="icon">
                <span class="material-symbols-outlined">error</span>
                </div>
                <p>error</p>
                <span class="value"> 2 </span>
            </div>

            <div class="report-contents__item-box add">
            <div class="icon">
            <span class="material-symbols-outlined">add</span>
                </div>
            </div>


        `;
    }
}
