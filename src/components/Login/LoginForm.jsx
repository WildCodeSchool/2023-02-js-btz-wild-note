import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './LoginForm.css'


const LoginForm = () => {

    const [chosenUsername, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPwd, setConfirmPwd] = useState('')
    const [errorMessage, setErrorMessage] = useState("")
    const [badEmail, setBadEmail] = useState("")
    const [validEmail, setValidEmail] = useState(null)

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleEmail = (e) => {
        let newEmail = e.target.value
        setEmail(newEmail)

        let emailReg = /\S+@\S+\.\S+/gi;
        if  (newEmail.length === 0) {
            setBadEmail("")
        } else if (!newEmail.match(emailReg)) {
            setBadEmail("Email address is invalid.")
        }
    }

    
    const handlePassword = (e) => {
        let newPwd = e.target.value
        setPassword(newPwd)

        let lcCase = /[a-z]/g;
        let ucCase = /[A-Z]/g;
        let numCase = /[0-9]/g;
        if (newPwd.length === 0) {
            setErrorMessage("")
        } else if (!newPwd.match(lcCase)) {
            setErrorMessage("Password should contains lowercase letters!");
        } else if (!newPwd.match(ucCase)) {
            setErrorMessage("Password should contain uppercase letters!");
         } else if (!newPwd.match(numCase)) {
            setErrorMessage("Password should contains numbers!");
         } else if (!newPwd.length < 8) {
            setErrorMessage("Password length should be more than 8 letters!");
         } else {
            setErrorMessage("Password is strong!"); 
         }
    }

    const handleConfirmPwd = (e) => {
        setConfirmPwd(e.target.value)   
    }
    

    return(
        <form className="login-form-container">
            <div className='login-form'>
                <input type="text" name="username" id="username" placeholder="Username" onChange={handleUsername} value={chosenUsername} required/>
                <input type="email" name="email" id="email" placeholder="Email address" 
                onChange={handleEmail} value={email} required />
                <p className="error-message">{badEmail}</p>
                <input type="password" name="password" id="password" placeholder="Password" minLength="8" onChange={handlePassword} value={password} required/>
                <p className="error-message">{errorMessage}</p>
                <input type="password" name="password" id="confirmPwd" placeholder="Confirm password" onChange={handleConfirmPwd} value={confirmPwd} required/>
                <p className={confirmPwd === password ? "correct-pwd" : "error-message"}>Error: passwords must match</p>
            </div>
            <Link to="/preference"><input type="submit" value="Sign Up" /></Link>
        </form> 
        
    )
}

export default LoginForm