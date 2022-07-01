import fri from "../image/fri.png";

const Main = () => {
  return (
    <div className="flex py-4  justify-between">
      <div className="pt-20">
        <p className="text-[#00240F] font-bold text-[72px]">Friday Pizza</p>
        <p className="text-[#00240F] font-medium text-[36px]">
          Time to enjoy our delicious pizza .
        </p>

        <button className="text-[#fff] bg-[red] rounded-2xl font-medium text-[18px] flex items-center px-4 py-1 mt-4">
          ORDER NOW
        </button>
      </div>
      <div>
        <img className="w-[600px] " src={fri} alt="" />
      </div>
    </div>
  );
};

export default Main;
