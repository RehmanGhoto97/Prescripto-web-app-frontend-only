/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      {/* ------heading------ */}
      <div className="text-[#707070] text-2xl text-center pt-10">
        <p>
          ABOUT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>
      {/* -----------------------main----------------- */}
      <div className="md:flex-row gap-12 flex-col flex my-10">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="md:w-2/4 text-gray-600 text-sm gap-6 justify-center flex flex-col">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you&apos;re booking your first appointment or
            managing ongoing care, Prescripto is here to support you every step
            of the way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      {/* -------headind------- */}
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>{" "}
        </p>
      </div>
      {/* ------------------------cards--------------- */}
      <div className="md:flex-row flex flex-col mb-2">
        <div className="md:px-16 sm:py-16 transition-all duration-300 to-gray-600 text-[15px] py-8 px-10 border gap-5 flex-col cursor-pointer hover:text-white hover:bg-primary">
          <b>EFFICIENCY:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="md:px-16 sm:py-16 transition-all duration-300 to-gray-600 text-[15px] py-8 px-10 border gap-5 flex-col cursor-pointer hover:text-white hover:bg-primary">
          <b>CONVENIENCE:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="md:px-16 sm:py-16 transition-all duration-300 to-gray-600 text-[15px] py-8 px-10 border gap-5 flex-col cursor-pointer hover:text-white hover:bg-primary">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
