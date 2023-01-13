import React, { useState } from "react";
import Nav from "./nav";
import Side from "./sidebar";

const Service = () => {
    const [show, setShow] = useState(false);
  return (
    <div className="font-crimson">
      <div>
        <div>
        <Nav setShow={setShow} show={show}/>
          <Side show={show}/>
        </div>

        <div>
          <div className="m-10 p-10 lg:ml-52 ml-0 mr-0  md:p-10">
            <ul>
              <li className="list-disc mb-4">HTML 5</li>
              <li className="list-disc mb-4">CSS 3</li>
              <li className="list-disc mb-4">TAILWIND CSS</li>
              <li className="list-disc mb-4">JAVASCRIPT (ES6)</li>
              <li className="list-disc mb-4">REACTJS</li>
              <li className="list-disc mb-4">NODEJS</li>
              <li className="list-disc mb-4">
                Databases (MongoDB, PostgreSQL)
              </li>
              <li className="list-disc mb-4">CI/CD with Github Actions</li>
              <li className="list-disc mb-4">API Documentation with Postman</li>
              <li className="list-disc mb-4 uppercase">Figma</li>
              <li className="list-disc mb-4 uppercase">Trello</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
