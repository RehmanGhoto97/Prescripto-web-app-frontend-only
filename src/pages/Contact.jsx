
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      {/* ------heading------ */}
      <div className="text-[#707070] text-2xl text-center pt-10">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>
      {/* -----------------------main----------------- */}
      <div className="md:flex-row gap-10 justify-center mb-28 flex-col flex my-10">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className=" items-start gap-6 justify-center flex flex-col">
          <p className="text-gray-600 font-semibold text-lg">OUR OFFICE</p>
          <p className=" text-gray-500">
              00000 Willms Station <br /> Suite 000, Washington, USA
            </p>
          <p className=" text-gray-500">
            Tel: (000) 000-0000 <br />
            Email: greatstackdev@gmail.com
          </p>
          <p className="text-gray-600 font-semibold text-lg">
            CAREERS AT PRESCRIPTO
          </p>
          <p className=" text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className=" transition-all duration-500 text-sm py-4 px-8 border-black border hover:text-white hover:bg-black">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
