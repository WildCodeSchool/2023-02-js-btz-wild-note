import { useState } from 'react'
import { IoIosShuffle } from 'react-icons/io'
import './PlayerShuffle.css'

const PlayerShuffle = () => {
    const [isShuffle, setIsShuffle] = useState(false);

    const handleShuffle = () => {
        setIsShuffle(!isShuffle)
    }

    return (
        <div className={isShuffle ?'unshuffle-btn-container' : 'shuffle-btn-container'} onClick={handleShuffle}>
            <IoIosShuffle  className={isShuffle ? 'unshuffle-btn': 'shuffle-btn' }/>
        </div>
    )
}

export default PlayerShuffle