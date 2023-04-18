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
                <h2 className='welcome'>Welcome</h2> <h2 className=' back'>back!</h2>
                <LoginForm />
            </div>
        </div>
        
    )
}

export default Login