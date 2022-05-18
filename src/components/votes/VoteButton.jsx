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
                setVotes(votes ? votes + 1 : 1);
                break;
            case 'down':
                setVotes(votes ? votes - 1 : -1)
                break
            default:
                break
        }
    }

    const getIcon = () => {
        switch (upOrDown) {
            case 'up':
                return "👍"
            case 'down':
                return "👎"
            default:
                return "👍"
        }
    }


    return (
        <button onClick={submitLike}>
            {getIcon()}
        </button>
    )
}
