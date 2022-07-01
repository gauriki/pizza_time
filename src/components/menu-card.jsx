const MenuCard = (props) => {
  return (
    <div className="mx-4 p-6 rounded-t-full border-slate-200 border-2 flex items-center justify-center w-[250px] flex-col rounded-b-[100rem]">
      <img className="rounded-full w-48 h-48" src={props.image} alt="icon" />
      <p className="font-semibold text-[24px] text-[#000000] pt-3 pb-2">
        {props.title}
      </p>
      <p className="text-[#333333] text-sm font-light h-[70px] text-center">
        {props.discription}
      </p>
      <p className="text-[#05A84B] font-semibold text-[24px] mb-4">
        ${props.price}
      </p>

      <select className=" border-[#BDBDBD] border-[1px] rounded-2xl px-10 py-[6px] bg-transparent">
        <option className="text-[#4F4F4F]">regular</option>
        <option>medium</option>
        <option>large</option>
      </select>

      <button className="bg-[red] text-[#fff] font-medium text-sm rounded-2xl px-10 py-[7px] mt-2 ">
        ADD TO CART
      </button>
    </div>
  );
};

export default MenuCard;
