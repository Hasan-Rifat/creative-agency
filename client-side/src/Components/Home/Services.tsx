import React from "react";
import service1 from "../../images/icons/service1.png";
import service2 from "../../images/icons/service2.png";
import service3 from "../../images/icons/service3.png";

type ServiesProps = {};

const Services: React.FC<ServiesProps> = () => {
  const serves = [
    {
      id: 1,
      title: "Web & Mobile design",
      description:
        "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
      logo: service1,
    },
    {
      id: 2,
      title: "Graphic design",
      description:
        "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
      logo: service2,
    },
    {
      id: 3,
      title: "Web development",
      description:
        "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
      logo: service3,
    },
  ];
  return (
    <section>
      <div className="w-[1200px]  mx-auto py-[70px] ">
        <h2 className="text-[34px] leading-[43px] font-semibold text-center pb-[77px]">
          Provide awesome <span className="text-secondary">services</span>
        </h2>
        <div className="grid grid-cols-3 gap-[55px] ">
          {serves.map(({ id, title, description, logo }) => (
            <div
              key={id}
              className={`text-center pt-[34px] pb-[39px] px-[50px] rounded-[10px] ${
                title === "Graphic design" ? "shadow-2xl" : ""
              }`}
            >
              <div className="pb-[25px]">
                <img className="w-[74px] h-[74px] mx-auto" src={logo} alt="" />
              </div>
              <h2 className="text-[20px] leading-[16px] tracking-[0.4 px] font-semibold text-primary pb-[18px]">
                {title}
              </h2>
              <p className="text-[16px] leading-[28px] tracking-[0.4 px] font-light text-[#4c4c4c]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
