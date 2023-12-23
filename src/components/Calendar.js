// Calendar.js
import { Component } from '../core/heropy';

export default class Calendar extends Component {
    constructor() {
        super({
            tagName: 'div',
            className: 'calendar',
        });
    }

    render() {
        //달력
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth(); // 월은 0부터 시작하므로 +1을 제거
        const currentDay = currentDate.getDate();

        const daysInMonth = new Date(
            currentYear,
            currentMonth + 1,
            0
        ).getDate();
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

        // 요일 이름 배열
        const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAI'];

        // 현재 달의 날짜를 출력
        let calendarHTML = `
            
            <div class="header">
                <div class="header-title"> 
                <h3> Schedule Calendar </h3>
                <span class="header__month">${currentMonth + 1}월</span>
                </div>
            

                <div class="header__week"> 
                ${dayNames
                    .map(
                        (day) => `<span class="header__week__day">${day}</span>`
                    )
                    .join('')}
                </div>
                
            </div>
            <div class="days">`;

        // 날짜를 해당 요일에 할당
        for (let i = 0; i < firstDayOfMonth; i++) {
            calendarHTML += `<span class="empty"></span>`;
        }

        // 날짜 추가
        for (let day = 1; day <= daysInMonth; day++) {
            const dayOfWeek = (firstDayOfMonth + day - 1) % 7; // 요일 계산
            const isToday =
                day === currentDay && currentMonth === new Date().getMonth();
            calendarHTML += `<span class="${dayOfWeek === 0 ? 'sunday' : ''} 
            ${isToday ? 'active' : ''}">${day}</span>`;

            // 7일마다 줄바꿈
            if ((firstDayOfMonth + day) % 7 === 0 && day < daysInMonth) {
                calendarHTML += `</div><div class="days">`;
            }
        }

        calendarHTML += '</div>';
        this.el.innerHTML = calendarHTML;
    }
}
