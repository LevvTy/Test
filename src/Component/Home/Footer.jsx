import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-5 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-3">Hỗ trợ</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Trung tâm trợ giúp</li>
            <li>AirCover</li>
            <li>Chống phân biệt đối xử</li>
            <li>Hỗ trợ người khuyết tật</li>
            <li>Các tùy chọn hủy</li>
            <li>Báo cáo lo ngại của khu dân cư</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Đón tiếp khách</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Cho thuê nhà trên Airbnb</li>
            <li>AirCover cho Chủ nhà</li>
            <li>Tài nguyên về đón tiếp khách</li>
            <li>Diễn đàn cộng đồng</li>
            <li>Đón tiếp khách có trách nhiệm</li>
            <li>Tham gia khóa học miễn phí về công việc Đón tiếp khách</li>
            <li>Tìm đồng chủ nhà</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3">Airbnb</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Trang tin tức</li>
            <li>Tính năng mới</li>
            <li>Cơ hội nghề nghiệp</li>
            <li>Nhà đầu tư</li>
            <li>Chỗ ở khẩn cấp Airbnb.org</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
