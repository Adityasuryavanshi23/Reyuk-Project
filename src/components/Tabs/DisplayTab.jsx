import { Mic, Paperclip, Send } from "lucide-react";

export const DisplayTab = ({
  subHeading,
  name,
  inputPlaceholder,
  showInput,
}) => {
  return (
    <div className="mx-4 dark:bg-[#0B0B0E] bg-gray-300 rounded-3xl px-4 h-full capitalize flex flex-col gap-8 justify-center items-center dark:text-white">
      <div>
        <p
          className={`text-center font-semibold text-4xl max-md:text-2xl ${
            !showInput && "dark:text-purple-500"
          }`}
        >
          {name}
        </p>
        <p
          className={`text-[20px] max-[360px]:text-[12px] max-md:text-sm font-normal dark:text-[#6e6e85] mt-2 ${
            !showInput && "dark:text-purple-600"
          }`}
        >
          {subHeading}
        </p>
      </div>

      <div className="w-full relative ">
        {showInput && (
          <>
            <input
              type="text"
              className=" w-full py-4 max-md:py-3 rounded-2xl  focus:outline-none bg-gradient-to-tr from-[#8c938f] to-[#b4c4bc] dark:bg-gradient-to-r dark:from-[#130a1e]  dark:to-[#0a0417] dark:text-white placeholder:text-sm max-md:placeholder:text-[12px] placeholder:font-medium dark:placeholder:text-[#3A3A49] placeholder:text-black placeholder:capitalize px-20 max-md:px-16 shadow-sm shadow-purple-500"
              placeholder={inputPlaceholder}
            />

            <Send className="absolute right-5 bottom-3 max-md:bottom-[10px] bg-[#9248f1] hover:bg-[#7137bc] p-[8px] w-8 h-8 max-md:w-7 max-md:h-7 rounded-xl text-[#B9B9C3] cursor-pointer" />
            <Mic
              className="absolute left-10 bottom-4 max-md:w-4 max-md:top-4 dark:text-[#52525f] cursor-pointer"
              size={20}
            />
            <Paperclip
              className="absolute right-16 bottom-4 max-md:w-4 dark:text-[#4f4f5b] cursor-pointer"
              size={20}
            />
          </>
        )}
      </div>
    </div>
  );
};
