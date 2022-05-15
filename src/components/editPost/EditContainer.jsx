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
    })

  return (
    canEdit ? (
        <div>
            <button className="bg-zinc-700 p-2 m-1 rounded" onClick={() => setShowEdit(!showEdit)}><h4>Muokkaa</h4></button>
            <button
                className='bg-red-700 p-2 m-1 rounded'
                onClick={() => {
                    window.confirm('Haluatko varmasti poistaa?') && api.posts.delete(id, editCode).then(() => {
                        // go to posts list 
                        window.location.href = '/'
                    })
                }}
            ><h4>Poista</h4></button>
            {showEdit ? <EditPost id={id} editCode={editCode} post={post}/> : null}
        </div>
    ) : null
  )
}
