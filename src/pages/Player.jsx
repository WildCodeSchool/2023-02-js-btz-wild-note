import PlayerCover from '../components/Player-components/PlayerCover'
import PlayerReplayBtn from '../components/Player-components/PlayerReplayBtn'
import PlayerNextPlayPrevBtn from '../components/Player-components/PlayerNextPlayPrevBtn'
import PlayerShuffle from '../components/Player-components/PlayerShuffle'
import './Player.css'
import PlayerTitle from '../components/Player-components/PlayerTitle'
import ReturnArrow from '../components/Player-components/ReturnArrow'
import FavoriteButton from '../components/FavoriteButton/FavoriteButton'
import PlayerProgressBar from '../components/Player-components/PlayerProgressBar'

const Player = () => {
    return (
        <div className='PlayerBottomBtnParent'>
            <div className='arrow-container'>
                <ReturnArrow />
            </div>
            <div className='player-cover-contener'>
                <PlayerCover />
            </div>
            <div>
                <PlayerProgressBar />
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
                <PlayerNextPlayPrevBtn />
                <PlayerShuffle />
            </div>
        </div>
    )
}

export default Player