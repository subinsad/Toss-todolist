import { Component } from '../core/heropy';
import Header from '../components/Project_header';
import List from '../components/Project_list';

export default class Project extends Component {
    render() {
        const headerComponent = new Header(); // Header 컴포넌트 생성
        const headerElement = headerComponent.el; // Header 컴포넌트의 root 엘리먼트 가져오기

        const listComponent = new List(); // List
        const listElement = listComponent.el; // List 컴포넌트의 root 엘리먼트 가져오기

        this.el.classList.add('Project');

        this.el.innerHTML = /* html */ `
            ${headerElement.outerHTML}
            ${listElement.outerHTML}
            `;
    }
}
