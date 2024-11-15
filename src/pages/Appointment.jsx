/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState({});
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const daysName = ["SUN","MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const time = [
    "10:30 am",
    "11:00 am",
    "11:30 am",
    "12:00 pm",
    "12:30 pm",
    "01:00 pm",
    "01:30 pm",
    "02:00 pm",
    "02:30 pm",
    "03:00 pm",
    "03:30 pm",
    "04:00 pm",
    "04:30 pm",
    "05:00 pm",
    "05:30 pm",
    "06:00 pm",
    "06:30 pm",
    "07:00 pm",
    "07:30 pm",
    "08:00 pm",
  ];

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };
  const getAvailableSlots = async () => {
    setDocSlots([]);
    // geting current date
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);
      // seting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let timeSlots = [];
      while (currentDate < endTime) {
        let formatedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        // add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formatedTime,
        });
        // increment current time by 30 minute
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);
  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);
  // useEffect(() => {
  //   console.log(docSlots);
  // }, [docSlots]);

  return (
    <div>
      {/* ----------------------------------1st row--------------------------- */}
      <div className="sm:flex-row gap-4 flex-col flex">
        <div>
          <img
            className="sm:max-w-72 bg-primary rounded-lg w-full"
            src={docInfo.image}
            alt=""
          />
        </div>
        <div className="sm:mt-0 sm:mx-0 py-7 p-8 b bg-white border-[#adadad] border rounded-lg flex-1 mt-[-80px] mx-2">
          {/* -----------------------------doctor info--------------------------- */}
          <p className="text-gray-700 font-medium text-3xl gap-2 items-center flex">
            {docInfo.name}

            <img className="w-5" src={assets.verified_icon} alt="" />
          </p>
          <div className="text-gray-600 gap-2 items-center flex mt-1">
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <button className="text-xs py-0.5 px-2 border rounded-full">
              {docInfo.experience}
            </button>
          </div>
          {/* ---------------- doctor about-------------------- */}
          <div>
            <p className=" font-medium text-sm text-[#262626] gap-1 items-center flex mt-3">
              About
              <img className="w-3" src={assets.info_icon} alt="" />
            </p>
            <p className="text-gray-600 text-sm max-w-[700px] mt-1">
              {docInfo.about}
            </p>
          </div>
          <p className="text-gray-600 font-medium mt-4">
           
            Appointment fee:
            <span className="text-gray-800">
           
              {currencySymbol}
              {docInfo.fees}
            </span>
          </p>
        </div>
      </div>

      {/* ----------------------------------booking slots---------------------- */}
      <div className="sm:pl-4 sm:ml-72 text-[#565656] font-medium mt-8">
        <p>Booking slots</p>
        <div className="overflow-x-scroll gap-3 items-center w-full flex mt-4">
          {docSlots.length && docSlots.map((item, i) => (
            <div
              key={i}
              onClick={()=>setSlotIndex(i)}
              className={`  text-center py-6 ${
                slotIndex === i ? "bg-primary text-white" : "border border-gray-200"
              } rounded-full cursor-pointer min-w-16 `}
            >
              <p>{item[0] && daysName[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>
        <div className="flex overflow-x-scroll gap-3 items-center w-full mt-4">
          {docSlots.length && docSlots[slotIndex].map((item, ind) => (
            <p
            onClick={()=>setSlotTime(item.time)}
              key={ind}
              className={`${
                item.time === slotTime ? "bg-primary text-white" : "border text-gray-400  border-gray-200"
              } font-light text-sm py-2 cursor-pointer px-5 border rounded-full flex-shrink-0`}
            >
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>

        <button className="text-white font-light text-sm py-3 px-14 bg-primary rounded-full my-6">
          Book an appointment
        </button>
      </div>
      {/* -----------------------------------listing related Doctors----------------------- */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  );
};

export default Appointment;
