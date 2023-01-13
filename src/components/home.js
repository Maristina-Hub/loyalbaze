import React, {useState} from "react";
import Nav from "./nav";
import Side from "./sidebar"

const Home = () => {
    const [show, setShow] = useState(false);

  
  return (
    <div className="font-body h-screen">
      <div className="flex justify-end w-full ">
        {/* <div className="w-[600px]   h-[90%]   rounded-bl-[80%] border absolute  bg-[#1d4ed8] p-2  -top-3  mt-2 opacity-30"></div> */}
      </div>

      <div className="">
        {/* <!-- nav content --> */}
        <div>
          <Nav setShow={setShow} show={show}/>
          <Side show={show}/>
        </div>

        <div className="flex md:flex-row flex-col-reverse md:items-center justify-around mx-10 items-center ">
          {/* <!-- content wrapper --> */}
          <div className="m-auto w-96 ">
            {/* <!-- content --> */}

            <p className="uppercase text-gray-500">Hello my name is</p>
            <hr className="border-black-900 border-1 box-border w-12 mt-4 mb-6" />
            <h1 className="font-body font-bold text-4xl mb-4 text-black">
              Okafor Chiamaka
            </h1>
            <h3 className="font-body font-bold mb-4 text-gray">
              Frontend Developer
            </h3>

            <ul>
              <li className="text-gray-700 flex">
                <span>
                  <svg
                    className="h-4 mt-1.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </span>
                <a href="maristyna@yahoo.com" className="flex justify-end">
                  maristyna@yahoo.com
                </a>
              </li>
              <li className="text-gray-700 flex mt-2">
                <span>
                  <svg
                    className="h-4 mt-1.5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </span>
                <p className="flex justify-end font-crimson">
                  +234 808 881 8994
                </p>
              </li>
            </ul>
          </div>
          <div className="h-50 mt-10 mr-40  ">
            {/* <!-- img --> */}

            <img
              src="./img/img1.jpeg"
              alt="img" 
              className="rounded-full h-[200px] w-[200px] md:h-[384px] md:w-[384px] flex justify-center mt-5 mb-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
