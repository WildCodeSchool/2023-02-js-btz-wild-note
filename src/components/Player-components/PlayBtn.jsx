import { useEffect, useState } from 'react'
import { BsPlayFill, BsFillPauseFill } from 'react-icons/bs'
import './PlayBtn.css'

const PlayBtn = ({handlePlay, isPlaying, id}) => {

    const [played, setPlayed] = useState(false)
    
    useEffect(() => {
      setPlayed(isPlaying === id)
    }, [id])

    const triggerPlay = (id) => {


      handlePlay(id)
      setPlayed(!played)
    }

    return(
        <div 
          className={played ? 'pause-btn-container' : 'play-btn-container'} 
          onClick={() => triggerPlay(id)}
          >
          {played ? 
          <BsFillPauseFill className='pause-btn'/> :   
          <BsPlayFill className='play-btn'/> }
        </div>
        
    )
}

export default PlayBtn
