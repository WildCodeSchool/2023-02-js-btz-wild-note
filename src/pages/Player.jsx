import PlayerCover from '../components/Player-components/PlayerCover'
import PlayerReplayBtn from '../components/Player-components/PlayerReplayBtn'
import PlayerNextPlayPrevBtn from '../components/Player-components/PlayerNextPlayPrevBtn'
import PlayerShuffle from '../components/Player-components/PlayerShuffle'
import './Player.css'
import PlayerTitle from '../components/Player-components/PlayerTitle'
import PlayerBtnLike from '../components/Player-components/PlayerBtnLike'
import ReturnArrow from '../components/Player-components/ReturnArrow'

const Player = () => {
    return (
        <div className='PlayerBottomBtnParent'>
            <div className='arrow-container'>
                <ReturnArrow />
            </div>
            <div className='player-cover-contener'>
                <PlayerCover />
            </div>
            <div className='Player-desc'>
                <div className='song-desc'>
                    <PlayerTitle />
                </div>

                <div className='btn-like'>
                    <PlayerBtnLike />
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