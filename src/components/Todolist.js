import { Component } from '../core/heropy';

export default class Todolist extends Component {
    constructor() {
        super({
            tagName: 'div',
        });
    }

    async createTodo(newTodoTitle) {
        try {
            const apiUrl =
                'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos';

            const res = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    apikey: 'KDT7_GrZ1eYBo',
                    username: 'KDT7_ParkSuBin',
                },
                body: JSON.stringify({
                    title: newTodoTitle,
                }),
            });

            const json = await res.json();
            console.log(json);
            return json;
        } catch (error) {
            console.error('Error creating todo:', error);
        }
    }

    async addTodo() {
        const inputEl = this.el.querySelector('.todo-input');
        const newTodotitle = inputEl.value;

        if (newTodotitle.trim() !== '') {
            const newTodo = await this.createTodo(newTodotitle);

            this.renderTodoItem(newTodo);
        }
    }

    renderTodoItem(todo) {
        const todoListEl = this.el.querySelector('.todo-list');

        const listItem = document.createElement('li');
        listItem.textContent = todo.title;
        todoListEl.appendChild(listItem);
    }

    render() {
        this.el.classList.add('Todolist');
        this.el.innerHTML = /* html */ `
            <h3> To Do List </h3>

            <div class="contents">
                <div class="input-box">
                    <input type="text" class="todo-input" placeholder="Add a new todo">
                    <button class="btn btn-nomal add-todo">Add</button>
                </div>
                <ul class="todo-list">
                    
                </ul>
            </div>
        `;

        const addButton = this.el.querySelector('.add-todo');
        addButton.addEventListener('click', this.addTodo.bind(this));
    }
}
