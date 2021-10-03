import { useEffect, useState } from "react";
import Card from "./Card";

import { INTRO, SCAPEGOAT, DELAY } from "./elements";

function Main() {
    const [intro, setIntro] = useState('');
    const [scapegoat, setScape] = useState('');
    const [delay, setDelay] = useState('');

    useEffect(()=>{
        randomExcuse();
    }, [])

    function randomExcuse(){
        setIntro(INTRO[Math.floor(Math.random() * INTRO.length)]);
        setScape(SCAPEGOAT[Math.floor(Math.random() * SCAPEGOAT.length)]);
        setDelay(DELAY[Math.floor(Math.random() * DELAY.length)]);
    }

    return (
        <main className="px-3">
          <h1>Canceling Plans Excuse Generator</h1>
          {/* <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p> */}
          <p className="lead">
            <a
              href="/"
              className="btn btn-lg btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#cpegModal"
            >
              Start now
            </a>
          </p>
    
          {/* MODAL */}
          <div
            className="modal fade"
            id="cpegModal"
            tabIndex="-1"
            aria-labelledby="cpegModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content rounded-6 shadow">
                <div className="modal-header border-bottom-0">
                  <h5 className="modal-title">Create your excuse!</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body py-0">
                  <div className="row mx-0 modal-body-generator">
                      <Card
                        color={"border-danger"}
                        title={"1 ) Choose an intro"}
                        content={INTRO}
                        updateState={setIntro}
                        />
                      <Card
                        color={"border-warning"}
                        title={"2 ) Choose a scapegoat"}
                        content={SCAPEGOAT}
                        updateState={setScape}
                        />
                      <Card
                        color={"border-info"}
                        title={"3 ) Choose a delay"}
                        content={DELAY}
                        updateState={setDelay}
                      />
                  </div>
                  <div className="modal-body-result">
                        <h3>
                          <span className="intro"> {intro}</span>
                          <span className="scapegoat"> {scapegoat} </span>
                          <span className="delay"> {delay} </span>
                          .
                        </h3>
                      <div className="mission-control">
                        <button type="button" className="btn btn-outline-secondary mx-1" disabled><i className="bi bi-star"></i></button>
                        <button type="button" className="btn btn-outline-secondary mx-1" disabled><i className="bi bi-clipboard"></i></button>
                      </div>
                  </div>
                </div>
                <div className="modal-footer flex-column border-top-0">
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-primary w-100 mx-0 mb-2"
                    onClick={randomExcuse}
                  >
                    Random <i className="bi bi-shuffle"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg btn-outline-danger w-100 mx-0"
                    data-bs-dismiss="modal"
                  >
                    Cancel <i className="bi bi-x-lg"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
}

export default Main;
