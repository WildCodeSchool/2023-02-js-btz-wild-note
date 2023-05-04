import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled } from 'react-icons/tb'
import PlayBtn from './PlayBtn'
import './PlayerNextPlayPrevBtn.css'

const PlayerNextPlayPrevBtn = () => {
    return (
        <div className='PlayerNextPlayPrevBtn'>
            <div className='play-btn-prev'>
                <TbPlayerTrackPrevFilled style={{ height: '3.5em', width: '3.5em' }} />
            </div>

            <PlayBtn />          

            <div className='play-btn-prev'>
                <TbPlayerTrackNextFilled style={{ height: '3.5em', width: '3.5em', }} />
            </div>


        </div>
    )
}

export default PlayerNextPlayPrevBtn