import '@fortawesome/fontawesome-free/css/all.min.css';
import './Address.css';

function Address(){
    return(<div className="address_div">

        <h2>Address</h2>
        <button className="address_edit_button" >
               Edit  <i className="fas fa-edit" style={{ fontSize: '0.8rem' }}></i>
        </button>

        <div className='div1'>
            <div className='street'>
                <span>Street</span>
                <input type="text"/>
            </div>
            <div className='city'>
                <span>City</span>
                <input type="text"/>
            </div>
            <div className='state'>
                <span>State</span>
                <input type="text"/>
            </div>
        </div>

        <div className='div2'>
            <div className='country'>
                <span>Country</span>
                <input type="email"/>
            </div>
            <div className='postal_code'>
                <span>Postal Code</span>
                <input type="text"/>
            </div>
        </div>

      

    </div>)
}

export default Address;