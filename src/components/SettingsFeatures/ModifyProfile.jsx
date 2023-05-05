import {IoIosClose} from 'react-icons/io'
import logoavectexte from '../../assets/logo-avectexte.png';
import "./ModifyProfile.css";

const ModifyProfile = ({newUsername, changeDesc, handleNewUsername, handleNewDescription, toggleForm}) => {
    
    return(
        <div className='modify-form-container'>
            <form className="modify-form">
                <label htmlFor='username'>Change Username</label>
                <input type="text" name="username" id="username" placeholder="New Username" onChange={handleNewUsername} value={newUsername}/>
                <label htmlFor='about'>About You</label>
                <textarea name="about" id="about" placeholder="Your infos" onChange={handleNewDescription} value={changeDesc}/>
                <label htmlFor='password'>Change Password</label>
                <input type="password" name="password" id="password" placeholder="New Password" minLength="8" />
                <label htmlFor='email'>Change Email Address</label>
                <input type="email" name="email" id="password" placeholder="New email address"/>
                <button className='save-btn' onClick={toggleForm}>Save changes</button>
            </form>
            
        </div>
        
        
    )
}

export default ModifyProfile