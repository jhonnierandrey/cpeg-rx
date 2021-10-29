import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="mb-auto">
            <div>
                <h3 className="float-md-start mb-0"><a href="/">CPEG</a></h3>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                    <Link className="nav-link" aria-current="page" to="/about">About</Link>
                    <Link className="nav-link" aria-current="page" to="/contact">Contact</Link>
                </nav>
            </div>
      </header>
    )
}

export default Header;