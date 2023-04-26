import React from 'react'
import { BsPlayFill } from 'react-icons/bs'
import { TbPlayerTrackPrevFilled } from 'react-icons/tb'
import { TbPlayerTrackNextFilled } from 'react-icons/tb'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import PlayerTitle from './PlayerTitle'
import PlayerCover from './PlayerCover'
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


                <div className='play-btn-mini'>
                    <BsPlayFill style={{ height: '3em', width: '3em', fill: "#cbd1F8" }} />
                </div>

                <div className='play-btn-prev-mini'>
                    <TbPlayerTrackNextFilled style={{ height: '2.5em', width: '2.5em', }} />
                </div>


            </div>
        </div>

    )
}

export default PlayerBtnMini