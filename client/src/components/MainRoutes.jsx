import React, { useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
 
import Names from "./Names";  
// import displayData from "./displayData";
import Books from "./Books";

const MainRoutes = () => {
  const navigate = useNavigate();

  const [namesInfo, setNamesInfo] = useState({
    Firstname: "",
    SecondName: "",
  });

  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setNamesInfo({
      ...namesInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange2 = (e) => {
    setNamesInfo({
      ...namesInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (namesInfo.Firstname === "" || namesInfo.SecondName === "") {
      return alert("Fill up all the input");
    }
 
  };

  return (
    <div>
      <Routes>
        {/* <Route
          path="/"
          element={
            <Names
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleHome={() => {}}
              handleBooks={() => {}}
            />
          }
        /> */}
        <Route
          path="/Books"  
          element={
            <Books
              list={list}
              edit={() => {}}  
              handleChange={handleChange2}
              handleSubmit2={() => {}} 
              handleHome={() => {}}
              handleDashboard={() => {}}
            />
          }
        />
        {/* <Route
          path="/displayData"
          element={
            <displayData
              list={list}
              Books={Books}
              getDetails={() => {}} 
              handleBooks={() => {}}
              handleHome={() => {}}
            /> */}
          {/* }
        /> */}
      </Routes>
    </div>
  );
};

export default MainRoutes;
