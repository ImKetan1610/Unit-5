import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 20,
  });

  // Create add and remove functions here that changes the
  // state.

  const handleChange = (items, value, change) => {
    if (value + change < 0) {
      return;
    }
    if (items === "books") {
      setInv({ ...inv, books: value + change });
    } else if (items === "notebooks") {
      setInv({ ...inv, notebooks: value + change });
    } else if (items === "pens") {
      setInv({ ...inv, pens: value + change });
    } else if (items === "inkpens") {
      setInv({ ...inv, inkpens: value + change });
    }
  };

  return (
    <div
      style={{
        border: "1px solid aqua",
        borderRadius: "3px",
        padding: "10px",
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
        background:"aqua",
        justifyContent: "space-around"
      }}
    >
      <div className='items'>
        <span>Books: </span>
        <button
          onClick={() => handleChange("books", inv.books, 1)}
          className='circlularButton'
        >
          +
        </button>
        <span>{inv.books}</span>
        <button
          onClick={() => handleChange("books", inv.books, -1)}
          className='circlularButton'
        >
          -
        </button>        
      </div>

      <div className='items'>
        <span>Notebooks: </span>
        <button
          onClick={() => handleChange("notebooks", inv.notebooks, 1)}
          className='circlularButton'
        >
          +
        </button>
        <span>{inv.notebooks}</span>
        <button
          onClick={() => handleChange("notebooks", inv.notebooks, -1)}
          className='circlularButton'
        >
          -
        </button>        
      </div>

      <div className='items'>
        <span>Pen: </span>
        <button
          onClick={() => handleChange("pens", inv.pens, 1)}
          className='circlularButton'
        >
          +
        </button>
        <span>{inv.pens}</span>
        <button
          onClick={() => handleChange("pens", inv.pens, -1)}
          className='circlularButton'
        >
          -
        </button>
      </div>

      <div className='items'>
        <span>Inkpen: </span>
        <button
          onClick={() => handleChange("inkpens", inv.inkpens, 1)}
          className='circlularButton'
        >
          +
        </button>
        <span>{inv.inkpens}</span>
        <button
          onClick={() => handleChange("inkpens", inv.inkpens, -1)}
          className='circlularButton'
        >
          -
        </button>
      </div>

      {/*calculate total and show it*/}
      total: {inv.books + inv.notebooks + inv.pens + inv.inkpens}
    </div>
  );
};
