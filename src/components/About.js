import { useEffect } from "react";

function About() {

    useEffect(()=>{
        document.title = 'CPEG | About'
    })

    return (
        <main className="px-3">
          <section className="about">
            <div className="about-title">
                <h1>About</h1>
                <ul>
                  <li>Inspired by this <a href="https://www.reddit.com/r/funny/comments/o5upmq/canceling_plans_excuse_generator_oc/" target='_blank' rel='noreferrer'>Reddit post</a>, coded for fun.</li>
                  <li>Images from <a href="https://undraw.co/illustrations" target='_blank' rel='noreferrer'>unDraw</a>.</li>
                </ul>
                <p className="lead">
                    <a
                    href="https://www.jaesmadeit.com/projects"
                    className="btn btn-lg btn-outline-primary"
                    target='_blank'
                    rel='noreferrer'
                    >
                    See more proyects
                    </a>
                </p>
            </div>
            <div className="about-ava">
                
            </div>
          </section>
        </main>
      );
}

export default About;