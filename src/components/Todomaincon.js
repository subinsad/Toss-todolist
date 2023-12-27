import { Component } from '../core/heropy';
import TodoCrudApi from './TodoCrudApi';

export default class TodoMaincon extends Component {
    async render() {
        this.el.innerHTML = /* html */ `
            <div id="todoMainContainer">
                <h3> To Do List </h3>
                <input type="text" class="todo-input" placeholder="할 일 추가">
                <button class="btn btn-normal add-todo">추가</button>
                <ul id="todoItems"></ul>
            </div>
        `;

        document.addEventListener('DOMContentLoaded', async () => {
            const todoMainContainer =
                document.getElementById('todoMainContainer');
            const todoItems = todoMainContainer.querySelector('#todoItems');
            const addTodoButton = todoMainContainer.querySelector('.add-todo');
            const inputEl = todoMainContainer.querySelector('.todo-input');

            addTodoButton.addEventListener('click', async () => {
                const newTodoTitle = inputEl.value;
                if (newTodoTitle.trim() !== '') {
                    await this.addTodo(newTodoTitle);
                }
            });

            try {
                await this.refreshTodos();
            } catch (error) {
                console.error('할 일 목록을 불러오는 중 오류 발생:', error);
            }
        });
    }

    async addTodo(newTodoTitle) {
        try {
            const newTodo = await TodoCrudApi.createTodo(newTodoTitle);
            this.renderTodoItem(newTodo);
        } catch (error) {
            console.error('할 일을 추가하는 중 오류 발생:', error);
        }
    }

    async refreshTodos() {
        try {
            const todos = await TodoCrudApi.getTodos();
            this.displayTodos(todos);
        } catch (error) {
            console.error('할 일 목록을 새로고침하는 중 오류 발생:', error);
        }
    }

    displayTodos(todos) {
        const todoItems = this.el.querySelector('#todoItems');
        todoItems.innerHTML = '';

        todos.forEach((todo) => {
            this.renderTodoItem(todo);
        });
    }

    renderTodoItem(todo) {
        const todoItems = this.el.querySelector('#todoItems');
        const todoItem = document.createElement('li');
        const todoContent = document.createElement('span');

        todoContent.textContent = todo.title;
        todoItem.appendChild(todoContent);
        todoItems.appendChild(todoItem);
    }
}
