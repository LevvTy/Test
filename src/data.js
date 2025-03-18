const hotels = [
  {
    name: "Homestay An Nhiên",
    location: "Thành phố Đà Lạt",
    description: {
      overview: [
        {
          icon: "",
          name: "Không gian ấm cúng",
          desc: "Mang lại cảm giác như ở nhà với phong cách trang trí mộc mạc.",
        },
        {
          icon: "",
          name: "Gần chợ Đà Lạt",
          desc: "Chỉ mất 5 phút đi bộ đến chợ và các điểm du lịch nổi tiếng.",
        },
        {
          icon: "",
          name: "Dịch vụ thân thiện",
          desc: "Chủ nhà vui vẻ, nhiệt tình hỗ trợ du khách.",
        },
      ],
      content:
        "Homestay An Nhiên là lựa chọn lý tưởng cho những ai muốn tận hưởng bầu không khí yên bình của Đà Lạt. Được thiết kế theo phong cách gần gũi với thiên nhiên, phòng nghỉ có cửa sổ lớn đón ánh sáng và không khí trong lành. Hãy đến và thư giãn trong không gian đầy chất thơ!",
      service: [
        {
          icon: "",
          name: "Ban công rộng",
        },
        {
          icon: "",
          name: "Chỗ đậu xe miễn phí",
        },
        {
          icon: "",
          name: "Máy giặt",
        },
        {
          icon: "",
          name: "Bếp nấu ăn",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    ],
    price: 500000,
  },
  {
    name: "Villa Đà Lạt Garden",
    location: "Thành phố Đà Lạt",
    description: {
      overview: [
        {
          icon: "",
          name: "View đồi thông",
          desc: "Tầm nhìn tuyệt đẹp ra rừng thông và thành phố Đà Lạt.",
        },
        {
          icon: "",
          name: "Thiết kế hiện đại",
          desc: "Kiến trúc sang trọng kết hợp với nội thất tinh tế.",
        },
        {
          icon: "",
          name: "Không gian riêng tư",
          desc: "Khuôn viên rộng rãi với vườn hoa đẹp.",
        },
      ],
      content:
        "Villa Đà Lạt Garden là một không gian nghỉ dưỡng cao cấp với kiến trúc độc đáo. Nằm trên đồi thông, villa mang đến không gian yên tĩnh và riêng tư tuyệt đối. Đây là nơi lý tưởng để tận hưởng không khí trong lành và vẻ đẹp thiên nhiên Đà Lạt.",
      service: [
        {
          icon: "",
          name: "Vườn BBQ",
        },
        {
          icon: "",
          name: "Bãi đậu xe riêng",
        },
        {
          icon: "",
          name: "Bếp đầy đủ tiện nghi",
        },
        {
          icon: "",
          name: "Wifi tốc độ cao",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1469796466635-455ede028aca?w=800",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    ],
    price: 1500000,
  },
  {
    name: "Terracotta Hotel & Resort",
    location: "Thành phố Đà Lạt",
    description: {
      overview: [
        {
          icon: "",
          name: "Kiến trúc độc đáo",
          desc: "Thiết kế theo phong cách Đông Dương kết hợp hiện đại.",
        },
        {
          icon: "",
          name: "Tiện ích đầy đủ",
          desc: "Nhà hàng, spa, phòng gym và hồ bơi trong nhà.",
        },
        {
          icon: "",
          name: "Vị trí đắc địa",
          desc: "Cách trung tâm 5 phút lái xe, gần các điểm tham quan.",
        },
      ],
      content:
        "Terracotta Hotel & Resort Đà Lạt là khu nghỉ dưỡng 4 sao với kiến trúc độc đáo lấy cảm hứng từ nghệ thuật gốm đất nung. Resort cung cấp đầy đủ tiện nghi cao cấp cùng dịch vụ chuyên nghiệp, mang đến trải nghiệm nghỉ dưỡng tuyệt vời cho du khách.",
      service: [
        {
          icon: "",
          name: "Hồ bơi trong nhà",
        },
        {
          icon: "",
          name: "Nhà hàng",
        },
        {
          icon: "",
          name: "Spa",
        },
        {
          icon: "",
          name: "Phòng gym",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    ],
    price: 2500000,
  },
  {
    name: "Zen Valley Dalat",
    location: "Thành phố Đà Lạt",
    description: {
      overview: [
        {
          icon: "",
          name: "Thiết kế Zen",
          desc: "Không gian yên tĩnh theo phong cách Nhật Bản.",
        },
        {
          icon: "",
          name: "Vườn Thiền",
          desc: "Khu vườn được thiết kế tinh tế với hồ cá Koi.",
        },
        {
          icon: "",
          name: "Trà đạo",
          desc: "Phòng trà truyền thống và workshop trà đạo.",
        },
      ],
      content:
        "Zen Valley Dalat là điểm đến độc đáo với không gian thiền định yên bình. Resort được thiết kế theo phong cách Nhật Bản tối giản, kết hợp với khung cảnh thiên nhiên Đà Lạt tạo nên trải nghiệm nghỉ dưỡng độc đáo.",
      service: [
        {
          icon: "",
          name: "Lớp thiền",
        },
        {
          icon: "",
          name: "Vườn Zen",
        },
        {
          icon: "",
          name: "Trà đạo",
        },
        {
          icon: "",
          name: "Massage Shiatsu",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1544825480-82f626021093?w=800",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
    ],
    price: 1800000,
  },
  {
    name: "Pine Hill Homestay",
    location: "Thành phố Đà Lạt",
    description: {
      overview: [
        {
          icon: "",
          name: "View đồi thông",
          desc: "Ngắm bình minh và hoàng hôn giữa rừng thông.",
        },
        {
          icon: "",
          name: "Không gian xanh",
          desc: "Thiết kế hòa mình vào thiên nhiên với vườn hoa đẹp.",
        },
        {
          icon: "",
          name: "Ẩm thực địa phương",
          desc: "Thưởng thức các món ăn đặc sản Đà Lạt.",
        },
      ],
      content:
        "Pine Hill Homestay là điểm dừng chân lý tưởng cho những ai yêu thích không gian yên bình và gần gũi thiên nhiên. Từ ban công, bạn có thể ngắm nhìn toàn cảnh đồi thông và thành phố Đà Lạt thơ mộng.",
      service: [
        {
          icon: "",
          name: "Vườn rau sạch",
        },
        {
          icon: "",
          name: "Lửa trại",
        },
        {
          icon: "",
          name: "Tour tham quan",
        },
        {
          icon: "",
          name: "Cho thuê xe máy",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
      "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=800",
    ],
    price: 600000,
  },
  {
    name: "Sapa Jade Hill Resort",
    location: "Thành phố Sapa, Lào Cai",
    description: {
      overview: [
        {
          icon: "",
          name: "View núi Fansipan",
          desc: "Tầm nhìn tuyệt đẹp ra đỉnh núi cao nhất Đông Dương.",
        },
        {
          icon: "",
          name: "Kiến trúc H'Mông",
          desc: "Thiết kế độc đáo kết hợp văn hóa dân tộc và tiện nghi hiện đại.",
        },
        {
          icon: "",
          name: "Trải nghiệm văn hóa",
          desc: "Tour thăm bản làng, học nấu ăn địa phương.",
        },
      ],
      content:
        "Sapa Jade Hill Resort là điểm đến hoàn hảo để khám phá vẻ đẹp của núi rừng Tây Bắc. Resort nằm trên độ cao 1,600m với tầm nhìn panorama ra thung lũng Mường Hoa và đỉnh Fansipan hùng vĩ.",
      service: [
        {
          icon: "",
          name: "Nhà hàng đặc sản",
        },
        {
          icon: "",
          name: "Spa thảo dược",
        },
        {
          icon: "",
          name: "Tour trek",
        },
        {
          icon: "",
          name: "Đốt lửa trại",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",
    ],
    price: 2200000,
  },
  {
    name: "Phú Quốc Marina Resort",
    location: "Phú Quốc, Kiên Giang",
    description: {
      overview: [
        {
          icon: "",
          name: "Bãi biển riêng",
          desc: "Bãi biển cát trắng với làn nước trong xanh.",
        },
        {
          icon: "",
          name: "Villa biển",
          desc: "Phòng nghỉ sang trọng với view trực tiếp ra biển.",
        },
        {
          icon: "",
          name: "Thể thao biển",
          desc: "Đa dạng hoạt động: lặn biển, chèo thuyền kayak, jet ski.",
        },
      ],
      content:
        "Phú Quốc Marina Resort là thiên đường nghỉ dưỡng ven biển với kiến trúc Mediterranean tinh tế. Resort cung cấp đầy đủ tiện nghi 5 sao cùng các hoạt động giải trí đa dạng trên biển.",
      service: [
        {
          icon: "",
          name: "Hồ bơi vô cực",
        },
        {
          icon: "",
          name: "Nhà hàng hải sản",
        },
        {
          icon: "",
          name: "Spa cao cấp",
        },
        {
          icon: "",
          name: "Thể thao biển",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800",
    ],
    price: 3500000,
  },
  {
    name: "Hội An Ancient House Resort",
    location: "Hội An, Quảng Nam",
    description: {
      overview: [
        {
          icon: "",
          name: "Kiến trúc cổ",
          desc: "Nhà cổ được phục dựng từ thế kỷ 18 với đầy đủ tiện nghi.",
        },
        {
          icon: "",
          name: "Vị trí trung tâm",
          desc: "Cách phố cổ 5 phút đi bộ, gần các điểm tham quan.",
        },
        {
          icon: "",
          name: "Ẩm thực đặc sắc",
          desc: "Nhà hàng phục vụ các món ăn đặc trưng Hội An.",
        },
      ],
      content:
        "Hội An Ancient House Resort mang đến trải nghiệm độc đáo với không gian sống của người Hội An xưa. Resort được thiết kế từ những ngôi nhà cổ hàng trăm năm tuổi, kết hợp hài hòa giữa nét đẹp truyền thống và tiện nghi hiện đại.",
      service: [
        {
          icon: "",
          name: "Lớp nấu ăn",
        },
        {
          icon: "",
          name: "Cho thuê xe đạp",
        },
        {
          icon: "",
          name: "Tour phố cổ",
        },
        {
          icon: "",
          name: "Hồ bơi",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800",
    ],
    price: 1800000,
  },
  {
    name: "Mekong Delta Ecolodge",
    location: "Bến Tre",
    description: {
      overview: [
        {
          icon: "",
          name: "Bungalow ven sông",
          desc: "Nhà nghỉ sinh thái bằng tre, lá dừa truyền thống.",
        },
        {
          icon: "",
          name: "Vườn trái cây",
          desc: "Không gian xanh với nhiều loại cây ăn trái đặc trưng.",
        },
        {
          icon: "",
          name: "Du lịch xanh",
          desc: "Các hoạt động thân thiện với môi trường.",
        },
      ],
      content:
        "Mekong Delta Ecolodge là điểm dừng chân lý tưởng để khám phá văn hóa sông nước miền Tây. Lodge được xây dựng hoàn toàn từ vật liệu tự nhiên, mang đến trải nghiệm gần gũi với thiên nhiên và văn hóa địa phương.",
      service: [
        {
          icon: "",
          name: "Tour sông nước",
        },
        {
          icon: "",
          name: "Làm kẹo dừa",
        },
        {
          icon: "",
          name: "Câu cá",
        },
        {
          icon: "",
          name: "Đạp xe khám phá",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1588602333987-c7c4a5673923?w=800",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
    ],
    price: 850000,
  },
  {
    name: "Hạ Long Bay Luxury Cruise",
    location: "Vịnh Hạ Long, Quảng Ninh",
    description: {
      overview: [
        {
          icon: "",
          name: "Cabin view biển",
          desc: "Phòng nghỉ sang trọng với cửa sổ panorama.",
        },
        {
          icon: "",
          name: "Ẩm thực 5 sao",
          desc: "Buffet hải sản và đặc sản vùng biển.",
        },
        {
          icon: "",
          name: "Hoạt động đa dạng",
          desc: "Chèo kayak, tham quan hang động, học nấu ăn.",
        },
      ],
      content:
        "Hạ Long Bay Luxury Cruise mang đến trải nghiệm du thuyền 5 sao trên Vịnh Hạ Long. Du thuyền được thiết kế theo phong cách tân cổ điển sang trọng với đầy đủ tiện nghi cao cấp.",
      service: [
        {
          icon: "",
          name: "Spa trên biển",
        },
        {
          icon: "",
          name: "Lớp Tai Chi",
        },
        {
          icon: "",
          name: "Bar panorama",
        },
        {
          icon: "",
          name: "Câu mực đêm",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800",
    ],
    price: 4500000,
  },
  {
    name: "Nha Trang Beachfront Hotel",
    location: "Nha Trang, Khánh Hòa",
    description: {
      overview: [
        {
          icon: "",
          name: "Vị trí đắc địa",
          desc: "Nằm ngay trung tâm bãi biển Nha Trang.",
        },
        {
          icon: "",
          name: "Phòng biển",
          desc: "Tất cả các phòng đều có ban công view biển.",
        },
        {
          icon: "",
          name: "Tiện ích đa dạng",
          desc: "Hồ bơi rooftop, nhà hàng, bar, spa.",
        },
      ],
      content:
        "Nha Trang Beachfront Hotel là khách sạn 4 sao hiện đại nằm ngay trung tâm thành phố biển Nha Trang. Với vị trí đắc địa cùng tiện nghi đầy đủ, khách sạn là lựa chọn hoàn hảo cho kỳ nghỉ biển.",
      service: [
        {
          icon: "",
          name: "Hồ bơi vô cực",
        },
        {
          icon: "",
          name: "Fitness center",
        },
        {
          icon: "",
          name: "Tour đảo",
        },
        {
          icon: "",
          name: "Đưa đón sân bay",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
    ],
    price: 1600000,
  },
  {
    name: "Metropole Hanoi",
    location: "Hoàn Kiếm, Hà Nội",
    description: {
      overview: [
        {
          icon: "",
          name: "Di sản lịch sử",
          desc: "Khách sạn lâu đời nhất Hà Nội với kiến trúc Pháp cổ điển.",
        },
        {
          icon: "",
          name: "Ẩm thực đẳng cấp",
          desc: "Nhà hàng fine-dining với các đầu bếp sao Michelin.",
        },
        {
          icon: "",
          name: "Dịch vụ hoàng gia",
          desc: "Phục vụ nhiều nguyên thủ quốc gia và người nổi tiếng.",
        },
      ],
      content:
        "Sofitel Legend Metropole Hanoi là biểu tượng của sự sang trọng và lịch sử tại Hà Nội. Được xây dựng từ năm 1901, khách sạn mang đến trải nghiệm nghỉ dưỡng đẳng cấp với kiến trúc Pháp cổ điển và dịch vụ 5 sao.",
      service: [
        {
          icon: "",
          name: "Spa cao cấp",
        },
        {
          icon: "",
          name: "Nhà hàng Michelin",
        },
        {
          icon: "",
          name: "Hồ bơi trong nhà",
        },
        {
          icon: "",
          name: "Tour lịch sử",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    ],
    price: 8500000,
  },
  {
    name: "InterContinental Landmark72",
    location: "Nam Từ Liêm, Hà Nội",
    description: {
      overview: [
        {
          icon: "",
          name: "View toàn cảnh",
          desc: "Nằm trên tòa nhà cao nhất Hà Nội với tầm nhìn 360 độ.",
        },
        {
          icon: "",
          name: "Phòng sang trọng",
          desc: "Thiết kế hiện đại với các tiện nghi cao cấp.",
        },
        {
          icon: "",
          name: "Ẩm thực quốc tế",
          desc: "3 nhà hàng với các món ăn từ khắp thế giới.",
        },
      ],
      content:
        "InterContinental Landmark72 là khách sạn 5 sao nằm trên tòa nhà cao nhất Hà Nội. Với tầm nhìn toàn cảnh thành phố, khách sạn mang đến trải nghiệm nghỉ dưỡng sang trọng và đẳng cấp quốc tế.",
      service: [
        {
          icon: "",
          name: "Executive Lounge",
        },
        {
          icon: "",
          name: "Trung tâm thể hình",
        },
        {
          icon: "",
          name: "Phòng họp hiện đại",
        },
        {
          icon: "",
          name: "Dịch vụ concierge",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=800",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    ],
    price: 5500000,
  },
  {
    name: "The Reverie Saigon",
    location: "Quận 1, TP Hồ Chí Minh",
    description: {
      overview: [
        {
          icon: "",
          name: "Thiết kế Ý",
          desc: "Nội thất sang trọng từ các thương hiệu Ý nổi tiếng.",
        },
        {
          icon: "",
          name: "View sông Sài Gòn",
          desc: "Tầm nhìn tuyệt đẹp ra sông và thành phố.",
        },
        {
          icon: "",
          name: "Spa đẳng cấp",
          desc: "Trị liệu cao cấp với sản phẩm nhập khẩu.",
        },
      ],
      content:
        "The Reverie Saigon là khách sạn 6 sao đầu tiên tại Việt Nam, mang đến trải nghiệm xa xỉ với thiết kế Ý độc đáo. Tọa lạc tại trung tâm Quận 1, khách sạn là biểu tượng của sự sang trọng và đẳng cấp.",
      service: [
        {
          icon: "",
          name: "Butler 24/7",
        },
        {
          icon: "",
          name: "Xe Rolls-Royce",
        },
        {
          icon: "",
          name: "Nhà hàng fine-dining",
        },
        {
          icon: "",
          name: "Hồ bơi vô cực",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
    ],
    price: 9500000,
  },
  {
    name: "Park Hyatt Saigon",
    location: "Quận 1, TP Hồ Chí Minh",
    description: {
      overview: [
        {
          icon: "",
          name: "Vị trí vàng",
          desc: "Đối diện Nhà hát thành phố, gần các điểm tham quan.",
        },
        {
          icon: "",
          name: "Kiến trúc Pháp",
          desc: "Thiết kế colonial sang trọng với nội thất tinh tế.",
        },
        {
          icon: "",
          name: "Ẩm thực đa dạng",
          desc: "Từ fine-dining đến ẩm thực địa phương.",
        },
      ],
      content:
        "Park Hyatt Saigon là khách sạn 5 sao mang đậm phong cách Đông Dương. Với vị trí đắc địa tại trung tâm Quận 1, khách sạn là sự kết hợp hoàn hảo giữa di sản và hiện đại.",
      service: [
        {
          icon: "",
          name: "Spa cao cấp",
        },
        {
          icon: "",
          name: "Hồ bơi ngoài trời",
        },
        {
          icon: "",
          name: "Phòng cigar",
        },
        {
          icon: "",
          name: "Dịch vụ concierge",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    ],
    price: 7500000,
  },
  {
    name: "Tam Coc Garden Resort",
    location: "Ninh Bình",
    description: {
      overview: [
        {
          icon: "",
          name: "View núi đá",
          desc: "Tầm nhìn tuyệt đẹp ra núi đá vôi Tam Cốc.",
        },
        {
          icon: "",
          name: "Bungalow đá",
          desc: "Thiết kế độc đáo với đá tự nhiên địa phương.",
        },
        {
          icon: "",
          name: "Vườn sinh thái",
          desc: "Không gian xanh với vườn rau và hoa.",
        },
      ],
      content:
        "Tam Coc Garden Resort là khu nghỉ dưỡng sinh thái nằm giữa khung cảnh núi đá vôi hùng vĩ. Resort mang đến trải nghiệm gần gũi với thiên nhiên nhưng vẫn đảm bảo sự thoải mái và tiện nghi.",
      service: [
        {
          icon: "",
          name: "Xe đạp miễn phí",
        },
        {
          icon: "",
          name: "Tour thuyền",
        },
        {
          icon: "",
          name: "Lớp nấu ăn",
        },
        {
          icon: "",
          name: "Spa thảo dược",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1587550742899-0d37deb5fb7e?w=800",
      "https://images.unsplash.com/photo-1587550742812-7dd2b9a42c86?w=800",
      "https://images.unsplash.com/photo-1501117716987-c8c394bb29df?w=800",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800",
    ],
    price: 2800000,
  },
  {
    name: "Emeralda Ninh Binh",
    location: "Ninh Bình",
    description: {
      overview: [
        {
          icon: "",
          name: "Kiến trúc Việt cổ",
          desc: "Thiết kế theo phong cách làng quê Bắc Bộ.",
        },
        {
          icon: "",
          name: "Spa cao cấp",
          desc: "Trị liệu với thảo dược địa phương.",
        },
        {
          icon: "",
          name: "Ẩm thực đặc sắc",
          desc: "Món ăn đặc trưng vùng đồng bằng Bắc Bộ.",
        },
      ],
      content:
        "Emeralda Ninh Binh Resort là khu nghỉ dưỡng 5 sao với kiến trúc độc đáo mang đậm bản sắc Việt Nam. Nằm gần khu di sản Tràng An, resort là điểm đến lý tưởng để khám phá vẻ đẹp của Ninh Bình.",
      service: [
        {
          icon: "",
          name: "Hồ bơi nước nóng",
        },
        {
          icon: "",
          name: "Sân tennis",
        },
        {
          icon: "",
          name: "Tour văn hóa",
        },
        {
          icon: "",
          name: "Nhà hàng Việt",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=800",
      "https://images.unsplash.com/photo-1590073844006-33379778ae09?w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    ],
    price: 3500000,
  },
  {
    name: "JW Marriott Phu Quoc",
    location: "Phú Quốc, Kiên Giang",
    description: {
      overview: [
        {
          icon: "",
          name: "Thiết kế độc đáo",
          desc: "Thiết kế độc đáo theo concept trường đại học Pháp.",
        },
        {
          icon: "",
          name: "Nằm trên bãi Khem",
          desc: "Nằm trên bãi Khem, Phú Quốc.",
        },
        {
          icon: "",
          name: "Nhà hàng Pink Pearl",
          desc: "Nhà hàng Pink Pearl trong tòa lâu đài màu hồng.",
        },
      ],
      content:
        "JW Marriott Phu Quoc là khách sạn 5 sao mới nhất tại Phú Quốc, mang đến trải nghiệm sang trọng và đẳng cấp. Với thiết kế độc đáo theo concept trường đại học Pháp, khách sạn nằm trên bãi Khem, Phú Quốc, và có nhà hàng Pink Pearl trong tòa lâu đài màu hồng.",
      service: [
        {
          icon: "",
          name: "Hồ bơi vô cực",
        },
        {
          icon: "",
          name: "Spa cao cấp",
        },
        {
          icon: "",
          name: "Nhà hàng hải sản",
        },
        {
          icon: "",
          name: "Dịch vụ concierge",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800",
    ],
    price: 12000000,
  },
  {
    name: "Legacy Yen Tu",
    location: "Yên Tử, Tuyên Quang",
    description: {
      overview: [
        {
          icon: "",
          name: "Kiến trúc thời Trần",
          desc: "Kiến trúc thời Trần dưới chân núi Yên Tử.",
        },
        {
          icon: "",
          name: "Trải nghiệm văn hóa",
          desc: "Trải nghiệm văn hóa Phật giáo.",
        },
        {
          icon: "",
          name: "Nhà hàng chay",
          desc: "Nhà hàng chay và dịch vụ trà đạo.",
        },
      ],
      content:
        "Legacy Yen Tu là khu nghỉ dưỡng độc đáo với kiến trúc thời Trần dưới chân núi Yên Tử. Khu nghỉ dưỡng mang đến trải nghiệm văn hóa Phật giáo và cung cấp các dịch vụ như nhà hàng chay và dịch vụ trà đạo.",
      service: [
        {
          icon: "",
          name: "Spa thảo dược",
        },
        {
          icon: "",
          name: "Tour tham quan",
        },
        {
          icon: "",
          name: "Lớp học trà đạo",
        },
        {
          icon: "",
          name: "Dịch vụ concierge",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800",
    ],
    price: 3500000,
  },
  {
    name: "Banyan Tree Lang Co",
    location: "Vịnh Lăng Cô, Hải Phòng",
    description: {
      overview: [
        {
          icon: "",
          name: "Resort 5 sao+",
          desc: "Resort 5 sao+ tại vịnh Lăng Cô.",
        },
        {
          icon: "",
          name: "Sân golf 18 hố",
          desc: "Sân golf 18 hố view biển.",
        },
        {
          icon: "",
          name: "Villa riêng tư",
          desc: "Villa riêng tư với hồ bơi vô cực.",
        },
      ],
      content:
        "Banyan Tree Lang Co là resort 5 sao+ sang trọng tại vịnh Lăng Cô, Hải Phòng. Resort có sân golf 18 hố view biển, các villa riêng tư với hồ bơi vô cực, và mang đến trải nghiệm sang trọng và đẳng cấp.",
      service: [
        {
          icon: "",
          name: "Spa cao cấp",
        },
        {
          icon: "",
          name: "Nhà hàng hải sản",
        },
        {
          icon: "",
          name: "Dịch vụ concierge",
        },
        {
          icon: "",
          name: "Đưa đón sân bay",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800",
      "https://images.unsplash.com/photo-1588602333987-c7c4a5673923?w=800",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
    ],
    price: 15000000,
  },
  {
    name: "Ana Mandara Villas Dalat",
    location: "Thành phố Đà Lạt",
    description: {
      overview: [
        {
          icon: "",
          name: "17 biệt thự Pháp cổ",
          desc: "17 biệt thự Pháp cổ từ 1920s.",
        },
        {
          icon: "",
          name: "Vườn hồng",
          desc: "Vườn hồng với hơn 200 loài hoa.",
        },
        {
          icon: "",
          name: "Ẩm thực Pháp",
          desc: "Ẩm thực Pháp với nguyên liệu địa phương.",
        },
      ],
      content:
        "Ana Mandara Villas Dalat là khu nghỉ dưỡng sang trọng với 17 biệt thự Pháp cổ từ 1920s. Khu nghỉ dưỡng có vườn hồng với hơn 200 loài hoa, và cung cấp ẩm thực Pháp với nguyên liệu địa phương.",
      service: [
        {
          icon: "",
          name: "Spa cao cấp",
        },
        {
          icon: "",
          name: "Nhà hàng hải sản",
        },
        {
          icon: "",
          name: "Dịch vụ concierge",
        },
        {
          icon: "",
          name: "Đưa đón sân bay",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    ],
    price: 4500000,
  },
  {
    name: "Premier Village Ha Long",
    location: "Vịnh Hạ Long, Quảng Ninh",
    description: {
      overview: [
        {
          icon: "",
          name: "View toàn cảnh",
          desc: "View toàn cảnh vịnh Hạ Long.",
        },
        {
          icon: "",
          name: "Villa với hồ bơi",
          desc: "Villa với hồ bơi riêng.",
        },
        {
          icon: "",
          name: "Bãi biển riêng",
          desc: "Bãi biển riêng.",
        },
      ],
      content:
        "Premier Village Ha Long là khu nghỉ dưỡng sang trọng với view toàn cảnh vịnh Hạ Long. Khu nghỉ dưỡng có các villa với hồ bơi riêng và bãi biển riêng, mang đến trải nghiệm sang trọng và đẳng cấp.",
      service: [
        {
          icon: "",
          name: "Spa cao cấp",
        },
        {
          icon: "",
          name: "Nhà hàng hải sản",
        },
        {
          icon: "",
          name: "Dịch vụ concierge",
        },
        {
          icon: "",
          name: "Đưa đón sân bay",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
    ],
    price: 8500000,
  },
  {
    name: "Nam Nghi Phu Quoc",
    location: "Phú Quốc, Kiên Giang",
    description: {
      overview: [
        {
          icon: "",
          name: "Thiết kế sinh thái",
          desc: "Thiết kế sinh thái độc đáo.",
        },
        {
          icon: "",
          name: "Rock Island Bar",
          desc: "Rock Island Bar trên đảo đá riêng.",
        },
        {
          icon: "",
          name: "Hoạt động lặn ngắm san hô",
          desc: "Hoạt động lặn ngắm san hô.",
        },
      ],
      content:
        "Nam Nghi Phu Quoc là khu nghỉ dưỡng sinh thái độc đáo với thiết kế độc đáo. Khu nghỉ dưỡng có Rock Island Bar trên đảo đá riêng và cung cấp các hoạt động như lặn ngắm san hô.",
      service: [
        {
          icon: "",
          name: "Spa cao cấp",
        },
        {
          icon: "",
          name: "Nhà hàng hải sản",
        },
        {
          icon: "",
          name: "Dịch vụ concierge",
        },
        {
          icon: "",
          name: "Đưa đón sân bay",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800",
    ],
    price: 7500000,
  },
  {
    name: "Anantara Quy Nhon",
    location: "Quy Nhơn, Bình Định",
    description: {
      overview: [
        {
          icon: "",
          name: "64 villa với hồ bơi",
          desc: "64 villa với hồ bơi riêng.",
        },
        {
          icon: "",
          name: "Nằm trong vịnh",
          desc: "Nằm trong vịnh biệt lập.",
        },
        {
          icon: "",
          name: "Dịch vụ quản gia",
          desc: "Dịch vụ quản gia 24/7.",
        },
      ],
      content:
        "Anantara Quy Nhon là khu nghỉ dưỡng sang trọng với 64 villa với hồ bơi riêng. Khu nghỉ dưỡng nằm trong vịnh biệt lập và cung cấp dịch vụ quản gia 24/7.",
      service: [
        {
          icon: "",
          name: "Spa cao cấp",
        },
        {
          icon: "",
          name: "Nhà hàng hải sản",
        },
        {
          icon: "",
          name: "Dịch vụ concierge",
        },
        {
          icon: "",
          name: "Đưa đón sân bay",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800",
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800",
      "https://images.unsplash.com/photo-1588602333987-c7c4a5673923?w=800",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
    ],
    price: 11000000,
  },
  {
    name: "Regent Phu Quoc",
    location: "Phú Quốc, Kiên Giang",
    description: {
      overview: [
        {
          icon: "",
          name: "Resort 6 sao mới",
          desc: "Resort 6 sao mới nhất Phú Quốc.",
        },
        {
          icon: "",
          name: "Nằm trên bãi Trường",
          desc: "Nằm trên bãi Trường.",
        },
        {
          icon: "",
          name: "6 nhà hàng và bar",
          desc: "6 nhà hàng và bar với view 360 độ.",
        },
      ],
      content:
        "Regent Phu Quoc là resort 6 sao mới nhất tại Phú Quốc, nằm trên bãi Trường. Resort có 6 nhà hàng và bar với view 360 độ, mang đến trải nghiệm sang trọng và đẳng cấp.",
      service: [
        {
          icon: "",
          name: "Spa cao cấp",
        },
        {
          icon: "",
          name: "Nhà hàng hải sản",
        },
        {
          icon: "",
          name: "Dịch vụ concierge",
        },
        {
          icon: "",
          name: "Đưa đón sân bay",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800",
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
    ],
    price: 18000000,
  },
  {
    name: "Capella Hanoi",
    location: "Hoàn Kiếm, Hà Nội",
    description: {
      overview: [
        {
          icon: "",
          name: "Thiết kế Bill Bensley",
          desc: "Thiết kế Bill Bensley lấy cảm hứng từ Opera.",
        },
        {
          icon: "",
          name: "Đối diện Nhà hát",
          desc: "Đối diện Nhà hát lớn Hà Nội.",
        },
        {
          icon: "",
          name: "47 phòng",
          desc: "47 phòng với trang trí độc đáo.",
        },
      ],
      content:
        "Capella Hanoi là khách sạn sang trọng với thiết kế Bill Bensley lấy cảm hứng từ Opera. Khách sạn đối diện Nhà hát lớn Hà Nội và có 47 phòng với trang trí độc đáo.",
      service: [
        {
          icon: "",
          name: "Spa cao cấp",
        },
        {
          icon: "",
          name: "Nhà hàng hải sản",
        },
        {
          icon: "",
          name: "Dịch vụ concierge",
        },
        {
          icon: "",
          name: "Đưa đón sân bay",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    ],
    price: 9500000,
  },
  {
    name: "Zannier Can Tho",
    location: "Cần Thơ, Cần Thơ",
    description: {
      overview: [
        {
          icon: "",
          name: "Kiến trúc Nam Bộ",
          desc: "Kiến trúc Nam Bộ đương đại.",
        },
        {
          icon: "",
          name: "Nằm bên bờ sông",
          desc: "Nằm bên bờ sông Hậu.",
        },
        {
          icon: "",
          name: "Trải nghiệm ẩm thực",
          desc: "Trải nghiệm ẩm thực sông nước.",
        },
      ],
      content:
        "Zannier Can Tho là khách sạn sang trọng với kiến trúc Nam Bộ đương đại. Khách sạn nằm bên bờ sông Hậu và mang đến trải nghiệm ẩm thực sông nước.",
      service: [
        {
          icon: "",
          name: "Spa cao cấp",
        },
        {
          icon: "",
          name: "Nhà hàng hải sản",
        },
        {
          icon: "",
          name: "Dịch vụ concierge",
        },
        {
          icon: "",
          name: "Đưa đón sân bay",
        },
      ],
    },
    images: [
      "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=800",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    ],
    price: 5500000,
  },
];

export default hotels;
