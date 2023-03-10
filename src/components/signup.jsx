import React, {useState} from "react";
import signupBG from "./signupBG";
import PopUp from "./popup";

const SignUp = () => {
  const [showPopUp, setShowPopUp] = useState(false)

  const closePopUp = () => setShowPopUp(false)
  return (
    <div className="body">
      <div className="card">
        {signupBG.map((ball) => (
          <div id={ball.id} style={ball.ballStyle} src={ball.Image} className="hidden md:flex"></div>
        ))}
        <div className=" flex justify-between md:mx-[60px] mx-[10px] pt-6 mb-16 ">
          <div className="w-[231px] h-[62px] m-[4px] p-[2px]">
            <h1 className="flex flex-row h-[62px] items-center">
              <span className="md:text-[48px] text-[40px] "> I </span>

              <img
                src={require("../img/heart.svg").default}
                alt=""
                className="w-[40px] h-[40px] top-[11px] left-[13px]"
              />

              <span className="w-[178px] md:text-[48px] text-[40px]">yalbaze</span>
            </h1>
          </div>
          <div className="md:m-2">
            <button className="btn2">
              <a href="/#form">Get Priority Access</a>
            </button>
          </div>
        </div>
        <div className="m-auto mt-[12px] mx-[20px] md:mx-[64px] pt-4 md:pt-8 ">
          <h1 className="text-center m-auto mt-[12px] text-[40px] tracking-tight md:text-[64px] h-[166px] w-[350px] md:w-[802px] md:leading-[83.2px] leading-[60px] ">
            Turn your best customers into{" "}
            <span className="text-[#A75FD2]">Loyal fans</span>
          </h1>
          <p className="m-auto text-center text-[17px] md:text-[24px] md:h-[131px] h-[230px] md:w-[938px]  md:leading-[130%] leading-[160%] mt-4 ">
            Loyalbaze, empowers businesses to offer digital, mobile-first
            loyalty programs to their customers. With our AI Powered platform,
            you can easily create and manage custom loyalty and rewards
            programs, track customer engagement, and gain valuable insights to
            improve your business. Sign up now to get early access.
          </p>
          <div className="mt-[10px] flex flex-col justify-center items-center px-[14px] py[12px] gap[8px] text-center">
            <div className="inputBox">
              <span>
                <img
                  src={require("../img/profilecircle.svg").default}
                  alt=""
                  className="p-3"
                />
              </span>
              <input
                type="text"
                name="name"
                placeholder="Tell us your name "
                className="input1"
                autoComplete="off"
                required
              />
            </div>
            <div className="inputBox">
              <span>
                <img
                  src={require("../img/Icon.svg").default}
                  alt=""
                  className="p-3"
                />
              </span>
              <input
                type="email"
                name="name"
                placeholder="Enter your email address "
                autoComplete="off"
                className="input1"
                required
              />
            </div>

            <button className="btn mt-4 mb-4 w-[350px] md:w-[494px]" onClick={() => setShowPopUp(true)}>Get early access</button>

            <PopUp visible={showPopUp} onClose={closePopUp} />

            <div className="mt-[8px] flex  flex-row justify-center items-center gap-[12px] w-[206px] h-[32px] ">
              <div className="flex  flex-row justify-between items-start w-[110px] h-[32px]">
                <span>
                  <img src={require("../img/G.svg").default} alt="" />
                </span>
                <span>
                  <img src={require("../img/O.svg").default} alt="" />
                </span>
                <span>
                  <img
                    src={require("../img/U.svg").default}
                    alt=""
                    className="z-10"
                  />
                </span>
                <span>
                  <img src={require("../img/M.svg").default} alt="" />
                </span>
              </div>
              <div>
                <p className=" text-[16px] leading-[22px] text-center h-[22px] w-[84px] ">
                  {" "}
                  +57 Joined
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card2 p-[10px] pt-[100px] ">
        <div className="grid md:grid-cols-3">
          <div className="md:h-[100vh]  md:w-[500px] md:p-[100px]  p-[0px] mr-[200px] mt-[60px] ">
            <h1 className="md:my-0 my-4 md:py-0 py-2 md:text-center md:text-[64px] text-[53px] w-[442px] h-[83px] leading-[130%] ">
              Priority Access
            </h1>
            <img
              src={require("../img/Line 6.svg").default}
              alt=""
              className="ml-[120px] w-[169px] h-[64px] top-[87px] left-[136.5px]"
            />
            <p className="p-2 mt-[4px] md:w-[525px] w-[370px] h-[223px] top-[542px] left-[100px] md:text-[24px] text-[16.5px] leading-[31.2px] text-white">
              Get ready to revolutionize the way you interact with your
              customers and drive sales with Loyalbaze. Skip the waitlist and
              get exclusive priority access to LoyalBaze. Limited slots
              available. Please tell us a bit about your business and needs and
              of our consultants will be in touch Immediately!
            </p>
          </div>
          <div className=" bg-[#1D2939] rounded-[20px] md:w-[650px] w-[375px] md:ml-[200px] mt-2 border">
            <form action="" className="form "id="form">
              <h3 className="md:text-[24px] text-[18px] text-left font-bold text-white leading-[130%] w-[310px] h-[31px] left-[70px] top-[56px] mr-[20px] md:mr-[180px]">
                Book a Consultation with us
              </h3>
              <input
                type="text"
                name="name"
                placeholder=" Enter your full name"
                className="input "
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Enter your work email"
                className="input"
              />
              <input
                type="text"
                name="name"
                autoComplete="off"
                placeholder=" Mobile number"
                className="input"
              />
              <input
                type="text"
                name="name"
                autoComplete="off"
                placeholder=" Company Name "
                className="input"
              />

              <select className="input text-gray-400">
                <option>Select Country </option>
              </select>
              <textarea
                type="text"
                name="message"
                className="textarea"
                placeholder="Drop a message....."
              />
              <button className="btn w-[350px] md:w-[494px]">Send Request</button>
            </form>
          </div>
        </div>
        <hr className="hr " />
        <div className="footer">
          <div className="flex  justify-between items-center">
            <span>
              <img
                src={require("../img/Vector2.svg").default}
                alt=""
                className="md:w-[21.5px] md:h-[20.22px] w-[24px] h-[24px]  top-[2.53px] left-[1.53px]"
              />
            </span>
            <p className=" md:text-[16px] text-[12px] md:leading-[22px] font-[400px] md:w-[287px] md:h-[44px] ">
              2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos,
              Nigeria.
            </p>
          </div>
          <div className="flex  justify-between items-center ">
            <p className=" md:text-[20px] text-[16px] md:leading-[27px] font-[700px] w-[231px] h-[27px]">
              Loyalbaze is almost here.
            </p>
          </div>
          <div className="flex justify-between items-center gap-2 md:pr-[40px] ">
            <span>
              <img
                src={require("../img/Vector3.svg").default}
                alt=""
                className="md:w-[20px] md:h-[20px] w-[15px] top-[2px] left-[2px] mt-2"
              />
            </span>
            <p className="md:text-[16px] text-[12px] leading-[22px] font-[400px] w-[158px] h-[22px] mt-2 text-left ">
              +234 903 618 9485
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SignUp;