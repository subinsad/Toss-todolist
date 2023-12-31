import { Component } from '../core/heropy';

export default class Header extends Component {
    render() {
        this.el.classList.add('AboutContainer');
        this.el.innerHTML = /* html */ `
            <div class="profileImg"> 
                <img src="src/img/profile-small.jpg" class="profile" alt="profile" width="140" height="auto">
            </div>

            <div class="text-box"> 
                <span class="years">25</span>

                <div class="info"> 
                    <p class="info__name">Hello, my name is <br> Subin</p>
                    <p>I am a frontend engineer 👩‍💻 </p>
                </div>
            </div>

            <div class="link">
                <div class="border">
                    <a  class="link__text" href="https://github.com/subinsad">
                        <img src="src/img/github-mark-white.png" class="profile" alt="profile" width="30" height="auto">
                        <b>github</b>
                    </a>
                </div>

                <div>
                    <a class="link__text" href="https://velog.io/@subinsad/posts">
                        <img src="src/img/velog_icon.png" class="profile" alt="profile" width="30" height="auto">
                        <b>blog</b>
                    </a>
                </div>

            </div>
        `;
    }
}
