import "./errorMessage.css";


function ErrorMessage({message})
{
    console.log("error message")
    
    return(
        
        <div className="error_container">

            <div className="cross_container">
                <button className="cross">
                    ✖
                </button>
            </div>

            <div className="error_message">
                {message}
            </div>
            
            
            
        </div>
        
        // <div class="error_message">
        //     <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        //     <strong>Danger!</strong> {message}
        // </div>
    )
}

export default ErrorMessage;