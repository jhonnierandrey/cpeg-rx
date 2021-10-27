import { Link } from "react-router-dom";
import { useEffect } from "react";

function Register() {

    useEffect(()=>{
        document.title = 'CPEG | Register'
    })

    return (
        <main className="px-3">
          <section className="register">
            <div className="register-title">
                <h1>Register</h1>
                <form action="">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                </form>
                <p className="lead">
                    <a
                    href="/"
                    className="btn btn-lg btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#cpegModal"
                    >
                    Register
                    </a>
                </p>
                <small>Already an user? <Link to="/login">Login</Link></small>
            </div>
            <div className="register-ava">
                
            </div>
          </section>
        </main>
      );
}

export default Register;