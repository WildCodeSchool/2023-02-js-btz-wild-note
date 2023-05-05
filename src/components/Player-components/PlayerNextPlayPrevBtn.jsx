import { TbPlayerTrackPrevFilled, TbPlayerTrackNextFilled } from 'react-icons/tb'
import PlayBtn from './PlayBtn'
import './PlayerNextPlayPrevBtn.css'


const PlayerNextPlayPrevBtn = ({ handlePlay, handlePrev, handleNext, isPlaying }) => {

    return (
        <div className='PlayerNextPlayPrevBtn'>

            <div className='play-btn-prev'>
                <TbPlayerTrackPrevFilled style={{ height: '3.5em', width: '3.5em' }} onClick={handlePrev} />
            </div>

            <PlayBtn id={0} handlePlay={handlePlay} isPlaying={isPlaying} />          

            <div className='play-btn-prev'>
                <TbPlayerTrackNextFilled style={{ height: '3.5em', width: '3.5em', }} onClick={handleNext} />
            </div>


        </div>
    )
}

export default PlayerNextPlayPrevBtn