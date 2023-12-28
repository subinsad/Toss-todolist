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
                    await this.refreshTodos();
                }
            });

            inputEl.addEventListener('keyup', async (event) => {
                if (event.key === 'Enter') {
                    const newTodoTitle = inputEl.value;
                    if (newTodoTitle.trim() !== '') {
                        await this.addTodo(newTodoTitle);
                        await this.refreshTodos();
                    }
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

        todos.forEach((todo) => {
            if (!this.isTodoInUI(todo, todoItems)) {
                this.renderTodoItem(todo, todoItems);
            }
        });
    }

    isTodoInUI(todo, container) {
        // 현재 UI에 특정 투두가 이미 있는지 확인
        const existingTodos = container.querySelectorAll('li');
        for (const existingTodo of existingTodos) {
            if (existingTodo.textContent === todo.title) {
                return true;
            }
        }
        return false;
    }

    renderTodoItem(todo, container) {
        const todoItem = document.createElement('li');
        const todoContent = document.createElement('span');

        todoContent.textContent = todo.title;
        todoItem.appendChild(todoContent);
        container.appendChild(todoItem); // 전달받은 container에 직접 추가
    }
}
