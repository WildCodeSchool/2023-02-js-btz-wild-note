import React from 'react'
import { BsPlayFill } from 'react-icons/bs'
import { TbPlayerTrackPrevFilled } from 'react-icons/tb'
import { TbPlayerTrackNextFilled } from 'react-icons/tb'
import './PlayerNextPlayPrevBtn.css'



const PlayerNextPlayPrevBtn = () => {
    return (
        <div className='PlayerNextPlayPrevBtn'>
            <div className='play-btn-prev'>
                <TbPlayerTrackPrevFilled style={{ height: '3.5em', width: '3.5em' }} />
            </div>


            <div className='play-btn'>
                <BsPlayFill style={{ height: '4.5em', width: '4.5em', fill: "#cbd1F8" }} />
            </div>

            <div className='play-btn-prev'>
                <TbPlayerTrackNextFilled style={{ height: '3.5em', width: '3.5em', }} />
            </div>


        </div>
    )
}

export default PlayerNextPlayPrevBtn