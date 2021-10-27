import { useEffect } from "react";
import { Link } from "react-router-dom";

function NotFound() {

    useEffect(()=>{
        document.title = 'CPEG | Not Found'
    })

    return (
        <main className="px-3">
          <section className="not-found">
            <div className="not-found-title">
                <h1>Nothing here...</h1>
                <p>
                    Maybe this content is not longer available.
                </p>
                <p className="lead">
                    <Link
                        href="https://www.jaesmadeit.com/projects"
                        className="btn btn-lg btn-outline-primary"
                        target='_blank'
                        rel='noreferrer'
                        >
                        Go home
                    </Link>
                </p>
            </div>
            <div className="not-found-ava">
                
            </div>
          </section>
        </main>
      );
}

export default NotFound;