import { format } from "date-fns";
import { Heart } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FaCity } from "react-icons/fa";

import Banner from "./Component/Home/Banner";
import Footer from "./Component/Home/Footer";
import { listings } from "./Unit/const";

export default function AirbnbUI() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const datePickerRef = useRef(null);

  const formatDateRange = () => {
    const { startDate, endDate } = dateRange[0];
    return `${format(startDate, "d MMM")} - ${format(endDate, "d MMM")}`;
  };

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

  const filteredListings = selectedCity
    ? listings.filter((listing) => listing.location.includes(selectedCity))
    : listings;

  const uniqueCities = [
    ...new Set(listings.map((listing) => listing.location)),
  ];

  return (
    <>
      <div className="text-base font-bold">
        <div className="p-6">
          <Banner />

          {showDatePicker && (
            <div
              ref={datePickerRef}
              className="absolute top-full left-0 z-50 bg-white shadow-lg mt-2 rounded-lg"
            >
              <DateRange
                ranges={dateRange}
                onChange={(item) => setDateRange([item.selection])}
                moveRangeOnFirstSelection={false}
                minDate={new Date()}
              />
            </div>
          )}
        </div>

        {/* Categories */}
        <div className="flex space-x-4 mb-6 border-b pb-4">
          <button
            onClick={() => setSelectedCity(null)}
            className={`px-4 py-2 rounded-full ${
              selectedCity === null
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            Đề xuất
          </button>
          {uniqueCities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded-full ${
                selectedCity === city
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              <FaCity className="inline-block mr-2" />
              {city}
            </button>
          ))}
        </div>

        {/* Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredListings.map((listing) => (
            <div
              key={listing.id}
              className="relative border rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={listing.image}
                alt={listing.location}
                className="w-full h-48 object-cover"
              />
              {listing.favorite && (
                <div className="absolute top-2 left-2 bg-white px-2 py-1 text-sm rounded">
                  Được khách yêu thích
                </div>
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold">{listing.location}</h2>
                <p className="text-sm text-gray-600">{listing.view}</p>
                <p className="text-sm text-gray-600">{listing.date}</p>
                <p className="text-lg font-bold">đ{listing.price} / đêm</p>
                <button className="absolute top-2 right-2">
                  <Heart
                    className={
                      listing.favorite ? "text-red-500" : "text-gray-400"
                    }
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
