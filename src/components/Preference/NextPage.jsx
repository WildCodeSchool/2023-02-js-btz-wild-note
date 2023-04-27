import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import './NextPage.css'

const NextPage = () => {

    return (
        <div className='next-page'>
            <Link to="/"><BsFillArrowRightCircleFill className='arrow-next'/></Link>
        </div>
    )
}

export default NextPage;