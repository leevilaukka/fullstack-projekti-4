import React, { useEffect } from 'react'

export const VoteCounter = ({votes}) => {
  return (
    <div>
        <p>{votes ? votes : 0}</p>
    </div>
  )
}
