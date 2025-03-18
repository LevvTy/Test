import React, { useState } from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Banner from "../Component/Home/Banner";

const images = [
  "https://source.unsplash.com/400x300/?bathroom",
  "https://source.unsplash.com/400x300/?sauna",
  "https://source.unsplash.com/400x300/?living-room",
  "https://source.unsplash.com/400x300/?balcony",
  "https://source.unsplash.com/400x300/?bedroom",
];

export default function DetailPage() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const formatDate = (date) => format(date, "dd/MM/yyyy");

  return (
    <div className="container mt-4 mx-auto p-6">
      <div className="mb-8">
        <Banner />
      </div>
      {/* Image Gallery */}
      <div className="grid grid-cols-3 gap-2">
        {images.map((img, index) => (
          <img key={index} src={img} alt="Listing" className="rounded-lg" />
        ))}
      </div>

      {/* Title and Description */}
      <h1 className="text-2xl font-bold mt-4">
        Phòng xông hơi khô riêng trong căn hộ hướng sông Landmark 1
      </h1>
      <p className="text-gray-600">
        Toàn bộ căn hộ cho thuê tại Văn Giang, Việt Nam
      </p>
      <div className="flex items-center gap-1">
        <FaStar className="text-yellow-500" /> <span>5.0 (1 đánh giá)</span>
      </div>

      {/* Booking Section */}
      <div className="border rounded-lg p-4 mt-6 shadow-lg w-1/3">
        <p className="text-lg font-bold">đ926.500 / đêm</p>
        <div className="border p-2 mt-2 rounded-lg">
          <p>Nhận phòng: {formatDate(dateRange[0].startDate)}</p>
          <p>Trả phòng: {formatDate(dateRange[0].endDate)}</p>
        </div>
        <button className="bg-pink-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
          Đặt phòng
        </button>
      </div>
    </div>
  );
}
