import React from "react";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-centerbg-emerald-600">
        <div className="w-[70%] h-[100vh] flex items-center justify-center flex-col bg-emerald-100">
          <div className="w-[80%] h-[80%] flex items-center justify-center flex-col">
            <div className="w-[95%] h-[40%] py-2 flex items-center justify-around flex-col">
              <h2 className="text-center text-5xl font-bold text-slate-700">
                Login to Your Account
              </h2>
              <h6 className="text-sm font-bold text-slate-500">
                Login Using Social Network
              </h6>
              <div className="w-[37%] h-[30%] flex items-center justify-around py-1">
                <div className="w-[20%] h-[100%] bg-red-600 rounded-full">
                  <button className="w-[100%] h-[100%] p-3 font-bold text-3xl flex items-center justify-center">
                    <FaGoogle className="text-center text-white" />
                  </button>
                </div>
                <div className="w-[20%] h-[100%] bg-blue-600 rounded-full">
                  <button className="w-[100%] h-[100%] p-3  font-bold text-3xl  flex items-center justify-center">
                    <FaFacebookF className="text-center text-white" />
                  </button>
                </div>
                <div className="w-[20%] h-[100%] bg-fuchsia-900 rounded-full">
                  <button className="w-[100%] h-[100%] p-3 font-bold text-3xl  flex items-center justify-center">
                    <FaInstagram className="text-center text-white" />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[95%] h-[60%] flex items-center justify-center flex-col">
              <form action="" className="w-[70%] h-[70%] flex flex-col items-center justify-around">
              
                <span  className=" w-[100%] h-[25%] pl-3 px-1 py-1 text-lg text-slate-600 outline-none font-semibold bg-white flex items-center justify-center" >
                  <div className="w-[15%] h-[100%] flex items-center justify-center border-r-2">
                    <h3 className="text-center text-xl font-bold text-slate-700">+91</h3>
                  </div>
                  <input type="tel" placeholder="Enter The Number"
                className=" w-[85%] h-[100%] pl-3 px-1 py-1 text-lg text-slate-600 outline-none font-semibold" />
                </span>
                <input type="password"
                placeholder="Enter Password Here"
                className=" w-[100%] h-[25%]  pl-3 px-1 py-1 text-lg text-slate-600 outline-none font-semibold" />
                <Link to={'/chat'} className="bg-slate-700 text-white text-center font-bold text-xl w-[100%] h-[25%] flex items-center justify-center">Login User</Link>
              </form>
            </div>
          </div>
        </div>



        <div className="w-[35%] h-[100vh] flex items-center justify-center flex-col bg-emerald-400">
          <div className="w-[80%] h-[30%] flex items-center justify-around flex-col bg-emerald-400">
            <h2 className="text-white font-bold text-center text-5xl">NEW HERE?</h2>
            <h5 className="text-slate-50 font-semibold text-center text-xl">"Sign up now and chat instantly with your friends today!"</h5>
            <Link to={'/register'} className="text-center text-lg font-bold text-white bg-emerald-700 w-[38%] h-[25.5%] p-2 rounded-full flex items-center justify-center">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
