import logoavectexte from '../assets/logo-avectexte.png';
import { UserProvider } from '../components/Login/UsernameContext';
import YourProfile from '../components/SettingsFeatures/YourProfile';
import Navbar from '../components/navbar/Navbar';
import "./Profile.css";

const Profile = () => {
    return(
          <div className="profile-page">
            <div className="logo-container">
                    <img src={logoavectexte} alt="logo wildnote" />
                </div>
                <div className='profile-container profile'>
                    <YourProfile />
                </div>
                {/* <div className='profile-container form'>
                    <ModifyProfile /> 
                </div> */}
                <Navbar />
            </div>        
        
    )
}

export default Profile