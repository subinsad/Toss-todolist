// App.js

import { Component } from './core/heropy';
import TheHeader from './components/TheHeader';
import MyPage from './components/MyPage';

export default class App extends Component {
    constructor() {
        super();
        this.state = {}; // 상태 초기화

        this.renderComponent(); // 화면 그리기
    }

    renderComponent() {
        const theHeader = new TheHeader(this);
        const routerView = document.createElement('router-view');
        const mypage = new MyPage(this);

        console.log('컴포넌트');
        this.el.innerHTML = ''; // 제거 후 그리기
        this.el.appendChild(theHeader.render());
        this.el.appendChild(routerView);
        this.el.appendChild(mypage.render());
    }

    update() {
        // 컴포넌트 업데이트
        this.renderComponent();
    }

    navigateTo(href) {
        // 페이지 이동 로직 추가
        window.location.hash = href; // 경로를 hash로 변경
        window.location.reload(); // 새로고침 추가
    }
}

const app = new App();

setTimeout(() => {
    app.update();
}, 5000);
