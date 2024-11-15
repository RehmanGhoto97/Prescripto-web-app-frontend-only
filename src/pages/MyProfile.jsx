import { useState } from "react";
import uploadImg from "../assets/upload_area.png";
import uploadIcon from "../assets/upload_icon.png";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(true);
  const [image, setImage] = useState(null);
  const [profileData, setProfileData] = useState({
    name: "Rehman Ghoto",
    email: "ghotkigtk02@gmail.com",
    phone: "0000000000",
    address: "",
    image: assets.profile_pic,
    gender: "Not Selected",
    birthday: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="text-sm pt-5 gap-2 flex-col max-w-lg flex">
      {!isEdit ? (
        <label htmlFor="image" className="w-44">
          <div className="inline-block relative cursor-pointer">
            <img
              className="w-36 rounded opacity-75"
              src={image || uploadImg}
              alt="Profile Preview"
            />
            <img
              className="w-10 absolute bottom-12 right-12"
              src={uploadIcon}
              alt="Upload Icon"
              hidden
            />
          </div>
        </label>
      ) : (
        <img className="rounded w-36" src={image || uploadImg} alt="Profile" />
      )}
      <input type="file" id="image" hidden onChange={handleImageChange} />
      {!isEdit ? (
        <input
          className="bg-gray-50 max-w-60 font-medium text-3xl"
          type="text"
          name="name"
          value={profileData.name}
          onChange={handleInputChange}
        />
      ) : (
        <p className="text-neutral-800 font-medium text-3xl mt-4">
          {profileData.name}
        </p>
      )}

      <hr className="bg-zinc-400 border-none h-[1px]" />
      <div>
        <p className="underline mt-3 text-gray-600">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{profileData.email}</p>
          <p className="font-medium">Phone:</p>
          {!isEdit ? (
            <input
              className="bg-gray-50 max-w-52"
              type="text"
              name="phone"
              value={profileData.phone}
              onChange={handleInputChange}
            />
          ) : (
            <p className="text-blue-500">{profileData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {!isEdit ? (
            <>
              <input
                className="bg-gray-50"
                type="text"
                name="address"
                value={profileData.address}
                onChange={handleInputChange}
              />
            </>
          ) : (
            <p className="text-gray-500">{profileData.address}</p>
          )}
        </div>
      </div>
      <div>
        <p className="underline mt-3 text-neutral-500">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {!isEdit ? (
            <select
              name="gender"
              value={profileData.gender}
              onChange={handleInputChange}
              className="bg-gray-100 max-w-20"
            >
              <option value="Not Selected">Not Selected</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{profileData.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {!isEdit ? (
            <input
              type="date"
              name="birthday"
              value={profileData.birthday}
              onChange={handleInputChange}
              className="bg-gray-100 max-w-28"
            />
          ) : (
            <p className="text-gray-400">
              {profileData.birthday || "Not Selected"}
            </p>
          )}
        </div>
      </div>
      <div className="mt-10">
        <button
          onClick={() =>
            isEdit ? setIsEdit(false) : setIsEdit(true)
          }
          className="py-2 transition-all px-8 hover:text-white hover:bg-primary border-primary border rounded-full"
        >
          {isEdit ? 'Edit' : "Save information"}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
