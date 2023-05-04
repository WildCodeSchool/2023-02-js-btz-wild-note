import { useState } from 'react'
import { BsPlayFill, BsFillPauseFill } from 'react-icons/bs'
import './PlayBtn.css'

const PlayBtn = ({handlePlay, isPlaying}) => {

    return(
        <div className={isPlaying ?'pause-btn-container' : 'play-btn-container'} onClick={handlePlay}>
          {isPlaying ? 
          <BsFillPauseFill className='pause-btn'/> :   
          <BsPlayFill className='play-btn'/> }
        </div>
        
    )
}

export default PlayBtn
