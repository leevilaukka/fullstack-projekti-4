import React from 'react'
import {Comment} from './Comment'

export const PostComments = ({comments}) => {
    if(!comments) {
        return <p>Ei kommentteja</p>
    }

    return (
        <div>
            <h3 className='uppercase font-bold'>Kommentit</h3>
            {comments.map(comment => (
                <Comment key={comment._id} comment={comment} />
            ))}
        </div>
    )
}
