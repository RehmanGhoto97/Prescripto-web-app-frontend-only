/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import docImg from "../assets/doc1.png"
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const {doctors} =useContext(AppContext)
  return (
    <div>
      <p className="text-gray-600 font-medium text-lg pb-3 border-b mt-12">
        My appointments
      </p>

      <div>
       { doctors.slice(8,14).map((item, index)=>(
        index%2===0 && <div key={index} className="py-4 grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 border-b">
        <div>
          <img
            className="w-36 bg-indigo-50"
            src={item.image}
            alt=""
          />
        </div>
        <div className="flex-1 text-sm text-zinc-600">
          <p className="text-zinc-700 font-semibold text-base">
            {item.name}
          </p>
          <p>{item.speciality}</p>
          <p className="text-zinc-700 font-medium mt-1">Address:</p>
          <p>{item.address.line1}</p>
          <p>{item.address.line2}</p>
          <p className="mt-1">
            <span className="text-neutral-700 font-medium text-sm">
              Date & Time:
            </span>
            {"2 Dec 2024 | 11:00 AM"}{" "}
          </p>
        </div>
        <div className="flex flex-col gap-2 justify-end text-sm text-center">
          <button className="text-stone-500 sm:min-w-48 py-2 border rounded hover:bg-primary transition-all duration-300 hover:text-white">
            Pay Online
          </button>
          <button className="text-stone-500 sm:min-w-48 py-2 border rounded hover:bg-red-600 transition-all duration-300 hover:text-white">
            Cancel appointment
          </button>
        </div>
      </div>
       ))}
        
      </div>
      {/* <div>
        <div className="py-4 grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 border-b">
          <div>
            <img
              className="w-36 bg-[#eaefff]"
              src={docImg}
              alt=""
            />
          </div>
          <div className="flex-1 text-sm text-[#5e5e5e]">
            <p className="text-[#262626] font-semibold text-base">
              {"Dr. Sarah Patel"}
            </p>
            <p>{"Dermatologist"}</p>
            <p className="text-[#464646] font-medium mt-1">Address:</p>
            <p>{"37th Cross, Richmond Circle, Ring Road, London"}</p>
            <p className="mt-1">
              <span className="text-[#3c3c3c] font-medium text-sm">
                Date & Time:
              </span>{" "}
              {"2 Dec 2024 | 11:00 AM"}{" "}
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-end text-sm text-center">
            <button className="text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-primary transition-all duration-300 hover:text-white">
              Pay Online
            </button>
            <button className="text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 transition-all duration-300 hover:text-white">
              Cancel appointment
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MyAppointments;
