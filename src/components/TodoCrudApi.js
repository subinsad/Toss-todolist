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

            const todosText = await response.text();
            const todos = JSON.parse(todosText);

            return todos
                .map((todo) => ({ ...todo, done: Boolean(todo.done) }))
                .sort((a, b) => b.order - a.order);
        } catch (error) {
            console.error('Error fetching todos:', error);
            throw error; // 에러를 호출한 쪽으로 전파합니다.
        }
    }
}
