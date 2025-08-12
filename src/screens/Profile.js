import Header from '../components/homepage/Header';
import ProfileContent from '../components/profile/ProfileContent';

import './Profile.css';

function Profile({navigate, customerName, setSearch, search, setSearched, setCurrentPage}){ 
    return(
        <div>
            <Header navigate={navigate} 
              customerName={customerName} 
              setSearch={setSearch} 
              search={search}
              setSearched={setSearched}
              setCurrentPage={setCurrentPage}/>
            <ProfileContent/>
        </div>
    )
}

export default Profile;