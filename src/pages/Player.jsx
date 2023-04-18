import React from 'react'
import PlayerReplayBtn from '../components/Player-components/PlayerReplayBtn'
import PlayerNextPlayPrevBtn from '../components/Player-components/PlayerNextPlayPrevBtn'
import PlayerShuffle from '../components/Player-components/PlayerShuffle'
import './Player.css'
const Player = () => {
    return (
        <div className='PlayerBottomBtn'>
            <PlayerReplayBtn />
            <PlayerNextPlayPrevBtn />
            <PlayerShuffle />
        </div>
    )
}

export default Player