import MenuCard from "./menu-card";

const Menu = () => {
  return (
    <div>
      <p className="mt-4 font-semibold text-[36px] flex items-center text-center justify-center">
        Recommented menu
      </p>
      <div className="flex mt-6 justify-center">
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </div>
  );
};

export default Menu;
