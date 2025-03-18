// import React, { useEffect, useState } from "react";

// // Hàm fetch API
// async function fetchAPI(url) {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const responseData = await response.json();
//     console.log("Dữ liệu từ API:", responseData);

//     if (responseData && responseData.data) {
//       let parsedData = JSON.parse(JSON.stringify(responseData.data));

//       // Kiểm tra nếu description là chuỗi JSON, cần parse lại
//       if (typeof parsedData.description === "string") {
//         try {
//           parsedData.description = JSON.parse(parsedData.description);
//         } catch (error) {
//           console.error("Lỗi parse description:", error);
//           parsedData.description = {};
//         }
//       }
//       return parsedData;
//     } else {
//       throw new Error("API không trả về dữ liệu hợp lệ");
//     }
//   } catch (error) {
//     console.error("Lỗi khi gọi API:", error);
//     return null;
//   }
// }

// function ApiComponent() {
//   const [data, setData] = useState(null);
//   const apiURL =
//     "https://ngochieuwedding.io.vn/api/booking/67d29ceba838cf4dc1e737a9";

//   useEffect(() => {
//     fetchAPI(apiURL).then((responseData) => {
//       if (responseData) {
//         console.log("Dữ liệu đã cập nhật vào state:", responseData);
//         setData(responseData);
//       }
//     });
//   }, []);
//   console.log(data?.description?.overview);

//   return (
//     <div>
//       {data ? (
//         <>
//           <h2>{data.name || "Thông tin chỗ ở"}</h2>

//           <section>
//             <h3>Giới thiệu</h3>
//             <p>{data.description?.content || "Không có mô tả"}</p>
//           </section>

//           <section>
//             <h3>Tổng quan</h3>
//             <p>
//               {typeof data.description?.overview !== "string"
//                 ? data.description?.overview?.[0].desc || "Không có mô tả"
//                 : data.description?.overview || "Không có mô tả"}
//             </p>
//           </section>

//           <section>
//             <h3>Tiện ích</h3>
//
//               {Array.isArray(data.description?.services) &&
//               data.description?.services.length > 0 ? (
//                 data.description?.services.map((service, index) => (
//                    key={index}>
//                     {service?.icon && service?.icon.trim() !== "" && (
//                       <img
//                         src={service?.icon}
//                         alt={service?.name}
//                         width="20"
//                         height="20"
//                         style={{ marginRight: "5px" }}
//                         onError={(e) => (e.target.style.display = "none")} // Ẩn nếu ảnh lỗi
//                       />
//                     )}
//                     {service?.[0].name || "Không có tên dịch vụ"}
//                   </li>
//                 ))
//               ) : (
//                 <p>Không có thông tin dịch vụ</p>
//               )}
//             </ul>
//           </section>

//           <section>
//             <h3>Hình ảnh</h3>
//             {Array.isArray(data?.images) && data?.images?.length > 0 ? (
//               data.images
//                 .filter((img) => img && img.trim() !== "") // Lọc ảnh hợp lệ
//                 .map((img, index) => (
//                   <img
//                     key={index}
//                     src={img}
//                     alt={`Hình ảnh ${index + 1}`}
//                     style={{ width: "200px", margin: "5px" }}
//                     onError={(e) => (e.target.style.display = "none")} // Ẩn nếu ảnh lỗi
//                   />
//                 ))
//             ) : (
//               <p>Không có hình ảnh</p>
//             )}
//           </section>

//           <section>
//             <h3>Giá</h3>
//             <p>
//               {data.price
//                 ? `${data?.price.toLocaleString()} VND`
//                 : "Chưa có giá"}
//             </p>
//           </section>
//         </>
//       ) : (
//         <p>Đang tải dữ liệu...</p>
//       )}
//     </div>
//   );
// }

// export default ApiComponent;

import React, { useEffect, useState } from "react";

// Hàm fetch API
async function fetchAPI(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Dữ liệu từ API:", responseData);

    if (responseData && responseData.data) {
      let parsedData = JSON.parse(JSON.stringify(responseData.data));

      // Kiểm tra nếu description là chuỗi JSON, cần parse lại
      if (typeof parsedData.description === "string") {
        try {
          parsedData.description = JSON.parse(parsedData.description);
        } catch (error) {
          console.error("Lỗi parse description:", error);
          parsedData.description = {};
        }
      }
      return parsedData;
    } else {
      throw new Error("API không trả về dữ liệu hợp lệ");
    }
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    return null;
  }
}

function ApiComponent() {
  const [data, setData] = useState(null);
  const apiURL =
    "https://ngochieuwedding.io.vn/api/booking/67d82b05541d06eadd5514b5";

  useEffect(() => {
    fetchAPI(apiURL).then((responseData) => {
      if (responseData) {
        console.log("Dữ liệu đã cập nhật vào state:", responseData);
        setData(responseData);
      }
    });
  }, []);

  return (
    <div>
      {data ? (
        <>
          <h2>{data.name || "Thông tin chỗ ở"}</h2>

          <section>
            <h3>Giới thiệu</h3>
            <p>{data.description?.content || "Không có mô tả"}</p>
          </section>

          <section>
            <h3>Tổng quan</h3>
            {Array.isArray(data.description?.overview) &&
            data.description.overview.length > 0 ? (
              data.description.overview.map((item, index) => (
                <div key={index}>
                  <p>{item?.icon || ""}</p>
                  <p>{item?.desc || "Không có mô tả"}</p>
                  <p>{item?.name || "Không có mô tả"}</p>
                </div>
              ))
            ) : (
              <p>{data.description?.overview || "Không có mô tả"}</p>
            )}
          </section>

          <section>
            <h3>Tiện ích</h3>

            {Array.isArray(data.description?.service) &&
            data.description.service.length > 0 ? (
              data.description.service.map((item, index) => (
                <div key={index}>
                  <p>{item?.icon || ""}</p>

                  <p>{item?.name || "Không có mô tả"}</p>
                </div>
              ))
            ) : (
              <p>{data.description?.overview || "Không có mô tả"}</p>
            )}
          </section>

          <section>
            <h3>Hình ảnh</h3>
            {Array.isArray(data.images) && data.images.length > 0 ? (
              data.images
                .filter((img) => img && img.trim() !== "") // Lọc ảnh hợp lệ
                .map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Hình ảnh ${index + 1}`}
                    style={{ width: "200px", margin: "5px" }}
                    onError={(e) => (e.target.style.display = "none")} // Ẩn nếu ảnh lỗi
                  />
                ))
            ) : (
              <p>Không có hình ảnh</p>
            )}
          </section>

          <section>
            <h3>Giá</h3>
            <p>
              {data.price
                ? `${data.price.toLocaleString()} VND`
                : "Chưa có giá"}
            </p>
          </section>
        </>
      ) : (
        <p>Đang tải dữ liệu...</p>
      )}
    </div>
  );
}

export default ApiComponent;
