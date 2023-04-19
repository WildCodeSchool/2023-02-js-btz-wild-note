import React from 'react'
import { IoIosRepeat } from 'react-icons/io'
import './PlayerReplayBtn.css'
const PlayerReplayBtn = () => {
    return (
        <div className='PlayerReplayBtn'>
            <div className='replay-btn'>
                <IoIosRepeat style={{ height: '2.5em', width: '2.5em', }} />
            </div>
        </div>
    )
}

export default PlayerReplayBtn