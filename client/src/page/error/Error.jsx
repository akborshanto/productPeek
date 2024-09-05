import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../component/shared/Button";

const Error = () => {
  return (
    <div
      className="h-screen bg-cover bg-left"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg)",
      }}
    >
      <div className="w-4/5 m-auto flex items-center justify-center flex-col">
        <img src="https://i.ibb.co/0M8nVVM/page-not-found.png" alt="" />
        <Link to={"/"}>
          <Button className="btn bg-[#FF2279] font-bold text-black">
            Go To Home{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
