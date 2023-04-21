import {IoIosClose} from 'react-icons/io'
import logoavectexte from '../../assets/logo-avectexte.png';
import "./ModifyProfile.css";

const ModifyProfile = () => {
    
    return(
        <div className='modify-form-container'>
            <form className="modify-form">
                <label htmlFor='username'>Change Username</label>
                <input type="text" name="username" id="username" placeholder="New Username" />
                <label htmlFor='about'>About You</label>
                <textarea name="about" id="about" placeholder="Your infos" />
                <label htmlFor='password'>Change Password</label>
                <input type="password" name="password" id="password" placeholder="New Password" minLength="8" />
                <label htmlFor='email'>Change Email Address</label>
                <input type="email" name="email" id="password" placeholder="New email address"/>
                <input type="submit" value="Save changes" />
            </form>
            
        </div>
        
        
    )
}

export default ModifyProfile