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

export function addPost(post) {
   return fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify({post}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
    .then((response) => {
        if(!response.ok) {
                throw new Error("Ошибка запроса")
            }
            return response.json()
        })   
}
export function deletePost(id) {
    fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
});
}