/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-primary px-6 rounded-lg flex lg:px-12 my-20 sm:px-10 md:mx-10 md:px-14">
      {/* -----------------------left side----------- */}
      <div className="py-8 flex-1 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className=" text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointment</p>
          <p className="mt-4">With 100+ Trusted Doctors</p>
        </div>
        <button
          onClick={() =>{ navigate("/login"); scrollTo(0,0)}}
          className=" bg-white text-gray-600 text-sm px-8 py-3 sm:text-base rounded-full hover:scale-105 cursor-pointer transition-all  mt-6"
        >
          Create account
        </button>
      </div>

      {/* ----------------------------right side------------------------------- */}
      <div className=" relative hidden md:block md:w-1/2 lg:w-[370px]">
        <img
          className="max-w-md w-full right-0 bottom-0 absolute"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
