import pexels from "../image/pexels.png";

const MenuCard = () => {
  return (
    <div className="mx-4 p-6 rounded-t-full border-slate-200 border-2 flex items-center justify-center w-[250px] flex-col rounded-b-[100rem]">
      <img className="rounded-full w-48 h-48" src={pexels} alt="icon" />
      <p className="font-semibold text-[24px] text-[#000000] pt-3 pb-2">
        Cheese Lover
      </p>
      <p className="text-[#333333] text-sm font-light">
        Combination of Alfredo sauce and two cheeses – Romano, and Parmesan.
      </p>
      <p className="text-[#05A84B] font-semibold text-[24px]">$20.00</p>

      <select className=" border-[#BDBDBD] border-[1px] rounded-2xl px-10 bg-transparent">
        <option className="text-[#4F4F4F]">regular</option>
        <option>medium</option>
        <option>large</option>
      </select>

      <button className="bg-[red] text-[#fff] font-medium text-base rounded-2xl px-10 mt-2 ">
        ADD TO CART
      </button>
    </div>
  );
};

export default MenuCard;
