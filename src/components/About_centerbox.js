import { Component } from '../core/heropy';
import Chart from 'chart.js/auto';

export default class CenterBox extends Component {
    constructor() {
        super({
            tagName: 'article',
        });
    }

    render() {
        this.el.innerHTML = /* html */ `
        <div class="center">
            <div class="title"> 
                <h3> My Skilset </h3>
                <span class="material-symbols-outlined">settings</span>
            </div>
            <p class="subTitle"> Improved it by <span>12 points</span> last week </p>

            <div class="chart"> 
                <canvas id="pie-chart" width="230" height="230"></canvas>
            </div>
        </div>
        `;

        document.addEventListener('DOMContentLoaded', () => {
            new Chart(document.getElementById('pie-chart'), {
                type: 'pie',
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
                    title: {
                        display: true,
                        text: 'Most Used Languages',
                    },
                },
            });
        });
    }
}
