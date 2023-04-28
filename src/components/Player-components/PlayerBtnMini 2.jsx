import React from 'react'
import { BsPlayFill } from 'react-icons/bs'
import { TbPlayerTrackPrevFilled } from 'react-icons/tb'
import { TbPlayerTrackNextFilled } from 'react-icons/tb'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import './PlayerBtnMini.css'


const PlayerBtnMini = () => {
    return (

        <div className='btn-position'>
            <div className='fav-btn-container'>
                <FavoriteButton className='FavBbtn' style={{ height: '1em', width: '1em' }} />
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