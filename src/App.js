function App() {
  return (
    <div className="container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">CPEG</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            {/* <a className="nav-link" href="/">Features</a> */}
            {/* <a className="nav-link" href="/">Contact</a> */}
          </nav>
        </div>
      </header>
      
      <main className="px-3">
        <h1>Canceling Plans Excuse Generator</h1>
        {/* <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p> */}
        <p className="lead">
          <a href="/" className="btn btn-lg btn-secondary fw-bold border-white bg-white">Start</a>
        </p>
      </main>
      
      <footer className="mt-auto text-white-50">
        <p>&copy; 2021 | <a href="https://jaesmadeit.com/" className="text-white" target='_blank' rel="noreferrer">JAES Made It</a></p>
      </footer>
    </div>
    );
}
  
export default App;
  