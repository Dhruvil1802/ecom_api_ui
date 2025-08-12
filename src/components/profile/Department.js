import '@fortawesome/fontawesome-free/css/all.min.css';
import './Department.css';

function Department(){
    return(<div className="department_div">

            <button 
                className="department_edit_button" 
            >
               Edit  <i className="fas fa-edit" style={{ fontSize: '0.8rem' }}></i>
            </button>

        <span className="employee_name">Prakruti Dave</span>
        <span className="department_name">HR Department</span>

    </div>) 
}

export default Department;