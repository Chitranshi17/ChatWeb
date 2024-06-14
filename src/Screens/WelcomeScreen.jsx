import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center bg-emerald-600 py-5">
        <div className="w-[100%] h-[100vh] flex items-center justify-center flex-col bg-emerald-100">
          <div className="w-[80%] h-[70%] flex items-center justify-around flex-col ">
            <div className="w-[10.5%] h-[25%] bg-white flex items-center justify-center rounded-full mt-3">
              <BsFillSendFill className="text-center font-bold text-6xl text-emerald-800" />
            </div>

            <div className="w-[40%] h-[70%] flex flex-col items-center justify-around">
              <span className="w-[full] h-[40%]  flex items-center justify-around flex-col">
                <h3 className="text-center text-3xl font-bold flex items-center justify-center text-slate-900">
                  Hey User
                  <img
                    src="./Img/Hand.png"
                    alt="noImg"
                    width={"15%"}
                    height={"15%"}
                    className="pl-4"
                  />
                </h3>
                <h3 className="text-center text-3xl font-bold text-slate-900">
                  Welcome to our app
                </h3>
              </span>
              <h6 className="text-center font-semibold text-slate-400 text-xl ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, odio.
              </h6>
              <div className="w-[100%] h-[25%] flex items-center justify-center">
                <Link to={'/login'} className="text-center text-lg font-bold text-white bg-emerald-800 rounded-full w-[35%] h-[72%] flex items-center justify-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeScreen;
