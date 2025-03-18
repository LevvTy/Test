import { format } from "date-fns";
import React, { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";
import { listings } from "../../Unit/const";

export default function Banner() {
  const [filteredListings, setFilteredListings] = useState(listings);
  const [searchLocation, setSearchLocation] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const datePickerRef = useRef(null);

  const formatDate = (date) => format(date, "d MMM");
  const formattedDate = `${formatDate(dateRange[0].startDate)} - ${formatDate(
    dateRange[0].endDate
  )}`;

  const handleClickOutside = (event) => {
    if (
      datePickerRef.current &&
      !datePickerRef.current.contains(event.target)
    ) {
      setShowDatePicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleSearch = () => {
    const results = listings.filter((listing) =>
      listing.location.toLowerCase().includes(searchLocation.toLowerCase())
    );
    setFilteredListings(results);
    console.log("Hello");
  };

  return (
    <>
      <div className="flex text-xs items-center justify-between px-6 py-4 shadow-md bg-white">
        {/* Logo */}
        <h1 className="text-red-500 text-2xl font-bold">airbnb</h1>

        {/* Search Bar */}
        <div className="flex items-center bg-white border rounded-full px-4 py-2 shadow-sm relative w-[600px]">
          <div className="flex-1 cursor-pointer">
            <input
              type="text"
              placeholder="Nhập địa điểm..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className=" rounded px-2 py-1 w-full"
            />
          </div>
          <div className="border-l h-8 mx-2"></div>
          <div
            className="flex-1 cursor-pointer"
            onClick={() => setShowDatePicker(!showDatePicker)}
          >
            Nhận phòng
            <br />
            <span className="text-gray-500 text-sm">{formattedDate}</span>
          </div>
          <div className="border-l h-8 mx-2"></div>
          <div className="flex-1 cursor-pointer">
            Khách
            <br />
            <span className="text-gray-500 text-sm">Thêm khách</span>
          </div>
          <button
            onClick={handleSearch}
            className="bg-red-500 text-white rounded-full p-3 ml-4 cursor-pointer"
          >
            <FaSearch />
          </button>
        </div>

        {/* Date Picker */}
        {showDatePicker && (
          <div
            ref={datePickerRef}
            className="absolute top-20 left-1/3 z-50 bg-white shadow-lg rounded-lg p-4"
          >
            <DateRange
              ranges={dateRange}
              onChange={(item) => setDateRange([item.selection])}
              moveRangeOnFirstSelection={false}
              minDate={new Date()}
            />
          </div>
        )}

        {/* User Options */}
        <div className="relative">
          <button
            className="flex items-center gap-2 px-4 py-2 border rounded-full"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaBars />
            <FaUserCircle className="text-gray-600 text-2xl" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg p-2">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Đăng ký
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Đăng nhập
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <div key={listing.id} className="border p-2 rounded">
              <img
                src={listing.image}
                alt={listing.location}
                className="w-full h-32 object-cover rounded"
              />
              <p className="font-bold">{listing.location}</p>
              <p>{listing.view}</p>
              <p>{listing.date}</p>
              <p className="text-red-500 font-semibold">{listing.price} VND</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Không tìm thấy khách sạn nào</p>
        )}
      </div>
    </>
  );
}

// import React, { useState, useRef, useEffect } from "react";
// import { DateRange } from "react-date-range";
// import { format } from "date-fns";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import { listings } from "../../Unit/const";

// export default function HotelSearch() {
//   const [searchLocation, setSearchLocation] = useState("");
//   const [filteredListings, setFilteredListings] = useState(listings);
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [dateRange, setDateRange] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     },
//   ]);
//   const datePickerRef = useRef(null);

//   const formatDate = (date) => format(date, "d MMM");
//   const formattedDate = `${formatDate(dateRange[0].startDate)} - ${formatDate(
//     dateRange[0].endDate
//   )}`;

//   const handleClickOutside = (event) => {
//     if (
//       datePickerRef.current &&
//       !datePickerRef.current.contains(event.target)
//     ) {
//       setShowDatePicker(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleSearch = () => {
//     if (searchLocation.trim() === "") {
//       setFilteredListings(listings);
//     } else {
//       const results = listings.filter((listing) =>
//         listing.location.toLowerCase().includes(searchLocation.toLowerCase())
//       );
//       setFilteredListings(results);
//     }
//   };

//   return (
//     <div className="p-4 w-full max-w-md mx-auto">
//       <div className="flex items-center gap-2">
//         <input
//           type="text"
//           placeholder="Nhập địa điểm..."
//           value={searchLocation}
//           onChange={(e) => setSearchLocation(e.target.value)}
//           className="border rounded px-2 py-1 w-full"
//         />
//         <div className="relative">
//           <button
//             onClick={() => setShowDatePicker(!showDatePicker)}
//             className="bg-gray-200 text-black px-4 py-2 rounded"
//           >
//             {formattedDate}
//           </button>
//           {showDatePicker && (
//             <div
//               ref={datePickerRef}
//               className="absolute top-10 left-0 z-50 bg-white shadow-lg rounded-lg p-4"
//             >
//               <DateRange
//                 ranges={dateRange}
//                 onChange={(item) => setDateRange([item.selection])}
//                 moveRangeOnFirstSelection={false}
//                 minDate={new Date()}
//               />
//             </div>
//           )}
//         </div>
//         <button
//           onClick={handleSearch}
//           className="bg-red-500 text-white px-4 py-2 rounded"
//         >
//           Tìm kiếm
//         </button>
//       </div>
//       <div className="mt-4 grid grid-cols-2 gap-4">
//         {filteredListings.length > 0 ? (
//           filteredListings.map((listing) => (
//             <div key={listing.id} className="border p-2 rounded">
//               <img
//                 src={listing.image}
//                 alt={listing.location}
//                 className="w-full h-32 object-cover rounded"
//               />
//               <p className="font-bold">{listing.location}</p>
//               <p>{listing.view}</p>
//               <p>{listing.date}</p>
//               <p className="text-red-500 font-semibold">{listing.price} VND</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">Không tìm thấy khách sạn nào</p>
//         )}
//       </div>
//     </div>
//   );
// }
