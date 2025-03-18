import React, { useState } from "react";

const FormData = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: {
      overview: [
        {
          icon: "",
          name: "",
          desc: "",
        },
        {
          icon: "",
          name: "",
          desc: "",
        },
        {
          icon: "",
          name: "",
          desc: "",
        },
      ],
      content: "",
      service: [
        {
          icon: "",
          name: "",
        },
        {
          icon: "",
          name: "",
        },
        {
          icon: "",
          name: "",
        },
        {
          icon: "",
          name: "",
        },
      ],
    },
    images: ["", "", "", ""],
    price: 0,
  });

  const handleChange = (e, field, index, subField) => {
    const value = e.target.value;

    setFormData((prev) => {
      const newData = { ...prev };

      if (field === "overview") {
        newData.description.overview[index][subField] = value;
      } else if (field === "service") {
        newData.description.service[index][subField] = value;
      } else if (field === "images") {
        newData.images[index] = value;
      } else if (field === "price") {
        newData[field] = parseInt(value);
      } else if (field === "content") {
        newData.description.content = value;
      } else {
        newData[field] = value;
      }

      return newData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Thêm log để kiểm tra dữ liệu
    console.log("Data sending:", formData);

    try {
      const response = await fetch(
        "https://ngochieuwedding.io.vn/api/booking",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      // Thêm log response để debug
      console.log("Response status:", response.status);
      const responseData = await response.json();
      console.log("Response data:", responseData);

      if (response.ok) {
        const result = await response.json();
        alert("Thêm khách sạn thành công!");
        // Reset form
        setFormData({
          name: "",
          location: "",
          description: {
            overview: [
              { icon: "", name: "", desc: "" },
              { icon: "", name: "", desc: "" },
              { icon: "", name: "", desc: "" },
            ],
            content: "",
            service: [
              { icon: "", name: "" },
              { icon: "", name: "" },
              { icon: "", name: "" },
              { icon: "", name: "" },
            ],
          },
          images: ["", "", "", ""],
          price: 0,
        });
      } else {
        alert("Có lỗi xảy ra khi thêm khách sạn!");
      }
    } catch (error) {
      console.error("Detailed error:", error);
      alert("Có lỗi xảy ra khi gửi dữ liệu!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Thông tin khách sạn</h2>

        <div>
          <label className="block mb-2">Tên khách sạn:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange(e, "name")}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Địa điểm:</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => handleChange(e, "location")}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Giá (VNĐ):</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => handleChange(e, "price")}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Tổng quan</h3>
          {formData.description.overview.map((item, index) => (
            <div key={index} className="space-y-2 mb-4">
              <input
                type="text"
                value={item.name}
                onChange={(e) => handleChange(e, "overview", index, "name")}
                placeholder="Tiêu đề"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                value={item.desc}
                onChange={(e) => handleChange(e, "overview", index, "desc")}
                placeholder="Mô tả"
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
        </div>

        <div>
          <label className="block mb-2">Nội dung chi tiết:</label>
          <textarea
            value={formData.description.content}
            onChange={(e) => handleChange(e, "content")}
            className="w-full p-2 border rounded"
            rows="4"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Dịch vụ</h3>
          {formData.description.service.map((item, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={item.name}
                onChange={(e) => handleChange(e, "service", index, "name")}
                placeholder="Tên dịch vụ"
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Hình ảnh</h3>
          {formData.images.map((url, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={url}
                onChange={(e) => handleChange(e, "images", index)}
                placeholder={`URL hình ảnh ${index + 1}`}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
      >
        Thêm khách sạn
      </button>
    </form>
  );
};

export default FormData;
