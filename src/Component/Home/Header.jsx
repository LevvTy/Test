import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4">
          <h1 className="text-xl font-bold">T-Booking</h1>
          <nav className="space-x-6 flex">
            <h4 className="text-gray-700 hover:text-orange-500 cursor-pointer">
              Home
            </h4>
            <h4 className="text-gray-700 hover:text-orange-500 cursor-pointer">
              Rooms
            </h4>
            <h4 className="text-gray-700 hover:text-orange-500 cursor-pointer">
              About us
            </h4>
            <h4 className="text-gray-700 hover:text-orange-500 cursor-pointer">
              Blog
            </h4>
            <h4 className="text-gray-700 hover:text-orange-500 cursor-pointer">
              Contact
            </h4>
          </nav>
          <button className="hover:text-black bg-orange-500 text-white px-4 py-2 rounded cursor-pointer">
            Sign In
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
