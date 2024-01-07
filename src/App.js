import { Component } from './core/heropy';
import TheHeader from './components/TheHeader';
import MyPage from './components/MyPage';

export default class App extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        const theHeader = new TheHeader().el;
        const routerView = document.createElement('router-view');
        const mypage = new MyPage().el;

        this.el.append(theHeader, routerView, mypage);
    }
}
