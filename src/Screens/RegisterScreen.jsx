import React from "react";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-centerbg-emerald-600">
        <div className="w-[100%] h-[100vh] flex items-center justify-center flex-col bg-emerald-100">
          <div className="w-[50%] h-[80%] flex items-center justify-center flex-col">
            <div className="w-[95%] h-[40%] py-2 flex items-center justify-around flex-col">
              <h2 className="text-center text-5xl font-bold text-slate-700">
                Register to Your Account
              </h2>
              <h6 className="text-sm font-bold text-slate-500">
               Register Using Social Network
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
            <div className="w-[95%] h-[70%] flex items-center justify-center flex-col">
              <form action="" className="w-[70%] h-[70%] flex flex-col items-center justify-around">

                <input type="text"
                 placeholder="Enter User Name"
                 className=" w-[100%] h-[22%]  pl-3 px-1 py-1 text-lg text-slate-600 outline-none font-semibold" />
              
                <span  className=" w-[100%] h-[25%] pl-3 px-1 py-1 text-lg text-slate-600 outline-none font-semibold bg-white flex items-center justify-center" >
                  <div className="w-[15%] h-[100%] flex items-center justify-center border-r-2">
                    <h3 className="text-center text-xl font-bold text-slate-700">+91</h3>
                  </div>
                  <input type="tel" placeholder="Enter the Phone Number"
                className=" w-[85%] h-[100%] pl-3 px-1 py-1 text-lg text-slate-600 outline-none font-semibold" />
                </span>
                <input type="password"
                placeholder="Enter Password Here"
                className=" w-[100%] h-[22%]  pl-3 px-1 py-1 text-lg text-slate-600 outline-none font-semibold" />
                <Link to={'/userwelcome'} className="bg-slate-700 text-white text-center font-bold text-xl w-[100%] h-[25%] flex items-center justify-center">Register User</Link>
              </form>
              <h4 className="w-[60%] text-center font-bold text-xl mt-3">
                  You are already register, Please <Link to={'/login'} className="text-blue-600 pl-1 pr-2">Login</Link>
                  and connect with your friend's.
                </h4>
            </div>
          </div>
        </div>




      </div>
    </>
  );
};

export default RegisterScreen;
