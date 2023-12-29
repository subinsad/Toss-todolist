export default class TodoCrudApi {
    static async getTodos() {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('apikey', 'KDT7_GrZ1eYBo');
        myHeaders.append('username', 'KDT7_ParkSuBin');

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };

        try {
            const response = await fetch(
                'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
                requestOptions
            );

            const todos = await response.json();

            if (todos === null || todos === undefined) {
                console.error('undefined');
                return [];
            }

            return todos
                .map((todo) => ({
                    ...todo,
                    done: Boolean(todo.done),
                    createdAt: new Date(todo.createdAt),
                }))
                .sort((a, b) => b.createdAt - a.createdAt);
        } catch (error) {
            console.error('할 일 목록을 불러오는 중 오류 발생:', error);
            throw error; // 에러를 호출한 쪽으로 전파합니다.
        }
    }

    static async deleteTodo(todoId) {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('apikey', 'KDT7_GrZ1eYBo');
        myHeaders.append('username', 'KDT7_ParkSuBin');

        const requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow',
        };

        try {
            const response = await fetch(
                `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${todoId}`,
                requestOptions
            );

            if (!response.ok) {
                const errorText = await response.text(); // 에러 응답 내용을 가져옵니다.
                throw new Error(
                    `Failed to delete todo ${todoId}. Server response: ${response.status} - ${errorText}`
                );
            }
            console.log(`todo with id ${todoId} deleted`);
        } catch (error) {
            console.log('error:', error);
            throw error; // 에러를 호출한 쪽으로 전파합니다.
        }
    }

    static async createTodo(newTodoTitle) {
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
            console.error('할 일을 만드는 중 오류 발생:', error);
            throw error; // 에러를 호출한 쪽으로 전파합니다.
        }
    }
}
