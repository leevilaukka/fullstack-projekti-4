import React from 'react'
import { Link } from 'react-router-dom'

export const TopBar = () => {
  return (
    <div className='w-full p-1'>
        <Link to={"/"}>PostApp</Link>
    </div>
  )
}
