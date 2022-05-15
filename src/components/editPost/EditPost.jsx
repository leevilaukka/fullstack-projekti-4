import React from 'react'
import { api } from '../../api'

export const EditPost = ({ id, editCode, post }) => {
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
        <div className='bg-zinc-900 p-2 flex align-middle justify-center '>
            <div className='flex'>
                <input className='text-dark ml-4' type="text" value={title} onChange={e => setTitle(e.target.value)} />
                <textarea className='text-dark ml-4' value={content} onChange={e => setContent(e.target.value)} />
                <button className='bg-zinc-600 ml-4 rounded p-1' onClick={handleUpdate}>Päivitä</button>
            </div>

        </div>
    )
}
