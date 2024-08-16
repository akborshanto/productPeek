import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authentication/UseContext";

export const Register = () => {
  const [show, setShow] = useState(false);
  const { createUser ,updateProfiles} = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.username.value;
    const email = form.Email.value;
    const img = form.Photo.value;
    const password = form.password.value;
    console.log(name, email, img, password);
    if (password.length < 6) {
      return toast.error("password must be at least 6 characters");
    } else {
      return toast.success("success password");
    }

    createUser(email, password)
    .then((res) => {
      updateProfiles(name,img)
      .then(res=>console.log(res.user))
      .catch(err=>console.log(err))
      toast.success("SUCCESFULLY REGESTER");
    })
    .catch((err) => console.log(err));
  };
  return (
    <div>
      {" "}
      <div>
        <Toaster />

        <div className="w-full max-w-md p-8 space-y-3 rounded-xl  bg-[#6ab8b4] text-white mx-auto my-8">
          <h1 className="text-2xl font-bold text-center">
            Register Your Account
          </h1>
          <form
            noValidate=""
            action=""
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block text-white">
                Username
              </label>
              <input
                required
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md border-gray-700  text-gray-400 focus:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="Photo" className="block text-white">
                Photo Url
              </label>
              <input
                type="text"
                required
                name="Photo"
                id="Photo"
                placeholder="Photo"
                className="w-full px-4 py-3 rounded-md border-gray-700  text-gray-400 focus:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="Email" className="block text-white">
                Email
              </label>
              <input
                type="text"
                required
                name="Email"
                id="Email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border-gray-700  text-gray-400 focus:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              Password
              <label className="input input-bordered flex items-center gap-2 text-black">
                <p onClick={() => setShow(!show)}>
                  {show ? <FaEye /> : <FaEyeSlash />}
                </p>

                <input
                  required
                  id="password"
                  type={show ? "text" : "password"}
                  placeholder="Password"
                />
              </label>
            </div>
            <button className="block w-full p-3 text-center rounded-sm bg-[#AADDE5]  ">
              Sign In
            </button>
          </form>
          <Link to="/login">
            {" "}
            <a
              rel="noopener noreferrer"
              href="#"
              className="underline text-blue-600 text-xl"
            >
              <p>Go to LoginPage</p>
            </a>{" "}
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};
