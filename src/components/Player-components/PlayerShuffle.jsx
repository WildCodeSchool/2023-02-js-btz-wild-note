import './PlayerShuffle.css'
import { IoIosShuffle } from 'react-icons/io'
const PlayerShuffle = () => {
    return (
        <div className='PlayerShuffle'>
            <div className='shuffle-btn'>
                <IoIosShuffle style={{ height: '2.5em', width: '2.5em', }} />
            </div>
        </div>
    )
}

export default PlayerShuffle