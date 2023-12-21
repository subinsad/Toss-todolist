import { Component } from '../core/heropy';
import Headline from '../components/Headline';
import Report from '../components/Reports'; // 'SubReport'로 수정
import Search from '../components/Search';

export default class Home extends Component {
    render() {
        const search = new Search().el;

        const headlineComponent = new Headline();
        const headlineElement = headlineComponent.el;

        const reportComponent = new Report(); // SubReport로 수정
        const reportElement = reportComponent.el; // 수정: 변수 이름 수정

        this.el.append(search);
        this.el.classList.add('Home-Container');
        this.el.appendChild(headlineElement);
        this.el.appendChild(reportElement); // 수정: 변수 이름 수정
    }
}
