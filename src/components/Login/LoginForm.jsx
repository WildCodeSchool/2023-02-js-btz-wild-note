import './LoginForm.css'

const LoginForm = () => {
    return(
        <form className="login-form-container">
            <div className='login-form'>
                <input type="text" name="username" id="username" placeholder="Username" required/>
                <input type="password" name="password" id="password" placeholder="Password" minLength="8" required/>
            </div>
            <input type="submit" value="Login" />
        </form>
    )
}

export default LoginForm