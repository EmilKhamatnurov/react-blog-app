// https://jsonplaceholder.typicode.com/posts
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export function getPosts() {
    return fetch(BASE_URL)    
        .then(response => {
            if(!response.ok) {
                throw new Error("Ошибка запроса")
            }
            return response.json()
        })       
}

export function addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
  .then((response) => response.json())
  .then((json) => console.log(json));
}