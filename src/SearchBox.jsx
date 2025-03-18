import React, { useState, useRef, useEffect } from "react";
import {
  FaRegCalendarAlt,
  FaUserFriends,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function SearchBox() {
  const [showDatePicker, setShowDatePicker] = useState(false);
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

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold">Hotels in Hanoi</h2>

      {/* Where to */}
      <div className="border rounded-md p-3 flex items-center gap-3">
        <FaMapMarkerAlt className="text-gray-500" />
        <div>
          <p className="text-xs font-bold text-gray-500">Where to?</p>
          <p className="text-sm text-gray-800">Hanoi, Vietnam</p>
        </div>
      </div>

      {/* Date Picker */}
      <div className="relative">
        <div
          className="border rounded-md p-3 flex items-center gap-3 cursor-pointer hover:border-blue-500"
          onClick={() => setShowDatePicker(!showDatePicker)}
        >
          <FaRegCalendarAlt className="text-gray-500" />
          <div>
            <p className="text-xs font-bold text-gray-500">Dates</p>
            <p className="text-sm text-gray-800">{formatDateRange()}</p>
          </div>
        </div>

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

      {/* Travellers */}
      <div className="border rounded-md p-3 flex items-center gap-3">
        <FaUserFriends className="text-gray-500" />
        <div>
          <p className="text-xs font-bold text-gray-500">Travellers</p>
          <p className="text-sm text-gray-800">2 travellers, 1 room</p>
        </div>
      </div>

      {/* Search Button */}
      <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
        Search
      </button>
    </div>
  );
}
