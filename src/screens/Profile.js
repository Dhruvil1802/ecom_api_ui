import Header from '../components/homepage/Header';
import ProfileContent from '../components/profile/ProfileContent';

import './Profile.css';

function Profile({navigate, customerName, setSearch, search, setSearched, setCurrentPage, setCustomerName, setContent}){ 
    return(
        <div>
            <Header navigate={navigate} 
              customerName={customerName} 
              setCustomerName={setCustomerName}
              setSearch={setSearch} 
              search={search}
              setSearched={setSearched}
              setCurrentPage={setCurrentPage}
              setContent={setContent}
            />
            <ProfileContent/>
        </div>
    )
}

export default Profile;