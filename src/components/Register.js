import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

    useEffect(()=>{
        document.title = 'CPEG | Register'
    })

    function register(e) {
        e.preventDefault()
        // Verify fields are valid
        let email = e.target.email.value
        let password = e.target.password.value
        let passwordCheck = e.target.passwordCheck.value

        if(password.length < 8 || password.length > 12){
            document.querySelector('.error-msg').innerHTML = 'Password must be 8-12 characters.';
            return;
        }

        if(password !== passwordCheck){
            document.querySelector('.error-msg').innerHTML = 'Passwords do not match.';
            return;
        }
        
        if(email.length === '' || password.length === ''){
            document.querySelector('.error-msg').innerHTML = 'Please enter your email and password.';
        }else if(!email.includes('@')){
            document.querySelector('.error-msg').innerHTML = 'Please enter a valide email address.';
        }else{
            document.querySelector('.error-msg').innerHTML = '';
            toast.success('User Sign Up will be available soon. Thank you :D', {
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
          <section className="register">
            <div className="register-title">
                <h1>Register</h1>
                <form id='register-form' onSubmit={register}>
                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" required/>
                        <label htmlFor="email">Email address</label>
                    </div>
                    <div className="row g-2">
                        <div className="col-md">
                            <div className="form-floating">
                                <input type="password" className="form-control" id="password" placeholder="Password" name="password" required/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-floating">
                                <input type="password" className="form-control" id="password-check" placeholder="Repeat password" name="passwordCheck" required/>
                                <label htmlFor="password-check">Repeat password</label>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="error-msg"></div>
                <p className="lead">
                    <button form='register-form' type='submit' className="btn btn-lg btn-outline-primary">
                    Register
                    </button>
                </p>
                <small>Already an user? <Link to="/login">Login</Link></small>
            </div>
            <div className="register-ava">
                
            </div>
            <ToastContainer />
          </section>
        </main>
      );
}

export default Register;