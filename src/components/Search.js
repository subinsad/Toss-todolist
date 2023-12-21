import { Component } from '../core/heropy';

export default class Search extends Component {
    render() {
        this.el.classList.add('search');
        this.el.innerHTML = /* html */ `
        <div class="input-box">
            <input type="text"value="Search appointments..." >
            <button class="btn btn-nomal">검색</button>
        </div>

        <div>
            <button class="btn btn-nomal"> Appontment Histoy ▼ </button>
            <button class="btn btn-primary"> + Add Patients </button>
        </div>
        `;
    }
}
