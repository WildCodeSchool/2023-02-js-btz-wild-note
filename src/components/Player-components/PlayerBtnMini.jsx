import React from 'react'
import { TbPlayerTrackPrevFilled } from 'react-icons/tb'
import { TbPlayerTrackNextFilled } from 'react-icons/tb'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import PlayerTitle from './PlayerTitle'
import PlayerCover from './PlayerCover'
import PlayBtn from './PlayBtn'
import './PlayerBtnMini.css'


const PlayerBtnMini = () => {
    return (

        <div className='btn-position'>
            <div className='image-cover-mini-container'>
                <img src="" alt="" className='image-cover-mini ' />
            </div>
            <div className='title-mini-container'>
                <PlayerTitle className='title-mini' />
            </div>
            <div className='fav-btn-container'>
                <FavoriteButton className='FavBbtn' />
            </div>

            <div className='PlayerNextPlayPrevBtnMini'>
                <PlayBtn />
                
                <div className='play-btn-prev-mini'>
                    <TbPlayerTrackNextFilled style={{ height: '2.5em', width: '2.5em', }} />
                </div>


            </div>
        </div>

    )
}

export default PlayerBtnMini