import React, {useState} from 'react'
import { IoIosRepeat } from 'react-icons/io'
import './PlayerReplayBtn.css'
const PlayerReplayBtn = () => {

    const [isRepeating, setIsRepeating] = useState(false);

    const handleRepeat = () => {
        setIsRepeating(!isRepeating)
    }

    return (
        <div className={isRepeating ?'unrepeat-btn-container' : 'repeat-btn-container'} onClick={handleRepeat}>
            <IoIosRepeat  className={isRepeating ? 'unrepeat-btn': 'repeat-btn' }/>
        </div>
    )
}

export default PlayerReplayBtn