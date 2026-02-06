import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Account() {
  let navigate = useNavigate();
  let isLogin;

  useEffect(() => {
    isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      navigate("/profile");
    }
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    let email = e.target.email.value;

    let res = await axios.post("http://localhost:5000/api/user/login", {
      email,
    });

    if (res.data.err) {
      alert(res.data.err);
      return;
    }
    console.log(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
    localStorage.setItem("isLogin", true);
    navigate("/profile");
  }

  async function handleRegister(e) {
    e.preventDefault();
    let userData = {
      fullName: e.target.fullName.value,
      avatar: e.target.avatar.value,
      bio: e.target.bio.value,
      email: e.target.email.value,
      age: e.target.age.value,
    };

    let res = await axios.post(
      "http://localhost:5000/api/user/register",
      userData
    );

    if (res.data.err) {
      alert(res.data.err);
      return;
    }
    console.log(res.data);
    localStorage.setItem("user", JSON.stringify(res.data));
    localStorage.setItem("isLogin", true);
    navigate("/profile");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-pink-50 to-rose-100 flex justify-center items-center px-6 py-12">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LOGIN CARD */}
        <div className="bg-white shadow-2xl rounded-3xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-6">
            <h1 className="text-3xl font-extrabold text-white tracking-wide font-serif">
              Login
            </h1>
            <p className="text-white/80 mt-1 font-medium">
              Enter your email to continue
            </p>
          </div>

          <div className="px-8 py-10">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-lg font-bold text-gray-800 mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  className="w-full px-5 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 text-gray-700 font-medium"
                  type="text"
                  placeholder="example@gmail.com"
                />
              </div>

              <button className="w-full bg-rose-500 text-white py-4 rounded-2xl text-lg font-bold shadow-lg hover:bg-rose-600 hover:scale-[1.02] transition duration-300">
                Login
              </button>
            </form>
          </div>
        </div>

        {/* REGISTER CARD */}
        <div className="bg-white shadow-2xl rounded-3xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-8 py-6">
            <h1 className="text-3xl font-extrabold text-white tracking-wide font-serif">
              Register
            </h1>
            <p className="text-white/80 mt-1 font-medium">
              Create a new account in seconds
            </p>
          </div>

          <div className="px-8 py-10">
            <form onSubmit={handleRegister} className="space-y-5">

              <div>
                <label className="block text-lg font-bold text-gray-800 mb-2">
                  Full Name
                </label>
                <input
                  name="fullName"
                  className="w-full px-5 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 text-gray-700 font-medium"
                  type="text"
                  placeholder="Your Name..."
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-800 mb-2">
                  Avatar URL
                </label>
                <input
                  name="avatar"
                  className="w-full px-5 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 text-gray-700 font-medium"
                  type="text"
                  placeholder="https://avatar-link.com/img.png"
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-800 mb-2">
                  Bio
                </label>
                <input
                  name="bio"
                  className="w-full px-5 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 text-gray-700 font-medium"
                  type="text"
                  placeholder="Write something about yourself..."
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-800 mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  className="w-full px-5 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 text-gray-700 font-medium"
                  type="text"
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-800 mb-2">
                  Age
                </label>
                <input
                  name="age"
                  className="w-full px-5 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 text-gray-700 font-medium"
                  type="text"
                  placeholder="22"
                />
              </div>

              <button className="w-full bg-black text-white py-4 rounded-2xl text-lg font-bold shadow-lg hover:bg-gray-900 hover:scale-[1.02] transition duration-300">
                Register
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
