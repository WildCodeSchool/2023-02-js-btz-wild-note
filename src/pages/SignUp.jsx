import logoavectexte from '../assets/logo-avectexte.png';
import { Link } from 'react-router-dom'
import SignUp from '../components/Login/SignUp';
import './Login.css'

const SignUpPage = () => {
    return(
        <div className="login-page">
            <div className="logo-container">
                <img src={logoavectexte} alt="logo wildnote" />
            </div>
            <div className='login-container'>
                <div className='title-login'>
                    <h2 className='welcome'>Welcome&nbsp;</h2> <h2 className='back'>Wilder!</h2>
                </div>
                <SignUp />
            </div>
            <div className='login-sentence'>
                <p>Already signed up? Click here to <Link to="/login"><span>Login</span></Link></p>
            </div>
        </div>
        
    )
}

export default SignUpPage