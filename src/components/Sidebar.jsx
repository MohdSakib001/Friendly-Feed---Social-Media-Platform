import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase-config";

export const Sidebar = ({
  isActive,
  handleSidebarClick,
  hamburger,
  handlehamburger,
}) => {
  const navigate = useNavigate();

  // Function to handle sidebar behaviour
  function handleOnClick(clickValue) {
    handleSidebarClick(clickValue);
    handlehamburger(clickValue);
  }

  // function to get data from localStorage
  const userDetails = JSON.parse(localStorage.getItem("userdetails"));

  function handleLogout() {
    if (confirm("Do you want  to Log Out?")) {
      signOut(auth)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          alert(error);
        });
    }
  }

  return (
    <>
      <div
        className={`w-1/2 z-20 md:w-1/5 min-h-svh h-full absolute flex flex-col justify-between  transition ${
          hamburger ? "-translate-x-full" : "translate-x-0"
        }  md:translate-x-0 bg-gray-600 `}
      >
        <div className="space-y-4 px-2">
          <div className="h-[2px] bg-slate-500 "></div>
          <Link
            to="/home"
            onClick={() => handleOnClick("Home")}
            className={`block ps-2 cursor-pointer rounded-lg text-white py-2 transition ${
              isActive === "Home" ? "bg-blue-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/home/create-post"
            onClick={() => handleOnClick("Create Post")}
            className={` block ps-2 cursor-pointer rounded-lg text-white py-2 transition ${
              isActive === "Create Post" ? "bg-blue-500" : ""
            }`}
          >
            Create Post
          </Link>
        </div>

        <div className="space-y-5 px-2 mb-10 ">
          <div className="h-[2px] bg-slate-500 "></div>{" "}
          <div className="flex gap-x-2 items-center justify-center">
            <img
              src={
                userDetails.photo === ""
                  ? "/profile-pic.svg"
                  : userDetails.photo
              }
              alt="profilepic"
              className="w-8 h-8 rounded-full"
            />

            <h4 className="text-white font-semibold">{userDetails.name}</h4>
          </div>
          {/* Logout Button */}
          <div
            onClick={handleLogout}
            className="p-2 bg-blue-500 rounded-lg text-white cursor-pointer text-center"
          >
            LogOut
          </div>
        </div>
      </div>
    </>
  );
};
