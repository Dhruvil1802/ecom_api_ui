import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ErrorMessage from '../error/errorMessage';
import './Login.css';

const local = "http://127.0.0.1:8000";
const host = "https://ecomapi-production-f9d8.up.railway.app";

function Login({showHomePage, setToken}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isErrorVisible, setIsErrorVisible] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const togglePassword = () => {
        if (isPasswordVisible === true) {   
            setIsPasswordVisible(false);
        }
        if (isPasswordVisible === false) {   
            setIsPasswordVisible(true);
        }
    };

    function handleSubmit(event) {

        event.preventDefault();
        
        async function LoginHandler() {
            try {
              const res = await fetch(`${host}/customer/login/`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
              });
              
              const data = await res.json();

              if (data.status.code === 201) {
                localStorage.setItem("token", data?.data?.customer_refresh_token);
                setToken(data?.data?.customer_refresh_token)
                showHomePage();

              }

              if (data?.status?.code === 400 || data?.status?.code === 404)
              {
                
                setIsErrorVisible(true)
                setErrorMessage(data?.status?.message)
                setTimeout(()=>setIsErrorVisible(false), 5000);
              }

              
            } catch (err) {
                setIsErrorVisible(true)
                setErrorMessage("service unavailable")
                setTimeout(()=>setIsErrorVisible(false), 5000);
            }
          }

          LoginHandler();
    };

    return (
        <>
        <div className="login_page">
           
            <img src="/images/login_background.png" className="background_image" />
            <div className="form_div">
               
                <form className="login_form" onSubmit={handleSubmit}>
                  
                    <h1 className="login_title">Log in</h1>
                    
                    <div className="input_div">
                        
                        <label htmlFor="email" className="input_label">EMAIL ADDRESS</label>
                        <input type="email" className="input_field" placeholder='hello@example.com' 
                        value={email} onChange={(e) => setEmail(e.target.value)} required />
                   
                    </div>
                    
                    <div className="input_div">
                        
                        <label htmlFor="password" className="input_label">PASSWORD</label>
                        
                        <input type={isPasswordVisible ? "text" : "password"} className="input_field" 
                        placeholder='' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        
                        <div className="password_toggle_icon" onClick={togglePassword}>
                            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    
                    </div>
                    
                    <button type="button" className="forgot_button">Forgot password?</button>
                    <button type="submit" className="login_button">Log in</button>
                    <div className="divider">or</div>
                    <button type="button" className="signup_button">Sign Up </button>
               
                </form>
            </div>
        </div>
                    {isErrorVisible?<ErrorMessage message={errorMessage}/>:""}
        </>

    );
}

export default Login;
