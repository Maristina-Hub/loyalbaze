import React from "react";

const PopUp = ({ visible, onClose }) => {
  const closePopup = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div classNameName="body">
      {/* modal */}
      <div
        onClick={closePopup}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
        id="container"
      >
        {/* modal body */}
        <div
          
          className=" bg-[#1D2939] rounded-[20px] w-[446px]  h-[475px] justify-center items-center  absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
        >
          <div className="flex flex-col justify-center items-center p-[50px] m-auto ">
            <img
              src={require("../img/congrats.svg").default}
              alt=""
              className="h-[88px] w-[88px] top-[102px] left-[179px] mb-[20px]"
            />

            <div >
              <h2 className=" flex justify-center font-bold text-[24px] leading-[32.4px] w-[336px] h-[32px]">
                Congratulations
              </h2>

              <p className=" flex justify-center text-center font-normal text-[16px] leading-[22px] mt-2">
                Great move! You're one step closer to getting your hands on the
                product. Please check your mail for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
