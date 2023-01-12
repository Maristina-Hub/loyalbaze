import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.classList.toggle("navlinks");
  };

  return (
    <div className="font-body">
      <div className="">
        {/* <!-- nav content --> */}
        <div className=" mt-5">
          <nav className="flex justify-between items-center w-[90%] mx-auto ">
            <div className="flex justify-between">
              <img
                src="./img/Chiamaka Okafor Logo 2.png"
                alt="logo"
                className="h-10 "
              />
            </div>
            <div className=" navlinks mt-3 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-12  bg-black lg:text-black md:bg-white text-white ">
              <ul className="uppercase flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                <li className="lg:text-blue text-black font-crimson hover:text-black">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="font-crimson text-black hover:text-blue">
                  <Link to={"/about"}>About</Link>
                </li>
                <li className="font-crimson text-black hover:text-blue">
                  <Link to={"/service"}>Services</Link>
                </li>
                <li className="font-crimson text-black hover:text-blue">
                  <Link to={"/portfolio"}>Portfolio</Link>
                </li>
                <li className="font-crimson text-black hover:text-blue">
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <svg
                onClick={showNavbar}
                className="w-10 h-10 cursor-pointer md:hidden"
                fill="none"
                stroke="blue"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
