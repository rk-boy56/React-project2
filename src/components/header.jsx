import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container lg:flex items-center justify-between  py-5 ">
      <div>
        <img src="public/Logo.png" alt="Logo" />
      </div>

      <ul className="flex gap-[50px] text-[18px] font-normal ">
        <li className="hover:text-[#FF7235]">
          <Link to="/home">Home</Link>
        </li>
        <li className="hover:text-[#FF7235]">
          <Link to="/features">Features</Link>
        </li>

        <li className="hover:text-[#FF7235]">
          <Link to="/about">About Us</Link>
        </li>

        <li className="hover:text-[#FF7235]">
          <Link to="/pricing">Pricing</Link>
        </li>

        <li className="hover:text-[#FF7235]">
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>

      <div>
        <Button
          variant="outlined"
          sx={{
            color: "#FF7235",
            borderColor: "#FF7235",

            "&:hover ": {
              color: "white",
              backgroundColor: "#FF7235"
            }
          }}
        >
          Request a Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;