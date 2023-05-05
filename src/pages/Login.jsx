import logoavectexte from '../assets/logo-avectexte.png';
import { Link } from 'react-router-dom'
import LoginForm from '../components/Login/LoginForm';
import './Login.css'

const Login = () => {
    return(
        <div className="login-page">
            <div className="logo-container">
                <img src={logoavectexte} alt="logo wildnote" />
            </div>
            <div className='login-container'>
                <div className='title-login'>
                    <h2 className='welcome'>Welcome&nbsp;</h2> <h2 className='back'>Wilder!</h2>
                </div>
                <LoginForm />
            </div>
            <div className='login-sentence'>
                <p>Don't have an account? Click here to <Link to="/sign-up"><span>Sign Up</span></Link></p>
            </div>
        </div>
        
    )
}

export default Login