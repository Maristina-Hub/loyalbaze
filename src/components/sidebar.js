import React from "react";
import { Link } from "react-router-dom";

const Side = ({show}) => {
 

  return (
    <div className="font-body">
      <div className="">
        {/* <!-- nav content --> */}
       {show &&  <div className=" mt-5">
          <nav className="flex justify-between items-center w-[90%] mx-auto ">
           
            <div className=" navlinks mt-3 md:static absolute md:min-h-fit min-h-[100vh] left-0 top-[9%] md:w-auto w-full flex px-12  bg-black md:bg-white text-white z-[200]">
              <ul className="uppercase flex md:flex-row flex-col md:items-center md:gap-[10vw] gap-10 mt-10">
              <li className={` ${window.location.pathname==="/"?"text-blue": "text-white"} text-black font-crimson hover:text-blue`}>
              
                  <Link to={"/"}>Home</Link>
                </li>
                <li className={` ${window.location.pathname==="/about"?"text-blue": "text-white"} text-black font-crimson hover:text-blue`}>
              
                  <Link to={"/about"}>About</Link>
                </li>
                <li className={` ${window.location.pathname==="/service"?"text-blue": "text-white"} text-black font-crimson hover:text-blue`}>
              
                  <Link to={"/service"}>Services</Link>
                </li>
                <li className={` ${window.location.pathname==="/portfolio"?"text-blue": "text-white"} text-black font-crimson hover:text-blue`}>
              
                  <Link to={"/portfolio"}>Portfolio</Link>
                </li>
                <li className={` ${window.location.pathname==="/contact"?"text-blue": "text-white"} text-black font-crimson hover:text-blue`}>
              
                  <Link to={"/contact"}>Contact</Link>
                </li>
               
              </ul>
            </div>
         
          </nav>
        </div>}
      </div>
    </div>
  );
};

export default Side;
