import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  let navigate = useNavigate();

  let [userData,setUserData] = useState({});

  let isLogin;
  useEffect(() => {
    isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (!isLogin) {
      navigate("/account");
    }
    else
    {
        let user = JSON.parse(localStorage.getItem("user"));
        setUserData(user);

    }
  }, []);

  return (
    <div>
      <center>
        <h1 className="text-8xl m-36 font-bold text-rose-500">
          Hello By Profile Page
        </h1>
        <h2 className="text-4xl m-36 font-bold text-rose-500">
          Welcome {userData.fullName}
        </h2>
      </center>

      <button
        className="bg-rose-500 text-white px-6 py-2 rounded-2xl m-5"
        onClick={() => {
          localStorage.setItem("isLogin", false);
          navigate("/account");
        }}
      >
        LogOut
      </button>
    </div>
  );
}
