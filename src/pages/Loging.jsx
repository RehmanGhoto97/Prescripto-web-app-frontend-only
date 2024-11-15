/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Loging = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form className=" items-center min-h-[80vh] flex">
      <div className="sm:min-w-96 shadow-lg text-sm text-[#5e5e5e] p-8 border rounded-xl gap-3 items-center flex-col min-w-[340px] flex m-auto">
        <p className=" font-semibold text-2xl">
          {state == "Log in" ? "Login" : " Create Account"}
        </p>
        <p>Please {state.toLowerCase()} to book appointment</p>
        {state == "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              onChange={(e) => setName(e.target.name)}
              value={name}
              type="text"
              className="p-2 border border-[#dadada] rounded w-full mt-1"
              required
            />
          </div>
        )}
        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.email)}
            value={email}
            type="text"
            className="p-2 border border-[#dadada] rounded w-full mt-1"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.password)}
            value={password}
            type="text"
            className="p-2 border border-[#dadada] rounded w-full mt-1"
            required
          />
        </div>
        <button className="text-white text-base py-2 bg-primary rounded-md w-full my-2">
          {state == "Log in" ? "Login" : " Create Account"}
        </button>
        <p>
          {state == "Sign Up"
            ? "Already have an account?"
            : "Create an new account? "}
          <span
            onClick={() =>
              state === "Sign Up" ? setState("Log in") : setState("Sign Up")
            }
            className=" underline text-primary cursor-pointer"
          >
            {state == "Sign Up" ? "Login here" : " Click here"}
          </span>
        </p>
      </div>
    </form>
  );
};

export default Loging;
