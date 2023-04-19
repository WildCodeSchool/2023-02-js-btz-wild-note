import React from 'react'
import { GrCaretNext } from 'react-icons/gr'
import { GrChapterPrevious } from 'react-icons/gr'
import { GrChapterNext } from 'react-icons/gr'
import './PlayerNextPlayPrevBtn.css'



const PlayerNextPlayPrevBtn = () => {
    return (
        <div className='PlayerNextPlayPrevBtn'>
            <button><GrChapterPrevious /></button>
            <button><GrCaretNext /></button>
            <button><GrChapterNext /></button>

        </div>
    )
}

export default PlayerNextPlayPrevBtn