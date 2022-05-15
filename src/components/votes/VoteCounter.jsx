import React from 'react'

export const VoteCounter = ({votes}) => {
  return (
    <div >
        <b>{votes ? votes : 0}</b>
    </div>
  )
}
