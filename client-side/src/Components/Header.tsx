import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const menu: JSX.Element = (
    <>
      <Link to={"/"}>
        <li className="mr-5">Home</li>
      </Link>
      <Link to={"/"}>
        <li className="mr-5">Our Portfolio</li>
      </Link>
      <Link to={"/"}>
        <li className="mr-5">Our Team</li>
      </Link>
      <Link to={"/"}>
        <li className="mr-5">Contact Us</li>
      </Link>
      <li className="mr-5">
        <button className="btn px-[47px] py-[10px] text-white bg-primary">
          Login
        </button>
      </li>
    </>
  );
  return (
    <header className="">
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none ">
              <ul className="menu menu-horizontal p-0 items-center">{menu}</ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
