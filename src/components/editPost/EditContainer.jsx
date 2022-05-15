import React from 'react'
import { api } from '../../api'

import { EditPost } from './EditPost'

export const EditContainer = ({id, post}) => {
    const [canEdit, setCanEdit] = React.useState(false)
    const [showEdit, setShowEdit] = React.useState(false)
    const [editCode, setEditCode] = React.useState('')

    const checkCanEdit = () => {
        const postEditCodes = JSON.parse(localStorage.getItem('postEditCodes')) || []
        postEditCodes.forEach(obj => {
            if (obj.id === id) {
                setCanEdit(true)
                setEditCode(obj.editCode)
            } else {
                setCanEdit(false)
            }
        })
    }

    React.useEffect(() => {
        checkCanEdit()
    }, [id])

  return (
    canEdit ? (
        <div>
            <button onClick={() => setShowEdit(!showEdit)}><h4>Edit</h4></button>
            <button
                onClick={() => {
                    window.confirm('Are you sure you want to delete this post?') && api.posts.delete(id, editCode).then(() => {
                        // go to posts list 
                        window.location.href = '/'
                    })
                }}
            ><h4>Delete</h4></button>
            {showEdit ? <EditPost id={id} editCode={editCode} post={post}/> : null}
        </div>
    ) : null
  )
}
