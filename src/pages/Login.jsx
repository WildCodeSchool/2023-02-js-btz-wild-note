import logoavectexte from '../assets/logo-avectexte.png';
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
                    <h2 className='welcome'>Welcome&nbsp;</h2> <h2 className='back'>back!</h2>
                </div>
                <LoginForm />
            </div>
            <div className='login-sentence'>
                <p>Forgot password? or <span>Sign up</span></p>
            </div>
        </div>
        
    )
}

export default Login