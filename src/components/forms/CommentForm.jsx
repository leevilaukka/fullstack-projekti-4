import React from 'react'
import {api} from '../../api'

export const CommentForm = ({postID, comments, setComments}) => {
  const [content, setContent] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!content) return alert('Kommentti ei voi olla tyhjä')

    api.comments.create({
      content,
      post: postID
    }).then(comment => {
      console.log('comment', comment)
      setComments([...comments, comment])
    }) 
  }
  
  return (
    <div className='flex'>
        <textarea required id="content" className='text-dark ml-5' placeholder='Kirjoita jotain...'  rows={2} value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <button className='bg-black ml-5 p-4 rounded' onClick={handleSubmit} type="button">Submit</button>
    </div>
  )
}
