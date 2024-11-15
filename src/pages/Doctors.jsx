/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { specialityData } from "../assets/assets";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const ApplyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    ApplyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col mt-5 sm:flex-row gap-5 items-start">
        <button onClick={()=>setShowFilter(!showFilter)} className={`py-1 ${showFilter === true ? 'text-white bg-primary' : ''} px-3 border rounded text-sm transition-all sm:hidden`}>
         
          Filter
        </button>
        {/* ------------------------------left side ---------------------------------- */}
        <div
          className={` sm:flex text-gray-600 text-sm gap-4 flex-col ${showFilter === true ? '' : 'hidden'}`}
        >
          {specialityData.map((item, index) => (
            <p
              onClick={() =>
                speciality === item.speciality
                  ? navigate("/doctors")
                  : navigate(`/doctors/${item.speciality}`)
              }
              // onClick={() => {{ApplyFilter(item.speciality)}; navigate(`/doctors/${item.speciality}`)}}
              className={`sm:w-auto transition-all pr-16 pl-3 py-1.5 ${
                speciality === item.speciality ? "bg-indigo-100 text-black" : ""
              } border-gray-300 border rounded cursor-pointer w-[94vw]`}
              key={index}
            >
              {item.speciality}
            </p>
          ))}
        </div>
        {/* ------------------------- right side -------------------------------------- */}
        <div className=" w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              key={index}
              className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img src={item.image} className=" bg-blue-50" />
              <div className="p-4">
                <div className="flex gap-2 items-center text-sm text-center text-green-500">
                  <p className="w-2 bg-green-500 rounded-full h-2"></p>{" "}
                  <p>Available</p>
                </div>
                <p className=" text-gray-900 text-lg font-medium">
                  {item.name}
                </p>
                <p className="text-sm text-gray-600">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
