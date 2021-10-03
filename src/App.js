function App() {
  return (
    <div className="container d-flex w-100 h-100 p-3 mx-auto flex-column">
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
      
      <main className="px-3">
        <h1>Canceling Plans Excuse Generator</h1>
        {/* <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p> */}
        <p className="lead">
          <a href="/" className="btn btn-lg btn-secondary fw-bold border-white bg-white" data-bs-toggle="modal" data-bs-target="#cpegModal">Start <i class="bi bi-play"></i></a>
        </p>
      </main>

      {/* MODAL */}
      <div class="modal fade" id="cpegModal" tabindex="-1" aria-labelledby="cpegModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content rounded-6 shadow">
            <div class="modal-header border-bottom-0">
              <h5 class="modal-title">Create your excuse!</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body py-0">
              <div className="modal-body-generator">
                <div class="card text-white bg-danger mb-3">
                  <div class="card-header">Choose an intro</div>
                  <div class="card-body">
                    <select class="form-select" size="3" aria-label="size 3 select example">
                      <option value="1" defaultValue>Sorry I can't come</option>
                      <option value="2">Please forgive my absence</option>
                      <option value="3">This is going to sound crazy but</option>
                      <option value="1" defaultValue>Sorry I can't come</option>
                      <option value="2">Please forgive my absence</option>
                      <option value="3">This is going to sound crazy but</option>
                    </select>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  </div>
                </div>
                <div class="card text-dark bg-warning mb-3">
                  <div class="card-header">Choose a scapegoat</div>
                  <div class="card-body">
                    <select class="form-select" size="3" aria-label="size 3 select example">
                      <option value="1" defaultValue>my nephew</option>
                      <option value="2">the ghost of Hitler</option>
                      <option value="3">The Pope</option>
                    </select>
                    {/* <h5 class="card-title">Warning card title</h5> */}
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  </div>
                </div>
                <div class="card text-dark bg-info mb-3">
                  <div class="card-header">Choose a delay</div>
                  <div class="card-body">
                    <select class="form-select" size="3" aria-label="size 3 select example">
                      <option value="1" defaultValue>just shit the bed</option>
                      <option value="2">died in front of me</option>
                      <option value="3">won't stop telling my knock knock jokes</option>
                    </select>
                    {/* <h5 class="card-title">Info card title</h5> */}
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer flex-column border-top-0">
              <button type="button" class="btn btn-lg btn-outline-primary w-100 mx-0 mb-2">Random <i class="bi bi-shuffle"></i></button>
              <button type="button" class="btn btn-lg btn-outline-danger w-100 mx-0" data-bs-dismiss="modal">Cancel <i class="bi bi-x-lg"></i></button>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-auto">
        <p>&copy; 2021 | <a href="https://jaesmadeit.com/" target='_blank' rel="noreferrer">JAES Made It</a></p>
      </footer>
    </div>
    );
}
  
export default App;
  