import React from 'react'
import { api } from '../../api'

export const EditPost = ({id, editCode, post}) => {
    const [content, setContent] = React.useState('')
    const [title, setTitle] = React.useState('')

    React.useEffect(() => {
        setContent(post.content)
        setTitle(post.title)
    }, [post])

    const handleUpdate = (e) => {   
        api.posts.update({
            id,
            title,
            content
        }, editCode).then(post => {
            console.log('updated post', post)
            window.location.reload()
        })
    }
  return (
    <div>
        <h4>Edit</h4>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea value={content} onChange={e => setContent(e.target.value)} />
        <button onClick={handleUpdate}>Update</button>
    </div>
  )
}
