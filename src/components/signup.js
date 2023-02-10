import React from "react";

const SignUp = () => {
  return (
    <div className="body">
      <div className="card">
        <div className="border flex justify-between mx-[153px] pt-10">
          <div className="border border-red">
            <h1 className=" flex">
              I
              <span>
                <img src={require("../img/Vector.svg").default} alt="" />
              </span>
              yalbaze
            </h1>
          </div>
          <div className="  m-2">
            <button className="btn border border-blue border-x-pink-500 border-t-pink-500">
              Get Priority Access
            </button>
          </div>
        </div>
        <div>
          <h1>Turn your best customers into Loyal fans</h1>
          <p>
            Loyalbaze, empowers businesses to offer digital, mobile-first
            loyalty programs to their customers. With our AI Powered platform,
            you can easily create and manage custom loyalty and rewards
            programs, track customer engagement, and gain valuable insights to
            improve your business. Sign up now to get early access.
          </p>
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
          <button>Get early access</button>

          <p> +57 Joined</p>
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
        <hr className="hr "/>
        <h1 className="mt-12">hellow world</h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
