import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    useEffect(()=>{
        document.title = 'CPEG | Login'
    })

    function login(e) {
        e.preventDefault()
        // Verify fields are valid
        let email = e.target.email.value
        let password = e.target.password.value 
        
        if(email.length === '' || password.length === ''){
            document.querySelector('.error-msg').innerHTML = 'Please enter your email and password.';
        }else if(!email.includes('@')){
            document.querySelector('.error-msg').innerHTML = 'Please enter a valide email address.';
        }else{
            document.querySelector('.error-msg').innerHTML = '';
            toast.success('User logging will be available soon. Thank you :D', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <main className="px-3">
          <section className="login">
            <div className="login-ava">
                
            </div>
            <div className="login-title">
                <h1>Login</h1>
                <form id='login-form' onSubmit={login}>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" required/>
                        <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="password" placeholder="Password" name="password" required/>
                        <label htmlFor="password">Password</label>
                    </div>
                </form>
                <div className="error-msg"></div>
                <p className="lead">
                    <button form='login-form' type='submit' className="btn btn-lg btn-outline-primary">
                    Login
                    </button>
                </p>
                <small>Don't have an account? <Link to="/register">Register</Link></small>
            </div>
            <ToastContainer />
          </section>
        </main>
      );
}

export default Login;