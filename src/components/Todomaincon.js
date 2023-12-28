import { Component } from '../core/heropy';
import TodoCrudApi from './TodoCrudApi';

export default class TodoMaincon extends Component {
    async render() {
        this.el.innerHTML = /* html */ `
        <div class="Todolist">
            <h3> To Do List </h3> 
            <div class="contents" id="todoMainContainer">
                <div class="input-box">
                    <input type="text" class="todo-input" placeholder="할 일 추가">
                    <button class="btn btn-normal add-todo">추가</button>                
                </div>
                <ul id="todoItems"></ul>
            </div>
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
            this.renderTodoItem(todo, todoItems); // todoItems를 전달하여 직접 해당 부분에 투두를 추가하도록 수정
        });
    }

    renderTodoItem(todo, container) {
        const todoItem = document.createElement('li');
        const todoContent = document.createElement('span');

        todoContent.textContent = todo.title;
        todoItem.appendChild(todoContent);
        container.appendChild(todoItem); // 전달받은 container에 직접 추가
    }
}
