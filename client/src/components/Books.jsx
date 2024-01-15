import React from "react";
// import Navbar from "./navBar";
const Books = (props) => {
  const { FirstBook,SecondBook, handleChange2, handleSubmit2 } = props;
  return (
    <div className="books" >
      {/* <Navbar /> */}
      <form onSubmit={handleSubmit2} className="books" id="Books">
        <h1 className="label"> Welcome to  Bookstore </h1>
        <hr />
        <label>FirstBook</label>
        <br />
        <input
          type="text"
          onChange={handleChange2}
          name="Firstbook"
          value={FirstBook}
          placeholder="Enter your book"
        />
         <br />
        <label>SecondBook</label>
        <br />
        <input
          type="name"
          onChange={handleChange2}
          name="name"
          value={SecondBook}
          placeholder="Enter your second Book"
        />

        <button type="submit" className="butt" id='AddBooks'>
          Home
        </button>
        <button type="submit" className="butt" id="AddBooks">
          Dashboard
               </button>
      </form>
    </div>
  );
};

export default Books;