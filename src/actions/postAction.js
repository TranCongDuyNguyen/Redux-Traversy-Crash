import {FETCH_POSTS, ADD_POST} from './types';

export function fetchPosts(){
    return function(dispatch){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(posts => {
            dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
         });
    }
}
//change
export function addPost(newPost){
    return function(dispatch){
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
        .then(res => { return res.json() })
        .then(post => dispatch({
            type: ADD_POST,
            payload: post
        }));
    }
}