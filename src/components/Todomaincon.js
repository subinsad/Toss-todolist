import { Component } from '../core/heropy';
import TodoCrudApi from './TodoCrudApi';

export default class TodoMaincon extends Component {
    render() {
        this.el.innerHTML = /* html */ `
            <div class="Todolist">
                <h3> To Do List </h3> 
                <div class="contents" id="todoMainContainer">
                    <div class="input-box">
                        <input type="text" class="todo-input" placeholder="할 일 추가">
                        <button class="btn btn-normal add-todo">추가</button>                
                    </div>
                    <ul id="todoItems"></ul>

                    <!-- 로딩애니메이션 -->
                    <div class="the-loader">
                        <div class="droplet_spinner">
                            <div class="droplet"></div>
                            <div class="droplet"></div>
                            <div class="droplet"></div>
                        </div>
                    </div>
                </div>
            </div>

            
        `;

        document.addEventListener('DOMContentLoaded', async () => {
            const todoMainContainer =
                document.getElementById('todoMainContainer');
            const todoItems = todoMainContainer.querySelector('#todoItems');
            const addTodoButton = todoMainContainer.querySelector('.add-todo');
            const inputEl = todoMainContainer.querySelector('.todo-input');
            const loaderEl =
                todoMainContainer.querySelector('.droplet_spinner');

            console.log('todoMainContainer:', todoMainContainer);
            console.log('todoItems:', todoItems);
            console.log('addTodoButton:', addTodoButton);
            console.log('inputEl:', inputEl);
            console.log('loaderEl:', loaderEl);

            if (
                !todoMainContainer ||
                !todoItems ||
                !addTodoButton ||
                !inputEl ||
                !loaderEl
            ) {
                console.error('일부 요소를 찾을 수 없습니다.');
                return;
            }

            loaderEl.classList.add('show');

            await this.refreshTodos();

            // 버튼 클릭 시 투두 입력
            addTodoButton.addEventListener('click', async () => {
                const newTodoTitle = inputEl.value;
                inputEl.value = ''; // 초기화
                if (newTodoTitle.trim() !== '') {
                    loaderEl.classList.remove('hide'); //로딩시작
                    await this.addTodo(newTodoTitle);
                    await this.refreshTodos();
                    loaderEl.classList.add('hide'); //로딩종료
                }
            });

            // 엔터키로 입력
            inputEl.addEventListener('keydown', async (event) => {
                if (event.isComposing) return;
                if (event.key === 'Enter') {
                    loaderEl.classList.remove('hide'); //로딩시작
                    const newTodoTitle = inputEl.value;
                    inputEl.value = ''; // 엔터 시 초기화
                    console.log('test');

                    if (newTodoTitle.trim() !== '') {
                        await this.addTodo(newTodoTitle);
                        await this.refreshTodos();
                        loaderEl.classList.add('hide'); //로딩종료
                    }
                }
            });
            loaderEl.classList.remove('hide');
            await this.refreshTodos();
            loaderEl.classList.add('hide');
        });
    }

    // 투두 추가
    async addTodo(newTodoTitle) {
        try {
            const newTodo = await TodoCrudApi.createTodo(newTodoTitle);
            this.renderTodoItem(newTodo, this.el.querySelector('#todoItems'));
        } catch (error) {
            console.error('할 일을 추가하는 중 오류 발생:', error);
        }
    }

