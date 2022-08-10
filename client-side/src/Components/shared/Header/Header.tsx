import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
import ActiveLink from "../ActiveLink/ActiveLink";

// type HeaderProps = { children?: Element; to?: string };

const Header: React.FC = () => {
  const menu: JSX.Element = (
    <>
      <li className="mr-[40px]">
        <ActiveLink to={"/"}>Home </ActiveLink>
      </li>
      <li className="mr-[40px]">
        <ActiveLink to={"/"}>Our Portfolio</ActiveLink>
      </li>
      <li className="mr-[40px]">
        <ActiveLink to={"/"}>Our Team</ActiveLink>
      </li>
      <li className="mr-[40px]">
        <ActiveLink to={"/"}>Contact Us</ActiveLink>
      </li>
      <li className="mr-[40px]">
        <button className=" px-[47px] py-[10px] text-white bg-primary  transition-none">
          Login
        </button>
      </li>
    </>
  );
  return (
    <header className="sticky top-0">
      <div className="w-[1200px] mx-auto py-[28px]">
        <div>
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <Link to={"/"}>
                <a>
                  <img src={logo} className="w-[150px]" alt="" />
                </a>
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
