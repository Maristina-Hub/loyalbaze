import React, { useState } from "react";
import Nav from "./nav";
import Side from "./sidebar";

const Portfolio = () => {
    const [show, setShow] = useState(false);

  return (
    <div>
      <div>
        {/* <!-- nav content --> */}
        <div>
        <Nav setShow={setShow} show={show}/>
          <Side show={show}/>
        </div>

        <div>
          <section className="flex    p-20 ">
            <div className="flex flex-wrap justify-around gap-5">
              <a href="https://farmcorps.net/">
                <img
                  src="./img/farmcorp.jpeg"
                  alt=""
                  className="h-40 rounded overflow-hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "
                />
              </a>
              <a href="https://pullova.netlify.app/">
                <img
                  src="./img/portfolio1.jpeg"
                  alt=""
                  className="h-40 rounded overflow-hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "
                />
              </a>
              <a href="https://silly-noether-76f19b.netlify.app">
                <img
                  src="./img/portfolio2.jpeg"
                  alt=""
                  className="h-40 rounded overflow-hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "
                />
              </a>

              <a href="https://maristina-hub.github.io/Modal-Forms/">
                <img
                  src="./img/portfolio3.jpeg"
                  alt=""
                  className="h-40 rounded overflow-hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "
                />
              </a>

              <a href="https://distracted-elion-1a8101.netlify.app">
                <img
                  src="./img/portfolio4.jpeg"
                  alt=""
                  className="h-40 rounded overflow-hidden transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "
                />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
