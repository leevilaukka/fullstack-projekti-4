import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { api } from '../api'
import { PostComments } from './PostComments'
import { CommentForm } from './forms/CommentForm'
import { VoteContainer } from './votes/VoteContainer'
import { EditContainer } from './editPost/EditContainer'

export const Post = () => {
    const params = useParams()
    const postID = params.id

    const [post, setPost] = React.useState({})
    const [comments, setComments] = React.useState([])

    const postEditCodes = JSON.parse(localStorage.getItem('postEditCodes')) || []

    console.log('postEditCodes', postEditCodes)

    React.useEffect(() => {
        api.posts.getById(postID).then(post => {
            setPost(post.post)
            setComments(post.post.comments)
            console.log('post', post)
        })
    }, [postID])

    return (
        <div>
            {post ? (
                <div>
                    <div className='rounded-lg p-5 m-5 bg-zinc-800'>
                        <h1>{post.title}</h1>
                        <p>{post.content}</p>
                        <VoteContainer source={post} type="posts" />
                        <EditContainer id={post._id} post={post}/>
                    </div>
                    <CommentForm postID={post._id} setComments={setComments} comments={comments}/>
                    <div className='rounded-lg p-5 m-5'>
                        <PostComments comments={comments} />        
                    </div>
                </div>
            ) : "loading"}
        </div>
    )
}
