import { Link } from 'react-router-dom'
import { useState } from 'react'
import './SignUp.css'

const LoginForm = () => {

    const [chosenUsername, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return(
        <form className="login-form-container">
            <div className='login-form'>
                <input type="text" name="username" id="username" placeholder="Username" onChange={handleUsername} value={chosenUsername} required/>
                <input type="password" name="password" id="password" placeholder="Password" onChange={handlePassword} value={password} required/>
            </div>
            <Link to="/">Login</Link>
        </form> 
        
    )
}

export default LoginForm