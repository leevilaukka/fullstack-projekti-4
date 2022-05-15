import React from 'react'
import {api} from '../../api'

export const VoteButton = ({
    source,
    sourceType,
    upOrDown,
    setVotes,
    votes
}) => {


    const submitLike = (e) => {
        e.preventDefault()

        api[sourceType].vote(source._id, upOrDown).then(res => {
            console.log('res', res)
        })

        switch (upOrDown) {
            case 'up':
                setVotes(votes ? votes + 1 : 0);
                break;
            case 'down':
                setVotes(votes ? votes - 1 : 0)
                break
            default:
                break
        }
    }


    return (
        <button onClick={submitLike}>
            Vote {upOrDown}
        </button>
    )
}
