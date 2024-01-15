import { useState } from "react";
import Dashboard from "./Dashboard";


function Home() {

  const [bookInput, setBookInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  

  const [names, setNames] = useState("");
  const [books, setBooks] = useState("");
  const [dashboard, setDashboard] = useState("");
  const [addname, setAddName] = useState("");
  const [addbooks, setAddBooks] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Names:", names, "Book:",books, "Dashboard:",dashboard,"AddName:",addname,"AddBooks:",addbooks,) 
  };





  return (
    <div className="Home" id="Home"  onSubmit={handleSubmit}>
        <h2>Book Haven</h2>
      <p>Turning Pages, Creating Memories: Your Bookstore Oasis</p>

      <div>
     
        <button type="submit" className="butn" id="Name" onClick={handleSubmit} >
          Name
        </button>
      </div>

      <div>
        <button type="submit" className="butn" id="Book" onClick={handleSubmit}>
          Books
        </button>
      </div>

      <div>
        <button type="submit" className="btn" id="Dashboard" onClick={handleSubmit}>
          Dashboard
        </button>
      </div>

      <div>
        <button type="submit" className="butn" id="AddNames" onClick={handleSubmit}>
          Add Name
        </button>
      </div>

      <div>
        <button type="submit" className="butn" id="AddBooks" onClick={handleSubmit}>
          Add Book
        </button>
      </div>


<div className="Addpages">
<input type="checkbox" id="form-switch" />

<form className="Books" id="AddBooks-form" action="" method="post"  onSubmit={(event) => { addbooks(event); addname(event); }}>
    <h2>AddBook</h2>
    <p>Please Add Books </p>

    
    <input type="text" placeholder=" Enter AddBook" id="Books"  value={bookInput}
          onChange={(e) => setBookInput(e.target.value)}required />
    <button type="submit" id="btn" value="submit" onClick={addbooks}>
        login
    </button>
    <label for="form-switch"><span>AddName</span></label>
</form>



<form id="AddName-form" action=" " method="post">
    <h2>AddName</h2>
    <p>Please Add BooksName </p>

  
    <input type="name " placeholder=" Enter AddName" id="AddNames"   value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}required />

    <button type="submit" id="btn" value="submit" onClick={addname} >
       AddName
    </button>

    <label for="form-switch">AddBook..</label>
</form>
</div>



    </div>
  );
}

export default Home;