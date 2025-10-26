import { WifiZero } from "lucide-react";

const ArticlesCards = () => {
  return (
    <div className="">
      <div className="card">
        <div className="overflow-hidden">
          <img
            className="w-full h-auto object-cover rounded-xl hover:scale-105 duration-500"
            src="https://cdn.prod.website-files.com/689251469afed457b38b7028/68936f69d26c6e5db9cc1769_image%20(21).png"
            alt=""
          />
        </div>
        <div className="mt-2 flex flex-col gap-[5px]">
          <div className="flex text-[14px] text-[#4c4c4c]  items-center">
            <h3>Entertainment</h3>
            <WifiZero className="mb-[8px]" />
            <h4>April 20, 2025</h4>
          </div>
          <h2 className="text-[18px] font-semibold leading-[26px]">Budget Travel: Exploring the World Affordably</h2>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCards;
