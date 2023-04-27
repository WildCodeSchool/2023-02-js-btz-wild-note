import { useState } from 'react'
import { BsFillPencilFill } from 'react-icons/bs'
import {IoIosClose} from 'react-icons/io'
import ModifyProfile from './ModifyProfile'
import LoginForm from '../Login/LoginForm'
import "./YourProfile.css";


const YourProfile = () => {

    const [form, setForm] = useState(false)
    const toggleForm = () => {
        setForm(!form);
    };

    const [dataForm, setDataForm] = useState({
        username: '',
        password: ''
    });

    const [formUsername, setFormUsername] = useState({username: ''})

    return (
        <div className="info-container">
            {form ? <div className='form-container'>
                <div className='cancel-btn'>
                    <IoIosClose className='cancel-icon' onClick={toggleForm}/>
                </div>
                <div className='form'><ModifyProfile /></div>
            </div>  : 
            <><div className='modify-pen'>
                <BsFillPencilFill className='pen' onClick={toggleForm}/>
            </div>
            <div className="profile-photo">
                <span>Profile Pic</span>
            </div>
            <div className="profile-infos">
                <LoginForm username={formUsername}/> 
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut porro sint iusto dolore molestias praesentium quo neque quam, cumque aspernatur repudiandae rem explicabo nesciunt accusamus eaque quasi optio illo.</p>
            </div></>
            }
        </div>
    )
}

export default YourProfile