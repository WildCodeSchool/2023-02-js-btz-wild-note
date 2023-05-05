import PlayerCover from '../components/Player-components/PlayerCover'
import PlayerReplayBtn from '../components/Player-components/PlayerReplayBtn'
import PlayerNextPlayPrevBtn from '../components/Player-components/PlayerNextPlayPrevBtn'
import PlayerShuffle from '../components/Player-components/PlayerShuffle'
import './Player.css'
import PlayerTitle from '../components/Player-components/PlayerTitle'

import ReturnArrow from '../components/Player-components/ReturnArrow'
import FavoriteButton from '../components/FavoriteButton/FavoriteButton'

const Player = ({ handlePlay, handlePrev, handleNext, isPlaying }) => {
    
    
    return (
        <div className='PlayerBottomBtnParent'>
            <div className='arrow-container'>
                <ReturnArrow />
            </div>
            <div>
                
            </div>
            
            <div className='player-cover-contener'>
                <PlayerCover />
            </div>
            <div className='Player-desc'>
                <div className='song-desc'>
                    <PlayerTitle />
                </div>

                <div className='btn-like'>
                    <FavoriteButton />
                </div>
            </div>
            <div className='PlayerBottomBtn'>

                <PlayerReplayBtn />
                <PlayerNextPlayPrevBtn handlePlay={handlePlay} handlePrev={handlePrev} handleNext={handleNext} isPlaying={isPlaying}/>
                <PlayerShuffle />
            </div>
        </div>
    )
}

export default Player


