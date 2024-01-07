import { Component } from './core/heropy';
import TheHeader from './components/TheHeader';
import MyPage from './components/MyPage';

export default class App extends Component {
    constructor() {
        super();
        this.state = {}; //상태초기화

        this.renderComponent(); //화면 그리기
    }

    renderComponent() {
        const theHeader = new TheHeader(this);
        const routerView = document.createElement('router-view');
        const mypage = new MyPage();

        console.log('컴포넌트');
        this.el.innerHTML = ''; //제거 후  그리기
        this.el.appendChild(theHeader.render());
        this.el.appendChild(routerView);
        this.el.appendChild(mypage.render());
    }

    update() {
        //컴포넌트 업데이트
        this.renderComponent();
    }
}
