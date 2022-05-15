import React from 'react'
import {api} from '../../api'

export const CommentForm = ({postID, comments, setComments}) => {
  const [content, setContent] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    api.comments.create({
      content,
      post: postID
    }).then(comment => {
      console.log('comment', comment)
      setComments([...comments, comment])
    }) 
  }
  
  return (
    <div className='flex justify-center pt-4'>
      
        <label htmlFor="content">Content</label>
        <textarea required id="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <button onClick={handleSubmit} type="button">Submit</button>
     
    </div>
  )
}
