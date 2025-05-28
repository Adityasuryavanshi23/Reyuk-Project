import { useEffect, useState } from "react";
import { Moon, Search, Sun, CreditCard, CircleX } from "lucide-react";
import { SideBarMenus } from "./SideBarMenus";
import plus from "../../assets/logos/plus.png";
import DownArrow from "../../assets/logos/chevron-down.png";
import profileImg from "../../assets/images/profile-image.png";
import arrow from "../../assets/logos/leftarrow.png";

export const SideBar = ({
  activeEffect,
  setactiveEffect,
  active,
  inactive,
  setOpenSidebar,
}) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
      {/* profile sec */}
      <div className="flex justify-between relative dark:bg-[#0B0B0E] bg-gray-300 items-center px-6 ">
        <span onClick={()=>setOpenSidebar(false)} className="md:hidden dark:text-white absolute right-2 top-3 cursor-pointer">
          <CircleX size={20} className="dark:text-gray-500" />
        </span>
        <div className="flex gap-2 py-6 ">
          <img
            src={profileImg}
            alt="Profile" 
            className="w-12 h-12 rounded-full "
          />
          <div className="dark:text-white">
            <p className="text-[16px] font-semibold">Mustafa Wahab</p>
            <span className="dark:text-[#C0A6FC] font-normal text-sm">
              Free User
            </span>
          </div>
        </div>
        <img
          src={DownArrow}
          alt="DownArrow"
          className="text-white w-6 h-6 mt-2 "
        />
      </div>

      {/* sidebar menuitems */}
      <div className="flex capitalize dark:text-white flex-col gap-1 mt-1">
        <div className="dark:bg-[#0B0B0E] bg-gray-300 py-4 px-[20px] flex flex-col   ">
          <p className="dark:text-[#64647C] uppercase text-[12px] mb-4 font-semibold">
            general
          </p>
          <div
            onClick={() => setactiveEffect("search")}
            className={`flex items-center py-[10px] px-4 mb-1 ${
              activeEffect === "search" ? active : inactive
            } rounded-md cursor-pointer gap-4`}
          >
            <Search size={20} className="drop-shadow-[0_5px_8px_#ffffff] " />
            <p className="text-sm font-medium">search</p>
          </div>
          <div
            onClick={() => setactiveEffect("billing")}
            className={`flex items-center py-3 px-4 ${
              activeEffect === "billing" ? active : inactive
            } rounded-md cursor-pointer gap-4`}
          >
            <CreditCard size={20} className="drop-shadow-[0_4px_5px_#ffffff]" />
            <p className="text-sm font-medium">billing</p>
          </div>
        </div>

        <div className="py-4 px-1 dark:bg-[#0B0B0E] bg-gray-300">
          <SideBarMenus
            heading="chats"
            pluslogo={plus}
            menus={["chat 1", "chat 2", "chat 3", "chat 4"]}
            setActiveEffect={setactiveEffect}
            activeEffect={activeEffect}
            active={active}
            inactive={inactive}
          />
        </div>
        <div className="py-4 px-1 dark:bg-[#0B0B0E] bg-gray-300">
          <SideBarMenus
            heading="projects"
            pluslogo={plus}
            menus={["project alpha", "project beta"]}
            setActiveEffect={setactiveEffect}
            activeEffect={activeEffect}
            active={active}
            inactive={inactive}
          />
        </div>
      </div>

      {/* dark mode */}
      <div className=" flex justify-between items-center px-6 bg-gray-300 dark:bg-[#0B0B0E] py-[16px] max-sm:py-[20px] mt-1">
        <div
          className={`flex ${
            darkMode ? "bg-[#141418]" : "bg-gray-500/90"
          } max-w-[100px] py-1 px-1 justify-center rounded-full gap-1`}
        >
          <span
            onClick={() => setDarkMode(true)}
            className={`w-[35px] h-[35px] max-sm:w-[30px] max-sm:h-[30px] bg-[#26262F] rounded-full border-[3px] ${
              darkMode ? "border-[#9145F4]" : "border-gray-900 bg-gray-700"
            } flex justify-center items-center cursor-pointer`}
          >
            <Moon className="text-white" size={20} />
          </span>
          <span
            onClick={() => setDarkMode(false)}
            className={`w-[35px] h-[35px] max-sm:w-[30px] max-sm:h-[30px] bg-[#26262F] border-[3px] ${
              !darkMode && "border-[#cf7336]"
            }  rounded-full flex justify-center items-center cursor-pointer`}
          >
            <Sun
              className={`${!darkMode ? "text-orange-300" : "text-white"}`}
              size={20}
            />
          </span>
        </div>
        <div className="flex gap-2 justify-between items-center dark:text-[#9292b2]">
          <img src={arrow} alt="arrow" className="mt-1" />
          <p
            onClick={() => setOpenSidebar(false)}
            className="font-normal text-sm cursor-pointer"
          >
            Close
          </p>
        </div>
      </div>
    </>
  );
};
