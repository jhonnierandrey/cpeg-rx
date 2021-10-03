function Header() {
    return(
        <header className="mb-auto">
            <div>
                <h3 className="float-md-start mb-0"><a href="/">CPEG</a></h3>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    {/* <a className="nav-link" href="/">Features</a> */}
                    {/* <a className="nav-link" href="/">Contact</a> */}
                </nav>
            </div>
      </header>
    )
}

export default Header;