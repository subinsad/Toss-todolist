import { Component } from '../core/heropy';

export default class CenterBox extends Component {
    constructor() {
        super({
            tagName: 'article',
        });
    }

    render() {
        this.el.innerHTML = /* html */ `
        <div class="center">
            <div> 
                <h3> My Skilset </h3>
                <span class="material-symbols-outlined">settings</span>
            </div>
            <p> improved it by <span>12 point </span> last week </p>

            <div> 

            </div>
        </div>
        `;
    }
}
