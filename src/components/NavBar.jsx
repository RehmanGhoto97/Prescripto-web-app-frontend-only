/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-40 cursor-pointer"
        src={assets.logo}
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className=" border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className=" border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className=" border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className=" border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <a className="text-xs py-1.5 px-5 border rounded-full" href="#">Admin Panel</a>
      </ul>
      <div className=" flex items-center gap-4">
        {token ? (
          <div className="flex items-center cursor-pointer gap-2 group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className=" w-2.5" src={assets.dropdown_icon} alt="" />
            <div className=" absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className=" min-w-48 bg-stone-50 rounded flex flex-col gap-4 p-4">
                <p  onClick={() => navigate("/my-profile")} className=" cursor-pointer hover:text-black">My Profile</p>
                <p  onClick={() => navigate("/my-appointments")} className=" cursor-pointer hover:text-black">My Appointments</p>
                <p onClick={()=>setToken(false)} className=" cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className=" bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}
        <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />
        {/* -------------------------- mobile menu---------------------------- */}
        {showMenu && <div className="md:hidden fixed w-full right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all">
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img onClick={()=>setShowMenu(false)} className="w-7" src={assets.cross_icon} alt="" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <NavLink to="/">
          <p onClick={()=>setShowMenu(false)} className="py-2 px-4 rounded inline-block">HOME</p>
        </NavLink>
        <NavLink to="/doctors">
          <p onClick={()=>setShowMenu(false)} className="py-2 px-4 rounded inline-block">ALL DOCTORS</p>
        </NavLink>
        <NavLink to="/about">
          <p onClick={()=>setShowMenu(false)} className="py-2 px-4 rounded inline-block">ABOUT</p>
        </NavLink>
        <NavLink to="/contact">
          <p onClick={()=>setShowMenu(false)} className="py-2 px-4 rounded inline-block">CONTACT</p>
        </NavLink>
          </ul>
        </div>}
      </div>
    </div>
  );
};

export default NavBar;
