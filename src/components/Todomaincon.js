import { Component } from '../core/heropy';
import TodoCrudApi from './TodoCrudApi';

export default class TodoMaincon extends Component {
    async render() {
        this.el.innerHTML = /* html */ `
            <div id="todoMainContainer">
                <ul id="todoItems"></ul>
            </div>
        `;

        document.addEventListener('DOMContentLoaded', async () => {
            const todoMainContainer =
                document.getElementById('todoMainContainer');
            const todoItems = todoMainContainer.querySelector('#todoItems');

            try {
                const todos = await TodoCrudApi.getTodos();
                displayTodos(todos);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }

            function displayTodos(todos) {
                todoItems.innerHTML = '';

                todos.forEach((todo) => {
                    const todoItem = document.createElement('li');

                    // 할일 내용 출력
                    const todoContent = document.createElement('span');
                    todoContent.textContent = todo.title;
                    todoItem.appendChild(todoContent);
                    todoItems.appendChild(todoItem);
                });
            }
        });
    }
}
