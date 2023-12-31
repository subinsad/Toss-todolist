import { Component } from '../core/heropy';

export default class PortFolio extends Component {
    constructor() {
        super({
            tagName: 'article',
        });
    }

    render() {
        this.el.innerHTML = /* html */ `
        <div class="PortFolio">
            <div class="PortFolio__btn">
                <p> Please press the heart </p>
                <a href="#"> <span class="material-symbols-outlined">heart_plus</span></a>
            </div>

            <div class="PortFolio__contents-box"> 
                <div class="PortFolio__contents-box__title">
                    <p> Port-Folio </p>   
                    <span class="material-symbols-outlined">expand_circle_right</span>
                </div>

                <ul class="PortFolio__contents-box__list">
                    <li>
                        <img src="https://cdn.paris.spl.li/wp-content/uploads/2023/11/pc-logo.svg" class="profile" alt="profile" width="40" height="auto">
                        <div> 
                            <p> clone codeing </p>
                            <a href="#"> parisbaguette </a>
                        </div>
                    </li>

                    <li>
                        <span class="material-symbols-outlined">movie</span>
                        <div> 
                            <p> Js project </p>
                            <a href="#"> movie-app </a>
                        </div>
                    </li>

                    <li>
                    <img src="src/img/nespresso.avif" class="profile" alt="profile" width="40" height="auto">
                        <div> 
                            <p> senier project </p>
                            <a href="#"> Deeply </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        `;
    }
}
