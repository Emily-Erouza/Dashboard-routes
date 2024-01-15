import React from "react";
// import Navbar from "./navbar";

const Names = (props) => {
  const { Firstname, SecondName, handleChange, handleSubmit } = props;
  return (
    <div className="names">
      {/* <Navbar /> */}
    

      <form onSubmit={handleSubmit} className="names" id="Name">
      <h1 className="label"> Welcome to UserName </h1>
          <hr />
          <label>Firstname</label>
          <br />
          <input
            type="text"
            onChange={handleChange}
            name="Firstname"
            value={Firstname}
            placeholder="Enter your Name"
          />
          <br />
          <label>Secondname</label>
          <br />
          <input
            type="name"
            onChange={handleChange}
            name="name"
            value={SecondName}
            placeholder="Enter your second Name"
          />
        

        <button type="submit" className="butt" onSubmit={handleSubmit}>
          Home
        </button>
        <button type="submit" className="buttonBooks" onSubmit={handleSubmit}>
          Books
        </button>
      </form>
    </div>
  );
};

export default Names;
