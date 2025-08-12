import Address from './Address';
import Department from './Department';
import PersonalInformation from './PersonalInformation';

import './ProfileContent.css';

function ProfileContent(){
    return(<div className='profile_content'>
    <h1>My Profile</h1>
    <Department/>
    <PersonalInformation/>
    <Address />
    </div>)
}

export default ProfileContent;