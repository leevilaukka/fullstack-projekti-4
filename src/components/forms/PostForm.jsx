import React from 'react'
import { api } from '../../api'

export const PostForm = ({ posts, setPosts }) => {
    const [title, setTitle] = React.useState('')
    const [content, setContent] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        api.posts.create({
            title,
            content
        }).then(post => {
            console.log('new post', post)
            setPosts([...posts, post])
        })
    }

    return (
        <form className='flex justify-center pt-4'>
            <div>
                <label htmlFor="title" className='block text-gray-700 text-sm font-bold mb-2'>Title</label>
                <input type="text" id="title" className='shadow rounded h-8 ml-2 text-dark' value={title} placeholder={"Title"} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="content" className='block text-gray-700 text-sm font-bold mb-2'>Content</label>
                <textarea id="content" placeholder='Content' className="shadow rounded p-2 text-dark ml-2" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            </div>
            <button onClick={handleSubmit} type="button" className='bg-black rounded h-10 text-center align-middle justify-center ml-2 p-1'>Submit</button>
        </form>
    )
}
