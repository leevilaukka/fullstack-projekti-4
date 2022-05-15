import React from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api'
import { PostForm } from './forms/PostForm'

export const PostList = () => {
    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {
        api.posts.getAll().then(posts => {
            setPosts(posts.posts)
        })
    }, [])

    return (
        <div>
            <PostForm setPosts={setPosts} posts={posts}/>
            {posts.map(post => (
                <div key={post._id} className="rounded-lg p-5 m-5 bg-zinc-800">
                    <Link className='underline hover:text-blue' to={`/post/${post._id}`}>{post.title}</Link>
                    <p>{post.content}</p>
                    <p>{post.comments.length} kommentti{post.comments.length > 1 || post.comments.length === 0 ? "a" : ""}</p>
                    <p>{post.votes} tykkäystä</p>
                    <p>{new Date(post.createdAt).toLocaleDateString("fi-FI", {dateStyle: "full"})}</p>
                </div>
            ))}
            
        </div>
    )
}
