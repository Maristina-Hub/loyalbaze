import React from "react";
import Nav from "./nav";

const Portfolio = () => {
  return (
    <div>
      <div>
        {/* <!-- nav content --> */}
        <div>
          <Nav />
        </div>

        <div>
          <section className="flex    p-20 ">
            <div className="flex flex-wrap justify-around gap-5">
              <a href="https://farmcorps.net/">
                <img
                  src="./img/farmcorp.jpeg"
                  alt=""
                  className="h-40 rounded overflow-hidden shadow-md"
                />
              </a>
              <a href="https://pullova.netlify.app/">
                <img
                  src="./img/portfolio1.jpeg"
                  alt=""
                  className="h-40 rounded overflow-hidden shadow-md"
                />
              </a>
              <a href="https://silly-noether-76f19b.netlify.app">
                <img
                  src="./img/portfolio2.jpeg"
                  alt=""
                  className="h-40 rounded overflow-hidden shadow-md"
                />
              </a>

              <a href="https://maristina-hub.github.io/Modal-Forms/">
                <img
                  src="./img/portfolio3.jpeg"
                  alt=""
                  className="h-40 rounded overflow-hidden shadow-md"
                />
              </a>

              <a href="https://distracted-elion-1a8101.netlify.app">
                <img
                  src="./img/portfolio4.jpeg"
                  alt=""
                  className="h-40 rounded overflow-hidden shadow-md"
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
