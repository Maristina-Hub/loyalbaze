import React from "react";

const PopUp = () => {
  return (
    <div className="body">
      <div className=" bg-[#1D2939] rounded-[20px] w-[446px]  h-[475px] ">
        <div className="flex flex-col justify-center items-center p-[50px] m-auto border border-red">
          <img
            src={require("../img/congrats.svg").default}
            alt=""
            className="h-[88px] w-[88px] top-[102px] left-[179px] mb-[20px]"
          />

          <div>
            <h2 className="">Congratulations</h2>

            <p>
              Great move! You're one step closer to getting your hands on the
              product. Please check your mail for more information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
