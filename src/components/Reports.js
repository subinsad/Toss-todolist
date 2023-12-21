import { Component } from '../core/heropy';
import SubReport from './SubReport'; // 'SubReport'로 수정

export default class Report extends Component {
    render() {
        const subReportComponent = new SubReport(); // SubReport로 수정
        const subReportEl = subReportComponent.el;

        this.el.classList.add('report');
        this.el.innerHTML = /* html */ `
        <h3> 
            Weekly Reports 
        </h3>
        <div>
            ${subReportEl.outerHTML}
        </div>
        `;
    }
}