    renderTodoItem(todo, container) {
        if (!container) {
            console.error('container is undefined');
            return;
        }

        const todoItem = document.createElement('li');
        const checkbox = document.createElement('input');
        const todoContent = document.createElement('span');
        todoContent.className = 'todoText';

        const editBtn = document.createElement('button');
        const editInput = document.createElement('input');
        editInput.className = 'editBtn';
        const deleteBtn = document.createElement('button'); // 삭제
        const updatedTime = document.createElement('span'); // 수정 시간

        todoContent.textContent = todo.title;

        const selectBtn = document.createElement('button');
        selectBtn.innerText = '선택 삭제';

        // 체크박스
        checkbox.type = 'checkbox';
        checkbox.checked = todo.done;

        editBtn.innerHTML =
            '<span class="material-symbols-outlined">edit</span>';
        editBtn.className = 'btn btn-nomal';
        deleteBtn.innerHTML =
            '<span class="material-symbols-outlined">delete</span>';
        deleteBtn.className = 'btn btn-nomal';
        editInput.type = 'text';
        editInput.style.display = 'none'; // 처음에는 숨겨놓기

        // 삭제버튼
        deleteBtn.addEventListener('click', async () => {
            const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
            if (confirmDelete) {
                await this.deleteTodo(todo.id);
                await this.refreshTodos();
            }
        });

        // 수정버튼
        editBtn.addEventListener('click', () => {
            todoContent.style.display = 'none';
            editBtn.style.display = 'none';
            editInput.style.display = 'inline-block';
            editInput.value = todo.title;
            editInput.focus(); // 수정 input에 포커스 주기
        });

        // 수정input
        editInput.addEventListener('keydown', async (event) => {
            if (event.isComposing) return;
            if (event.key === 'Enter') {
                const updatedTodoTitle = editInput.value;
                if (updatedTodoTitle.trim() !== '') {
                    await this.updateTodo(todo.id, updatedTodoTitle);
                    await this.refreshTodos();
                }
            }
        });

        // 포커스 아웃으로 수정기능 추가
        editInput.addEventListener('blur', async () => {
            const updatedTodoTitle = editInput.value;
            if (updatedTodoTitle.trim() !== '') {
                await this.updateTodo(todo.id, updatedTodoTitle);
                await this.refreshTodos();
            }
        });

        // 포커스가 없어질 때 수정 input을 숨기고, 텍스트를 보이기
        editInput.addEventListener('blur', async () => {
            editInput.style.display = 'none';
            todoContent.style.display = 'inline-block';
        });

        // 전체삭제 버튼
        const deleteAllBtn = document.createElement('button');
        deleteAllBtn.innerText = '전체 삭제';
        deleteAllBtn.addEventListener('click', async () => {
            const selectedTodos = this.getSelectedTodos();
            await this.deleteAllTodos(selectedTodos);
            await this.refreshTodos();
        });

        // 선택 삭제 버튼
        selectBtn.addEventListener('click', async () => {
            const selectTodos = this.getSelectedTodos();
            await this.deleteAllTodos(selectTodos);
            await this.refreshTodos();
        });

        // 엘리먼트를 todoItems에 추가
        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoContent);
        todoItem.appendChild(editInput); // input 위치 UX 고려
        todoItem.appendChild(editBtn);
        todoItem.appendChild(deleteBtn);
        todoItem.appendChild(updatedTime);

        container.appendChild(todoItem);
    }

    formatTime(timestamp) {
        const date = new Date(timestamp);
        return date.toLocaleString();
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
        const existingTodoItems = todoItems.querySelectorAll('li');

        existingTodoItems.forEach((existingTodo) => {
            const todoId = existingTodo.dataset.todoId;
            const isExistInTodos = todos.some((todo) => todo.id === todoId);

            if (!isExistInTodos) {
                existingTodo.remove();
            }
        });

        todos.forEach((todo) => {
            const existingTodo = Array.from(existingTodoItems).find(
                (el) => el.dataset.todoId === todo.id
            );

            if (!existingTodo) {
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

    async deleteTodo(todoId) {
        try {
            await TodoCrudApi.deleteTodo(todoId);
        } catch (error) {
            console.error('할 일을 삭제하는 중 오류 발생:', error);
            throw error;
        }
    }

    async updateTodo(todoId, updatedTitle) {
        try {
            // TodoCrudApi.updateTodo에서 반환되는 값을 저장
            const response = await TodoCrudApi.updateTodo(todoId, updatedTitle);

            if (response) {
                const json = await response.json();
                throw new Error(
                    `Todo 업데이트에 실패했습니다. 응답 코드: ${
                        response.status
                    }, 메시지: ${json.message || '알 수 없는 오류'}`
                );
            } else {
                throw new Error(
                    'Todo 업데이트에 실패했습니다. 응답이 없습니다.'
                );
            }
        } catch (error) {}
    }

    //전체삭제
    async deleteAllTodos(todos) {
        try {
            await Promise.all(
                todos.map(async (todo) => await this.deleteTodo(todo.id))
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
