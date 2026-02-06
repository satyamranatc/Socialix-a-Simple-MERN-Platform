import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  let navigate = useNavigate();

  let [userData, setUserData] = useState({});

  let isLogin;
  useEffect(() => {
    isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (!isLogin) {
      navigate("/account");
    } else {
      let user = JSON.parse(localStorage.getItem("user"));
      setUserData(user);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-pink-50 to-rose-100 flex justify-center items-center px-6">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200">

        {/* Top Banner */}
        <div className="h-44 bg-gradient-to-r from-rose-500 to-pink-500 relative flex items-center justify-center">
          <h1 className="text-4xl font-extrabold text-white tracking-wide font-serif">
            Profile
          </h1>
        </div>

        {/* Main Content */}
        <div className="px-10 py-10 flex flex-col items-center text-center">

          {/* Avatar */}
          <div className="-mt-20 mb-6">
            <img
              src={userData.avatar || "https://i.pravatar.cc/200"}
              alt="avatar"
              className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
            />
          </div>

          {/* Welcome Text */}
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight font-serif">
            Welcome
          </h2>

          <h3 className="text-3xl font-extrabold text-rose-500 mt-2 font-serif">
            {userData.fullName}
          </h3>

          {/* Small Info */}
          <p className="text-gray-500 mt-4 text-lg font-medium">
            You are logged in successfully.
          </p>

          {/* Logout Button */}
          <button
            className="mt-10 bg-rose-500 text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-lg hover:bg-rose-600 hover:scale-105 transition duration-300"
            onClick={() => {
              localStorage.setItem("isLogin", false);
              navigate("/account");
            }}
          >
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
}
