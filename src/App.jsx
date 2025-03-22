import React from "react";
import { useState } from "react";
import "./App.css";
import "./index.css";
import { Form, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";

import SearchBox from "./SearchBox";
import AirbnbUI from "./AirbnbUI";
import DetailPage from "./Page/Detail";
import ApiComponent from "./test_API";
import FormData from "./Form";

function App() {
  // const createBooking = async () => {
  //   const resp = await fetch("https://ngochieuwedding.io.vn/api/booking", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       location: "Ha Nam",
  //       name: "Phong Nho",
  //       price: 200000,
  //       description: JSON.stringify({
  //         content: "noi dung ...",
  //         overview: [],
  //         service: [],
  //       }),
  //     }),
  //   });
  // };

  return (
    <>
      {/* <button onClick={createBooking}>create</button> */}
      <Routes>
        <Route path="/" element={<AirbnbUI />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
      {/* <ApiComponent /> */}
      <Routes>
        <Route path="admin" element={<FormData />} />
      </Routes>

      {/* <HotelDatePicker /> */}
      {/* <SearchBox /> */}
      {/* <AirbnbUI /> */}
    </>
  );
}

export default App;
