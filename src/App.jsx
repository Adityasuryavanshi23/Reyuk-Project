import { useState } from "react";
import { Header, SideBar, ChatTab, LibraryTab } from "./components";
import "./App.css";

function App() {
  const [activeEffect, setactiveEffect] = useState("chat");
  const [activeTab, setActiveTab] = useState("chat");
  const [opensidebar, setOpenSidebar] = useState(false);

  const active =
    " border-l-4  border-gray-900 dark:border-[#9145F4] dark:bg-gradient-to-r dark:from-[#9145F4]/20 dark:to-[#D9C9FD00]/10 bg-gradient-to-r from-gray-500/70 to-gray-600/30 text-gray-200 ";

  const inactive =
    "dark:hover:border-l-4 hover:border-l-4 border-black hover:text-gray-200 dark:hover:border-[#9145F4] hover:bg-gradient-to-r from-gray-500/70 to-gray-600/30 dark:hover:bg-gradient-to-r dark:from-[#9145F4]/20 dark:to-[#D9C9FD00]/10 ";

  return (
    <>
      {opensidebar && (
        <div
          className="fixed inset-0 bg-white/40 dark:bg-black/40  z-30 sm:hidden"
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      <div className="dark:bg-[#16161b] bg-[#d0c5c5] min-h-screen grid grid-cols-[320px_1fr_1fr] grid-rows-[190px_1fr] max-md:grid-rows-[220px_1fr] max-sm:grid-rows-[240px_1fr] max-[400px]:grid-rows-[270px_1fr] ">
        <div
          className={`row-span-2 z-50  transition-transform duration-300 ease-in-out fixed top-0 left-0 h-full max-sm:w-[250px] lg:static sm:translate-x-0 ${
            opensidebar ? "translate-x-0" : "-translate-x-full"
          }  sm:block  dark:bg-[#1e1e24]`}
        >
          <SideBar
            activeEffect={activeEffect}
            setactiveEffect={setactiveEffect}
            active={active}
            inactive={inactive}
            setOpenSidebar={setOpenSidebar}
            opensidebar={opensidebar}
          />
        </div>
        <div className="col-span-2 max-[910px]:col-span-3  ">
          <Header
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            setOpenSidebar={setOpenSidebar}
          />
        </div>
        <div className="col-span-2 pb-4  max-[910px]:col-span-3 ">
          {activeTab === "chat" && <ChatTab />}
          {activeTab === "library" && <LibraryTab />}
        </div>
      </div>
    </>
  );
}

export default App;
