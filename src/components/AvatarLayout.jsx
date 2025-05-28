import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";

export const AvatarLayout = () => {
  const avatar = [
    {
      id: 1,
      img: img1,
      status: false,
    },
    {
      id: 2,
      img: img2,
      status: true,
    },
    {
      id: 3,
      img: img3,
      status: true,
    },
    {
      id: 4,
      img: img4,
      status: false,
    },
  ];
  return (
    <>
      <div className=" flex items-center ">
        {avatar.map((item, index) => (
          <div
            className={`relative -ml-2 ${index === 0 ? "ml-0" : ""} z-${
              10 + index * 7
            }`}
          >
            <img
              src={item.img}
              alt={`img${item.id}`}
              className="w-8 h-8 max-md:w-[28px] max-md:h-[28px] rounded-full border-4 max-md:border-[3px] dark:border-[#141418] border-gray-400 object-cover"
            />
            {item.status && (
              <span className="absolute top-0 shadow-md shadow-green-500 right-1 bg-green-500 rounded-full w-2 h-2 border border-[#141418]"></span>
            )}
          </div>
        ))}
        <div className="rounded-full -ml-2 z-10 dark:bg-[#141418] bg-gray-500 w-[34px] h-[34px] max-md:w-7 max-md:h-7 flex justify-center items-center">
          <p className="mb-2 mt-1 mr-1 dark:text-[#9e9eb6] text-white/80 text-sm font-semibold">
            +4
          </p>
        </div>
      </div>
    </>
  );
};
