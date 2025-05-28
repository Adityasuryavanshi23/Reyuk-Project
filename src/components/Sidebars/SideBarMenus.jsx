export const SideBarMenus = ({
  menus = [],
  pluslogo = null,
  heading = "",
  active,
  activeEffect,
  setActiveEffect,
  inactive,
}) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between px-4">
          <p className="dark:text-[#64647C] uppercase text-[12px] font-semibold">
            {heading}
          </p>
          <img src={pluslogo} alt={pluslogo} />
        </div>
        <div className="px-[24px]  flex flex-col gap-1  ">
          {menus.map((menu) => (
            <p
              onClick={() => setActiveEffect(menu)}
              className={`text-sm font-medium py-[10px] px-2   ${
                activeEffect === menu ? active : inactive
              } cursor-pointer rounded-md `}
            >
              {menu}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};
