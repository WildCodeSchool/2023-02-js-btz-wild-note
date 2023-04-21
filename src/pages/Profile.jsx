import logoavectexte from '../assets/logo-avectexte.png';
import ModifyProfile from '../components/SettingsFeatures/ModifyProfile';
import YourProfile from '../components/SettingsFeatures/YourProfile'
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
        </div>
        
    )
}

export default Profile