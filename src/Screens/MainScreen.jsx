import React from "react";
import FormSec from "../Components/MainScrn/FormSec";
import MidChats from "../Components/MainScrn/MidChats";
import LogOut from "../Components/MainScrn/LogOut";
import TopChatSec from "../Components/MainScrn/TopChatSec";
import EndChatSec from "../Components/MainScrn/EndChatSec";
import Header from "../Components/Navbar/Header";

const MainScreen = () => {
  return (
    <>
      <Header/>
      <main className="w-full h-[94.5vh] flex items-center justify-center flex-col">
        <section className=" w-full h-[100%] flex items-center justify-center">
          <div className="w-[30%] h-full bg-emerald-500	">
            <FormSec />
            <MidChats />
            <LogOut />
          </div>
          <div className="w-[70%] h-[100%] bg-emerald-50 flex flex-col items-center">
            <TopChatSec />
            <div className="w-full h-[70%]"></div>
            <EndChatSec />
          </div>
        </section>
      </main>
    </>
  );
};

export default MainScreen;
