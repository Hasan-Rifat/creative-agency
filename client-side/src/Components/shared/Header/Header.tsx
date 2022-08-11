import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
import ActiveLink from "../ActiveLink/ActiveLink";

// type HeaderProps = { children?: Element; to?: string };

const Header: React.FC = () => {
  // background color

  const [color, setColor] = useState<boolean>(false);

  const changeBg = () => {
    if (window.scrollY <= 70) {
      return setColor(true);
    } else {
      return setColor(false);
    }
  };
  window.addEventListener("scroll", changeBg);

  // menu
  const menu: JSX.Element = (
    <>
      <li className="mr-[10px] p-[10px]">
        <ActiveLink to={"/"}>Home </ActiveLink>
      </li>
      <li className="mr-[10px] p-[10px]">
        <ActiveLink to={"/our-portfolio"}>Our Portfolio</ActiveLink>
      </li>
      <li className="mr-[10px] p-[10px]">
        <ActiveLink to={"/our-team"}>Our Team</ActiveLink>
      </li>
      <li className="mr-[10px] p-[10px]">
        <ActiveLink to={"/contact-us"}>Contact Us</ActiveLink>
      </li>
      <button className="rounded-[5px] mr-[10px] px-[47px] py-[10px] text-white bg-primary  transition-none">
        Login
      </button>
    </>
  );
  return (
    <header
      className={`fixed left-0 right-0 top-0 ${
        color ? "bg-transparent" : "bg-white"
      }`}
    >
      <div className="w-[1200px] mx-auto bg-transparent">
        <div>
          <div className="navbar ">
            <div className="flex-1">
              <Link to={"/"}>
                <img src={logo} className="w-[150px]" alt="" />
              </Link>
            </div>
            <div className="flex-none ">
              <ul className="menu menu-horizontal p-0 items-center text-accent">
                {menu}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
