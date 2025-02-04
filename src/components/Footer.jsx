/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className=" md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------------------------left section---------------------------------------- */}
        <div >
          <img
            onClick={() =>{ navigate("/");scrollTo(0,0)}}
            className="w-40 mb-5 cursor-pointer"
            src={assets.logo}
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* ----------------------centre section----------------------------------------- */}
        <div>
          <h1 className=" text-xl font-medium mb-5">COMPANY</h1>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className=" cursor-pointer" onClick={() => {navigate("/");scrollTo(0,0)}}>Home</li>
            <li className=" cursor-pointer" onClick={() =>{ navigate("/about");scrollTo(0,0)}}>About us</li>
            <li className=" cursor-pointer">Delivery</li>
            <li className=" cursor-pointer">Privacy policy</li>
          </ul>
        </div>
        {/* -----------------------right section------------------------------------------ */}
        <div>
          <h1 className=" text-xl font-medium mb-5">GET IN TOUCH</h1>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+0-000-000-000</li> <li>example@gmail.com</li>
          </ul>
         
  
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024 @ example.com - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
