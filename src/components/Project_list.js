import { Component } from '../core/heropy';

export default class List extends Component {
    render() {
        this.el.classList.add('list');

        const items = [
            {
                titleIcon: 'apps',
                title: 'App Development',
                subTitle: 'Belong lnteractive',
                progress: 45,
                shareText: 5,
                chatText: 3,
                time: 2,
            },
            {
                titleIcon: 'apps',
                title: 'App Development',
                subTitle: 'Belong lnteractive',
                progress: 45,
                shareText: 5,
                chatText: 3,
                time: 2,
            },
        ];

        const contentsHTML = items
            .map(
                (item) => /* html */ `
        <div class="item">
            <div class="item__icon">
                <span class="material-symbols-outlined">${item.titleIcon}</span>
            </div>
            <span class="material-symbols-outlined"> more_vert</span>

            <div class="item__title-box">
                <b> ${item.title} </b>
                <p> ${item.subTitle} </p>
            </div>

            <div class="">
                <div>
                    <b> Progress </b>
                    <p> ${item.progress} </p>
                </div>
                <progress value="${item.progress}" max="100"></progress>

            <div>
                <span class="material-symbols-outlined">share</span>
                <span> ${item.shareText} <span>

                <span class="material-symbols-outlined">chat</span>
                <span> ${item.chatText} <span>
            </div>

            <div> 
            <span class="material-symbols-outlined">schedule</span>
            <p> ${item.time} Week left <p>
            </div>
        </div>
        `
            )
            .join('');

        this.el.innerHTML = contentsHTML;
    }
}
