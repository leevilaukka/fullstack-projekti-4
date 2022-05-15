import React, { useEffect } from 'react'
import { VoteButton } from './VoteButton'
import { VoteCounter } from './VoteCounter'


export const VoteContainer = ({source, type}) => {
  const [votes, setVotes] = React.useState(0)

  useEffect(() => {
    setVotes(source.votes)
  }, [source])

  return (
    <div className='justify-items-end'>
        <VoteButton source={source} sourceType={type} upOrDown={"up"} votes={votes} setVotes={setVotes}/>
        <VoteCounter votes={votes} />
        <VoteButton source={source} sourceType={type} upOrDown={"down"} votes={votes} setVotes={setVotes}/>
        
    </div>
  )
}
