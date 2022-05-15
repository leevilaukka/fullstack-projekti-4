import React from 'react'
import { VoteContainer } from './votes/VoteContainer'

export const Comment = ({ comment }) => {
  return (
    <div className='rounded-lg p-5 m-5 flex bg-zinc-800'>
      <p>{comment.content}</p>
      <VoteContainer source={comment} type="comments" />
    </div>

  )
}
