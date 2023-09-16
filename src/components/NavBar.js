import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between  h-20 px-10  bg-[#fffef2] text-base">
      {/* Left section */}
      <div
        className="flex container space-x-8 "
      >
        <button>Skin Care</button>
        <button>Body & Hand</button>
        <button>Hair</button>
        <button>Fragrance</button>
        <button>Home</button>
        <button>Kits & Travel</button>
        <button>Gifts</button>
        <button>Read</button>
        <button>Stores</button>
        <button>Facial Appointments</button>
        <button><svg class="h-5 w-5 text-[#333]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg></button>


      </div>

      {/* Right Section  */}
      <div className="flex items-center space-x-4">
        <button class="flex h-10  justify-center items-center ">
          Log In
        </button>
        <button class="flex h-10  justify-center items-center ">
          Cabinet
        </button>
        <button class="flex h-10  justify-center items-center ">Cart</button>
      </div>
    </div>
  );
};

export default NavBar;
