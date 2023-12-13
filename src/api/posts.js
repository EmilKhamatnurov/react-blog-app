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