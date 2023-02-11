import React from "react";

const SignUp = () => {
  return (
    <div className="body">
      <div className="card">
        <div className=" flex justify-between mx-[60px] pt-6">
          <div className=" w-[231px] h-[62px] m-[4px] p-[10px]" >
            <h1 className="flex flex-row h-[62px]  m-[4px]">
              <span className="text-[48px]"> I </span>
              <span className="top-[12.93%] bottom-[12.91%] left-[8.33%x] right-[8.33%] m-[4px] ">
                <img src={require("../img/Vector.svg").default} alt="" />
              </span>
              <span className="w-[178px] text-[48px]">yalbaze</span>
            </h1>
          </div>
          <div className="m-2  ">
            <button className="btn2">Get Priority Access</button>
          </div>
        </div>
        <div className="m-auto mt-[12px] mx-[64px] pt-8">
          <h1 className="text-center m-auto  mt-[12px] text-[64px] h-[166px] w-[802px] leading-[83.2px]">
            Turn your best customers into{" "}
            <span className="text-[#A75FD2]">Loyal fans</span>
          </h1>
          <p className="m-auto text-center text-[24px] h-[131px] w-[938px] leading-[130%]">
            Loyalbaze, empowers businesses to offer digital, mobile-first
            loyalty programs to their customers. With our AI Powered platform,
            you can easily create and manage custom loyalty and rewards
            programs, track customer engagement, and gain valuable insights to
            improve your business. Sign up now to get early access.
          </p>
          <div className="  mt-[10px] flex flex-col px-[14px] py[12px] gap[8px] ml-[380px] text-center">
            <input
              type="text"
              name="name"
              placeholder="Tell us your name "
              className="input"
            />
            <input
              type="email"
              name="name"
              placeholder="Enter your email address "
              className="input"
            />
            <button className="btn">Get early access</button>

            <div className="mt-[8px]  mr-[380px]">
              <p> +57 Joined</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card2">
        <div className="flex justify-evenly">
          <div className="border border-red h-[100vh]">
            <h1>Priority Access</h1>{" "}
            <p>
              Get ready to revolutionize the way you interact with your
              customers and drive sales with Loyalbaze. Skip the waitlist and
              get exclusive priority access to LoyalBaze. Limited slots
              available. Please tell us a bit about your business and needs and
              of our consultants will be in touch Immediately!
            </p>
          </div>
          <div className="p-4 border h-[100vh] ">
            <form action="" className="text-black form ">
              <h3>Book a Consultation with us</h3>
              <input
                type="text"
                name="name"
                placeholder=" Enter your full name"
                className="input"
              />
              <input
                type="text"
                name="name"
                placeholder=" Mobile number"
                className="input"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your work email"
                className="input"
              />
              <input
                type="text"
                name="name"
                placeholder=" Mobile number"
                className="input"
              />
              <input
                type="text"
                name="name"
                placeholder=" Company Name "
                className="input"
              />

              <select className="input">
                <option>Select Country </option>
              </select>
              <textarea
                type="text"
                rows={30}
                cols={30}
                name="message"
                className="textarea"
                placeholder="Drop a message....."
              />
              <button className="bg-red rounded-full">Send Request</button>
            </form>
          </div>
        </div>
        <div className="footer">
          <hr className="hr " />
          <h1 className="mt-12">hello world</h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
