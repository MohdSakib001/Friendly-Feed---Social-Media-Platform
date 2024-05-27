import React from "react";
import { auth, provider } from "../config/firebase-config";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // SignIn function
  async function handleLoginWithGoogle() {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
        userID: result.user.uid,
      };
      localStorage.setItem("userdetails", JSON.stringify(user));

      navigate("/home");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p className="text-xl text-blue-500 tracking-wider font-semibold p-5">
        FRIENDLY FEED
      </p>
      <div className="bg-blue-50 max-w-sm w-80 h-1/2 p-10 rounded-lg shadow-lg flex flex-col gap-5 items-center justify-center">
        <p className=" tracking-wider font-semibold p-5">Login to Continue</p>
        <button
          type="button"
          onClick={handleLoginWithGoogle}
          className="flex justify-center items-center hover:opacity-80 active:opacity-100 transition delay-100 ease-in rounded-md mx-auto bg-white w-full text-black px-3 py-2 border border-blue-400 max-w-sm cursor-pointer hover:bg-blue-100"
        >
          <FcGoogle className="w-8 h-6" />
          <span className=" font-semibold text-base">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
