import { Component } from '../core/heropy';
import Chart from 'chart.js/auto';

export default class MySkillset extends Component {
    constructor() {
        super({
            tagName: 'article',
        });
    }

    render() {
        this.el.innerHTML = /* html */ `
        <div class="MySkilset">
            <div class="title"> 
                <h3> My Skillset </h3>
                <span class="material-symbols-outlined">settings</span>
            </div>

            <div class="chart-box"> 
                <div class="chart"> 
                <canvas id="pie-chart" width="50" height="250"></canvas>
                <ul>
                    <li class="html">
                        html
                    </li>
                    <li class="CSS">
                        CSS
                    </li>
                    <li class="SCSS">
                        SCSS
                    </li>
                    <li class="Javascript">
                        Javascript
                    </li>
                    <li class="VUE">
                        VUE.JS
                    </li>
                    <li class="REACT">
                        REACT
                    </li>
                </ul>
            </div>
            </div>

        </div>
        `;

        document.addEventListener('DOMContentLoaded', () => {
            new Chart(document.getElementById('pie-chart'), {
                type: 'doughnut',
                data: {
                    labels: [
                        'HTML',
                        'CSS',
                        'SCSS',
                        'Javascript',
                        'VUE.JS',
                        'REACT',
                    ],
                    datasets: [
                        {
                            label: 'Used',
                            backgroundColor: [
                                '#E34F26',
                                '#1572B6',
                                '#CC6699',
                                '#F7DF1E',
                                '#4FC08D',
                                '#61DAFB',
                            ],
                            data: [700, 600, 500, 400, 300, 100],
                        },
                    ],
                },
                options: {
                    plugins: {
                        legend: {
                            display: false,
                            position: 'right',
                            labels: {
                                pointStyle: 'circle',
                                fontSize: 12,
                            },
                        },
                    },
                    title: {
                        display: true,
                        text: 'Most Used Languages',
                    },
                },
            });
        });
    }
}
