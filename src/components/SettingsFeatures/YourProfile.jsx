import { useContext, useState } from 'react'
import { BsFillPencilFill } from 'react-icons/bs'
import {IoIosClose} from 'react-icons/io'
import ModifyProfile from './ModifyProfile'
import "./YourProfile.css";


const YourProfile = (props) => {

    const [newUsername, setUsername] = useState("")
    const [changeDesc, setChangeDesc] = useState("")
    const [form, setForm] = useState(false)

    const handleNewUsername = (e) => {
        setUsername(e.target.value)   
    }
    const handleNewDescription = (e) => {
        setChangeDesc(e.target.value)   
    }

    const toggleForm = () => {
        setForm(!form);
    };

    return (
        <div className="info-container">
            {form ? <div className='form-container'>
                <div className='cancel-btn'>
                    <IoIosClose className='cancel-icon' onClick={toggleForm}/>
                </div>
                <div className='form'><ModifyProfile newUsername={newUsername} changeDesc={changeDesc} handleNewUsername={handleNewUsername} handleNewDescription={handleNewDescription} toggleForm={toggleForm}/></div>
            </div>  : 
            <><div className='modify-pen'>
                <BsFillPencilFill className='pen' onClick={toggleForm}/>
            </div>
            <div className="profile-photo">
                <span>Profile Pic</span>
            </div>
            <div className="profile-infos">
                <h2>{newUsername}</h2> 
                <h3>Your info</h3>
                <p>{changeDesc}</p>
            </div></>
            }
        </div>
    )
}

export default YourProfile