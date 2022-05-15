import storage from './storage';
const BASE_URL = 'https://leevi-post-api.herokuapp.com';

export const api = {
    posts: {
        getAll: () => {
            return fetch(`${BASE_URL}/posts`)
                .then(res => res.json())
        },
        getById: (id) => {
            return fetch(`${BASE_URL}/posts/${id}`)
                .then(res => res.json())
        },
        create: (post) => {
            return fetch(`${BASE_URL}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    storage.push("postEditCodes", {
                        id: res.post._id,
                        editCode: res.post.editCode
                    });
                    return res.post
                })
        },
        update: (post, editCode) => {
            const body = { ...post, editCode };

            return fetch(`${BASE_URL}/posts/${post.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then(res => res.json())
        },
        delete: (id, editCode) => {
            return fetch(`${BASE_URL}/posts/${id}?editCode=${editCode}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
        },
        vote: (id, vote) => {
            return fetch(`${BASE_URL}/posts/${id}/vote/${vote}`, {
                method: 'PATCH'
            }).then(res => res.json())
        },
        lock: (id, editCode) => {
            return fetch(`${BASE_URL}/posts/${id}/lock?editCode=${editCode}`, {
                method: 'LOCK',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
        },
        unlock: (id, editCode) => {
            return fetch(`${BASE_URL}/posts/${id}/unlock?editCode=${editCode}`, {
                method: 'UNLOCK',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
        }
    },
    comments: {
        getAll: () => {
            return fetch(`${BASE_URL}/comments`)
                .then(res => res.json())
        },
        getById: (id) => {
            return fetch(`${BASE_URL}/comments/${id}`)
                .then(res => res.json())
        },
        create: (comment) => {
            return fetch(`${BASE_URL}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(comment)
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    storage.push("commentEditCodes", {
                        id: res.comment._id,
                        editCode: res.comment.editCode
                    });
                    return res.comment
                })
        },
        update: (comment, editCode) => {
            const body = { ...comment, editCode };

            return fetch(`${BASE_URL}/comments/${comment.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then(res => res.json())
        },
        vote: (id, vote) => {
            return fetch(`${BASE_URL}/comments/${id}/vote/${vote}`, {
                method: 'PATCH'
            }).then(res => res.json())
        },
        delete: (id, editCode) => {
            return fetch(`${BASE_URL}/comments/${id}?editCode=${editCode}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
        },
    },
    }
    