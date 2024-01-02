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
                titleIcon: 'web_asset',
                title: 'Website Design',
                subTitle: 'App Emirates',
                progress: 75,
                shareText: 2,
                chatText: 5,
                time: 1,
            },
            {
                titleIcon: 'layers',
                title: 'Landing Page',
                subTitle: 'Dev Batch',
                progress: 45,
                shareText: 5,
                chatText: 3,
                time: 3,
            },
            {
                titleIcon: 'deployed_code',
                title: 'Quality Assurance',
                subTitle: '02 Technologies',
                progress: 45,
                shareText: 5,
                chatText: 3,
                time: 2,
            },
            {
                titleIcon: 'smartphone',
                title: 'Mobile Development',
                subTitle: 'Belong lnteractive',
                progress: 45,
                shareText: 5,
                chatText: 3,
                time: 2,
            },
            {
                titleIcon: 'emoji_objects',
                title: 'UX UI Design',
                subTitle: 'Creative Hub',
                progress: 45,
                shareText: 5,
                chatText: 3,
                time: 2,
            },
        ];

        const contentsHTML = items
            .map((item) => {
                const randomColor = getRandomColor();
                return /* html */ `
                    <div class="item">
                        <div class="item__icon">
                            <span class="material-symbols-outlined" style="background-color:${randomColor}">${item.titleIcon}</span>
                        </div>
                        <span class="material-symbols-outlined"> more_vert</span>

                        <div class="item__title-box">
                            <b>${item.title}</b>
                            <p>${item.subTitle}</p>
                        </div>

                        <div class="item__Progress-box">
                            <div class="item__Progress-box__text">
                                <b>Progress</b>
                                <p>${item.progress}%</p>
                            </div>
                            <progress value="${item.progress}" max="100"></progress>
                        </div>

                        <div class="item__icon-box">
                            <div class="item__icon-box__chat">
                                <span class="material-symbols-outlined">share</span>
                                <span>${item.shareText}</span>
                                <span class="material-symbols-outlined">chat</span>
                                <span>${item.chatText}</span>
                            </div>

                            <div class="item__icon-box__time">
                                <span class="material-symbols-outlined">schedule</span>
                                <p>${item.time} Week left</p>
                            </div>
                        </div>
                    </div>
                `;
            })
            .join('');

        // items를 감싸는 div 추가
        const itemsContainer = document.createElement('div');
        itemsContainer.classList.add('items-container');
        itemsContainer.innerHTML = contentsHTML;

        this.el.appendChild(itemsContainer);

        //랜덤색상
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    }
}
