import React from "react";
import image from "../../images/logos/Frame.png";

type BannerProps = {};

const Banner: React.FC<BannerProps> = () => {
  return (
    <section>
      <div className="w-[1169px] mx-auto py-[28px]">
        <div className="grid grid-cols-6 gap-[30px]">
          <div className="col-span-2">
            <h2 className="text-[48px] leading-[60px] font-bold text-primary">
              Let’s Grow Your Brand To The Next Level
            </h2>
            <p className="text-[16px] leading-[24px] font-normal text-primary tracking-[0.005em]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat{" "}
            </p>
            <button className="px-[60px] py-[10px] text-white bg-primary text-[16px] leading-[24px] font-normal rounded-[5px] ">
              Hire us
            </button>
          </div>
          <div className="col-span-4">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
