import React from "react";
import Navbar from "./Navbar";
import Names from "./Names";

const displayData = (props) => {
  const { list, Names, handleHome, handleBooks } = props;

  return (
    <div>
      <Navbar />

      <div>
        <br />
        {!Names ? (
          <div>
            <table>
              <tr>
              <th>Names</th>
                <th>Types of Names</th>
               
               
              </tr>
              <tbody>
                {list &&
                  list.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td className="circle">{item.Firstname[0]}</td>
                        <td>{item.Firstname}</td>
                        <td>{item.Secondname}</td>
                        
                        <td>
                          <button className="buttonHome" onClick={() => handleHome(item.id)}>
                            Home
                          </button>
                      
                          <button className="buttonBooks" onClick={() => handleBooks(item.id)}>
                            Books
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        ) : (
          <Names />
        )}
      </div>
    </div>
  );
};

export default displayData;
