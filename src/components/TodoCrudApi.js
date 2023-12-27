export default class TodoCrudApi {
    static getTodos() {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('apikey', 'KDT7_GrZ1eYBo');
        myHeaders.append('username', 'KDT7_ParkSuBin');

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };

        fetch(
            'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
            requestOptions
        )
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log('error', error));
    }
}
