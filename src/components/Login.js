import { Link } from "react-router-dom";
import { useEffect } from "react";

function Login() {

    useEffect(()=>{
        document.title = 'CPEG | Login'
    })

    return (
        <main className="px-3">
          <section className="login">
            <div className="login-ava">
                
            </div>
            <div className="login-title">
                <h1>Login</h1>
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
                    Login
                    </a>
                </p>
                <small>Don't have an account? <Link to="/register">Register</Link></small>
            </div>
          </section>
        </main>
      );
}

export default Login;