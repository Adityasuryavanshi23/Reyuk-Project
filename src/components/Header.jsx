import { Folder, MessageSquare, PenLine } from "lucide-react";
import { AvatarLayout } from "./AvatarLayout";
import profileImage from "../assets/images/profile-image.png";
import share from "../assets/logos/share-logo.png";

export const Header = ({
  activeEffect,
  setactiveEffect,
  setActiveTab,
  setOpenSidebar,
}) => {
  return (
    <div className="dark:text-white  capitalize mt-4 mx-4">
      {/* top header */}
      <div className="dark:bg-[#0B0B0E] relative bg-gray-300 flex justify-between max-md:gap-8 max-[360px]:gap-4 items-center py-[22px] max-[360px]:px-4 px-6 rounded-tl-[24px] rounded-tr-[24px]">
        <div
          onClick={() => setOpenSidebar(true)}
          className="absolute top-5 left-4 cursor-pointer md:hidden"
        >
          <img
            src={profileImage}
            alt={"profileimage"}
            className="w-10 h-10 rounded-full"
          />
        </div>

        <div className="flex flex-1 gap-4">
          <div className="flex max-md:self-end">
            <span className="dark:bg-[#26262f] flex justify-center items-center  bg-gray-400 w-7 h-8 max-md:p-1 mt-2 rounded-md ">
              <PenLine size={20} className="dark:text-gray-400 text-white" />
            </span>
          </div>
          <div>
            <p className="dark:text-[#F2F2F4] max-md:text-xl font-medium text-2xl mb-2">
              project alpha
            </p>
            <p className="dark:text-[#9C9CAC] font-medium text-sm max-md:text-[12px] max-[360px]:text-[8px]">
              Exciting Strategies for the Launch of a Groundbreaking product
            </p>
          </div>
        </div>

        <div className="flex max-md:flex-col max-md:gap-4 items-center">
          <div className="mr-4">
            <AvatarLayout />
          </div>
          <div>
            <p className="flex gap-2 items-center">
              <img
                src={share}
                alt="share-icon"
                className="max-md:w-4 max-md:h-4"
              />
              <span className="dark:text-[#9f9fb4] max-md:text-sm">share</span>
            </p>
          </div>
        </div>
      </div>

      {/* bottom header */}
      <div className=" mt-1 flex px-12 py-2 dark:bg-[#0B0B0E] bg-gray-300 rounded-bl-[24px] rounded-br-[24px]">
        <div
          onClick={() => {
            setactiveEffect("chat");
            setActiveTab("chat");
          }}
          className="flex flex-col relative items-center justify-center cursor-pointer group px-4"
        >
          <p className="flex gap-2  items-center ">
            <MessageSquare
              size={15}
              className={` ${
                activeEffect === "chat"
                  ? "dark:text-[#9145F4] text-gray-700"
                  : "dark:group-hover:text-[#9145F4] group-hover-text-gray-700"
              }  group-hover:drop-shadow-[0_1px_8px_#ffffff] transition-colors duration-200 text-[#808094]`}
            />
            <span
              onClick={() => {
                setactiveEffect("chat");
                setActiveTab("chat");
              }}
              className={`text-sm max font-medium cursor-pointer py-2 `}
            >
              chat
            </span>
          </p>
          <div
            className={`h-[3px] w-20 absolute bottom-[-8px] rounded-full mt-2 transition-all duration-200 ${
              activeEffect === "chat"
                ? "dark:bg-[#9145F4] bg-gray-700"
                : "bg-transparent dark:group-hover:bg-[#9145F4] group-hover:bg-gray-700"
            }`}
          ></div>
        </div>
        <div
          onClick={() => {
            setactiveEffect("library");
            setActiveTab("library");
          }}
          className="flex flex-col relative items-center justify-center cursor-pointer group px-4"
        >
          <p className="flex gap-2  items-center ">
            <Folder
              size={15}
              className={` ${
                activeEffect === "library"
                  ? "dark:text-[#9145F4] text-gray-700"
                  : "dark:group-hover:text-[#9145F4] group-hover-text-gray-700"
              }  group-hover:drop-shadow-[0_1px_8px_#ffffff] transition-colors duration-200 text-[#808094]`}
            />
            <span
              onClick={() => {
                setactiveEffect("library");
                setActiveTab("library");
              }}
              className={`text-sm font-medium cursor-pointer py-2 `}
            >
              library
            </span>
          </p>
          <div
            className={`h-[3px] w-20 absolute bottom-[-8px] rounded-full mt-2 transition-all duration-200 ${
              activeEffect === "library"
                ? "dark:bg-[#9145F4] bg-gray-700"
                : "bg-transparent dark:group-hover:bg-[#9145F4] group-hover:bg-gray-700"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};
