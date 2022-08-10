import React from "react";
import image from "../../images/logos/Frame.png";

type BannerProps = {};

const Banner: React.FC<BannerProps> = () => {
  return (
    <section className="bg-[#fbd062]">
      <div className="w-[1200px]  mx-auto py-[28px] pt-[141px] pb-[106px]">
        <div className="grid grid-cols-5 gap-[120px] items-center">
          <div className="col-span-2">
            <h2 className="text-[48px] leading-[60px] font-bold text-primary">
              Let’s Grow Your Brand To The Next Level
            </h2>
            <p className="py-[23px] text-[16px] leading-[24px] font-normal text-primary tracking-[0.005em]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>
            <button className="font-roboto px-[60px] py-[10px] text-white bg-primary text-[16px] leading-[24px] font-normal rounded-[5px] ">
              Hire us
            </button>
          </div>
          <div className="col-span-3 ">
            <img className=" w-[624.6px] h-[422.8px]" src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
