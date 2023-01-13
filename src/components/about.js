import React, { useState } from "react";
import Nav from "./nav";
import Side from "./sidebar";

const About = () => {
    const [show, setShow] = useState(false);
  return (
    <div className="text-gray">
      <div>
        {/* <!-- nav content --> */}
        <div>
        <Nav setShow={setShow} show={show}/>
          <Side show={show}/>
        </div>

        <div className="mx-14 mt-14  font-body">
          <p className="mb-2 underline text-black">Hey there,</p>

          <p className="mb-2">
            I am Chiamaka! I am a software engineer (frontend) with a bold
            enthusiasm for technology.
          </p>
          <p className="mb-2">
            My pleasure lies in helping to alleviate problems that others
            encounter, and all thanks to coding and technology, this I do by
            creating well-adorned and functional web apps.
          </p>
          <p className="mb-2">
            As you'll find in my portfolio, I possess the knack of creating tidy
            UI layouts, whilst adhering to semantics and other industry best
            practices.
          </p>
          <p className="mb-2">
            I am able to create clean and functional websites. I am competent in
            my frontend and design abilities to the point that I am able to
            confidently deliver products to my clients knowing that they are of
            high quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
