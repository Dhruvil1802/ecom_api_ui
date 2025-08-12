import '@fortawesome/fontawesome-free/css/all.min.css';
import './PersonalInformation.css';

function PersonalInformation(){
    return(
    <div className="personalinfo_div">
            <button 
                className="personalinfo_edit_button" 
            >
               Edit  <i className="fas fa-edit" style={{ fontSize: '0.8rem' }}></i>
            </button>

        <h2>Personal Information</h2>

        <div className='full_name'>
            <div className='first_name'>
                <span>First Name</span>
                <input type="text"/>
            </div>
            <div className='middle_name'>
                <span>First Name</span>
                <input type="text"/>
            </div>
            <div className='last_name'>
                <span>Last Name</span>
                <input type="text"/>
            </div>
        </div>

        <div className='contact_info'>
            <div className='email_address'>
                <span>Email Address</span>
                <input type="email"/>
            </div>
            <div className='contact_number'>
                <span>Contact Number</span>
                <input type="text"/>
            </div>
        </div>

        <div className="gender">
            <p>Gender</p>
            <div className="gender_options">
                <div className="male">
                    <input type="radio" name="gender" value="male"  />
                    <label htmlFor="male">Male</label>
                </div>
                <div className="female">
                    <input type="radio" name="gender" value="female" />
                    <label htmlFor="female">Female</label>
                </div>
                <div className="other">
                    <input type="radio" name="gender" value="other" />
                    <label htmlFor="other">Other</label>
                </div>
                <div className="prefer_not_to_say">
                    <input type="radio" name="gender" value="prefer_not" />
                    <label htmlFor="prefer_not">Prefer not to say</label>
                </div>
            </div>
        </div>



        <div className='age_info'>
            <div className='age'>
                <span>Age</span>
                <input type="text"/>
            </div>

        </div>

    </div>)
}

export default PersonalInformation;