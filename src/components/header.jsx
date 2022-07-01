import pizza from "../image/pizza.png";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  return (
    <header className="flex justify-between ">
      <div className="flex items-center">
        <img className="w-16" src={pizza} alt="icon" />
        <p className="text-[#00240F] font-medium text-[20px]">Pizza Time</p>
      </div>
      <div className="flex items-center">
        <p className="text-[red] text-base font-medium">Home</p>
        <p className="px-4 text-base font-normal">Menu</p>
        <p className="text-base font-normal">Promo</p>
        <AiOutlineSearch className="mx-2 mt-1" />
        <AiOutlineShoppingCart className="mx-2 mt-1" />
        <button className="bg-[red] rounded-2xl px-4 text-sm font-medium text-[#fff] h-[30px] mx-4">
          SIGN IN
        </button>
      </div>
    </header>
  );
};

export default Header;
