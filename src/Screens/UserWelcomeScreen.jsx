import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const UserWelcomeScreen = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center bg-emerald-600 py-5">
        <div className="w-[100%] h-[100vh] flex items-center justify-center flex-col bg-emerald-100">
          <div className="w-[80%] h-[70%] flex items-center justify-around flex-col ">
            <div className="w-[10.5%] h-[25%] bg-white flex items-center justify-center rounded-full mt-3">
              <img src="./Img/User.png" alt="noImg" />
            </div>

            <div className="w-[40%] h-[70%] flex flex-col items-center justify-around">
              <span className="w-[full] h-[40%]  flex items-center justify-around flex-col">
                <h3 className="text-center text-3xl font-bold flex items-center justify-center text-slate-900">
                  Hey
                  <span className="text-red-700 text-3xl font-bold pl-3"> Riya </span>
                  <img
                    src="./Img/Hand.png"
                    alt="noImg"
                    width={"15%"}
                    height={"15%"}
                    className="pl-4"
                  />
                </h3>
                <h3 className="text-center text-3xl font-bold text-slate-900">
                  Let's Chat With Your Friend's !!
                </h3>
              </span>
              <h6 className="text-center font-semibold text-slate-400 text-xl ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, odio.
              </h6>
              <div className="w-[100%] h-[25%] flex items-center justify-center">
                <Link to={'/chat'} className="text-center text-lg font-bold text-white bg-emerald-800 rounded-full w-[35%] h-[72%] flex items-center justify-center">
                  Let's Chat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserWelcomeScreen;
